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
        background: 'linear-gradient(135deg, rgba(253, 249, 244, 0.95) 0%, rgba(245, 232, 226, 0.7) 50%, rgba(232, 212, 204, 0.4) 100%)'
      }}
    >
      {/* Dreamy Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Glowing Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(232, 212, 204, 0.6) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(212, 168, 148, 0.5) 0%, transparent 70%)'
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(245, 232, 226, 0.8) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Floating Light Particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-[#D4A894] rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#E8D4CC] rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-[#C79B87] rounded-full opacity-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#F5E8E2] rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Small Label */}
        <p
          className="text-xs uppercase tracking-[0.3em] text-[#B39A8E] mb-6"
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
          <div className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#9B8376] leading-tight">
            Lightened
          </div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-normal italic text-[#D4A894] leading-tight">
            Self
          </div>
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl leading-relaxed text-[#B39A8E] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          data-testid="hero-description"
        >
          Illuminate your path to inner peace through energy healing, spiritual mentorship, and transformative wellness practices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-[#C79B87] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#B88A76] transition-all hover:shadow-xl flex items-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="hero-cta-primary"
          >
            Begin Your Journey →
          </button>
          <button
            onClick={scrollToTools}
            className="px-8 py-4 bg-transparent border-2 border-[#9B8376] text-[#9B8376] rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#9B8376] hover:text-white transition-all"
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