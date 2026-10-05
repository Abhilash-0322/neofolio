import { achievements, certifications, education } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-surface-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="About" subtitle="Education & recognition" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-surface-border bg-surface-elevated p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold text-ink">
              Education
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((edu) => (
                <li key={edu.degree} className="border-l-2 border-emerald-muted/50 pl-4">
                  <p className="font-medium text-ink">{edu.degree}</p>
                  <p className="text-sm text-ink-muted">{edu.school}</p>
                  <p className="text-xs text-ink-faint">
                    {edu.period}
                    {edu.detail ? ` · ${edu.detail}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-surface-border bg-surface-elevated p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">
                Certifications
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-muted">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-elevated p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">
                Achievements
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-emerald-muted">◆</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-ink-faint">
          Open to cloud, AI systems, and fintech-oriented engineering roles — and
          freelance work on APIs, deployments, and production AI.
        </p>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-1 text-ink-muted">{subtitle}</p>
    </div>
  );
}

export { SectionHeading };
