import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="divide-y divide-divider border border-border">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 bg-surface/50 p-6 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="text-lg font-medium tracking-tight text-foreground">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs text-accent">
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
