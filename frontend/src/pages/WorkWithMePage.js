import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const services = [
  {
    id: "virtual",
    icon: <Sparkles className="w-8 h-8 text-[#B68D6D]" />,
    tagline: "DEEP HEALING, WHEREVER YOU ARE",
    title: "1:1 Virtual Session",
    description: "Experience a powerful one-on-one energy healing session from the comfort of your own space. Through intuitive guidance and energy work, we'll identify and clear blockages that are holding you back, leaving you feeling lighter, clearer, and more aligned.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    included: [
      "60-minute virtual session",
      "Energy assessment & clearing",
      "Personalized healing techniques",
      "Post-session integration guide"
    ]
  },
  {
    id: "mentorship",
    icon: <span className="text-2xl text-[#B68D6D]">♡</span>,
    tagline: "ONGOING SPIRITUAL GUIDANCE",
    title: "1:1 Mentorship",
    description: "A transformative mentorship journey designed to guide you through deep spiritual growth and personal evolution. Together, we'll work on your energy, mindset, and spiritual practices to help you step into your most authentic, empowered self.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    included: [
      "Monthly deep-dive sessions",
      "Weekly check-ins",
      "Customized spiritual practices",
      "Unlimited message support"
    ]
  },
  {
    id: "couple",
    icon: <span className="text-2xl text-[#B68D6D]">∞</span>,
    tagline: "RESTORE HARMONY & CONNECTION",
    title: "Couple Healing",
    description: "Relationship healing that goes beyond the surface. Through energy work and guided practices, we'll help you and your partner release old patterns, heal wounds, and create a deeper, more authentic connection rooted in love and understanding.",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80",
    included: [
      "90-minute couple session",
      "Relationship energy assessment",
      "Communication & connection exercises",
      "Follow-up integration plan"
    ]
  }
];

const WorkWithMePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p
              className="text-xs uppercase tracking-[0.3em] text-[#AAB4A6] mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              OFFERINGS
            </p>
            <h1
              className="text-5xl md:text-6xl font-normal text-[#546142] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              data-testid="work-with-me-heading"
            >
              Work With Me
            </h1>
            <p
              className="text-lg text-[#738062] max-w-2xl mx-auto"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explore the healing modalities and transformative experiences designed to guide you towards your most authentic, lightened self.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                data-testid={`service-detail-${service.id}`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Icon */}
                  <div className="mb-6">
                    {service.icon}
                  </div>

                  {/* Tagline */}
                  <p
                    className="text-xs uppercase tracking-[0.2em] text-[#B68D6D] mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.tagline}
                  </p>

                  {/* Title */}
                  <h2
                    className="text-3xl md:text-4xl font-normal text-[#546142] mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed text-[#738062] mb-8"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {service.description}
                  </p>

                  {/* What's Included */}
                  <div className="mb-8">
                    <p
                      className="text-sm font-medium text-[#546142] mb-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      What's included:
                    </p>
                    <ul className="space-y-2">
                      {service.included.map((item, idx) => (
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
                  </div>

                  {/* Book Now Button */}
                  <a
                    href="https://zoho.com/bookings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#B68D6D] text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-[#A67D5D] transition-all"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    data-testid={`service-book-${service.id}`}
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WorkWithMePage;