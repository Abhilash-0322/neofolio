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
          <p className="text-base leading-relaxed text-ink md:text-lg">
            {site.bio}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ink-muted">
            {site.freelanceNote}
          </p>
          <div className="card-vellum mt-10 p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-wine-light">
              Focus areas
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-baseline gap-3 text-sm text-ink"
                >
                  <span className="text-wine-glow">—</span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-wine-light">
              Career interests
            </p>
            <ul className="mt-3 space-y-1 text-sm text-ink-muted">
              {site.careerInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div className="card-vellum p-6 md:p-8">
            <p className="font-serif text-xl text-parchment">Education</p>
            <ul className="mt-5 space-y-6">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-wine/50 pl-4"
                >
                  <p className="text-sm font-medium text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-ink-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-ink-faint">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-vellum p-6 md:p-8">
            <p className="font-serif text-xl text-parchment">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-ink">{cert}</li>
              ))}
            </ul>
          </div>
          <div className="card-vellum p-6 md:p-8">
            <p className="font-serif text-xl text-parchment">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-ink-muted"
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
