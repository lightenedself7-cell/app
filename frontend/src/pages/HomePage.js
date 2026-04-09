import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#E6E0D7]">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <ContactSection />
    </div>
  );
};

export default HomePage;