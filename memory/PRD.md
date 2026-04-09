# Lightened Self — Product Requirements Document

## Original Problem Statement
Create an international wellness website for "Lightened Self" (a solo practice). The visual identity is a warm peachy rose-gold theme. The site needs Header, Hero, About, Services, Tools, and Contact sections. Core functional requirement: process payments via Stripe checkout after booking form submission, and automate emails (confirmation, reminders, payment failure, follow-up, feedback) using Resend.

## User Persona
- **Primary**: Clients seeking wellness services (energy healing, intuitive readings, meditation, workshops, mentorship, couples healing)
- **Secondary**: Site owner managing bookings and payments

## Tech Stack
- **Frontend**: React, TailwindCSS, React Router, Axios, Lucide Icons, Shadcn/UI
- **Backend**: FastAPI, Motor (MongoDB async), Stripe (via emergentintegrations), Resend
- **Database**: MongoDB

## Architecture
```
/app/
├── backend/
│   ├── server.py              # FastAPI: Stripe checkout, Resend emails, bookings, contacts
│   ├── requirements.txt
│   └── .env                   # MONGO_URL, DB_NAME, STRIPE_API_KEY, RESEND_API_KEY, FROM_EMAIL
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.js, HeroSection.js, AboutSection.js
│   │   │   ├── ServicesGrid.js, BookingModal.js (→ Stripe redirect)
│   │   │   ├── ToolsSection.js, ContactSection.js, Footer.js
│   │   │   ├── TestimonialsSection.js, CTASection.js
│   │   │   └── ui/ (Shadcn components)
│   │   ├── pages/
│   │   │   ├── HomePage.js, MeditationsPage.js, ProgramsPage.js
│   │   │   ├── WorkWithMePage.js
│   │   │   ├── BookingSuccessPage.js (payment polling)
│   │   │   └── BookingCancelPage.js
│   │   ├── App.js (routes)
│   │   └── App.css
```

## Completed Features

### Phase 1: UI/UX (DONE)
- Warm peachy rose-gold theme throughout
- Navigation, Hero, About, Services, Testimonials, CTA, Contact, Footer
- Meditations page, Programs page, Work With Me page
- Service images from Unsplash matching spiritual/wellness themes
- Solo practice copy: "I", "my", "me" (not "we")

### Phase 2: Stripe + Resend Integration (DONE - Feb 2026)
- **Booking Form → Stripe Checkout**: User fills form → POST /api/create-checkout-session → redirects to Stripe
- **Server-side price validation**: 6 service packages defined in backend (prevents price manipulation)
- **Payment status polling**: Success page polls /api/checkout-status/{session_id}
- **Booking saved to DB**: On successful payment, booking record created automatically
- **payment_transactions collection**: Tracks all payment sessions with status
- **Resend email templates**: Confirmation, payment failure, follow-up (branded HTML)
- **Stripe webhook**: /api/webhook/stripe handles payment events
- **Cancel page**: Friendly "Payment Cancelled" with back-to-home link
- **Currency**: CAD

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/services | Returns all 6 service packages |
| POST | /api/create-checkout-session | Creates Stripe checkout, saves pending transaction |
| GET | /api/checkout-status/{session_id} | Polls Stripe status, updates DB, sends email on success |
| POST | /api/webhook/stripe | Handles Stripe webhook events |
| POST | /api/contact | Submit contact form |
| GET | /api/contact | List contact submissions |
| POST | /api/bookings | Create booking (legacy) |
| GET | /api/bookings | List bookings |
| POST | /api/send-followup | Trigger follow-up email for a booking |

## DB Collections
- **bookings**: {id, name, email, phone, date, time, service, price, duration, notes, status, stripe_session_id, payment_status, timestamp}
- **payment_transactions**: {id, session_id, name, email, phone, date, time, service_id, service_title, amount, currency, notes, payment_status, status, created_at}
- **contact_submissions**: {id, name, email, interested_in, message, timestamp}

## Service Packages
| ID | Title | Price (CAD) | Duration |
|----|-------|-------------|----------|
| energy-healing-session | Energy Healing Session | $120 | 60 min |
| intuitive-reading | Intuitive Reading | $95 | 45 min |
| guided-meditation | Guided Meditation | $55 | 30 min |
| inner-transformation-workshop | Inner Transformation Workshop | $199 | 120 min |
| 1-1-spiritual-mentorship | 1:1 Spiritual Mentorship | $450 | Monthly |
| couple-healing-journey | Couple Healing Journey | $180 | 90 min |

## Backlog / Future Tasks
- **P1**: Scheduled reminder emails (cron/background task before session)
- **P1**: Admin dashboard for viewing bookings/payments
- **P2**: SEO optimization
- **P2**: Google Meet link integration messaging
- **P3**: Feedback collection system post-session
