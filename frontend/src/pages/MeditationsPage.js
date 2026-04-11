import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Headphones, Play, Clock } from "lucide-react";

const meditations = [
  {
    title: "Morning Light Awakening",
    description: "Start your day with clarity and gentle energy activation.",
    duration: "15 min"
  },
  {
    title: "Deep Relaxation Journey",
    description: "Release tension and sink into profound relaxation.",
    duration: "30 min"
  },
  {
    title: "Chakra Balancing Flow",
    description: "Align and balance all seven chakras for optimal energy flow.",
    duration: "25 min"
  },
  {
    title: "Evening Wind Down",
    description: "Gently release the day and prepare for restful sleep.",
    duration: "20 min"
  },
  {
    title: "Heart Opening Meditation",
    description: "Open your heart center and cultivate self-love and compassion.",
    duration: "20 min"
  },
  {
    title: "Grounding & Protection",
    description: "Connect with earth energy and create a protective light shield.",
    duration: "15 min"
  }
];

const MeditationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="w-10 h-10 text-[#B68D6D]" strokeWidth={1.5} />
              <h1
                className="text-4xl font-normal text-[#546142]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                data-testid="meditations-heading"
              >
                Meditations
              </h1>
            </div>
            <p
              className="text-base text-[#738062] ml-12"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Guided practices for every moment
            </p>
          </div>

          {/* Meditation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {meditations.map((meditation, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all"
                data-testid={`meditation-card-${index}`}
              >
                {/* Play Button */}
                <div className="mb-6">
                  <button className="w-12 h-12 bg-[#E8D3C5] rounded-full flex items-center justify-center hover:bg-[#D6C1B3] transition-colors">
                    <Play className="w-5 h-5 text-[#546142] ml-0.5" fill="#546142" />
                  </button>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-4 text-[#AAB4A6]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {meditation.duration}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-normal text-[#546142] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {meditation.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-[#738062] leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {meditation.description}
                </p>
              </div>
            ))}
          </div>

          {/* Login CTA */}
          <div className="text-center">
            <button
              onClick={() => window.open('https://zoho.com/portal', '_blank')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-[#B68D6D] text-sm font-medium uppercase tracking-wider hover:text-[#A67D5D] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              data-testid="login-access-button"
            >
              Login to Access All Meditations
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeditationsPage;