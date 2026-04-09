import React from "react";
import { Music, BookOpen } from "lucide-react";

const ToolsSection = () => {
  const tools = [
    {
      icon: Music,
      title: "Guided Meditations",
      description: "Access a library of guided meditations designed to help you find inner peace and clarity in your daily life.",
    },
    {
      icon: BookOpen,
      title: "Programs",
      description: "Structured programs to support your healing journey with comprehensive tools and practices.",
    },
  ];

  return (
    <section id="tools" className="py-24 px-6 bg-[#F5F3F0]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          className="text-3xl tracking-[0.15em] font-normal text-[#546142] text-center mb-16"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          data-testid="tools-heading"
        >
          Tools
        </h2>

        {/* Tools Cards with Divine Glow */}
        <div className="grid md:grid-cols-2 gap-10">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-12 text-center space-y-6 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] transition-all"
                data-testid={`tool-card-${index}`}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#E8D3C5]/10 via-transparent to-[#AAB4A6]/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#546142] rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-normal text-[#546142]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  data-testid={`tool-title-${index}`}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-[#738062]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`tool-description-${index}`}
                >
                  {tool.description}
                </p>

                {/* CTA Button */}
                <button
                  className="px-8 py-3 bg-[#546142] text-white rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#738062] transition-all hover:shadow-lg"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`tool-button-${index}`}
                >
                  Learn more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;