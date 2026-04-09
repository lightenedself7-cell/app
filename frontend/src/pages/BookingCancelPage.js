import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BookingCancelPage = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F4]">
      <Navigation />
      <div className="pt-32 pb-20 px-6 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-lg w-full text-center" data-testid="booking-cancelled">
          <div className="w-20 h-20 rounded-full bg-[#C79B87]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#C79B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </div>
          <h1
            className="text-4xl font-light text-[#9B8376] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Payment Cancelled
          </h1>
          <p
            className="text-[#B39A8E] mb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            No worries! Your booking wasn't completed. Feel free to come back whenever you're ready.
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
      </div>
      <Footer />
    </div>
  );
};

export default BookingCancelPage;
