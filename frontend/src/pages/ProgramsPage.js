import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

const programs = [
  {
    sessions: "21 SESSIONS",
    title: "21-Day Spiritual Awakening",
    description: "A transformative three-week journey to deepen your spiritual connection and awaken your inner light. Daily guided practices, journaling prompts, and energy exercises.",
    included: [
      "Daily guided meditations",
      "Journaling prompts",
      "Energy exercises",
      "Community support"
    ]
  },
  {
    sessions: "8 SESSIONS",
    title: "Heal & Release Program",
    description: "An eight-week intensive program designed to help you identify, process, and release deep-seated emotional and energetic patterns that no longer serve you.",
    included: [
      "Weekly deep-dive sessions",
      "Healing techniques",
      "Progress tracking",
      "1:1 support calls"
    ]
  },
  {
    sessions: "6 SESSIONS",
    title: "Couples Connection Course",
    description: "Strengthen your bond through guided energy practices and communication exercises. Perfect for couples looking to deepen their connection and heal together.",
    included: [
      "Partner exercises",
      "Communication tools",
      "Energy work for couples",
      "Guided meditations"
    ]
  }
];

const ProgramsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-[#B68D6D]" strokeWidth={1.5} />
              <h1
                className="text-4xl font-normal text-[#546142]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                data-testid="programs-heading"
              >
                Programs
              </h1>
            </div>
            <p
              className="text-base text-[#738062] ml-12"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Structured journeys for deep transformation
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all"
                data-testid={`program-card-${index}`}
              >
                {/* Session Count Badge */}
                <div className="mb-6">
                  <span
                    className="text-xs text-[#AAB4A6] uppercase tracking-widest"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {program.sessions}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-normal text-[#546142] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {program.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-[#738062] leading-relaxed mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {program.description}
                </p>

                {/* Included Items */}
                <ul className="space-y-3 mb-8">
                  {program.included.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-[#738062]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#B68D6D] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button
                  className="w-full px-8 py-4 bg-[#B68D6D] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#A67D5D] transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  data-testid={`program-learn-more-${index}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;