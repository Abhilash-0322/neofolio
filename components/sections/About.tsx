import { Section } from "@/components/Section";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <Section id="about" label="About" slide="Slide 02">
      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-7">
          <p className="text-base leading-relaxed text-ink/90 md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 rounded-xl border border-line bg-canvas/40 p-6 md:p-8 dark:bg-black/20">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Focus areas
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-2 text-sm text-ink before:content-['▸'] before:text-accent dark:before:text-stage-gold"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-accent pl-4 dark:border-stage-gold">
                  <p className="text-sm font-medium text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-muted">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-ink/90">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
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
