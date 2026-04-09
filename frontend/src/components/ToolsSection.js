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
    <section id="tools" className="py-24 px-6 bg-[#FDF9F4]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2
          className="text-3xl tracking-[0.15em] font-normal text-[#9B8376] text-center mb-16"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          data-testid="tools-heading"
        >
          Tools
        </h2>

        {/* Tools Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgba(155,131,118,0.08)] p-12 text-center space-y-6 hover:shadow-[0_12px_40px_rgba(155,131,118,0.12)] transition-all"
                data-testid={`tool-card-${index}`}
              >
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-[#F5E8E2] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#C79B87]" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-normal text-[#9B8376]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  data-testid={`tool-title-${index}`}
                >
                  {tool.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-[#B39A8E]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`tool-description-${index}`}
                >
                  {tool.description}
                </p>

                {/* CTA Button */}
                <button
                  className="px-8 py-3 bg-[#C79B87] text-white rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#B88A76] transition-all hover:shadow-lg"
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