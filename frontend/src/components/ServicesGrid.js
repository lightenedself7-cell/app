import React from "react";
import { Sparkles, Heart, Users, Wind, Zap, Compass } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "1:1 Virtual Session",
    subtitle: "Global focus",
    description: "Personalized virtual healing sessions tailored to your unique energy and needs.",
    duration: "60 min"
  },
  {
    icon: Compass,
    title: "1:1 Mentorship",
    description: "Ongoing spiritual guidance and support for your personal growth journey.",
    duration: "Monthly"
  },
  {
    icon: Heart,
    title: "Couple Healing",
    description: "Restore harmony and deepen connection through guided energy work.",
    duration: "90 min"
  },
  {
    icon: Wind,
    title: "Meditation",
    description: "Deeply restorative guided meditation practices for inner peace.",
    duration: "30-45 min"
  },
  {
    icon: Users,
    title: "Aura Cleansing",
    description: "Clear energy blockages and restore balance to your energetic field.",
    duration: "45 min"
  },
  {
    icon: Zap,
    title: "Quick Energy Reset",
    description: "A focused session to realign and refresh your energy quickly.",
    duration: "30 min"
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#FDF9F4] hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-[#E8D4CC]/30"
                data-testid={`service-card-${index}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white group-hover:bg-[#F5E8E2] rounded-full flex items-center justify-center transition-colors">
                    <Icon className="w-7 h-7 text-[#C79B87]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3
                      className="text-2xl font-normal text-[#9B8376] mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      data-testid={`service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p
                        className="text-xs uppercase tracking-wider text-[#C79B87]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  <p
                    className="text-sm leading-relaxed text-[#B39A8E]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid={`service-description-${index}`}
                  >
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#D4C4BC]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://zoho.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-[#C79B87] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#B88A76] transition-all"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`service-book-button-${index}`}
                >
                  Book Session
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;