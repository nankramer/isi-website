import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle, SectionDivider } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Isintu Samakhosi Institute is a Non-Profit Company dedicated to restoring the dignity, intellectual sovereignty, and economic autonomy of African people.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="I Am Because We Are"
        subtitle="Isintu Samakhosi Institute exists to serve as a vehicle for systemic change, institutional memory, and intergenerational wisdom — rooted in the living philosophy of the Nguni peoples of Southern Africa."
      />

      {/* Introduction */}
      <Section>
        <Reveal>
          <p className="text-lg text-earth-600 leading-relaxed mb-6">
            Isintu Samakhosi Institute is a Non-Profit Company (NPC) incorporated
            under Section 21 of the Companies Act 71 of 2008. We are founded on the
            vision of restoring the dignity, intellectual sovereignty, and economic
            autonomy of the African people.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-earth-600 leading-relaxed mb-6">
            Our name tells our story. The Institute draws its foundational identity
            from the conceptual lineage of <strong className="text-earth-900">NTU</strong> —
            the Bantu cosmic life-force — through which <strong className="text-earth-900">Abantu</strong> (The
            People) derive their humanity, <strong className="text-earth-900">Isintu</strong> (Our
            Custom and Way of Life) gives form to that humanity,
            and <strong className="text-earth-900">Ubuntu</strong> (&ldquo;I am because we
            are&rdquo;) expresses its relational ethic. These three pillars are
            inseparable and infuse every institutional decision, programme, and
            governance act.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg text-earth-600 leading-relaxed">
            All decisions, strategies, and actions of the Institute are guided by the
            ethos of collective care, mutual respect, and the pursuit of the common
            good. We recognise that human flourishing is communal, that leadership is
            stewardship, and that resources are held in trust for present and future
            generations.
          </p>
        </Reveal>

        <SectionDivider />

        {/* The Ubuntu Triad */}
        <SectionLabel>Our Philosophical Foundation</SectionLabel>
        <SectionTitle>The Ubuntu Triad</SectionTitle>

        {[
          {
            title: "Abantu — The People",
            text: "Our first loyalty is to the communities we serve — the rural poor, indigenous peoples, women and girls, youth, and those living at the margins of formal systems. Every decision must begin and end with the question: does this serve the people?",
          },
          {
            title: "Ubuntu — I Am Because We Are",
            text: "Ubuntu is not sentiment — it is a governance system. We operate on the principle that no individual, organisation, or institution thrives in isolation. Relationships built on dignity, reciprocity, and mutual accountability are the infrastructure of all our work.",
          },
          {
            title: "Isintu — Our Custom and Way of Life",
            text: "We honour and protect indigenous knowledge, customary law, and the governance sovereignty of Amakhosi. The legitimacy of our work is inseparable from the legitimacy of traditional leadership and indigenous ways of knowing.",
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

        {/* Three Founding Pillars */}
        <SectionLabel>Institutional Framework</SectionLabel>
        <SectionTitle>The Three Founding Pillars</SectionTitle>
        <Reveal>
          <p className="text-earth-600 leading-relaxed mb-8 max-w-3xl">
            The Institute is guided by three founding pillars that constitute its
            internal operating philosophy. These pillars are the intellectual property
            of Sintu Samakhosi Institute NPC and inform all programmes and initiatives:
          </p>
        </Reveal>

        {[
          {
            title: "Consciousness — Ukwazi",
            text: "The cultivation of critical awareness, decolonial thought, and African epistemology — empowering communities with knowledge, voice, and self-determination. All programmes must cultivate critical awareness of historical, socio-economic, and systemic realities.",
          },
          {
            title: "Heritage — Isintu",
            text: "The active preservation, revitalisation, and integration of African indigenous knowledge systems, Nguni cultural practice, and Amakhosi living heritage as the foundation of all programmatic work. The Amakhosi chieftaincy structure is affirmed as a sovereign living heritage institution central to all programme delivery.",
          },
          {
            title: "Stewardship — Ubuntu",
            text: "The exercise of fiduciary, environmental, and intergenerational responsibility over all resources entrusted to the Institute. All resources — financial, human, natural, cultural, and digital — are managed with long-term sustainability, transparency, and intergenerational accountability.",
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
                A continent where the dignity, intellectual sovereignty, and economic
                autonomy of African people are restored — where traditional leadership
                structures are recognised, resourced, and empowered to drive
                sustainable development in their own communities, on their own terms.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionLabel>Our Mission</SectionLabel>
              <p className="text-lg text-earth-600 leading-relaxed">
                To conduct research, advocacy, and education focused on African
                heritage, indigenous governance, and economic emancipation. To develop
                leadership pipelines grounded in ethical governance, Ubuntu economics,
                and the Three Founding Pillars. To engage in community development
                addressing systemic inequality in township, village, and rural
                economies.
              </p>
            </div>
          </Reveal>
        </div>

        <SectionDivider />

        {/* Main Objectives */}
        <SectionLabel>Constitutional Objectives</SectionLabel>
        <SectionTitle>What We Are Incorporated To Do</SectionTitle>
        <div className="space-y-4 mt-4">
          {[
            "Conduct research, advocacy, and education focused on African heritage, indigenous governance, and economic emancipation",
            "Preserve and promote indigenous knowledge systems, Nguni cultural practices, and the living heritage of the Amakhosi",
            "Develop leadership pipelines grounded in ethical governance, Ubuntu economics, and the Three Founding Pillars",
            "Engage in community development programmes addressing systemic inequality in township, village, and rural economic segments",
            "Act as a think-tank and policy platform aligned with Ubuntu philosophy, the NDP 2030, and Pan-African development frameworks",
            "Facilitate access to digital infrastructure, data intelligence, and financial services for underserved communities",
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

        {/* Governance */}
        <SectionLabel>Governance</SectionLabel>
        <SectionTitle>How We Are Governed</SectionTitle>
        <Reveal>
          <p className="text-earth-600 leading-relaxed mb-6 max-w-3xl">
            The Institute is governed by a Board of Directors comprising individuals
            of high moral standing, possessing expertise in law, finance, heritage
            studies, community development, or governance. The composition reflects
            the diversity of the communities we serve and includes representation
            from the Amakhosi network.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-earth-600 leading-relaxed mb-6 max-w-3xl">
            The Institute is non-partisan. While we engage in advocacy on issues
            aligned with our objectives, we do not align with any political party or
            use our resources to support any political party or candidate.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-earth-600 leading-relaxed mb-8 max-w-3xl">
            We actively apply the frameworks of the Core Humanitarian Standard on
            Quality and Accountability (CHS Alliance), ISO 9001:2015 Quality
            Management, and the King IV Report on Corporate Governance — as living
            operational frameworks that uplift our standards to the highest
            international levels. Formal accreditation processes are in progress.
          </p>
        </Reveal>

        <SectionDivider />

        {/* Core Values */}
        <SectionLabel>Core Ethical Standards</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-4">
          {[
            { title: "Integrity", desc: "Acting with honesty, transparency, and consistency — whether observed or not" },
            { title: "Dignity", desc: "Treating every person with unconditional respect, regardless of gender, age, ethnicity, religion, disability, or status" },
            { title: "Accountability", desc: "Taking responsibility for our actions, decisions, and their consequences for communities and stakeholders" },
            { title: "Impartiality", desc: "Providing assistance based solely on need, without discrimination or political calculation" },
            { title: "Confidentiality", desc: "Protecting personal and sensitive information entrusted to us by communities, partners, and beneficiaries" },
            { title: "Stewardship", desc: "Managing all resources with care, efficiency, intergenerational responsibility, and transparency" },
          ].map((value, i) => (
            <Reveal key={value.title} delay={i * 0.05}>
              <div className="py-3">
                <h4 className="font-serif text-lg font-bold text-earth-900 mb-1">
                  {value.title}
                </h4>
                <p className="text-sm text-earth-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionDivider />

        {/* Leadership */}
        <SectionLabel>Leadership</SectionLabel>
        <SectionTitle>Andile Sizwe Phahla — Founding President & Director</SectionTitle>
        <Reveal>
          <div className="bg-stone/50 border border-gold/10 p-8 md:p-10">
            <div className="space-y-5">
              <p className="text-earth-600 leading-relaxed">
                Andile Sizwe Phahla is a businessman, philanthropist, and
                institution-builder with over 20 years of experience advancing
                dignity, opportunity, and sustainable development across underserved
                communities in KwaZulu-Natal, Southern Africa, and beyond.
              </p>
              <p className="text-earth-600 leading-relaxed">
                His leadership trajectory began in youth league structures, rising to
                Regional Secretary in eThekwini, Councillor in the eThekwini
                Municipality, Secretary of the Minority Party Block, Provincial
                Secretary, NEC member, and Special Advisor to a trade union
                president — grounding his governance expertise in grassroots
                mobilisation, coalition coordination, and national strategy.
              </p>
              <p className="text-earth-600 leading-relaxed">
                At the bilateral level, he served as Treasurer of the Afri
                Development Fund, launched in Botswana as a South Africa–Botswana
                partnership addressing matters of key economic and development
                importance — anchoring his work in continental advancement frameworks
                and cross-border financial architecture.
              </p>
              <p className="text-earth-600 leading-relaxed">
                His philanthropic work through the Andile Phahla Foundation delivered
                measurable impact: adopting Happy Hours School (special needs,
                Hammarsdale) and launching Operation Vusa Ithemba, restoring dignity
                to underprivileged learners through annual school shoe drives.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Today, Phahla serves as Founding President of Isintu Samakhosi
                Institute, where he promotes the integration of traditional
                leadership structures, modern enterprise, and technological
                innovation as catalysts for village-based economies and sustainable
                development. A spiritual leader and practitioner of indigenous
                knowledge systems, he advocates for the practical application of
                Ubuntu principles in leadership, economic empowerment, and social
                development.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gold/10">
              <p className="text-earth-500 text-sm italic">
                &ldquo;This is not a career — it is a calling.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12" />

        {/* Deputy President */}
        <SectionTitle>Lindiwe Cathrine Dzimbiri — Deputy President & International Ambassador</SectionTitle>
        <Reveal>
          <div className="bg-stone/50 border border-gold/10 p-8 md:p-10">
            <div className="space-y-5">
              <p className="text-earth-600 leading-relaxed">
                Lindiwe Cathrine Dzimbiri is a royal-born leader whose life&apos;s work
                embodies the Ubuntu principle that &ldquo;I am because we are&rdquo;
                — bridging traditional African governance with modern economic systems
                as Deputy President and International Ambassador of the Institute.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Born into the Dzimbiri Clan royal lineage, Lindiwe carries the active
                duty of Inkosikazi — not a passive title, but a living responsibility
                to preserve cultural identity, guide ethical leadership, and serve as
                a bridge between heritage and modern institutions. Within Nguni
                tradition, women of royal standing are custodians of lineage, advisors
                in governance, and anchors of social stability. She embodies
                umthombo wesizwe — the source of the nation.
              </p>
              <p className="text-earth-600 leading-relaxed">
                With over two decades as a Paramedic, Firefighter, and Company
                Commander, Lindiwe forged her leadership in crisis — building
                uncommon capabilities in command under pressure, community-centred
                crisis management, and deep ground-level understanding of the
                realities the Institute serves.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Her entrepreneurial impact is substantial: founding a non-profit
                focused on youth and women empowerment, supporting over 500 business
                developments through township and rural economic programmes, and
                facilitating market access and compliance pathways for over 700
                entrepreneurs — connecting grassroots businesses to formal supply
                chains.
              </p>
              <p className="text-earth-600 leading-relaxed">
                Lindiwe leads the Institute&apos;s Indigenous Leadership alignment,
                engaging directly with Amakhosi, Traditional Councils, and Royal
                Houses. As International Ambassador, she represents the Institute
                across global, African, and traditional platforms — positioning Ubuntu
                as a scalable leadership model for ethical governance worldwide and
                building cross-border partnerships that channel international
                investment toward community-owned development.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gold/10">
              <p className="text-earth-500 text-sm italic">
                &ldquo;She does not lead from title — she leads from duty.&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <SectionDivider />

        {/* Registration Details */}
        <SectionLabel>Registration</SectionLabel>
        <SectionTitle>Institutional Credentials</SectionTitle>
        <Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mt-4">
            {[
              { label: "Legal Name", value: "Sintu Samakhosi Institute NPC" },
              { label: "Trading Name", value: "Isintu Samakhosi Institute" },
              { label: "Registration Number", value: "2025/510829/08" },
              { label: "NPO Number", value: "285-310" },
              { label: "PBO Number", value: "930073548" },
              { label: "Tax Number", value: "9111068293" },
              { label: "Enterprise Type", value: "Non-Profit Company (Section 21)" },
              { label: "Date of Registration", value: "26 June 2025" },
              { label: "Financial Year End", value: "28/29 February" },
              { label: "Province", value: "KwaZulu-Natal, South Africa" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between py-2 border-b border-gold/10">
                <span className="text-sm text-earth-500">{item.label}</span>
                <span className="text-sm font-medium text-earth-900">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
