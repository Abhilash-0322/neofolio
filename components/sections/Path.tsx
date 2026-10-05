import {
  certifications,
  education,
  experience,
} from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";

export function Path() {
  return (
    <ZenSection id="path" kana="道" title="The path">
      <div className="space-y-20">
        {experience.map((job) => (
          <article key={`${job.role}-${job.company}`} className="group">
            <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-serif text-lg text-sumi">{job.role}</h3>
              <p className="text-xs tracking-zen text-sumi-faint">
                {job.period}
              </p>
            </div>
            <p className="text-sm text-moss">
              {job.company}
              {job.meta ? ` · ${job.meta}` : ""}
            </p>
            {job.summary && (
              <p className="mt-4 text-sm leading-relaxed text-sumi-muted">
                {job.summary}
              </p>
            )}
            {job.skills && (
              <p className="mt-3 text-xs text-sumi-faint">
                {job.skills.join(" · ")}
              </p>
            )}
            {job.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-sumi-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-clay">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}

        <div className="border-t border-sumi/5 pt-16">
          <p className="mb-8 text-xs tracking-zen text-sumi-faint">Learning</p>
          {education.map((edu) => (
            <div key={edu.degree} className="mb-8 last:mb-0">
              <h3 className="font-serif text-base text-sumi">{edu.degree}</h3>
              <p className="mt-1 text-sm text-sumi-muted">{edu.school}</p>
              {edu.period && (
                <p className="mt-1 text-xs text-sumi-faint">{edu.period}</p>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-sumi/5 pt-16">
          <p className="mb-6 text-xs tracking-zen text-sumi-faint">
            Certifications
          </p>
          <ul className="space-y-2 text-sm text-sumi-muted">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </ZenSection>
  );
}
