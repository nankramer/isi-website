import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Isintu Samakhosi Institute is a non-profit dedicated to revitalising African kingships and building self-sustaining rural economies.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Where Tradition Meets Transformation"
        subtitle="Isintu Samakhosi Institute exists because African indigenous leadership structures — once the backbone of community governance, justice, and economic life — have been systematically eroded over centuries."
      />

      {/* Introduction */}
      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed mb-6">
            Our name tells our story. <strong className="text-earth-900">&ldquo;Isintu&rdquo;</strong> speaks
            to culture, tradition, and the African way. <strong className="text-earth-900">&ldquo;Samakhosi&rdquo;</strong> speaks
            to the kings and chiefs who carry the responsibility of their people. Together,
            we are the bridge between what was lost and what can be rebuilt.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-earth-600 leading-relaxed">
            We are a non-profit organisation dedicated to supporting and revitalising
            kingships under the guidance of traditional chiefs. Built upon three core
            pillars — Abantu, Ubuntu, and Isintu — we aim to honour and revive
            indigenous leadership structures that have been diminished over time.
          </p>
        </Reveal>

        <SectionDivider />

        {/* Pillars */}
        <SectionLabel>Our Three Pillars</SectionLabel>

        {[
          {
            title: "Abantu — The People",
            text: "Communities are not beneficiaries — they are the engine. Every programme we run is designed to unlock human potential, create local employment, and ensure that value stays within the community.",
          },
          {
            title: "Ubuntu — We Are Because They Are",
            text: "Ubuntu is not a slogan. It is our operating system. We embed collective ownership, co-operative economics, and shared accountability into everything we do. Our business chambers use a co-op model. Our fund is community-owned. Our success is measured in collective prosperity, not individual extraction.",
          },
          {
            title: "Isintu — The Way of Our People",
            text: "We reject the idea that progress requires abandoning tradition. The governance systems of African chiefdoms — conflict resolution, resource allocation, social cohesion — are sophisticated, time-tested, and relevant. We preserve them. We teach them. We integrate them with modern tools.",
          },
        ].map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.1}>
            <div className="mb-10 last:mb-0">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-earth-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-earth-600 leading-relaxed max-w-3xl">
                {pillar.text}
              </p>
            </div>
          </Reveal>
        ))}

        <SectionDivider />

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <SectionLabel>Our Vision</SectionLabel>
              <p className="text-lg text-earth-600 leading-relaxed">
                A continent where traditional leadership structures are recognised,
                resourced, and empowered to drive sustainable development in their
                own communities — on their own terms.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionLabel>Our Mission</SectionLabel>
              <p className="text-lg text-earth-600 leading-relaxed">
                To revitalise African kingships and chiefdoms by building the
                economic infrastructure, institutional capacity, and cultural pride
                needed for communities to become self-sustaining.
              </p>
            </div>
          </Reveal>
        </div>

        <SectionDivider />

        {/* Mandate */}
        <SectionLabel>Our Mandate</SectionLabel>
        <div className="space-y-4 mt-4">
          {[
            "Preserve indigenous culture and leadership while fostering unity, dignity, justice, and community wellbeing",
            "Restore respect for lineage, customs, and the sacred traditions of African governance",
            "Ensure that amakhosi are active participants in community development — not honorary figures",
            "Leverage private-public partnerships to fund and implement development projects",
            "Establish \u201Cubuntuology\u201D as a practical, actionable framework for community-led development",
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 py-3 border-b border-gold/10 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <p className="text-earth-600 leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionDivider />

        {/* Founder */}
        <SectionLabel>Leadership</SectionLabel>
        <SectionTitle>Andile Sizwe Phahla — Founder & President</SectionTitle>
        <Reveal>
          <div className="bg-stone/50 border border-gold/10 p-8 md:p-10">
            <div className="space-y-5">
              <p className="text-earth-600 leading-relaxed">
                Andile Sizwe Phahla is a businessman, philanthropist, and community
                development advocate whose work is centred on building sustainable
                economic opportunities and strengthening grassroots leadership within
                African communities. With more than two decades of experience in
                entrepreneurship and organisational leadership, he has established
                ventures across sectors including logistics, finance, property
                development, and technology-driven services.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Throughout his journey, Phahla has served in various political
                organisations and governance structures, where he gained extensive
                insight into the inner workings of political systems, community
                mobilisation, and public administration. His experience within
                political parties and municipal structures provided him with a deep
                understanding of the dynamics that shape governance, policy
                implementation, and civic leadership at the local and regional level.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Today, Phahla&apos;s primary focus is on development work through his
                leadership as President of the Isintu Samakhosi Institute. Through
                the institute, he promotes the integration of traditional leadership
                structures, modern enterprise, and technological innovation as
                catalysts for village-based economies and sustainable development.
              </p>
              <p className="text-earth-600 leading-relaxed">
                A key dimension of Phahla&apos;s philosophy is rooted in the African
                principle of Ubuntu, which emphasises collective humanity, social
                responsibility, and community-driven progress. As a spiritual leader
                and practitioner of indigenous knowledge systems, he advocates for
                the practical application of Ubuntu principles in leadership,
                economic empowerment, and social development.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Driven by a commitment to community upliftment, youth empowerment,
                and cultural preservation, Andile Sizwe Phahla continues to champion
                initiatives that bridge tradition and modern economic systems,
                ensuring that rural communities are active participants in
                Africa&apos;s evolving development landscape.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gold/10">
              <p className="text-earth-400 text-sm italic">
                A professional headshot will be added when available.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
