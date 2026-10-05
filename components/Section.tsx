import { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  slide: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  slide,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`border-t border-line py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-deck px-6 md:px-10">
        <header className="mb-10 flex items-end justify-between gap-4 md:mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              {label}
            </p>
          </div>
          <p
            className="hidden font-display text-sm font-semibold text-muted/80 dark:text-stage-gold/80 sm:block"
            aria-hidden
          >
            {slide}
          </p>
        </header>
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-slide dark:rounded-xl dark:border-line dark:bg-surface/80 dark:shadow-stage md:p-10 dark:backdrop-blur-sm">
          {children}
        </div>
      </div>
    </section>
  );
}
