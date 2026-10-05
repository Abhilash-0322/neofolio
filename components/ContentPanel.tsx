import { ReactNode } from "react";

type ContentPanelProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function ContentPanel({
  id,
  title,
  subtitle,
  children,
  className = "",
}: ContentPanelProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-4 lg:scroll-mt-8 ${className}`}
    >
      <article
        className="rounded-2xl border border-panel-border bg-panel-card p-6 shadow-sm shadow-panel-border/40 sm:p-8 md:p-10"
      >
        <header className="mb-8 border-b border-panel-border pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-panel-muted">
            {subtitle ?? "Section"}
          </p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-panel-ink md:text-4xl">
            {title}
          </h2>
        </header>
        {children}
      </article>
    </section>
  );
}
