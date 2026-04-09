import React, { useState } from "react";
import { X, Calendar, Clock, Mail, User, Phone } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BookingModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingData = {
        ...formData,
        service: service.title,
        price: service.price,
        duration: service.duration
      };

      await axios.post(`${API}/bookings`, bookingData);
      toast.success("Booking request submitted! I'll confirm your session within 24 hours.");
      onClose();
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to submit booking. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-[#F5E8E2] rounded-full transition-colors"
          data-testid="close-modal"
        >
          <X className="w-5 h-5 text-[#9B8376]" />
        </button>

        {/* Modal Content */}
        <div className="p-10">
          {/* Header */}
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#B39A8E] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Book Your Session
            </p>
            <h2
              className="text-3xl font-light text-[#9B8376] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {service.title}
            </h2>
            <div className="flex items-center gap-6 text-sm text-[#B39A8E]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {service.duration}
              </div>
              <div className="flex items-center gap-2 font-medium">
                {service.price}
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#9B8376] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="booking-name"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#9B8376] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="booking-email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#9B8376] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="booking-phone"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-[#9B8376] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="booking-date"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-[#9B8376] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376] appearance-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="booking-time"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-[#9B8376] mb-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376] resize-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                placeholder="Any specific intentions or areas you'd like to focus on..."
                data-testid="booking-notes"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="booking-submit"
            >
              {isSubmitting ? "Submitting..." : "Request Booking"}
            </button>

              <p
                className="text-xs text-center text-[#B39A8E]" style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                I'll send you a confirmation email within 24 hours with payment details and session link.
              </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;