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
      ? "bg-noir-wash section-rule"
      : "bg-noir-bg section-rule";

  return (
    <section id={id} className={`${bg} py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-brief px-6 md:px-10">
        <header className="mb-10 flex flex-col gap-3 border-b border-noir-rule pb-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm text-noir-accent tabular-nums">
              Act {index}
            </span>
            <h2 className="font-serif text-2xl font-medium tracking-tight text-noir-ink md:text-3xl">
              {label}
            </h2>
          </div>
          <p className="label-caps">Scene notes</p>
        </header>
        {children}
      </div>
    </section>
  );
}
