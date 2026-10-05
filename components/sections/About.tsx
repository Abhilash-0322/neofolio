import { Section } from "@/components/Section";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-7">
          <p className="text-base leading-relaxed text-studio-dim md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-studio-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 rounded-lg border border-studio-border bg-studio-surface/50 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              Focus bands
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="rounded border border-studio-border/80 bg-studio-raised/80 px-3 py-1.5 text-sm text-studio-text"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-studio-accent/60 pl-4"
                >
                  <p className="text-sm font-medium text-studio-text">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-studio-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-mono text-xs text-studio-muted/80">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-studio-dim">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-studio-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
