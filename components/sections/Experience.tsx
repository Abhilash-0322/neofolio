import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="card-vellum grid grid-cols-12 gap-4 p-6 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-wine-light">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-serif text-2xl font-medium text-parchment">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-ink">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-wine-glow">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs text-ink-faint">
                  {job.skills.join(" · ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
