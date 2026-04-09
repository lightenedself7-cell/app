import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Work With Me", path: "/work-with-me" },
    { name: "Tools & Resources", path: "/meditations" },
    { name: "Contact", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: "Client Portal", href: "https://zoho.com/portal", external: true }
  ];

  const services = [
    "1:1 Virtual Sessions",
    "1:1 Mentorship",
    "Couple Healing",
    "Aura Cleansing"
  ];

  return (
    <footer className="bg-white border-t border-[#E6E0D7] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3
              className="text-2xl font-normal text-[#546142] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Lightened Self
            </h3>
            <p
              className="text-sm text-[#738062] leading-relaxed mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Guiding you towards inner peace, healing, and spiritual transformation. Your journey to wholeness begins here.
            </p>
            <a
              href="mailto:connect@lightenedself.com"
              className="text-sm text-[#B68D6D] hover:text-[#A67D5D] transition-colors"
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
                      className="text-sm text-[#738062] hover:text-[#546142] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  ) : link.action ? (
                    <button
                      onClick={link.action}
                      className="text-sm text-[#738062] hover:text-[#546142] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-sm text-[#738062] hover:text-[#546142] transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
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
                <li
                  key={index}
                  className="text-sm text-[#738062]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {service}
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