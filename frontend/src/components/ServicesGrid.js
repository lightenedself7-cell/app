import React from "react";

const services = [
  {
    title: "1:1 Virtual",
    color: "#E6E0D7",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#546142" strokeWidth="1.2">
        {/* Single elegant stem with leaves */}
        <path d="M60 140 L60 40" strokeLinecap="round"/>
        <path d="M60 60 Q45 55 40 60 Q45 65 60 60" fill="none"/>
        <path d="M60 80 Q75 75 80 80 Q75 85 60 80" fill="none"/>
        <path d="M60 100 Q45 95 40 100 Q45 105 60 100" fill="none"/>
        <circle cx="60" cy="35" r="4" fill="#546142"/>
      </svg>
    ),
  },
  {
    title: "1:1 Mentorship",
    color: "#E8D3C5",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#546142" strokeWidth="1.2">
        {/* Growing plant with upward growth */}
        <path d="M60 140 L60 70 Q60 50 70 45" strokeLinecap="round"/>
        <path d="M50 120 Q45 115 50 110" />
        <path d="M70 120 Q75 115 70 110" />
        <path d="M55 90 Q50 85 55 80" />
        <path d="M65 90 Q70 85 65 80" />
        <path d="M60 60 Q55 55 60 50 M60 60 Q65 55 60 50" />
        <circle cx="70" cy="42" r="3" fill="#546142"/>
      </svg>
    ),
  },
  {
    title: "Couple Healing",
    color: "#AAB4A6",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#546142" strokeWidth="1.2">
        {/* Two intertwined stems */}
        <path d="M45 140 Q50 100 60 80 Q70 60 65 40" strokeLinecap="round"/>
        <path d="M75 140 Q70 100 60 80 Q50 60 55 40" strokeLinecap="round"/>
        <path d="M50 100 Q45 97 48 94" />
        <path d="M70 100 Q75 97 72 94" />
        <path d="M55 70 Q52 67 55 64" />
        <path d="M65 70 Q68 67 65 64" />
        <circle cx="65" cy="38" r="3" fill="#546142"/>
        <circle cx="55" cy="38" r="3" fill="#546142"/>
      </svg>
    ),
  },
  {
    title: "Meditation",
    color: "#E8D3C5",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#546142" strokeWidth="1.2">
        {/* Lotus-inspired minimal flower */}
        <circle cx="60" cy="80" r="8" fill="none"/>
        <path d="M60 72 Q50 65 45 70" />
        <path d="M60 72 Q70 65 75 70" />
        <path d="M52 80 Q45 75 42 82" />
        <path d="M68 80 Q75 75 78 82" />
        <path d="M60 88 Q50 95 45 90" />
        <path d="M60 88 Q70 95 75 90" />
        <path d="M60 90 L60 130" strokeLinecap="round"/>
        <path d="M60 110 Q52 108 50 112" />
      </svg>
    ),
  },
  {
    title: "Aura Cleansing",
    color: "#E6E0D7",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#546142" strokeWidth="1.2">
        {/* Energy rays with central leaf */}
        <path d="M60 140 L60 80" strokeLinecap="round"/>
        <ellipse cx="60" cy="70" rx="15" ry="25" opacity="0.3"/>
        <ellipse cx="60" cy="70" rx="22" ry="35" opacity="0.2"/>
        <path d="M60 95 Q50 90 45 95 Q50 100 60 95" fill="none"/>
        <path d="M60 85 Q70 80 75 85 Q70 90 60 85" fill="none"/>
        <line x1="40" y1="70" x2="35" y2="65" opacity="0.4"/>
        <line x1="80" y1="70" x2="85" y2="65" opacity="0.4"/>
        <line x1="45" y1="55" x2="40" y2="48" opacity="0.4"/>
        <line x1="75" y1="55" x2="80" y2="48" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Quick Energy Reset",
    color: "#546142",
    illustration: (
      <svg viewBox="0 0 120 160" className="w-24 h-32 opacity-40" fill="none" stroke="#E6E0D7" strokeWidth="1.2">
        {/* Dynamic upward energy plant */}
        <path d="M60 140 L60 90" strokeLinecap="round"/>
        <path d="M60 90 L50 70 L60 75 L55 55 L60 60 L58 45" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 90 L70 70 L60 75 L65 55 L60 60 L62 45" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 110 Q52 108 50 112" />
        <path d="M60 125 Q68 123 70 127" />
        <circle cx="58" cy="42" r="2.5" fill="#E6E0D7"/>
        <circle cx="62" cy="42" r="2.5" fill="#E6E0D7"/>
      </svg>
    ),
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-6 bg-[#F5F3F0]">
      <div className="max-w-6xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-t-[120px] rounded-b-xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all"
              style={{ backgroundColor: service.color }}
              data-testid={`service-card-${index}`}
            >
              {/* Botanical Illustration */}
              <div className="h-56 flex items-center justify-center p-8">
                {service.illustration}
              </div>

              {/* Service Title & Button */}
              <div className="p-6 pb-8 text-center space-y-4">
                <h3
                  className="text-xl font-normal mb-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: service.color === "#546142" ? "#E6E0D7" : "#546142",
                  }}
                  data-testid={`service-title-${index}`}
                >
                  {service.title}
                </h3>
                
                {/* Book Now Button */}
                <a
                  href="https://zoho.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all hover:shadow-md"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundColor: service.color === "#546142" ? "#E6E0D7" : "#546142",
                    color: service.color === "#546142" ? "#546142" : "#FFFFFF",
                  }}
                  data-testid={`service-book-button-${index}`}
                >
                  Book Now
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