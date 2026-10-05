import { ReactNode } from "react";
import { WaveformStrip } from "@/components/effects/WaveformStrip";

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
      className={`border-t border-studio-border/80 py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-grid px-6 md:px-10">
        <header className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-studio-muted">
            <span className="text-studio-accent/80">▸</span> {label}
          </p>
          <WaveformStrip className="hidden h-6 w-28 opacity-50 md:block" />
        </header>
        {children}
      </div>
    </section>
  );
}
