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
      className={`border-t border-line py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 grid grid-cols-12 gap-4 md:mb-14">
          <p className="col-span-12 text-[11px] font-medium uppercase tracking-[0.2em] text-muted md:col-span-3">
            {label}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
