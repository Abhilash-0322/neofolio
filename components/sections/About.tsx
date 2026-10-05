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
          <p className="editorial-dropcap font-display text-lg leading-relaxed text-ink md:text-xl">
            {site.bio}
          </p>
          <p className="mt-8 font-sans text-sm leading-relaxed text-ink-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 border border-rule bg-surface-elevated p-6 md:p-8">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="font-display text-base text-ink">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-10">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-accent pl-4">
                  <p className="font-display text-base font-medium text-ink">
                    {item.degree}
                  </p>
                  <p className="mt-1 font-sans text-sm text-ink-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-sans text-xs text-ink-faint">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="font-sans text-sm text-ink">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="font-sans text-sm leading-relaxed text-ink-muted">
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
