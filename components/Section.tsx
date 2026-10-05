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
      className={`border-t-2 border-[rgb(var(--border))] py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 md:mb-14">
          <p className="label-stencil">{label}</p>
          <div className="mt-2 h-1 w-12 bg-[rgb(var(--accent))]" />
        </header>
        {children}
      </div>
    </section>
  );
}
