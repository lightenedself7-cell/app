import React from "react";

const services = [
  {
    title: "1:1 Virtual",
    subtitle: "Global focus",
    color: "#E6E0D7",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#546142" strokeWidth="1.5">
        {/* Person with connection/virtual lines */}
        <circle cx="50" cy="35" r="12" />
        <path d="M50 47 L50 70" strokeLinecap="round"/>
        <path d="M50 55 L35 65" strokeLinecap="round"/>
        <path d="M50 55 L65 65" strokeLinecap="round"/>
        {/* Connection dots */}
        <circle cx="25" cy="25" r="3" fill="#546142" opacity="0.4"/>
        <circle cx="75" cy="25" r="3" fill="#546142" opacity="0.4"/>
        <circle cx="50" cy="15" r="3" fill="#546142" opacity="0.4"/>
        <line x1="50" y1="35" x2="25" y2="25" strokeDasharray="2,2" opacity="0.3"/>
        <line x1="50" y1="35" x2="75" y2="25" strokeDasharray="2,2" opacity="0.3"/>
      </svg>
    ),
  },
  {
    title: "1:1 Mentorship",
    color: "#E8D3C5",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#546142" strokeWidth="1.5">
        {/* Two figures - mentor and mentee */}
        <circle cx="35" cy="30" r="10" />
        <path d="M35 40 L35 60" strokeLinecap="round"/>
        <path d="M35 48 L25 58" strokeLinecap="round"/>
        <path d="M35 48 L45 58" strokeLinecap="round"/>
        
        <circle cx="65" cy="35" r="8" />
        <path d="M65 43 L65 60" strokeLinecap="round"/>
        <path d="M65 50 L57 58" strokeLinecap="round"/>
        <path d="M65 50 L73 58" strokeLinecap="round"/>
        
        {/* Connection arrow */}
        <path d="M45 35 L57 38" strokeLinecap="round" markerEnd="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 5 3, 0 6" fill="#546142" opacity="0.5"/>
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    title: "Couple Healing",
    color: "#AAB4A6",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#546142" strokeWidth="1.5">
        {/* Two figures holding hands/connected */}
        <circle cx="35" cy="32" r="10" />
        <path d="M35 42 L35 62" strokeLinecap="round"/>
        <path d="M35 50 L25 60" strokeLinecap="round"/>
        <path d="M35 50 L42 60" strokeLinecap="round"/>
        
        <circle cx="65" cy="32" r="10" />
        <path d="M65 42 L65 62" strokeLinecap="round"/>
        <path d="M65 50 L58 60" strokeLinecap="round"/>
        <path d="M65 50 L75 60" strokeLinecap="round"/>
        
        {/* Heart/connection between them */}
        <path d="M45 35 Q50 30 55 35 Q50 40 50 45 Q50 40 45 35" fill="#546142" opacity="0.2"/>
      </svg>
    ),
  },
  {
    title: "Meditation",
    color: "#E8D3C5",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#546142" strokeWidth="1.5">
        {/* Person in lotus meditation position */}
        <circle cx="50" cy="30" r="10" />
        <path d="M50 40 L50 55" strokeLinecap="round"/>
        {/* Lotus position legs */}
        <path d="M50 55 Q40 60 30 58" strokeLinecap="round"/>
        <path d="M50 55 Q60 60 70 58" strokeLinecap="round"/>
        {/* Arms in meditation */}
        <path d="M50 45 Q38 48 35 52" strokeLinecap="round"/>
        <path d="M50 45 Q62 48 65 52" strokeLinecap="round"/>
        {/* Energy/aura circles */}
        <circle cx="50" cy="30" r="18" opacity="0.2"/>
        <circle cx="50" cy="30" r="25" opacity="0.1"/>
      </svg>
    ),
  },
  {
    title: "Aura Cleansing",
    color: "#E6E0D7",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#546142" strokeWidth="1.5">
        {/* Person with aura energy around */}
        <circle cx="50" cy="32" r="10" />
        <path d="M50 42 L50 65" strokeLinecap="round"/>
        <path d="M50 50 L38 60" strokeLinecap="round"/>
        <path d="M50 50 L62 60" strokeLinecap="round"/>
        
        {/* Aura layers */}
        <ellipse cx="50" cy="48" rx="20" ry="28" opacity="0.3"/>
        <ellipse cx="50" cy="48" rx="28" ry="38" opacity="0.2"/>
        <ellipse cx="50" cy="48" rx="35" ry="45" opacity="0.1"/>
        
        {/* Energy sparkles */}
        <circle cx="25" cy="35" r="2" fill="#546142" opacity="0.4"/>
        <circle cx="75" cy="35" r="2" fill="#546142" opacity="0.4"/>
        <circle cx="50" cy="20" r="2" fill="#546142" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Quick Energy Reset",
    color: "#546142",
    illustration: (
      <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-50" fill="none" stroke="#E6E0D7" strokeWidth="1.5">
        {/* Person with energy burst */}
        <circle cx="50" cy="35" r="9" />
        <path d="M50 44 L50 62" strokeLinecap="round"/>
        <path d="M50 52 L40 60" strokeLinecap="round"/>
        <path d="M50 52 L60 60" strokeLinecap="round"/>
        
        {/* Lightning/energy bolts */}
        <path d="M50 20 L47 28 L50 28 L48 35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        <path d="M35 30 L38 35 L35 35 L37 40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        <path d="M65 30 L62 35 L65 35 L63 40" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        
        {/* Energy rays */}
        <line x1="25" y1="40" x2="20" y2="35" opacity="0.4" strokeWidth="1"/>
        <line x1="75" y1="40" x2="80" y2="35" opacity="0.4" strokeWidth="1"/>
      </svg>
    ),
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#F5F3F0]">
      <div className="max-w-6xl mx-auto">
        {/* Services Grid - The Chic Arches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-t-[100px] rounded-b-xl shadow-[0_6px_25px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all duration-300"
              style={{ backgroundColor: service.color }}
              data-testid={`service-card-${index}`}
            >
              {/* Divine glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-t-[100px] rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              {/* Illustration */}
              <div className="relative h-44 flex items-center justify-center py-6">
                {service.illustration}
              </div>

              {/* Service Title & Button */}
              <div className="relative px-5 pb-6 text-center space-y-3">
                <div>
                  <h3
                    className="text-lg font-normal mb-1"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: service.color === "#546142" ? "#E6E0D7" : "#546142",
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
                        color: service.color === "#546142" ? "#E6E0D7" : "#738062",
                      }}
                    >
                      {service.subtitle}
                    </p>
                  )}
                </div>
                
                {/* Book Session Button */}
                <a
                  href="https://zoho.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all hover:shadow-lg"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    backgroundColor: service.color === "#546142" ? "#E6E0D7" : "#546142",
                    color: service.color === "#546142" ? "#546142" : "#FFFFFF",
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