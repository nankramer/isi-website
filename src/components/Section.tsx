import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`py-20 md:py-28 ${
        dark ? "bg-earth-900 grain-overlay text-earth-300" : "bg-white"
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto section-padding">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="label-text mb-4">{children}</p>
    </Reveal>
  );
}

export function SectionTitle({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal delay={0.05}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold leading-tight mb-6 ${
          dark ? "text-white" : "text-earth-900"
        }`}
      >
        {children}
      </h2>
    </Reveal>
  );
}

export function SectionDivider() {
  return <div className="my-16 h-[1px] bg-gold/20" />;
}

export function GoldBar() {
  return (
    <section className="bg-gold py-12 md:py-16">
      <div className="max-w-4xl mx-auto section-padding text-center" />
    </section>
  );
}
