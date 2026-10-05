import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/sections/about";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-surface-border bg-surface-elevated/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Experience" subtitle="Shipped systems & teams" />
        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <article
              key={`${job.role}-${job.org}`}
              className="rounded-2xl border border-surface-border bg-surface p-6 shadow-card transition hover:border-emerald-muted/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
                {job.org}
              </p>
              {"summary" in job && job.summary && (
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {job.summary}
                </p>
              )}
              {"skills" in job && job.skills && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-surface-border px-2 py-0.5 text-xs text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {"bullets" in job && job.bullets && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-ink-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
