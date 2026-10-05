import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative border-t border-lab-border px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="02"
          title="Field experience"
          subtitle="Internships and leadership roles building AI systems in production contexts."
        />

        <ol className="relative space-y-10 border-l border-lab-border pl-8">
          {experience.map((item) => (
            <li key={`${item.role}-${item.org}`} className="relative">
              <span
                className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-lab-accent bg-lab-surface dark:shadow-[0_0_12px_var(--lab-node)]"
                aria-hidden
              />
              <article className="card-lab p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium text-lab-ink">
                    {item.role}
                  </h3>
                  <time className="font-mono text-[10px] uppercase tracking-wider text-lab-accent">
                    {item.period}
                  </time>
                </div>
                <p className="mt-1 text-sm text-lab-synapse">
                  {item.org}
                  {item.type ? ` · ${item.type}` : ""}
                </p>
                {item.summary && (
                  <p className="mt-4 text-sm leading-relaxed text-lab-sub">
                    {item.summary}
                  </p>
                )}
                {item.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-lab-sub">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {item.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-lab-border bg-lab-muted px-2 py-0.5 font-mono text-[10px] text-lab-sub"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
