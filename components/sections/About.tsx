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
          <div className="sketch-card mt-10">
            <p className="font-sketch text-xl text-sketch-sky">Focus areas</p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-2 text-sm text-ink">
                  <span className="font-sketch text-sketch-coral" aria-hidden="true">
                    →
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-8 md:col-span-5">
          <div className="sketch-card-alt">
            <p className="font-sketch text-xl text-sketch-coral">Education</p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-dashed border-ink/40 pl-4">
                  <p className="text-sm font-semibold text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-ink-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-sketch text-base text-ink-faint">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="sketch-border p-6">
            <p className="font-sketch text-xl text-sketch-sage">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-ink">{cert}</li>
              ))}
            </ul>
          </div>
          <div className="sketch-border-alt p-6">
            <p className="font-sketch text-xl text-sketch-sky">Recognition</p>
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
