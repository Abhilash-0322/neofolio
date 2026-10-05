import { ReadmeSection } from "@/components/ReadmeSection";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <ReadmeSection id="experience" title="Experience">
      <ul className="space-y-6">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="rounded-md border border-readme-border p-4 md:p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-base text-readme-heading">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-readme-muted">
                {job.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-readme-link">
              {job.company}
              {job.meta ? (
                <span className="text-readme-muted"> · {job.meta}</span>
              ) : null}
            </p>
            {job.summary && (
              <p className="mt-3 text-sm leading-relaxed text-readme-text">
                {job.summary}
              </p>
            )}
            {job.bullets && (
              <ul className="mt-3 space-y-1.5 font-mono text-sm text-readme-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="text-readme-accent">+</span> {bullet}
                  </li>
                ))}
              </ul>
            )}
            {job.skills && (
              <p className="mt-3 font-mono text-xs text-readme-muted">
                {job.skills.join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </ReadmeSection>
  );
}
