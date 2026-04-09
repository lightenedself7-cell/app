import React, { useState } from "react";
import { Clock, DollarSign } from "lucide-react";
import BookingModal from "./BookingModal";

const services = [
  {
    category: "ENERGY HEALING",
    title: "Energy Healing Session",
    description: "A transformative energy healing session to restore balance, release blockages, and promote deep inner healing. Experience the gentle yet powerful shift as we work together to clear stagnant energy and realign your chakras.",
    duration: "60 min",
    price: "$120",
    image: "https://images.unsplash.com/photo-1627289601745-5813e24c9bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwyfHxoZWFsaW5nJTIwY3J5c3RhbHMlMjBzdG9uZXMlMjBlbmVyZ3klMjByZWlraXxlbnwwfHx8fDE3NzU3NDMxMzN8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    category: "INTUITIVE READINGS",
    title: "Intuitive Reading",
    description: "Gain clarity and guidance through an intuitive reading. Connect with your inner wisdom and receive insights for your life path and personal evolution. Discover the answers that have been waiting within you.",
    duration: "45 min",
    price: "$95",
    image: "https://images.unsplash.com/photo-1761706280181-2c6e27098288?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx0YXJvdCUyMGNhcmRzJTIwb3JhY2xlJTIwc3Bpcml0dWFsJTIwcmVhZGluZ3xlbnwwfHx8fDE3NzU3NDMxMzd8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    category: "MEDITATION",
    title: "Guided Meditation",
    description: "A peaceful guided meditation session to calm your mind, reduce stress, and connect with your inner stillness. Perfect for beginners and experienced meditators seeking deeper states of presence and peace.",
    duration: "30 min",
    price: "$55",
    image: "https://images.unsplash.com/photo-1598826739205-d09823c3bc3d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjBuYXR1cmUlMjB6ZW4lMjBtaW5kZnVsbmVzc3xlbnwwfHx8fDE3NzU3NDMxNDF8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    category: "WORKSHOPS",
    title: "Inner Transformation Workshop",
    description: "A comprehensive workshop series designed to guide you through profound inner transformation. Learn powerful techniques for personal growth, energy work, and spiritual awakening in a supportive group setting.",
    duration: "120 min",
    price: "$199",
    image: "https://images.unsplash.com/photo-1740904259629-2826025b252f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxjYW5kbGVzJTIwaW5jZW5zZSUyMHNwaXJpdHVhbCUyMGFtYmlhbmNlfGVufDB8fHx8MTc3NTc0MzE0OXww&ixlib=rb-4.1.0&q=85"
  },
  {
    category: "MENTORSHIP",
    title: "1:1 Spiritual Mentorship",
    description: "Ongoing spiritual guidance and support for your personal evolution journey. Receive personalized practices, weekly check-ins, and deep transformational work tailored to your unique path and soul's calling.",
    duration: "Monthly",
    price: "$450",
    image: "https://images.unsplash.com/photo-1757066033671-ad91106a7459?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxzcGlyaXR1YWwlMjBndWlkYW5jZSUyMG1lbnRvcnNoaXAlMjBjb2FjaGluZ3xlbnwwfHx8fDE3NzU3NDMxNTl8MA&ixlib=rb-4.1.0&q=85"
  },
  {
    category: "COUPLES HEALING",
    title: "Couple Healing Journey",
    description: "Restore harmony and deepen connection through guided energy work designed for couples. Release old patterns, heal wounds together, and create a stronger foundation of love, trust, and authentic communication.",
    duration: "90 min",
    price: "$180",
    image: "https://images.unsplash.com/photo-1745946596837-0393d87a1706?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjBsb3ZlJTIwY29ubmVjdGlvbnxlbnwwfHx8fDE3NzU3NDMxNTV8MA&ixlib=rb-4.1.0&q=85"
  }
];

const ServicesGrid = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <>
      <section id="services" className="py-32 px-6 bg-[#FDF9F4]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#B39A8E] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Offerings
            </p>
            <h2
              className="text-5xl md:text-6xl font-light text-[#9B8376] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-testid="services-heading"
            >
              How I Can Support You
            </h2>
            <p
              className="text-lg text-[#B39A8E] max-w-2xl mx-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Each service is designed to meet you where you are and guide you toward greater peace, clarity, and alignment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                data-testid={`service-card-${index}`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  {/* Category */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#C79B87]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span
                      className="text-xs uppercase tracking-wider text-[#C79B87] font-medium"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-normal text-[#9B8376]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    data-testid={`service-title-${index}`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed text-[#B39A8E]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid={`service-description-${index}`}
                  >
                    {service.description}
                  </p>

                  {/* Duration and Price */}
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center gap-2 text-[#9B8376]">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {service.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#9B8376]">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(service)}
                    className="w-full mt-4 px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all shadow-md hover:shadow-lg"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid={`service-book-button-${index}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          service={selectedService}
          onClose={() => setShowBookingModal(false)}
        />
      )}
    </>
  );
};

export default ServicesGrid;