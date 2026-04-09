import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const workWithMeItems = [
    "1:1 Virtual",
    "1:1 Mentorship",
    "Couple Healing",
    "Meditation",
    "Aura Cleansing",
    "Quick Energy Reset",
  ];

  const toolsItems = ["Meditations", "Programs"];

  return (
    <nav className="sticky top-0 z-50 bg-[#E6E0D7]/95 backdrop-blur-md border-b border-[#AAB4A6]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-3xl font-medium text-[#546142] hover:text-[#738062] transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            data-testid="logo-button"
          >
            Lightened Self
          </button>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-6">
                {/* Home */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-sm tracking-widest text-[#546142] hover:text-[#738062] transition-colors uppercase"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-home"
                  >
                    Home
                  </button>
                </NavigationMenuItem>

                {/* Work With Me - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm tracking-widest text-[#546142] hover:text-[#738062] transition-colors uppercase bg-transparent"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-work-with-me"
                  >
                    Work With Me
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[240px] gap-2 p-4 bg-white/95 backdrop-blur-md">
                      {workWithMeItems.map((item, index) => (
                        <li key={index}>
                          <button
                            onClick={() => scrollToSection("services")}
                            className="block w-full text-left select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E8D3C5] hover:text-[#546142] focus:bg-[#E8D3C5] text-[#546142]"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                            data-testid={`nav-service-${index}`}
                          >
                            <div className="text-sm font-medium leading-none">{item}</div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Tools - Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm tracking-widest text-[#546142] hover:text-[#738062] transition-colors uppercase bg-transparent"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-tools"
                  >
                    Tools
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white/95 backdrop-blur-md">
                      {toolsItems.map((item, index) => (
                        <li key={index}>
                          <NavigationMenuLink asChild>
                            <a
                              href="#"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#E8D3C5] hover:text-[#546142] focus:bg-[#E8D3C5] text-[#546142]"
                              style={{ fontFamily: "'Poppins', sans-serif" }}
                              data-testid={`nav-tool-${index}`}
                            >
                              <div className="text-sm font-medium leading-none">{item}</div>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-sm tracking-widest text-[#546142] hover:text-[#738062] transition-colors uppercase"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid="nav-contact"
                  >
                    Contact
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Client Login Button */}
            <a
              href="https://zoho.com/portal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#B68D6D] text-white text-sm tracking-wide rounded-full hover:bg-[#A67D5D] transition-all hover:shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="client-login-button"
            >
              CLIENT LOGIN
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;