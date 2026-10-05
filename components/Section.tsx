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
      className={`border-t border-arena-border py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-arena px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <p className="arena-label">{label}</p>
          <div className="mt-3 h-px w-24 bg-rgb-sweep opacity-80" />
        </header>
        {children}
      </div>
    </section>
  );
}
