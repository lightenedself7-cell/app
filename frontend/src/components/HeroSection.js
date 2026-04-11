import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #FDF9F4 0%, #F5E8E2 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Soft Circle - Top Left */}
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(232, 212, 204, 0.4) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Medium Circle - Bottom Right */}
        <div 
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(212, 168, 148, 0.3) 0%, transparent 70%)'
          }}
        ></div>

        {/* Small Accent Circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-[#E8D4CC]/20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-[#D4A894]/15"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Small Label */}
            <div className="inline-block">
              <span
                className="text-xs uppercase tracking-[0.3em] text-[#B39A8E] px-4 py-2 bg-white/60 rounded-full"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Energy Healing & Spiritual Guidance
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="space-y-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-testid="hero-heading"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-light text-[#9B8376] leading-tight">
                Your Light,
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl font-light italic text-[#C79B87] leading-tight">
                Unbound
              </div>
            </h1>

            {/* Description */}
            <p
              className="text-lg md:text-xl leading-relaxed text-[#B39A8E] max-w-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="hero-description"
            >
              Step into a space of transformation and healing. Through personalized energy work and soul-led guidance, discover the lightness that has always been within you.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={scrollToServices}
                className="group px-10 py-4 bg-[#C79B87] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#B88A76] transition-all hover:shadow-lg flex items-center gap-3"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="hero-cta-primary"
              >
                Explore Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={scrollToContact}
                className="px-10 py-4 bg-white border-2 border-[#9B8376] text-[#9B8376] rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#9B8376] hover:text-white transition-all"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                data-testid="hero-cta-secondary"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Side - Featured Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                  alt="Peaceful meditation and healing"
                  className="w-full h-[600px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C79B87]/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5E8E2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C79B87]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#9B8376]" style={{ fontFamily: "'Poppins', sans-serif" }}>Virtual Sessions</p>
                    <p className="text-xs text-[#B39A8E]" style={{ fontFamily: "'Poppins', sans-serif" }}>Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;