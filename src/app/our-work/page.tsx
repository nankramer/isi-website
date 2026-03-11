import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Building2, Landmark, Sprout, Store, Briefcase, Mountain } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Six interconnected programmes addressing rural underdevelopment while reinforcing traditional leadership.",
};

const programmes = [
  {
    icon: Building2,
    label: "Programme 1",
    title: "Business Chambers",
    paragraphs: [
      "We are establishing business chambers across all nine provinces of South Africa, in direct partnership with chiefdoms and kingdoms. These chambers serve as the commercial arm of traditional leadership — creating formal structures through which communities can participate in the economy.",
      "Each chamber operates on a co-operative model, fostering an investment and savings culture inspired by Ubuntu. Communities become co-owners, not dependants.",
    ],
  },
  {
    icon: Landmark,
    label: "Programme 2",
    title: "The Rural Fund",
    paragraphs: [
      "In partnership with credible financial institutions, Isintu Samakhosi is establishing a rural fund to channel project and industrial funding into rural development. The fund will unlock investment by enabling communities to save, invest, and access venture capital through a structured platform.",
      "This is not a grant programme. It is a financial vehicle designed to make communities self-sustaining — reducing reliance on government support by turning communities into co-owners of their economic future.",
    ],
  },
  {
    icon: Sprout,
    label: "Programme 3",
    title: "Rural Economic Development",
    paragraphs: [
      "We promote economic growth in rural areas by supporting sustainable agriculture, enhancing local infrastructure, and fostering small business development. This includes training farmers on modern techniques, assisting in building community marketplaces, and providing microloans to rural entrepreneurs.",
    ],
  },
  {
    icon: Store,
    label: "Programme 4",
    title: "Township Economy",
    paragraphs: [
      "We support the creation of township economies — including spaza shops, local service providers, and community-owned retail. These small businesses are vital access points for goods and services, generating employment and stimulating economic growth from within.",
    ],
  },
  {
    icon: Briefcase,
    label: "Programme 5",
    title: "SMME & Co-op Incubation",
    paragraphs: [
      "We incubate small, medium, and micro enterprises and co-operatives within rural communities. From business registration to market access, we provide the support structures that allow community-based businesses to formalise, grow, and compete.",
    ],
  },
  {
    icon: Mountain,
    label: "Programme 6",
    title: "Informal Mining Formalisation",
    paragraphs: [
      "Rural communities sit on mineral wealth that is largely exploited by outsiders or mined informally without economic benefit to the community. Isintu Samakhosi champions the formal integration of small-scale subsistence miners into the economy.",
      "By establishing community-based refinery centres, we ensure that even after mines have exhausted their commodities, communities can still participate fully in the economy and benefit directly from the value created on their land.",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Building Infrastructure, Not Dependency"
        subtitle="Six interconnected programme areas — each designed to address a specific dimension of rural underdevelopment while reinforcing the authority and capacity of traditional leadership structures."
      />

      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mb-4">
            We do not do charity. We build infrastructure — economic, institutional,
            and cultural — that allows communities to generate their own wealth and
            govern their own affairs.
          </p>
        </Reveal>

        {programmes.map((prog) => (
          <div key={prog.title}>
            <SectionDivider />
            <Reveal delay={0.05}>
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <prog.icon size={22} className="text-gold" />
                </div>
                <div className="flex-1">
                  <p className="label-text mb-2">{prog.label}</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth-900 mb-4">
                    {prog.title}
                  </h3>
                  {prog.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-earth-600 leading-relaxed mb-4 last:mb-0 max-w-3xl"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </Section>
    </>
  );
}
