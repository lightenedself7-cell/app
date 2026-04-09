import React from "react";

const services = [
  {
    title: "1:1 Virtual",
    subtitle: "Global focus",
    color: "#FDF9F4",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-20 h-24 opacity-40" fill="none" stroke="#9B8376" strokeWidth="1.2">
        <path d="M60 140 L60 40" strokeLinecap="round"/>
        <path d="M60 60 Q45 55 40 60 Q45 65 60 60" fill="none"/>
        <path d="M60 80 Q75 75 80 80 Q75 85 60 80" fill="none"/>
        <path d="M60 100 Q45 95 40 100 Q45 105 60 100" fill="none"/>
        <circle cx="60" cy="35" r="4" fill="#9B8376"/>
      </svg>
    ),
  },
  {
    title: "1:1 Mentorship",
    color: "#F5E8E2",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-20 h-24 opacity-40" fill="none" stroke="#9B8376" strokeWidth="1.2">
        <path d="M60 140 L60 70 Q60 50 70 45" strokeLinecap="round"/>
        <path d="M50 120 Q45 115 50 110" />
        <path d="M70 120 Q75 115 70 110" />
        <path d="M55 90 Q50 85 55 80" />
        <path d="M65 90 Q70 85 65 80" />
        <path d="M60 60 Q55 55 60 50 M60 60 Q65 55 60 50" />
        <circle cx="70" cy="42" r="3" fill="#9B8376"/>
      </svg>
    ),
  },
  {
    title: "Couple Healing",
    color: "#E8D4CC",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#9B8376" strokeWidth="1.5">
        <circle cx="35" cy="32" r="10" />
        <path d="M35 42 L35 62" strokeLinecap="round"/>
        <path d="M35 50 L25 60" strokeLinecap="round"/>
        <path d="M35 50 L42 60" strokeLinecap="round"/>
        <circle cx="65" cy="32" r="10" />
        <path d="M65 42 L65 62" strokeLinecap="round"/>
        <path d="M65 50 L58 60" strokeLinecap="round"/>
        <path d="M65 50 L75 60" strokeLinecap="round"/>
        <path d="M45 35 Q50 30 55 35 Q50 40 50 45 Q50 40 45 35" fill="#9B8376" opacity="0.2"/>
      </svg>
    ),
  },
  {
    title: "Meditation",
    color: "#F5E8E2",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#9B8376" strokeWidth="1.5">
        <circle cx="50" cy="30" r="10" />
        <path d="M50 40 L50 55" strokeLinecap="round"/>
        <path d="M50 55 Q40 60 30 58" strokeLinecap="round"/>
        <path d="M50 55 Q60 60 70 58" strokeLinecap="round"/>
        <path d="M50 45 Q38 48 35 52" strokeLinecap="round"/>
        <path d="M50 45 Q62 48 65 52" strokeLinecap="round"/>
        <circle cx="50" cy="30" r="18" opacity="0.2"/>
        <circle cx="50" cy="30" r="25" opacity="0.1"/>
      </svg>
    ),
  },
  {
    title: "Aura Cleansing",
    color: "#FDF9F4",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#9B8376" strokeWidth="1.5">
        <circle cx="50" cy="32" r="10" />
        <path d="M50 42 L50 65" strokeLinecap="round"/>
        <path d="M50 50 L38 60" strokeLinecap="round"/>
        <path d="M50 50 L62 60" strokeLinecap="round"/>
        <ellipse cx="50" cy="48" rx="20" ry="28" opacity="0.3"/>
        <ellipse cx="50" cy="48" rx="28" ry="38" opacity="0.2"/>
        <ellipse cx="50" cy="48" rx="35" ry="45" opacity="0.1"/>
        <circle cx="25" cy="35" r="2" fill="#9B8376" opacity="0.4"/>
        <circle cx="75" cy="35" r="2" fill="#9B8376" opacity="0.4"/>
        <circle cx="50" cy="20" r="2" fill="#9B8376" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Quick Energy Reset",
    color: "#D4A894",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-20 h-24 opacity-50" fill="none" stroke="#FDF9F4" strokeWidth="1.2">
        <path d="M60 140 L60 90" strokeLinecap="round"/>
        <path d="M60 90 L50 70 L60 75 L55 55 L60 60 L58 45" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 90 L70 70 L60 75 L65 55 L60 60 L62 45" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 110 Q52 108 50 112" />
        <path d="M60 125 Q68 123 70 127" />
        <circle cx="58" cy="42" r="2.5" fill="#FDF9F4"/>
        <circle cx="62" cy="42" r="2.5" fill="#FDF9F4"/>
      </svg>
    ),
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#FDF9F4]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-t-[100px] rounded-b-xl shadow-[0_6px_25px_rgba(155,131,118,0.08)] hover:shadow-[0_12px_40px_rgba(155,131,118,0.12)] transition-all duration-300"
              style={{ backgroundColor: service.color }}
              data-testid={`service-card-${index}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-t-[100px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative h-44 flex items-center justify-center py-6">
                {service.illustration}
              </div>

              <div className="relative px-5 pb-6 text-center space-y-3">
                <div>
                  <h3
                    className="text-lg font-normal mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: service.color === "#D4A894" ? "#FDF9F4" : "#9B8376",
                    }}
                    data-testid={`service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p
                      className="text-xs uppercase tracking-wider opacity-70"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        color: service.color === "#D4A894" ? "#FDF9F4" : "#B39A8E",
                      }}
                    >
                      {service.subtitle}
                    </p>
                  )}
                </div>
                
                <a
                  href="https://zoho.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all hover:shadow-lg"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundColor: service.color === "#D4A894" ? "#FDF9F4" : "#C79B87",
                    color: service.color === "#D4A894" ? "#9B8376" : "#FFFFFF",
                  }}
                  data-testid={`service-book-button-${index}`}
                >
                  Book Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;