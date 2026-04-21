import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Building2, Landmark, Sprout, Store, Briefcase, Mountain, Database, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Research, advocacy, education, and community development programmes addressing systemic inequality — guided by the Three Founding Pillars.",
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
  {
    icon: Database,
    label: "Programme 7",
    title: "Ubuntu Data Bank & Digital Infrastructure",
    paragraphs: [
      "We facilitate access to digital infrastructure, data intelligence, and financial services for underserved communities. The Ubuntu Data Bank (UDB) serves as the central operational intelligence system — supporting evidence-based programme design, CSI tracking, beneficiary data management, and continuous improvement cycles.",
      "Through digital platforms, we bridge the gap between traditional governance structures and modern data-driven decision making, ensuring communities benefit from technology without compromising their sovereignty.",
    ],
  },
  {
    icon: Heart,
    label: "Programme 8",
    title: "National GBV Centre Rollout",
    paragraphs: [
      "South Africa has one of the highest rates of Gender-Based Violence globally. Rural communities and traditional councils remain underserved — traditional courts, as primary Ubuntu governance structures, lack accredited training and referral pathways.",
      "In partnership with DBT Studies, accredited GBV curriculum specialists, SABC 1, and the Departments of Social Development and Women, Youth, and Persons with Disabilities, Isintu Samakhosi is establishing GBV Centres in traditional councils across the country.",
      "Each centre is supported by a community-based User Group (UG) — the eyes, ears, and accountability mechanism of the Institute on the ground. No centre opens until all eight pre-deployment control documents are filed, including a community baseline assessment, Traditional Council Resolution, referral pathway map, and risk and safety plan.",
      "The programme includes accredited 5-course training for traditional leaders, a Social Responsibility Angel (SR Angel) donor programme with Section 18A tax deduction benefits, and a phased national rollout targeting 25 traditional councils in the first year.",
    ],
  },
];

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Building Infrastructure, Not Dependency"
        subtitle="Research, advocacy, education, and community development programmes addressing systemic inequality in township, village, and rural economies — guided by the Three Founding Pillars of Consciousness, Heritage, and Stewardship."
      />

      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed max-w-3xl mb-4">
            We do not do charity. We build infrastructure — economic, institutional,
            and cultural — that allows communities to generate their own wealth and
            govern their own affairs.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-earth-600 leading-relaxed max-w-3xl mb-4">
            All programmes are evaluated through the lens of our Three Founding
            Pillars: <strong className="text-earth-900">Consciousness (Ukwazi)</strong> — does
            it cultivate critical awareness and self-determination? <strong className="text-earth-900">Heritage
            (Isintu)</strong> — does it preserve and revitalise indigenous knowledge
            and Amakhosi governance? <strong className="text-earth-900">Stewardship
            (Ubuntu)</strong> — does it manage resources with intergenerational
            accountability?
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

        <SectionDivider />

        {/* Standards alignment */}
        <Reveal>
          <div className="bg-stone/50 border border-gold/10 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-4">
              <Shield size={24} className="text-gold shrink-0 mt-1" />
              <h3 className="font-serif text-xl font-bold text-earth-900">
                Quality & Accountability Standards
              </h3>
            </div>
            <p className="text-earth-600 leading-relaxed mb-4">
              All our programmes are delivered in alignment with the Core
              Humanitarian Standard on Quality and Accountability (CHS Alliance),
              ISO 9001:2015 Quality Management, and King IV Corporate Governance
              principles. These frameworks are actively applied as operational
              disciplines, with formal accreditation processes in progress.
            </p>
            <p className="text-earth-600 leading-relaxed">
              We additionally uphold the UN Declaration on the Rights of Indigenous
              Peoples (UNDRIP), the Convention on the Rights of the Child (UNCRC),
              the Convention on the Elimination of All Forms of Discrimination
              Against Women (CEDAW), and maintain a zero-tolerance Protection from
              Sexual Exploitation and Abuse (PSEA) policy across all operations.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
