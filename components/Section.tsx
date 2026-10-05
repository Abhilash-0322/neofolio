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
      className={`border-t border-rule py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <header className="mb-10 md:mb-14 grid grid-cols-12 gap-4">
          <p className="col-span-12 md:col-span-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
            {label}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
