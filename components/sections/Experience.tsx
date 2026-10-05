import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="divide-y divide-sol-border border border-sol-border bg-sol-bg-alt/30">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 p-6 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-sol-orange">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="text-lg font-medium tracking-tight text-sol-emphasis">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-sol-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-sol-fg">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-sol-fg">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 font-mono text-xs text-sol-cyan">
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
