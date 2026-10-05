import { profile } from "@/lib/data";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-surface-border"
      style={{ background: "var(--color-hero-gradient)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-elevated/80 px-3 py-1 text-xs font-medium text-ink-muted shadow-card backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-muted shadow-glow" />
          {profile.location}
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted sm:text-xl">
          {profile.titles.slice(0, 3).join(" · ")}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted text-balance">
          {profile.bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.focus.map((item) => (
            <span
              key={item}
              className="rounded-md bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-ink-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 dark:text-[#04120c]"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          <a
            href="/abhilash_python.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-ink transition hover:border-emerald-muted"
          >
            <Download className="h-4 w-4 text-emerald-muted" />
            Resume PDF
          </a>
        </div>
        <a
          href="#about"
          className="mt-14 inline-flex items-center gap-2 text-sm text-ink-faint transition hover:text-[var(--color-accent)]"
        >
          Explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
