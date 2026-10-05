"use client";

import { ScrollReveal } from "./ScrollReveal";

type ChapterSectionProps = {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
};

export function ChapterSection({
  number,
  title,
  id,
  children,
}: ChapterSectionProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-24 border-t border-ink/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <ScrollReveal>
          <div className="mb-12 flex items-baseline gap-4 md:mb-16">
            <span
              className="font-display text-5xl font-light tabular-nums text-accent/80 md:text-6xl"
              aria-hidden
            >
              {number}
            </span>
            <h2 className="font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}
