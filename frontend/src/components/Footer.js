import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToHash = (hash) => {
    const el = document.getElementById(hash);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleRoute = (path, hash) => {
    if (hash) {
      const currentPath = window.location.pathname;
      if (currentPath === path) {
        scrollToHash(hash);
      } else {
        navigate(path);
        setTimeout(() => scrollToHash(hash), 300);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Work With Me", path: "/work-with-me" },
    { name: "Tools & Resources", path: "/meditations" },
    { name: "Contact", path: "/", hash: "contact" },
    { name: "Client Portal", href: "https://lightenedself.zohobookings.ca", external: true }
  ];

  const services = [
    { name: "1:1 Virtual Sessions", path: "/work-with-me", hash: "virtual" },
    { name: "1:1 Mentorship", path: "/work-with-me", hash: "mentorship" },
    { name: "Couple Healing", path: "/work-with-me", hash: "couple" },
    { name: "Aura Cleansing", path: "/", hash: "services" },
  ];

const footerLinkClass = "text-sm text-[#738062] hover:text-[#546142] transition-colors cursor-pointer relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[1.5px] after:w-0 after:bg-[#B68D6D] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="bg-white border-t border-[#E6E0D7] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-2xl font-normal text-[#546142] mb-4 cursor-pointer hover:opacity-80 transition-opacity text-left"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-testid="footer-logo"
            >
              Lightened Self
            </button>
            <p
              className="text-sm text-[#738062] leading-relaxed mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Guiding you towards inner peace, healing, and spiritual transformation. Your journey to wholeness begins here.
            </p>
            <a
              href="mailto:connect@lightenedself.com"
              className={footerLinkClass + " text-[#B68D6D] hover:text-[#A67D5D]"}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              connect@lightenedself.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-[#546142] mb-6 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={footerLinkClass}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid={`footer-link-${index}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleRoute(link.path, link.hash)}
                      className={footerLinkClass}
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      data-testid={`footer-link-${index}`}
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.2em] text-[#546142] mb-6 font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleRoute(service.path, service.hash)}
                    className={footerLinkClass}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid={`footer-service-${index}`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#E6E0D7] flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-[#AAB4A6]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            © 2026 Lightened Self. All rights reserved.
          </p>
          <p
            className="text-xs text-[#AAB4A6]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Made with ❤️ and Light
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;