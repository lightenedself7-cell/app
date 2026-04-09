import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Navigation />
      <HeroSection />
      <ToolsSection />
      <ServicesGrid />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;