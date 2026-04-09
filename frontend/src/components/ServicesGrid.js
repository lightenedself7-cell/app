import React from "react";

const services = [
  {
    title: "1:1 Virtual",
    description: "Personalized virtual healing session.",
    image: "https://images.unsplash.com/photo-1764258109730-76ba3a917fd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwZ29sZGVuJTIwaG91cnxlbnwwfHx8fDE3NzU2OTkzMzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "1:1 Mentorship",
    description: "Guided spiritual and personal mentorship.",
    image: "https://images.unsplash.com/photo-1769203902904-f4abce5a9b6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwZ29sZGVuJTIwaG91cnxlbnwwfHx8fDE3NzU2OTkzMzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Couple Healing",
    description: "Realign and reconnect with your partner.",
    image: "https://images.unsplash.com/photo-1758467614798-93733618b752?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwYm90YW5pY2FsJTIwZ29sZGVuJTIwaG91cnxlbnwwfHx8fDE3NzU2OTkzMzZ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Meditation",
    description: "Deeply restorative guided meditations.",
    image: "https://images.unsplash.com/photo-1764616683131-862865b9bcf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxjYWxtJTIwbWVkaXRhdGlvbiUyMGdvbGRlbiUyMGhvdXJ8ZW58MHx8fHwxNzc1Njk5MzM2fDA&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Aura Cleansing",
    description: "Clear energy blockages and restore balance.",
    image: "https://images.unsplash.com/photo-1701352344755-33108042e4df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwzfHxzZXJlbmUlMjBoZWFsaW5nJTIwc3BhY2UlMjBnb2xkZW4lMjBob3VyfGVufDB8fHx8MTc3NTY5OTM0OHww&ixlib=rb-4.1.0&q=85",
  },
  {
    title: "Quick Energy Reset",
    description: "A brief session to realign your energy.",
    image: "https://images.unsplash.com/photo-1722713698070-85c7ada9a1c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxzb2Z0JTIwYm90YW5pY2FsJTIwbGVhdmVzJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc1Njk5MzQ4fDA&ixlib=rb-4.1.0&q=85",
  },
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#E8D3C5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-widest text-[#AAB4A6] mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="services-label"
          >
            Our Services
          </p>
          <h2
            className="text-4xl md:text-5xl tracking-tight font-medium text-[#546142]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="services-heading"
          >
            Pathways to Healing
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-t-[300px] rounded-b-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              {/* Image */}
              <div className="h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-center space-y-4">
                <h3
                  className="text-2xl font-medium text-[#546142]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  data-testid={`service-title-${index}`}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base leading-relaxed text-[#738062]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`service-description-${index}`}
                >
                  {service.description}
                </p>
                <a
                  href="https://zoho.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-[#B68D6D] text-white rounded-full text-sm font-medium hover:bg-[#A67D5D] transition-all hover:shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
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