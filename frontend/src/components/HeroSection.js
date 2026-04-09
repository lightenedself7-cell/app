import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#F5F3F0] pt-24 pb-12 px-6">
      <div className="max-w-6xl w-full">
        {/* Hero Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Mission Statement */}
            <div className="space-y-6">
              <h2
                className="text-2xl tracking-[0.15em] font-normal text-[#546142] mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                data-testid="mission-label"
              >
                Mission Statement
              </h2>
              <p
                className="text-base leading-relaxed text-[#738062]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="mission-text"
              >
                When you embody your purpose and flow through this lifetime without resistance you naturally transform into a deeply meditative state.
                <br />
                <br />
                To surrender is to move through adversity with compassion and love for yourself.
              </p>
            </div>

            {/* Right - Arch Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-t-[200px] rounded-b-xl" data-testid="hero-image-container">
                <img
                  src="https://images.unsplash.com/photo-1768977148978-c7d49cd573cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHw0fHxzb2Z0JTIwYm90YW5pY2FsJTIwbGVhdmVzJTIwc3VubGlnaHR8ZW58MHx8fHwxNzc1Njk5MzQ4fDA&ixlib=rb-4.1.0&q=85"
                  alt="Sunlight through botanical leaves"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;