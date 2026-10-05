import { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`sketch-section-rule ${className}`}>
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <p className="sketch-label">{label}</p>
          <div className="mt-3 h-1 w-24 rounded-full bg-sketch-coral/70" />
        </header>
        {children}
      </div>
    </section>
  );
}
