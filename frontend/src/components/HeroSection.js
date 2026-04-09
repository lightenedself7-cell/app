import React from "react";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTools = () => {
    const element = document.getElementById('tools');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, rgba(250, 248, 245, 0.9) 0%, rgba(245, 242, 238, 0.95) 50%, rgba(232, 201, 193, 0.15) 100%)'
      }}
    >
      {/* Glowing Orb Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative Shapes */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(168, 181, 167, 0.3) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(232, 201, 193, 0.4) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(201, 168, 117, 0.2) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Floating Light Particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#C9A875] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#A8B5A7] rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#E8C9C1] rounded-full opacity-35 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Small Label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#A89A8A] mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Welcome to Your Healing Journey
        </p>

        {/* Main Heading */}
        <h1
          className="mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          data-testid="hero-heading"
        >
          <div className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#8B7D6B] leading-tight">
            Lightened
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-normal italic text-[#C9A875] leading-tight">
            Self
          </div>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl leading-relaxed text-[#A89A8A] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          data-testid="hero-description"
        >
          Illuminate your path to inner peace through energy healing, spiritual mentorship, and transformative wellness practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-[#8B9481] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#757F6E] transition-all hover:shadow-xl flex items-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="hero-cta-primary"
          >
            Begin Your Journey →
          </button>
          <button
            onClick={scrollToTools}
            className="px-8 py-4 bg-transparent border-2 border-[#8B7D6B] text-[#8B7D6B] rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#8B7D6B] hover:text-white transition-all"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="hero-cta-secondary"
          >
            Explore Tools
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;