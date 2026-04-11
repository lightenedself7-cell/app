import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#546142] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          data-testid="cta-heading"
        >
          Ready to <span className="italic">lighten</span> your path?
        </h2>

        {/* Description */}
        <p
          className="text-lg text-[#738062] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Take the first step towards transformation. Whether you're curious about energy healing or ready to dive deep — I'm here to guide you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#B68D6D] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#A67D5D] transition-all hover:shadow-lg flex items-center gap-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="cta-get-in-touch"
          >
            Get in Touch →
          </button>
          <button
            onClick={() => navigate('/work-with-me')}
            className="px-8 py-4 bg-transparent border-2 border-[#546142] text-[#546142] rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#546142] hover:text-white transition-all"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            data-testid="cta-view-services"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;