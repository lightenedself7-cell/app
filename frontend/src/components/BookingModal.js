import React, { useState, useMemo } from "react";
import { X, Calendar, Clock, Mail, User, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SERVICE_ID_MAP = {
  "Energy Healing Session": "energy-healing-session",
  "Intuitive Reading": "intuitive-reading",
  "Guided Meditation": "guided-meditation",
  "Inner Transformation Workshop": "inner-transformation-workshop",
  "1:1 Mentoring": "1-1-spiritual-mentorship",
  "Couple Healing Journey": "couple-healing-journey",
};

// Calgary timezone (Mountain Time)
const CALGARY_TIMEZONE = "America/Edmonton";

// All available time slots
const ALL_TIME_SLOTS = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM",
];

// Convert time slot string to 24-hour format for comparison
const parseTimeSlot = (slot) => {
  const [time, period] = slot.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
};

// Get current date in Calgary timezone as YYYY-MM-DD
const getCalgaryDateString = () => {
  return new Date().toLocaleDateString("en-CA", { timeZone: CALGARY_TIMEZONE });
};

// Get current time in Calgary timezone
const getCalgaryTime = () => {
  const now = new Date();
  const calgaryTime = new Date(now.toLocaleString("en-US", { timeZone: CALGARY_TIMEZONE }));
  return { hours: calgaryTime.getHours(), minutes: calgaryTime.getMinutes() };
};

// Filter time slots based on selected date and current Calgary time
const getAvailableTimeSlots = (selectedDate) => {
  const todayInCalgary = getCalgaryDateString();
  
  // If selected date is in the future, all slots are available
  if (selectedDate > todayInCalgary) {
    return ALL_TIME_SLOTS;
  }
  
  // If selected date is today, filter out past times
  if (selectedDate === todayInCalgary) {
    const currentTime = getCalgaryTime();
    return ALL_TIME_SLOTS.filter((slot) => {
      const slotTime = parseTimeSlot(slot);
      // Add 1 hour buffer - can't book within the current hour
      if (slotTime.hours > currentTime.hours) return true;
      if (slotTime.hours === currentTime.hours && slotTime.minutes > currentTime.minutes) return true;
      return false;
    });
  }
  
  // Past date - no slots available
  return [];
};

const BookingModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get available time slots based on selected date
  const availableTimeSlots = useMemo(() => {
    if (!formData.date) return ALL_TIME_SLOTS;
    return getAvailableTimeSlots(formData.date);
  }, [formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      // Reset time selection if date changes and selected time is no longer available
      if (name === "date" && prev.time) {
        const newAvailableSlots = getAvailableTimeSlots(value);
        if (!newAvailableSlots.includes(prev.time)) {
          newData.time = "";
        }
      }
      return newData;
    });
  };

  const [redirectUrl, setRedirectUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = SERVICE_ID_MAP[service.title];
      if (!serviceId) {
        toast.error("Service not recognized. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const response = await axios.post(`${API}/create-checkout-session`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        service_id: serviceId,
        notes: formData.notes,
        origin_url: window.location.origin,
      });

      if (response.data.url) {
        setRedirectUrl(response.data.url);
        // Stripe blocks rendering inside iframes — open in new tab if embedded
        if (window.self !== window.top) {
          window.open(response.data.url, '_blank');
        } else {
          window.location.href = response.data.url;
        }
      } else {
        toast.error("Could not initiate payment. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again or contact me directly.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-[#F5E8E2] rounded-full transition-colors"
          data-testid="close-modal"
        >
          <X className="w-5 h-5 text-[#9B8376]" />
        </button>

        <div className="p-10">
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
            <div
              className="flex items-center gap-6 text-sm text-[#B39A8E]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {service.duration}
              </div>
              <div className="flex items-center gap-2 font-medium">
                {service.price}
              </div>
            </div>
          </div>

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
                    min={getCalgaryDateString()}
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
                  Preferred Time * <span className="text-xs font-normal text-[#B39A8E]">(Calgary Time)</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C79B87]" />
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    disabled={availableTimeSlots.length === 0}
                    className="w-full pl-12 pr-4 py-3 border-2 border-[#E8D4CC] rounded-xl focus:outline-none focus:border-[#C79B87] text-[#9B8376] appearance-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="booking-time"
                  >
                    {availableTimeSlots.length === 0 ? (
                      <option value="">No available times for this date</option>
                    ) : (
                      <>
                        <option value="">Select time</option>
                        {availableTimeSlots.map((slot, index) => (
                          <option key={index} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </>
                    )}
                  </select>
                </div>
                {formData.date && availableTimeSlots.length === 0 && (
                  <p className="mt-2 text-xs text-[#C79B87]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    All time slots for today have passed. Please select a future date.
                  </p>
                )}
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
              className="w-full px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="booking-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Redirecting to Payment...
                </>
              ) : (
                "Proceed to Payment"
              )}
            </button>

            {redirectUrl && (
              <a
                href={redirectUrl}
                className="block text-center text-sm text-[#C79B87] underline mt-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="manual-redirect-link"
              >
                Click here if you're not redirected automatically
              </a>
            )}

            {!redirectUrl && (
              <p
                className="text-xs text-center text-[#B39A8E]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                You'll be securely redirected to Stripe to complete your payment.
                A confirmation email will follow.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
