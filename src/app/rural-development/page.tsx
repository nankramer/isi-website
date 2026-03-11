import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Rural Development",
  description:
    "Building the economic infrastructure that allows rural communities to develop themselves — land value activation, co-ops, agriculture, mining, and the Rural Fund.",
};

export default function RuralDevelopmentPage() {
  return (
    <>
      <PageHero
        label="Rural Development"
        title="Resources Exist. Infrastructure Doesn't."
        subtitle="Rural South Africa is not poor because it lacks resources. It is poor because the mechanisms for unlocking those resources have never been built for the people who live there."
      />

      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mb-4">
            Isintu Samakhosi takes a fundamentally different approach. We do not
            deliver development to communities. We build the infrastructure that
            allows communities to develop themselves.
          </p>
        </Reveal>

        <SectionDivider />

        <SectionLabel>Strategy</SectionLabel>
        <SectionTitle>Our Approach</SectionTitle>

        <div className="space-y-6 mt-8">
          {[
            {
              title: "Land Value Activation",
              text: "Helping chiefdoms understand and commercialise the value of communal land — agriculture, tourism, mining, renewable energy — on their own terms.",
            },
            {
              title: "Business Chamber Co-ops",
              text: "Establishing co-operative business chambers in each province that serve as the commercial engine of traditional communities.",
            },
            {
              title: "Agricultural Modernisation",
              text: "Training farmers in modern techniques while respecting indigenous agricultural knowledge.",
            },
            {
              title: "Community Marketplaces",
              text: "Building physical and digital marketplaces where rural producers can sell directly, cutting out exploitative middlemen.",
            },
            {
              title: "Microloans & Savings",
              text: "Providing access to capital through community-owned financial structures.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex items-start gap-5 py-2">
                <div className="shrink-0 w-8 h-8 border border-gold/30 flex items-center justify-center text-gold text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-earth-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionDivider />

        <SectionLabel>Financial Infrastructure</SectionLabel>
        <SectionTitle>The Rural Fund</SectionTitle>

        <div className="space-y-6 max-w-3xl">
          <Reveal>
            <p className="text-earth-600 leading-relaxed">
              The Rural Fund is the financial backbone of our development work. In
              partnership with credible financial institutions, it channels
              industrial and project funding into rural communities through a
              co-operative ownership structure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-earth-600 leading-relaxed">
              The fund reduces reliance on government grants by turning communities
              into investors and co-owners. Inspired by Ubuntu, it fosters a culture
              of saving, investing, and collective wealth-building. Through the fund,
              Isintu Samakhosi will unlock venture capital for communities that have
              historically been excluded from formal financial systems.
            </p>
          </Reveal>
        </div>

        <SectionDivider />

        <SectionLabel>Natural Resources</SectionLabel>
        <SectionTitle>Mining & Mineral Resources</SectionTitle>

        <div className="space-y-6 max-w-3xl">
          <Reveal>
            <p className="text-earth-600 leading-relaxed">
              Many rural communities in South Africa sit on significant mineral
              deposits. The informal mining sector — often overlooked or criminalised
              by government — represents both an opportunity and a risk.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-earth-600 leading-relaxed">
              Isintu Samakhosi works to formalise small-scale subsistence mining,
              creating legitimate employment opportunities for individuals and
              families. By establishing community-based refinery centres, we ensure
              that mineral wealth benefits the people who live on the land — not just
              during extraction, but long after mines are depleted.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
