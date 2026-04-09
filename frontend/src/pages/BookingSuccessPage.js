import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import axios from "axios";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BookingSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("checking");
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    let attempts = 0;
    const maxAttempts = 6;
    const pollInterval = 2000;

    const poll = async () => {
      try {
        const res = await axios.get(`${API}/checkout-status/${sessionId}`);
        const data = res.data;
        setPaymentData(data);

        if (data.payment_status === "paid") {
          setStatus("success");
          return;
        }
        if (data.status === "expired") {
          setStatus("expired");
          return;
        }

        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, pollInterval);
        } else {
          setStatus("timeout");
        }
      } catch {
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, pollInterval);
        } else {
          setStatus("error");
        }
      }
    };

    poll();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#FDF9F4]">
      <Navigation />
      <div className="pt-32 pb-20 px-6 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-lg w-full text-center">
          {status === "checking" && (
            <div data-testid="payment-checking">
              <Loader2 className="w-16 h-16 text-[#C79B87] animate-spin mx-auto mb-6" />
              <h1
                className="text-3xl font-light text-[#9B8376] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Processing Payment...
              </h1>
              <p
                className="text-[#B39A8E]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Please wait while I confirm your payment.
              </p>
            </div>
          )}

          {status === "success" && (
            <div data-testid="payment-success">
              <div className="w-20 h-20 rounded-full bg-[#8B9481]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#8B9481]" />
              </div>
              <h1
                className="text-4xl font-light text-[#9B8376] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Booking Confirmed
              </h1>
              <p
                className="text-[#B39A8E] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Thank you for your payment! Your session is confirmed.
              </p>
              {paymentData?.metadata && (
                <div className="bg-white rounded-2xl p-6 mt-6 mb-8 border border-[#E8D4CC] text-left">
                  <p className="text-sm text-[#9B8376] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Service:</strong> {paymentData.metadata.service_title}
                  </p>
                  <p className="text-sm text-[#9B8376] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Date:</strong> {paymentData.metadata.date}
                  </p>
                  <p className="text-sm text-[#9B8376] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <strong>Time:</strong> {paymentData.metadata.time}
                  </p>
                </div>
              )}
              <p
                className="text-sm text-[#B39A8E] mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                A confirmation email has been sent to you. I'll follow up with a Google Meet link before your session.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="back-home-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          )}

          {(status === "error" || status === "timeout" || status === "expired") && (
            <div data-testid="payment-error">
              <h1
                className="text-3xl font-light text-[#9B8376] mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {status === "expired" ? "Session Expired" : "Something Went Wrong"}
              </h1>
              <p
                className="text-[#B39A8E] mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {status === "expired"
                  ? "Your payment session has expired. Please try booking again."
                  : "I couldn't verify your payment. If you were charged, please reach out to me directly and I'll sort it out."}
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="back-home-btn"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSuccessPage;
