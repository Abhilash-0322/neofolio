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
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 md:col-span-7">
          <p className="font-display text-lg leading-relaxed text-cream md:text-xl">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-cream-muted">
            {site.freelanceNote}
          </p>
          <div className="deco-frame deco-frame-inner mt-10">
            <p className="deco-eyebrow">Focus</p>
            <ul className="mt-5 space-y-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-sm text-cream"
                >
                  <span
                    className="deco-diamond shrink-0"
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div className="deco-frame">
            <p className="deco-eyebrow">Education</p>
            <ul className="mt-5 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-lg text-cream">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-cream-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs uppercase tracking-widest text-gold-dim">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="deco-eyebrow">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-cream">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="deco-eyebrow">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-cream-muted"
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
