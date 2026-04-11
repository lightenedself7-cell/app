import React, { useState } from "react";
import { Mail, Clock, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interested_in: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", interested_in: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#F5F3F0]">
      <div className="max-w-5xl mx-auto">
        {/* Contact Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-12 md:p-16">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#AAB4A6] mb-3"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="contact-label"
            >
              Get in Touch
            </p>
            <h2
              className="text-4xl tracking-[0.1em] font-normal text-[#546142]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-testid="contact-heading"
            >
              Contact
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <p
                className="text-2xl md:text-3xl font-normal text-[#546142] leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                data-testid="contact-intro-text"
              >
                Let's start your healing journey
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E8D3C5] rounded-full">
                    <Mail className="w-5 h-5 text-[#546142]" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium text-[#AAB4A6] mb-1 uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:connect@lightenedself.com"
                      className="text-base text-[#546142] hover:text-[#738062] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid="contact-email"
                    >
                      connect@lightenedself.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E8D3C5] rounded-full">
                    <Clock className="w-5 h-5 text-[#546142]" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium text-[#AAB4A6] mb-1 uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Response Time
                    </p>
                    <p
                      className="text-base text-[#546142]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid="contact-response-time"
                    >
                      Within 24 hours
                    </p>
                  </div>
                </div>

                {/* Sessions */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#E8D3C5] rounded-full">
                    <MapPin className="w-5 h-5 text-[#546142]" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium text-[#AAB4A6] mb-1 uppercase tracking-wider"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Sessions
                    </p>
                    <p
                      className="text-base text-[#546142]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid="contact-sessions"
                    >
                      Virtual
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[#546142] mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6E0D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AAB4A6] focus:border-transparent text-[#546142] bg-[#F5F3F0]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="contact-form-name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#546142] mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6E0D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AAB4A6] focus:border-transparent text-[#546142] bg-[#F5F3F0]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="contact-form-email"
                  />
                </div>

                {/* Interested In */}
                <div>
                  <label
                    htmlFor="interested_in"
                    className="block text-xs font-medium text-[#546142] mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Interested In
                  </label>
                  <select
                    id="interested_in"
                    name="interested_in"
                    value={formData.interested_in}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E6E0D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AAB4A6] focus:border-transparent text-[#546142] bg-[#F5F3F0]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="contact-form-interested-in"
                  >
                    <option value="">Select a service</option>
                    <option value="1:1 Virtual">1:1 Virtual</option>
                    <option value="1:1 Mentorship">1:1 Mentorship</option>
                    <option value="Couple Healing">Couple Healing</option>
                    <option value="Meditation">Meditation</option>
                    <option value="Aura Cleansing">Aura Cleansing</option>
                    <option value="Quick Energy Reset">Quick Energy Reset</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#546142] mb-2 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-[#E6E0D7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AAB4A6] focus:border-transparent text-[#546142] resize-none bg-[#F5F3F0]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="contact-form-message"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#A68B76] text-white rounded-full text-sm font-medium hover:bg-[#8B7565] transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="contact-form-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;