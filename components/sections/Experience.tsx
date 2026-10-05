import { ContentPanel } from "@/components/ContentPanel";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <ContentPanel id="experience" title="Experience" subtitle="Work">
      <ul className="divide-y divide-panel-border">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-12"
          >
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-panel-muted">
                {job.period}
              </p>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-lg font-semibold text-panel-ink">{job.role}</h3>
              <p className="mt-1 text-sm text-panel-muted">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-panel-muted">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-panel-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 text-xs text-panel-muted">
                  {job.skills.join(" · ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </ContentPanel>
  );
}
