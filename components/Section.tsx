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
      className={`border-t border-sol-border py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 grid grid-cols-12 gap-4 md:mb-14">
          <p className="col-span-12 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-cyan md:col-span-3">
            {label}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
