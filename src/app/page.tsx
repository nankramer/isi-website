import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import { Logo } from "@/components/Logo";
import {
  Crown,
  Sprout,
  Store,
  Briefcase,
  Mountain,
  PiggyBank,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100vh] flex items-center bg-earth-900 grain-overlay overflow-hidden">
        {/* Background decorative */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/[0.06]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/[0.08]" />
          {/* Subtle watermark logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
            <Logo size={460} variant="dark" />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto section-padding py-32 md:py-0">
          <Reveal>
            <p className="label-text mb-6">Abantu • Ubuntu • Isintu</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8 max-w-4xl">
              Reviving the Power of African{" "}
              <span className="text-gold">Kingships</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-earth-400 max-w-2xl leading-relaxed mb-10">
              Isintu Samakhosi Institute works with traditional chiefs and rural
              communities to build self-sustaining economies rooted in indigenous
              governance, cultural heritage, and Ubuntu.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/our-work" className="btn-gold">
                Learn About Our Work
                <ArrowRight size={16} />
              </Link>
              <Link href="/get-involved" className="btn-outline border-gold/60 text-gold/90 hover:border-gold">
                Support the Movement
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </section>

      {/* ===== MISSION STRIP ===== */}
      <section className="bg-gold/10 border-y border-gold/20 py-10 md:py-14">
        <div className="max-w-4xl mx-auto section-padding text-center">
          <Reveal>
            <p className="font-serif text-xl md:text-2xl text-earth-800 italic leading-relaxed">
              &ldquo;Where tradition meets transformation — empowering chiefdoms
              to lead their own prosperity.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <Section>
        <SectionLabel>Our Foundation</SectionLabel>
        <SectionTitle>Three Pillars</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Abantu",
              subtitle: "The People",
              text: "Everything we do begins and ends with the people. We invest in human capital — training farmers, incubating entrepreneurs, and equipping communities with the tools to build their own futures.",
              icon: "👤",
            },
            {
              title: "Ubuntu",
              subtitle: "Collective Strength",
              text: "Our work is grounded in the philosophy that prosperity is shared. Through co-operative models, community savings, and collective ownership, we turn individual effort into communal wealth.",
              icon: "🤝",
            },
            {
              title: "Isintu",
              subtitle: "Cultural Heritage",
              text: "We honour the traditions that held African communities together for centuries. From the protocols of the royal court to the wisdom of indigenous governance, Isintu is the foundation on which we build.",
              icon: "🛡",
            },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <div className="group relative bg-stone/50 border border-gold/10 p-8 md:p-10 hover:border-gold/30 transition-all duration-500">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="text-3xl mb-4">{pillar.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-earth-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="label-text mb-4 !text-[10px]">{pillar.subtitle}</p>
                <p className="text-earth-600 leading-relaxed">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===== KEY FOCUS AREAS ===== */}
      <section className="bg-earth-900 grain-overlay py-20 md:py-28">
        <div className="max-w-6xl mx-auto section-padding">
          <SectionLabel>What We Do</SectionLabel>
          <SectionTitle dark>Key Focus Areas</SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Crown, label: "Traditional Leadership & Kingships", href: "/traditional-leadership" },
              { icon: Sprout, label: "Rural Economic Development", href: "/rural-development" },
              { icon: Store, label: "Township Economy", href: "/our-work" },
              { icon: Briefcase, label: "SMME & Co-op Incubation", href: "/our-work" },
              { icon: Mountain, label: "Informal Mining Formalisation", href: "/rural-development" },
              { icon: PiggyBank, label: "The Rural Fund", href: "/rural-development" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group flex items-start gap-4 p-6 border border-earth-700 hover:border-gold/40 bg-earth-800/30 transition-all duration-300"
                >
                  <item.icon
                    size={24}
                    className="text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-white font-body font-medium text-sm leading-snug group-hover:text-gold transition-colors duration-300">
                    {item.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>About the Institute</SectionLabel>
            <SectionTitle>
              Not Charity. <br />
              Infrastructure.
            </SectionTitle>
            <Reveal delay={0.1}>
              <p className="text-earth-600 leading-relaxed mb-6">
                Isintu Samakhosi Institute is building the economic, institutional,
                and cultural infrastructure that allows rural communities to
                generate their own wealth and govern their own affairs. We partner
                with chiefdoms and kingdoms across South Africa&apos;s nine provinces to
                create self-sustaining economies.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/about" className="btn-outline text-xs">
                Read Our Story <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative bg-earth-900 aspect-[4/3] flex items-center justify-center grain-overlay">
              <div className="opacity-10">
                <Logo size={230} variant="dark" />
              </div>
              <div className="absolute inset-0 border border-gold/10" />
              <p className="absolute bottom-4 left-4 right-4 text-center text-xs text-earth-500 italic">
                Photography coming soon
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===== CTA BAND ===== */}
      <section className="relative bg-gold py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grain-overlay" />
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl text-white italic leading-relaxed mb-8">
              Join the movement to restore African self-governance and rural
              prosperity.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-earth-900 text-gold font-body font-semibold px-10 py-4 text-sm tracking-wide uppercase transition-all duration-300 hover:bg-earth-800 hover:shadow-xl"
            >
              Get Involved <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
