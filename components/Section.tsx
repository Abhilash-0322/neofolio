import { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  sheetNo: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  sheetNo,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-arch-line/30 py-14 md:py-20 ${className}`}
    >
      <div className="mx-auto px-4 md:px-8">
        <header className="mb-10 flex flex-col gap-4 border-b border-dashed border-arch-line/25 pb-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="dim-line">Detail — {sheetNo}</p>
            <h2 className="mt-2 font-mono text-xl font-medium uppercase tracking-[0.12em] text-arch-chalk md:text-2xl">
              {label}
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-arch-line/40 to-transparent md:block md:mx-8" />
          <p className="font-mono text-[10px] text-arch-line/60">
            REF: AM-{sheetNo}
          </p>
        </header>
        {children}
      </div>
    </section>
  );
}
