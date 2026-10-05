import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="deco-frame deco-frame-inner grid grid-cols-12 gap-4"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-2xl text-cream">{job.role}</h3>
              <p className="mt-1 text-sm text-gold-light">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-cream-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="deco-diamond mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs uppercase tracking-wider text-gold-dim">
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
