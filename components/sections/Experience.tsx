import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience" sheetNo="02">
      <ul className="divide-y divide-arch-line/25 border border-arch-line/35">
        {experience.map((job, index) => (
          <li
            key={`${job.company}-${job.role}`}
            className="arch-surface grid grid-cols-12 gap-4 p-6 md:p-8"
          >
            <div className="relative col-span-12 md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-arch-accent">
                Fig. {index + 1}
              </p>
              <p className="mt-2 font-mono text-xs text-arch-line/80">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-mono text-lg font-medium text-arch-chalk">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-arch-ink">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-arch-ink/95">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 border-l border-dashed border-arch-line/40 pl-4 text-sm text-arch-ink">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 font-mono text-[10px] text-arch-line/70">
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
