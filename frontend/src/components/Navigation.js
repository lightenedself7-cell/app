import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const workWithMeServices = [
    { name: "1:1 Virtual", path: "/work-with-me", hash: "virtual" },
    { name: "1:1 Mentorship", path: "/work-with-me", hash: "mentorship" },
    { name: "Couple Healing", path: "/work-with-me", hash: "couple" },
    { name: "Meditation", section: "services" },
    { name: "Aura Cleansing", section: "services" },
    { name: "Quick Energy Reset", section: "services" },
  ];

  const toolsItems = [
    { name: "Meditations", path: "/meditations" },
    { name: "Programs", path: "/programs" }
  ];

  const scrollToHash = (hash) => {
    const el = document.getElementById(hash);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleNavClick = (item) => {
    if (item.path && item.hash) {
      const currentPath = window.location.pathname;
      if (currentPath === item.path) {
        scrollToHash(item.hash);
      } else {
        navigate(item.path);
        setTimeout(() => scrollToHash(item.hash), 300);
      }
    } else if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        scrollToHash(item.section);
      } else {
        navigate('/');
        setTimeout(() => scrollToHash(item.section), 300);
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#A68B76]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => { navigate('/'); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 md:gap-4 hover:opacity-90 transition-opacity"
            data-testid="logo-button"
          >
            <img src="/logo.svg" alt="Lightened Self" className="h-9 md:h-11 w-auto" />
            <span 
              className="text-base md:text-xl tracking-[0.2em] md:tracking-[0.35em] font-light text-[#F5EDE6]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              LIGHTENED SELF
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {/* Work With Me - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm uppercase tracking-[0.15em] text-[#F5EDE6]/90 hover:text-[#F5EDE6] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-work-with-me"
                  >
                    Work With Me
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E8D4CC]/30">
                      {workWithMeServices.map((service, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleNavClick(service)}
                            className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5E8E2] focus:bg-[#F5E8E2] text-[#9B8376]"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                            data-testid={`nav-service-${index}`}
                          >
                            <div className="text-sm font-medium">{service.name}</div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Tools - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm uppercase tracking-[0.15em] text-[#F5EDE6]/90 hover:text-[#F5EDE6] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-tools"
                  >
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E8D4CC]/30">
                      {toolsItems.map((item, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleNavClick(item)}
                            className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5E8E2] focus:bg-[#F5E8E2] text-[#9B8376]"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                            data-testid={`nav-tool-${index}`}
                          >
                            <div className="text-sm font-medium">{item.name}</div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <button
                    onClick={() => {
                      const currentPath = window.location.pathname;
                      if (currentPath === '/') {
                        const el = document.getElementById('contact');
                        if (el) {
                          const navHeight = 80;
                          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                          window.scrollTo({ top, behavior: "smooth" });
                        }
                      } else {
                        navigate('/');
                        setTimeout(() => {
                          const el = document.getElementById('contact');
                          if (el) {
                            const navHeight = 80;
                            const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                            window.scrollTo({ top, behavior: "smooth" });
                          }
                        }, 300);
                      }
                    }}
                    className="text-sm uppercase tracking-[0.15em] text-[#F5EDE6]/90 hover:text-[#F5EDE6] transition-colors font-medium"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-contact"
                  >
                    Contact
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5EDE6] hover:bg-[#8B7565] rounded-lg transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#F5EDE6]/20 pt-4">
            <div className="space-y-4">
              {/* Work With Me Section */}
              <div>
                <p 
                  className="text-xs uppercase tracking-[0.2em] text-[#F5EDE6]/70 mb-2 px-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Work With Me
                </p>
                <div className="space-y-1">
                  {workWithMeServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(service)}
                      className="block w-full text-left px-4 py-2 text-[#F5EDE6] hover:bg-[#8B7565] rounded-lg transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div>
                <p 
                  className="text-xs uppercase tracking-[0.2em] text-[#F5EDE6]/70 mb-2 px-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Tools
                </p>
                <div className="space-y-1">
                  {toolsItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left px-4 py-2 text-[#F5EDE6] hover:bg-[#8B7565] rounded-lg transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <button
                onClick={() => {
                  const currentPath = window.location.pathname;
                  if (currentPath === '/') {
                    const el = document.getElementById('contact');
                    if (el) {
                      const navHeight = 80;
                      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) {
                        const navHeight = 80;
                        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }, 300);
                  }
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-[#F5EDE6] hover:bg-[#8B7565] rounded-lg transition-colors font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
