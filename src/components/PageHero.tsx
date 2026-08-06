import { Reveal } from "./Reveal";

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative bg-earth-900 grain-overlay overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold" />
      </div>

      <div className="relative max-w-5xl mx-auto section-padding pt-36 pb-20 md:pt-44 md:pb-28">
        <Reveal>
          <p className="label-text mb-4">{label}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-earth-400 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 h-[2px] w-24 bg-gold" />
        </Reveal>
      </div>
    </section>
  );
}
