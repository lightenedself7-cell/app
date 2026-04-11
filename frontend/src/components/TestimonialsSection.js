import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The energy healing session was truly transformational. I felt a shift from the very first moment and have been carrying that lightness ever since.",
    name: "Sarah M.",
    service: "1:1 Virtual Session"
  },
  {
    quote: "The mentorship program gave me clarity I didn't know was possible. I finally feel aligned with my purpose and connected to my true self.",
    name: "Amara J.",
    service: "1:1 Mentorship"
  },
  {
    quote: "Our couple healing session brought us closer than we've been in years. The energy work unlocked communication we didn't know we needed.",
    name: "David & Lisa K.",
    service: "Couple Healing"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs uppercase tracking-[0.3em] text-[#B68D6D] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Testimonials
          </p>
          <h2
            className="text-4xl md:text-5xl font-normal text-[#546142]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="testimonials-heading"
          >
            Client Love
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5F3F0] rounded-2xl p-10 hover:shadow-lg transition-shadow"
              data-testid={`testimonial-card-${index}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#B68D6D] text-[#B68D6D]" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base leading-relaxed text-[#738062] mb-8 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Name & Service */}
              <div>
                <p
                  className="text-sm font-medium text-[#546142] mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-xs text-[#AAB4A6]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;