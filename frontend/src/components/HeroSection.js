import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#E6E0D7]">
      {/* Organic Overlay - Blurred Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#E8D3C5] rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#738062] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#AAB4A6] rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="text-left space-y-6">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none font-medium text-[#546142]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="hero-heading"
          >
            Your Light,
            <br />
            Unbound.
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed text-[#738062] max-w-md"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="hero-subtext"
          >
            Discover a path to inner peace, clarity, and transformation through personalized healing sessions.
          </p>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#546142] text-white rounded-full text-base font-medium hover:bg-[#738062] transition-all hover:shadow-xl hover:-translate-y-0.5"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="hero-cta-button"
          >
            Explore Services
          </button>
        </div>

        {/* Right Side - Arch-Masked Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-t-[500px] rounded-b-3xl shadow-2xl" data-testid="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1768977148978-c7d49cd573cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxzb2Z0JTIwYm90YW5pY2FsJTIwbGVhdmVzJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc1Njk5MzQ4fDA&ixlib=rb-4.1.0&q=85"
              alt="Sunlight streams through hanging plants at sunset"
              className="w-full h-[600px] object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E6E0D7]/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;