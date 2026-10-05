import { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "slate";
};

export function Section({
  id,
  index,
  label,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  const bg =
    variant === "slate"
      ? "bg-slate-wash section-rule"
      : "bg-slate-parchment section-rule";

  return (
    <section id={id} className={`${bg} py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-brief px-6 md:px-10">
        <header className="mb-10 flex flex-col gap-3 border-b border-slate-rule pb-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-serif text-sm text-trust-gold tabular-nums">
              §{index}
            </span>
            <h2 className="font-serif text-2xl font-medium tracking-tight text-slate-ink md:text-3xl">
              {label}
            </h2>
          </div>
          <p className="label-caps">Structured brief</p>
        </header>
        {children}
      </div>
    </section>
  );
}
