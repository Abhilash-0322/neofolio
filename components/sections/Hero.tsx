import { links, site } from "@/data/content";

const ctaLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Resume", href: site.resumePath, external: true },
  { label: "GitHub", href: links.github, external: true },
  { label: "LinkedIn", href: links.linkedin, external: true },
  { label: "X", href: links.x, external: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 pitch-grid opacity-60 dark:hidden" />
      <div className="pointer-events-none absolute inset-0 keynote-spotlight dark:opacity-100 opacity-0" />
      <div className="pointer-events-none absolute inset-0 keynote-curtain opacity-0 dark:opacity-100" />

      <div className="relative mx-auto max-w-deck px-6 py-16 md:px-10 md:py-28">
        <div className="rounded-2xl border border-line bg-surface p-8 shadow-slide dark:rounded-xl dark:border-line/80 dark:bg-surface/75 dark:shadow-stage md:p-12 dark:backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              <span className="text-accent">Slide 01</span>
              <span className="mx-2 text-line">·</span>
              Introduction
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
              {site.location}
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink md:text-6xl md:leading-[1.05]">
            {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-medium text-accent md:text-2xl">
            {site.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {site.bio}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {ctaLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-line bg-canvas/50 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent dark:bg-white/5 dark:hover:border-stage-gold dark:hover:text-stage-gold"
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
