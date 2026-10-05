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
      className={`border-t border-border py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <div className="luxe-rule mb-6 max-w-[8rem]" />
          <p className="font-display text-sm font-medium uppercase tracking-[0.35em] text-gold">
            {label}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
