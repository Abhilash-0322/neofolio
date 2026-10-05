import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience" slide="Slide 03">
      <ul className="divide-y divide-line">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 py-6 first:pt-0 last:pb-0 md:py-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-ink/85">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/85">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent dark:before:bg-stage-gold"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs text-muted">{job.skills.join(" · ")}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
