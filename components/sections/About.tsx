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
          <p className="text-base leading-relaxed text-sol-fg md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-sol-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 border border-sol-border bg-sol-bg-alt/60 p-6 md:p-8">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-green">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-sol-emphasis">
                  <span className="text-sol-violet">›</span> {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-muted">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-sol-blue pl-4"
                >
                  <p className="text-sm font-medium text-sol-emphasis">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-sol-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-mono text-xs text-sol-muted">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-muted">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-sol-fg">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-muted">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-sol-fg"
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
