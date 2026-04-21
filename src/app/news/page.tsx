import { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionLabel, SectionTitle } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Research",
  description:
    "Thought leadership, research, and updates from Isintu Samakhosi Institute.",
};

// Placeholder articles — these will be replaced with a CMS or markdown system
const articles = [
  {
    category: "Thought Leadership",
    title: "Why African Kingships Matter in 2026",
    excerpt:
      "A foundational piece laying out the institute\u2019s thesis on the role of traditional governance in modern African development.",
    date: "Coming Soon",
    slug: "#",
  },
  {
    category: "Policy",
    title: "The Co-op Model: How Ubuntu Can Power Rural Economies",
    excerpt:
      "Exploring the business chamber and rural fund approach — a financial architecture designed for community ownership.",
    date: "Coming Soon",
    slug: "#",
  },
  {
    category: "Research",
    title: "From Subsistence to Sovereignty: Rethinking Informal Mining",
    excerpt:
      "The case for community-based refinery centres and the formal integration of small-scale miners.",
    date: "Coming Soon",
    slug: "#",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News & Research"
        title="Ideas That Build Nations"
        subtitle="Thought leadership, research, policy briefs, and updates from Isintu Samakhosi Institute."
      />

      <Section>
        <SectionLabel>Latest</SectionLabel>
        <SectionTitle>Articles & Updates</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {articles.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.1}>
              <article className="group border border-gold/10 hover:border-gold/30 transition-all duration-300 bg-white h-full flex flex-col">
                {/* Placeholder image area */}
                <div className="aspect-[16/9] bg-earth-900/5 flex items-center justify-center border-b border-gold/10">
                  <span className="text-xs text-earth-400 italic">
                    Image placeholder
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="label-text !text-[10px] mb-2">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-earth-900 mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-earth-500 leading-relaxed flex-1">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gold/10 flex justify-between items-center">
                    <span className="text-xs text-earth-400">{article.date}</span>
                    <span className="text-gold text-xs font-semibold uppercase tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 bg-stone/50 border border-gold/10 p-8 md:p-10 text-center">
            <p className="font-serif text-xl text-earth-800 mb-3">
              This section is just getting started.
            </p>
            <p className="text-earth-500 text-sm max-w-xl mx-auto">
              As the institute publishes research, policy briefs, community stories,
              and media coverage, this page will grow into a comprehensive knowledge
              hub for African traditional governance and rural development.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
