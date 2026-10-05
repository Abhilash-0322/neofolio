import { Section } from "@/components/Section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" index="II" label="Experience" variant="slate">
      <ol className="space-y-0 border border-slate-rule bg-white">
        {experience.map((job, i) => (
          <li
            key={`${job.company}-${job.role}`}
            className="grid grid-cols-12 gap-4 border-b border-slate-rule p-6 last:border-b-0 md:p-8"
          >
            <div className="col-span-12 md:col-span-3">
              <p className="font-serif text-sm text-trust-gold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {job.period}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h3 className="font-serif text-lg font-medium text-slate-ink">
                {job.role}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {job.company}
                {job.meta ? ` · ${job.meta}` : ""}
              </p>
              {job.summary && (
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {job.summary}
                </p>
              )}
              {job.bullets && (
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-trust-gold" aria-hidden>§</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {job.skills && (
                <p className="mt-4 border-t border-slate-rule pt-4 text-xs text-slate-500">
                  {job.skills.join(" · ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
