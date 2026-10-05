import {
  achievements,
  certifications,
  codingProfiles,
  education,
  skillGroups,
} from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-line/60 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="04"
          title="Skills & credentials"
          subtitle="Stack depth across backend, data, and cloud — with proof in certs and competition results."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-lg border-glow bg-panel/50 p-5"
              >
                <h3 className="font-mono text-xs uppercase tracking-widest text-teal-glow/80">
                  {group.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-line/80 px-2.5 py-1 text-sm text-slate-300 transition-colors hover:border-teal-glow/40 hover:text-teal-glow"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border-glow bg-panel/50 p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-magenta-glow/80">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {education.map((edu) => (
                  <li key={edu.degree}>
                    <p className="font-medium text-slate-200">{edu.degree}</p>
                    <p className="text-sm text-slate-500">{edu.school}</p>
                    {edu.period && (
                      <p className="font-mono text-xs text-slate-600">
                        {edu.period}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-glow bg-panel/50 p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-teal-glow/80">
                Certifications
              </h3>
              <ul className="mt-3 list-inside list-disc text-sm text-slate-400">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-glow bg-panel/50 p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-magenta-glow/80">
                Recognition
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {achievements.map((a) => (
                  <li key={a} className="border-l-2 border-line pl-3">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-glow bg-panel/50 p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-teal-glow/80">
                Coding profiles
              </h3>
              <div className="mt-3 flex flex-wrap gap-4">
                {codingProfiles.map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-slate-400 link-glow"
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
