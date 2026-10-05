import { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-forest-border/80 py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <div className="flex items-center gap-4">
            <span
              className="h-2 w-2 rotate-45 border border-wine-light bg-wine-deep"
              aria-hidden
            />
            <p className="font-serif text-2xl font-medium tracking-wide text-parchment md:text-3xl">
              {label}
            </p>
            <div className="ornament-line hidden flex-1 md:block" />
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
