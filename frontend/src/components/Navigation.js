import React from "react";

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F3F0] border-b border-[#E6E0D7]">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Left Menu Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-work-with-me"
            >
              Work With Me
            </button>
          </div>

          {/* Centered Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.3em] font-normal text-[#546142]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="logo-button"
          >
            LIGHTENED SELF
          </button>

          {/* Right Menu Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;