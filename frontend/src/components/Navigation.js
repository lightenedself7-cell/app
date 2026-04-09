import React from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const workWithMeServices = [
    { name: "1:1 Virtual", path: "/work-with-me" },
    { name: "1:1 Mentorship", path: "/work-with-me" },
    { name: "Couple Healing", path: "/work-with-me" },
    { name: "Meditation", section: "services" },
    { name: "Aura Cleansing", section: "services" },
    { name: "Quick Energy Reset", section: "services" },
  ];

  const toolsItems = [
    { name: "Meditations", path: "/meditations" },
    { name: "Programs", path: "/programs" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E8C9C1]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Client Login */}
          <div>
            <a
              href="https://zoho.com/portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-[#8B7D6B] hover:text-[#A8B5A7] transition-colors font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="nav-client-login"
            >
              Client Login
            </a>
          </div>

          {/* Centered Logo */}
          <button
            onClick={() => navigate('/')}
            className="absolute left-1/2 -translate-x-1/2 text-xl tracking-[0.3em] font-normal text-[#8B7D6B] hover:text-[#A8B5A7] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="logo-button"
          >
            LIGHTENED SELF
          </button>

          {/* Right Side - Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {/* Work With Me - Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-xs uppercase tracking-[0.2em] text-[#8B7D6B] hover:text-[#A8B5A7] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="nav-work-with-me"
                >
                  Work With Me
                  <ChevronDown className="w-3 h-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E8C9C1]/20">
                    {workWithMeServices.map((service, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            if (service.path) {
                              navigate(service.path);
                            } else if (service.section) {
                              navigate('/');
                              setTimeout(() => scrollToSection(service.section), 100);
                            }
                          }}
                          className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F2EE] focus:bg-[#F5F2EE] text-[#8B7D6B]"
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
                  className="text-xs uppercase tracking-[0.2em] text-[#8B7D6B] hover:text-[#A8B5A7] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="nav-tools"
                >
                  Tools
                  <ChevronDown className="w-3 h-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E8C9C1]/20">
                    {toolsItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => navigate(item.path)}
                          className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F2EE] focus:bg-[#F5F2EE] text-[#8B7D6B]"
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
                    navigate('/');
                    setTimeout(() => scrollToSection('contact'), 100);
                  }}
                  className="text-xs uppercase tracking-[0.2em] text-[#8B7D6B] hover:text-[#A8B5A7] transition-colors font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="nav-contact"
                >
                  Contact
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;