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
          <p className="text-base leading-relaxed text-ink md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-ink-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 border border-line p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-ink">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l border-ink pl-4">
                  <p className="text-sm font-medium text-ink">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-ink-faint">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-ink">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-muted">
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
