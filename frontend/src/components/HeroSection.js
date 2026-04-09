import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#F5F3F0] pt-24 pb-16 px-6">
      <div className="max-w-6xl w-full">
        {/* Hero Card with Divine Glow */}
        <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.08)] p-12 md:p-20">
          {/* Subtle Divine Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E8D3C5]/20 via-white to-[#AAB4A6]/20 rounded-3xl blur-xl opacity-60 -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Hero Content */}
            <div className="space-y-8">
              <h1
                className="text-5xl md:text-6xl tracking-tight font-normal text-[#546142] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                data-testid="hero-heading"
              >
                Your Light,
                <br />
                Unbound.
              </h1>
              
              <p
                className="text-lg md:text-xl leading-relaxed text-[#738062]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="hero-subheading"
              >
                Bespoke energy healing and soul-led mentorship for the global collective. Accessible from anywhere in the world.
              </p>
              
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-[#546142] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#738062] transition-all hover:shadow-xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="hero-cta-button"
              >
                Explore Services
              </button>
            </div>

            {/* Right - Arch Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[200px] rounded-b-xl shadow-xl" data-testid="hero-image-container">
                <img
                  src="https://images.unsplash.com/photo-1768977148978-c7d49cd573cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxzb2Z0JTIwYm90YW5pY2FsJTIwbGVhdmVzJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc1Njk5MzQ4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Sunlight through botanical leaves"
                  className="w-full h-[450px] object-cover"
                />
                {/* Divine glow overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8D3C5]/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;