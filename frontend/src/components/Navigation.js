import React from "react";
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
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const workWithMeServices = [
    "1:1 Virtual",
    "1:1 Mentorship",
    "Couple Healing",
    "Meditation",
    "Aura Cleansing",
    "Quick Energy Reset",
  ];

  const toolsItems = ["Meditations", "Programs"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E6E0D7]/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Client Login */}
          <div>
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

          {/* Right Side - Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {/* Work With Me - Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="nav-work-with-me"
                >
                  Work With Me
                  <ChevronDown className="w-3 h-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E6E0D7]/30">
                    {workWithMeServices.map((service, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection("services")}
                          className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E8D3C5]/30 focus:bg-[#E8D3C5]/30 text-[#546142]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          data-testid={`nav-service-${index}`}
                        >
                          <div className="text-sm font-medium">{service}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Tools - Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent flex items-center gap-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid="nav-tools"
                >
                  Tools
                  <ChevronDown className="w-3 h-3" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[220px] gap-2 p-4 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-[#E6E0D7]/30">
                    {toolsItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => scrollToSection("tools")}
                          className="block w-full text-left select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E8D3C5]/30 focus:bg-[#E8D3C5]/30 text-[#546142]"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                          data-testid={`nav-tool-${index}`}
                        >
                          <div className="text-sm font-medium">{item}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-xs uppercase tracking-[0.2em] text-[#546142] hover:text-[#738062] transition-colors font-medium"
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