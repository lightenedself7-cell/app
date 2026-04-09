import React from "react";

const services = [
  {
    title: "1:1 Virtual",
    color: "#E6E0D7",
  },
  {
    title: "1:1 Mentorship",
    color: "#E8D3C5",
  },
  {
    title: "Couple Healing",
    color: "#AAB4A6",
  },
  {
    title: "Meditation",
    color: "#E8D3C5",
  },
  {
    title: "Aura Cleansing",
    color: "#E6E0D7",
  },
  {
    title: "Quick Energy Reset",
    color: "#546142",
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
              {/* Botanical Illustration Placeholder */}
              <div className="h-64 flex items-center justify-center p-8">
                <svg
                  viewBox="0 0 200 200"
                  className="w-32 h-32 opacity-40"
                  fill="none"
                  stroke={service.color === "#546142" ? "#E6E0D7" : "#546142"}
                  strokeWidth="1.5"
                >
                  {/* Simple botanical leaf illustration */}
                  <path d="M100 40 Q120 80 100 120 Q80 80 100 40" />
                  <path d="M100 50 Q115 75 100 100" />
                  <path d="M100 50 Q85 75 100 100" />
                  <path d="M100 70 Q110 85 100 100" />
                  <path d="M100 70 Q90 85 100 100" />
                  <line x1="100" y1="120" x2="100" y2="160" />
                  <path d="M100 130 Q90 135 85 130" />
                  <path d="M100 145 Q110 150 115 145" />
                </svg>
              </div>

              {/* Service Title */}
              <div className="p-6 text-center">
                <h3
                  className="text-xl font-normal"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: service.color === "#546142" ? "#E6E0D7" : "#546142",
                  }}
                  data-testid={`service-title-${index}`}
                >
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Book Now CTA */}
        <div className="text-center mt-12">
          <a
            href="https://zoho.com/bookings"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#546142] text-white rounded-full text-base font-medium hover:bg-[#738062] transition-all hover:shadow-lg"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="book-now-button"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;