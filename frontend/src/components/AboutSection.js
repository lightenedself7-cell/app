import React from "react";
import { MapPin, Sparkles } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: MapPin,
      title: "Compassionate Care",
      description: "Gentle, supportive guidance"
    },
    {
      icon: Sparkles,
      title: "Transformative",
      description: "Deep, lasting change"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1617391484407-e58218dee463?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHw0fHx3b21hbiUyMG1lZGl0YXRpbmclMjBwZWFjZWZ1bCUyMGxvdHVzJTIwcG9zZXxlbnwwfHx8fDE3NzU3NDMyNzl8MA&ixlib=rb-4.1.0&q=85"
                alt="Lightened Self healing practice"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            {/* Label */}
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#B39A8E]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              About LightenedSelf
            </p>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-light text-[#9B8376] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your Path to Inner
              <br />
              Transformation
            </h2>

            {/* Description */}
            <div className="space-y-6">
              <p
                className="text-base leading-relaxed text-[#B39A8E]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                At LightenedSelf, we believe that true healing comes from within. Our holistic approach combines ancient wisdom with modern practices to guide you on a journey of self-discovery and transformation.
              </p>

              <p
                className="text-base leading-relaxed text-[#B39A8E]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Based globally, we offer virtual sessions that allow you to experience the profound benefits of energy healing, intuitive readings, and guided meditation from the comfort of your own space.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-[#F5E8E2] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#C79B87]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-normal text-[#9B8376] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {value.title}
                      </h3>
                      <p
                        className="text-sm text-[#B39A8E]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;