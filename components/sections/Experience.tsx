import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="divide-y divide-line overflow-hidden rounded-sm border border-line bg-surface/60 shadow-fjord backdrop-blur-sm">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 p-6 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-lg font-medium tracking-tight text-primary">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-primary/90">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-primary/90">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs text-accent-soft">
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
