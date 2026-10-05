import { codingProfiles, skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/sections/about";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-surface-border bg-surface-elevated/40 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Skills" subtitle="Stack from resume & shipped work" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-surface-border bg-surface p-5 shadow-card"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-muted">
                {group.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-ink">Coding profiles</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {codingProfiles.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-surface-border px-4 py-2 text-sm text-ink-muted transition hover:border-emerald-muted hover:text-[var(--color-accent)]"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
