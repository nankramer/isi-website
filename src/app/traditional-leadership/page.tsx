import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Traditional Leadership & Kingships",
  description:
    "The intellectual and cultural heart of the institute — restoring African kingships as functional pillars of community life.",
};

export default function TraditionalLeadershipPage() {
  return (
    <>
      <PageHero
        label="Traditional Leadership & Kingships"
        title="Not Relics. Living Systems."
        subtitle="African kingships and chieftaincies are living systems of governance, justice, and community organisation that predate colonial borders and modern nation-states."
      />

      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed mb-6 max-w-3xl">
            This is the intellectual and cultural heart of the institute. Isintu
            Samakhosi works to ensure traditional leadership structures are not
            merely preserved in museums or mentioned in constitutions, but are
            actively restored as functional pillars of community life.
          </p>
        </Reveal>

        <SectionDivider />

        <SectionLabel>The Case</SectionLabel>
        <SectionTitle>Why Traditional Leadership Matters</SectionTitle>

        <div className="space-y-6 max-w-3xl">
          <Reveal>
            <p className="text-earth-600 leading-relaxed">
              Across Africa, traditional leaders govern millions of people. In South
              Africa alone, the institution of traditional leadership is
              constitutionally recognised. Yet amakhosi are often reduced to
              ceremonial roles — consulted but not empowered, acknowledged but not
              resourced.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-earth-600 leading-relaxed">
              The result is a governance vacuum in rural areas: communities fall
              between the cracks of municipal government and traditional authority,
              with neither fully equipped to deliver development.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-earth-600 leading-relaxed">
              We believe the answer is not to choose between modern and traditional
              governance, but to equip traditional leaders with the tools,
              partnerships, and economic infrastructure to govern effectively
              alongside modern institutions.
            </p>
          </Reveal>
        </div>

        <SectionDivider />

        <SectionLabel>Our Approach</SectionLabel>
        <SectionTitle>What We Do</SectionTitle>

        <div className="space-y-4 mt-4">
          {[
            "Activate commercial awareness of land value among chiefdoms, enabling them to manage their own affairs",
            "Build partnerships between traditional authorities and financial institutions, government, and the private sector",
            "Document and teach the governance protocols, conflict resolution systems, and economic management practices of African kingships",
            "Advocate for policy that recognises traditional leaders as active development partners, not honorary figures",
            "Integrate modern technology with traditional economies to bridge heritage and innovation",
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 py-4 border-b border-gold/10 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <p className="text-earth-600 leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionDivider />

        <SectionLabel>Preservation</SectionLabel>
        <SectionTitle>Cultural Heritage</SectionTitle>

        <Reveal>
          <p className="text-earth-600 leading-relaxed max-w-3xl mb-8">
            Through research, documentation, and community education, we work to
            preserve the protocols, languages, rituals, and governance systems that
            define African kingships. This is not nostalgia. It is the foundation on
            which self-governing communities are built.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-gold/5 border-l-4 border-gold p-6 md:p-8">
            <p className="font-serif text-lg text-earth-800 italic leading-relaxed">
              &ldquo;...not all solutions will come from politicians or experts.
              Traditional leadership is the pillar of the African continent and
              mustn&rsquo;t be sidelined.&rdquo;
            </p>
            <p className="text-sm text-earth-500 mt-3">
              — King Zwelithini kaBhekuzulu
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Content opportunity note */}
      <section className="bg-stone py-12">
        <div className="max-w-5xl mx-auto section-padding text-center">
          <p className="text-earth-500 italic text-sm">
            This section will grow to include profiles of specific kingships,
            historical articles, photo essays, and video interviews with
            traditional leaders as content becomes available.
          </p>
        </div>
      </section>
    </>
  );
}
