"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Handshake, Crown, Heart, GraduationCap, Send } from "lucide-react";

const audiences = [
  {
    icon: Handshake,
    title: "For Partners & Funders",
    text: "Isintu Samakhosi is seeking strategic partners who share our vision of community-led development. Whether you represent a financial institution, government department, development agency, or private enterprise, there is a role for you in building rural prosperity.",
    cta: "Partner With Us",
  },
  {
    icon: Crown,
    title: "For Traditional Leaders",
    text: "If you are an inkosi, induna, or member of a traditional council, we want to work with you. Our programmes are built in partnership with chiefdoms — not imposed on them. Let us explore how we can support your community\u2019s development goals.",
    cta: "Connect Your Community",
  },
  {
    icon: Heart,
    title: "For Donors & Supporters",
    text: "Every contribution strengthens the movement. Your support funds farmer training, business incubation, cultural preservation, and the infrastructure that allows rural communities to govern their own prosperity.",
    cta: "Support Our Work",
  },
  {
    icon: GraduationCap,
    title: "For Volunteers & Researchers",
    text: "We welcome individuals with skills in community development, agriculture, finance, legal, technology, and research. If you want to contribute your expertise to meaningful work, we want to hear from you.",
    cta: "Volunteer Your Skills",
  },
];

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to backend (API route, email service, etc.)
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Get Involved"
        title="Be Part of the Movement"
        subtitle="There are many ways to support the restoration of African self-governance and rural prosperity. Find the path that fits you."
      />

      {/* Audience cards */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group border border-gold/10 hover:border-gold/30 p-8 transition-all duration-300 h-full flex flex-col">
                <item.icon
                  size={28}
                  className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-serif text-xl font-bold text-earth-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-earth-600 leading-relaxed text-sm flex-1">
                  {item.text}
                </p>
                <a
                  href="#contact-form"
                  className="mt-5 btn-outline text-xs self-start"
                >
                  {item.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <section
        id="contact-form"
        className="bg-earth-900 grain-overlay py-20 md:py-28"
      >
        <div className="max-w-2xl mx-auto section-padding">
          <SectionLabel>Contact Us</SectionLabel>
          <SectionTitle dark>Get in Touch</SectionTitle>

          {submitted ? (
            <Reveal>
              <div className="bg-gold/10 border border-gold/30 p-8 text-center">
                <p className="font-serif text-xl text-gold mb-2">
                  Thank you for reaching out.
                </p>
                <p className="text-earth-400 text-sm">
                  We will review your message and respond as soon as possible.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                      Organisation
                    </label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organisation: e.target.value,
                        })
                      }
                      className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                    I am a... *
                  </label>
                  <select
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select one</option>
                    <option value="partner">Potential Partner / Funder</option>
                    <option value="traditional-leader">Traditional Leader</option>
                    <option value="donor">Donor / Supporter</option>
                    <option value="volunteer">Volunteer / Researcher</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-earth-400 mb-1.5 font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-earth-800 border border-earth-700 text-white px-4 py-3 text-sm focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full justify-center"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
