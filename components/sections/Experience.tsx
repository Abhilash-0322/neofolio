import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="space-y-4">
        {experience.map((job, index) => (
          <li
            key={`${job.company}-${job.role}`}
            className={`surface sticker-tilt grid grid-cols-12 gap-4 p-6 shadow-sticker md:p-8 ${
              index % 2 === 1 ? "md:translate-x-2" : ""
            }`}
          >
            <div className="col-span-12 md:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[rgb(var(--accent))]">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-display text-2xl tracking-wide text-[rgb(var(--text))]">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-[rgb(var(--text-muted))]">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 font-tag text-sm text-spray-orange dark:text-spray-lime">
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
