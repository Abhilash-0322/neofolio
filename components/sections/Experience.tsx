import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ul className="space-y-6">
        {experience.map((job, index) => (
          <li
            key={`${job.company}-${job.role}`}
            className={
              index % 2 === 0 ? "sketch-card" : "sketch-card-alt"
            }
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3">
                <p className="font-sketch text-lg text-sketch-coral">{job.period}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="sketch-title text-2xl md:text-3xl">{job.role}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {job.company}
                  {job.meta ? ` · ${job.meta}` : ""}
                </p>
                {job.summary && (
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {job.summary}
                  </p>
                )}
                {job.bullets && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="font-sketch text-sketch-sage" aria-hidden="true">
                          ✓
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {job.skills && (
                  <p className="mt-4 font-sketch text-base text-ink-faint">
                    {job.skills.join(" · ")}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
