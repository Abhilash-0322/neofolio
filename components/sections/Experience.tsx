import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="divide-y divide-studio-border rounded-lg border border-studio-border bg-studio-surface/30">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 p-6 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-studio-accent/90">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="text-lg font-medium tracking-tight text-studio-text">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-studio-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-studio-dim">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-studio-dim">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 font-mono text-[10px] text-studio-muted">
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
