import { experience } from "@/data/content";

export function ExperienceSection() {
  return (
    <section id="experience" className="mb-12 scroll-mt-20" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="section-label">Experience</h2>
      <ul className="mt-4 space-y-8">
        {experience.map((job) => (
          <li key={job.role + job.org} className="journal-card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
              <span className="font-mono text-xs text-muted">{job.meta}</span>
            </div>
            <p className="font-hand text-lg text-accent">{job.org}</p>
            {"summary" in job && job.summary ? (
              <p className="mt-2 text-muted">{job.summary}</p>
            ) : null}
            {"skills" in job && job.skills ? (
              <p className="mt-3 font-mono text-xs text-muted">
                {job.skills.join(" · ")}
              </p>
            ) : null}
            {"bullets" in job && job.bullets ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
