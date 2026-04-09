from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
import resend
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict
import uuid
from datetime import datetime, timezone

from emergentintegrations.payments.stripe.checkout import (
    StripeCheckout,
    CheckoutSessionResponse,
    CheckoutStatusResponse,
    CheckoutSessionRequest,
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Stripe setup
stripe_api_key = os.environ.get('STRIPE_API_KEY')

# Resend setup
resend.api_key = os.environ.get('RESEND_API_KEY')
FROM_EMAIL = os.environ.get('FROM_EMAIL', 'connect@lightenedself.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ─── Server-Side Service Packages (prevents price manipulation) ───
SERVICE_PACKAGES: Dict[str, dict] = {
    "energy-healing-session": {
        "title": "Energy Healing Session",
        "price": 120.00,
        "duration": "60 min",
    },
    "intuitive-reading": {
        "title": "Intuitive Reading",
        "price": 95.00,
        "duration": "45 min",
    },
    "guided-meditation": {
        "title": "Guided Meditation",
        "price": 55.00,
        "duration": "30 min",
    },
    "inner-transformation-workshop": {
        "title": "Inner Transformation Workshop",
        "price": 199.00,
        "duration": "120 min",
    },
    "1-1-spiritual-mentorship": {
        "title": "1:1 Mentoring",
        "price": 450.00,
        "duration": "Monthly",
    },
    "couple-healing-journey": {
        "title": "Couple Healing Journey",
        "price": 180.00,
        "duration": "90 min",
    },
}


# ─── Pydantic Models ───
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    interested_in: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    interested_in: str
    message: str


class BookingRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str = ""
    date: str
    time: str
    service: str
    price: str
    duration: str
    notes: str = ""
    status: str = "pending"
    stripe_session_id: str = ""
    payment_status: str = "pending"
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BookingRequestCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    date: str
    time: str
    service: str
    price: str
    duration: str
    notes: str = ""


class CheckoutRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str = ""
    date: str
    time: str
    service_id: str
    notes: str = ""
    origin_url: str


# ─── Email Templates ───
def _base_email_wrapper(content: str) -> str:
    return f"""
    <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background-color: #FDF9F4; padding: 40px 30px; border-radius: 16px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="font-size: 28px; font-weight: 300; color: #9B8376; margin: 0;">Lightened Self</h1>
        <p style="font-size: 12px; letter-spacing: 3px; color: #B39A8E; text-transform: uppercase; margin-top: 6px;">Healing &middot; Growth &middot; Transformation</p>
      </div>
      <div style="background: white; border-radius: 12px; padding: 30px; border: 1px solid #E8D4CC;">
        {content}
      </div>
      <div style="text-align: center; margin-top: 24px; font-size: 12px; color: #B39A8E;">
        <p>With warmth and light,<br/><strong style="color:#9B8376;">Lightened Self</strong></p>
        <p style="margin-top: 12px;">connect@lightenedself.com</p>
      </div>
    </div>
    """


def _confirmation_email(name: str, service: str, date: str, time: str, amount: str) -> str:
    content = f"""
    <h2 style="color: #9B8376; font-weight: 400; font-size: 22px; margin-top: 0;">Booking Confirmed</h2>
    <p style="color: #6B5B50; line-height: 1.7;">Dear {name},</p>
    <p style="color: #6B5B50; line-height: 1.7;">Thank you for your payment! Your session has been confirmed.</p>
    <div style="background: #FDF9F4; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 3px solid #C79B87;">
      <p style="margin: 4px 0; color: #6B5B50;"><strong>Service:</strong> {service}</p>
      <p style="margin: 4px 0; color: #6B5B50;"><strong>Date:</strong> {date}</p>
      <p style="margin: 4px 0; color: #6B5B50;"><strong>Time:</strong> {time}</p>
      <p style="margin: 4px 0; color: #6B5B50;"><strong>Amount Paid:</strong> {amount}</p>
    </div>
    <p style="color: #6B5B50; line-height: 1.7;">I'll send you a Google Meet link before your session. Please reach out if you have any questions or need to reschedule.</p>
    """
    return _base_email_wrapper(content)


def _payment_failure_email(name: str, service: str) -> str:
    content = f"""
    <h2 style="color: #9B8376; font-weight: 400; font-size: 22px; margin-top: 0;">Payment Issue</h2>
    <p style="color: #6B5B50; line-height: 1.7;">Dear {name},</p>
    <p style="color: #6B5B50; line-height: 1.7;">It seems there was an issue processing your payment for <strong>{service}</strong>. Your booking is currently on hold.</p>
    <p style="color: #6B5B50; line-height: 1.7;">Please try booking again through the website, or reach out to me directly and I'll help you sort it out.</p>
    <p style="color: #6B5B50; line-height: 1.7;">No worries at all &mdash; these things happen!</p>
    """
    return _base_email_wrapper(content)


def _followup_email(name: str, service: str) -> str:
    content = f"""
    <h2 style="color: #9B8376; font-weight: 400; font-size: 22px; margin-top: 0;">How Are You Feeling?</h2>
    <p style="color: #6B5B50; line-height: 1.7;">Dear {name},</p>
    <p style="color: #6B5B50; line-height: 1.7;">I hope your <strong>{service}</strong> session brought you clarity and peace. I'd love to hear how you're feeling and if anything came up for you after our time together.</p>
    <p style="color: #6B5B50; line-height: 1.7;">If you'd like to continue your journey, feel free to book another session anytime. I'm here for you.</p>
    <p style="color: #6B5B50; line-height: 1.7;">Sending you light and warmth.</p>
    """
    return _base_email_wrapper(content)


async def send_email(to: str, subject: str, html: str):
    """Send email via Resend (non-blocking)."""
    params = {
        "from": f"Lightened Self <{FROM_EMAIL}>",
        "to": [to],
        "subject": subject,
        "html": html,
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent to {to}: {result}")
        return result
    except Exception as e:
        logger.error(f"Failed to send email to {to}: {e}")
        return None


# ─── Contact Endpoints ───
@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact_submission(input: ContactSubmissionCreate):
    try:
        submission_dict = input.model_dump()
        submission_obj = ContactSubmission(**submission_dict)
        doc = submission_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        _ = await db.contact_submissions.insert_one(doc)
        return submission_obj
    except Exception as e:
        logging.error(f"Error creating contact submission: {e}")
        raise HTTPException(status_code=500, detail="Failed to submit contact form")


@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    for submission in submissions:
        if isinstance(submission['timestamp'], str):
            submission['timestamp'] = datetime.fromisoformat(submission['timestamp'])
    return submissions


# ─── Booking Endpoints (legacy, kept for reference) ───
@api_router.post("/bookings", response_model=BookingRequest)
async def create_booking(input: BookingRequestCreate):
    try:
        booking_dict = input.model_dump()
        booking_obj = BookingRequest(**booking_dict)
        doc = booking_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        _ = await db.bookings.insert_one(doc)
        return booking_obj
    except Exception as e:
        logging.error(f"Error creating booking: {e}")
        raise HTTPException(status_code=500, detail="Failed to create booking")


@api_router.get("/bookings", response_model=List[BookingRequest])
async def get_bookings():
    bookings = await db.bookings.find({}, {"_id": 0}).to_list(1000)
    for booking in bookings:
        if isinstance(booking['timestamp'], str):
            booking['timestamp'] = datetime.fromisoformat(booking['timestamp'])
    return bookings


# ─── Service Packages Endpoint ───
@api_router.get("/services")
async def get_services():
    return {k: {"title": v["title"], "price": v["price"], "duration": v["duration"]} for k, v in SERVICE_PACKAGES.items()}


# ─── Stripe Checkout Endpoints ───
@api_router.post("/create-checkout-session")
async def create_checkout_session(req: CheckoutRequest, http_request: Request):
    # Validate service
    if req.service_id not in SERVICE_PACKAGES:
        raise HTTPException(status_code=400, detail="Invalid service selected")

    service = SERVICE_PACKAGES[req.service_id]
    amount = service["price"]

    # Build URLs from the frontend origin (never hardcode)
    origin = req.origin_url.rstrip("/")
    success_url = f"{origin}/booking/success?session_id={{CHECKOUT_SESSION_ID}}"
    cancel_url = f"{origin}/booking/cancel"

    # Initialize Stripe
    host_url = str(http_request.base_url).rstrip("/")
    webhook_url = f"{host_url}/api/webhook/stripe"
    stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url=webhook_url)

    # Create checkout session
    checkout_req = CheckoutSessionRequest(
        amount=float(amount),
        currency="cad",
        success_url=success_url,
        cancel_url=cancel_url,
        metadata={
            "name": req.name,
            "email": req.email,
            "phone": req.phone,
            "date": req.date,
            "time": req.time,
            "service_id": req.service_id,
            "service_title": service["title"],
            "notes": req.notes,
        },
    )

    try:
        session: CheckoutSessionResponse = await stripe_checkout.create_checkout_session(checkout_req)
    except Exception as e:
        logger.error(f"Stripe checkout error: {e}")
        raise HTTPException(status_code=500, detail="Failed to create payment session")

    # Save payment transaction as pending
    transaction = {
        "id": str(uuid.uuid4()),
        "session_id": session.session_id,
        "name": req.name,
        "email": req.email,
        "phone": req.phone,
        "date": req.date,
        "time": req.time,
        "service_id": req.service_id,
        "service_title": service["title"],
        "amount": amount,
        "currency": "cad",
        "notes": req.notes,
        "payment_status": "pending",
        "status": "initiated",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.payment_transactions.insert_one(transaction)

    return {"url": session.url, "session_id": session.session_id}


@api_router.get("/checkout-status/{session_id}")
async def get_checkout_status(session_id: str, http_request: Request):
    # Initialize Stripe
    host_url = str(http_request.base_url).rstrip("/")
    webhook_url = f"{host_url}/api/webhook/stripe"
    stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url=webhook_url)

    try:
        status: CheckoutStatusResponse = await stripe_checkout.get_checkout_status(session_id)
    except Exception as e:
        logger.error(f"Stripe status check error: {e}")
        raise HTTPException(status_code=500, detail="Failed to check payment status")

    # Update transaction in DB
    txn = await db.payment_transactions.find_one({"session_id": session_id}, {"_id": 0})
    if txn and txn.get("payment_status") != status.payment_status:
        await db.payment_transactions.update_one(
            {"session_id": session_id},
            {"$set": {
                "payment_status": status.payment_status,
                "status": status.status,
                "updated_at": datetime.now(timezone.utc).isoformat(),
            }},
        )

        # On successful payment, create booking and send confirmation email
        if status.payment_status == "paid" and txn.get("payment_status") != "paid":
            booking_obj = BookingRequest(
                name=txn["name"],
                email=txn["email"],
                phone=txn.get("phone", ""),
                date=txn["date"],
                time=txn["time"],
                service=txn["service_title"],
                price=f"${txn['amount']}",
                duration=SERVICE_PACKAGES.get(txn["service_id"], {}).get("duration", ""),
                notes=txn.get("notes", ""),
                status="confirmed",
                stripe_session_id=session_id,
                payment_status="paid",
            )
            doc = booking_obj.model_dump()
            doc['timestamp'] = doc['timestamp'].isoformat()
            await db.bookings.insert_one(doc)

            # Send confirmation email
            html = _confirmation_email(
                txn["name"],
                txn["service_title"],
                txn["date"],
                txn["time"],
                f"${txn['amount']:.2f} CAD",
            )
            await send_email(
                txn["email"],
                f"Booking Confirmed - {txn['service_title']}",
                html,
            )

    return {
        "status": status.status,
        "payment_status": status.payment_status,
        "amount_total": status.amount_total,
        "currency": status.currency,
        "metadata": status.metadata,
    }


# ─── Stripe Webhook ───
@api_router.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    body = await request.body()
    sig = request.headers.get("Stripe-Signature", "")

    host_url = str(request.base_url).rstrip("/")
    webhook_url = f"{host_url}/api/webhook/stripe"
    stripe_checkout = StripeCheckout(api_key=stripe_api_key, webhook_url=webhook_url)

    try:
        webhook_response = await stripe_checkout.handle_webhook(body, sig)
        logger.info(f"Webhook event: {webhook_response.event_type}, session: {webhook_response.session_id}")

        session_id = webhook_response.session_id
        payment_status = webhook_response.payment_status

        # Update transaction
        txn = await db.payment_transactions.find_one({"session_id": session_id}, {"_id": 0})
        if txn:
            await db.payment_transactions.update_one(
                {"session_id": session_id},
                {"$set": {
                    "payment_status": payment_status,
                    "status": webhook_response.event_type,
                    "webhook_event_id": webhook_response.event_id,
                    "updated_at": datetime.now(timezone.utc).isoformat(),
                }},
            )

            # Handle payment failure
            if payment_status in ("unpaid", "failed") and txn.get("payment_status") != payment_status:
                html = _payment_failure_email(txn["name"], txn["service_title"])
                await send_email(
                    txn["email"],
                    f"Payment Issue - {txn['service_title']}",
                    html,
                )

        return {"status": "ok"}
    except Exception as e:
        logger.error(f"Webhook error: {e}")
        raise HTTPException(status_code=400, detail=str(e))


# ─── Send Follow-up Email (manual trigger) ───
class FollowUpRequest(BaseModel):
    booking_id: str


@api_router.post("/send-followup")
async def send_followup(req: FollowUpRequest):
    booking = await db.bookings.find_one({"id": req.booking_id}, {"_id": 0})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")

    html = _followup_email(booking["name"], booking["service"])
    result = await send_email(
        booking["email"],
        f"How Are You Feeling? - {booking['service']}",
        html,
    )
    if result:
        return {"status": "sent"}
    raise HTTPException(status_code=500, detail="Failed to send follow-up email")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
