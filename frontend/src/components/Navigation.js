import React from "react";

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E6E0D7]/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Left Side - Client Login */}
          <div className="flex items-center gap-8">
            <a
              href="https://zoho.com/portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-client-login"
            >
              Client Login
            </a>
          </div>

          {/* Centered Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.3em] font-normal text-[#546142] hover:text-[#738062] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="logo-button"
          >
            LIGHTENED SELF
          </button>

          {/* Right Side - Menu Items */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-work-with-me"
            >
              Work With Me
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-tools"
            >
              Tools
            </button>
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