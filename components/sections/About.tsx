import { Section } from "@/components/Section";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <Section id="about" index="I" label="Profile">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-7">
          <p className="text-base leading-relaxed text-noir-muted md:text-lg">
            {site.bio}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-noir-faint">
            {site.freelanceNote}
          </p>
          <div className="mt-10 dossier-card p-6 md:p-8">
            <p className="label-caps">Practice focus</p>
            <ul className="mt-4 space-y-2 border-l border-noir-accent/50 pl-4">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-noir-ink">
                  {area}
                </li>
              ))}
            </ul>
            <p className="label-caps mt-8">Career interests</p>
            <ul className="mt-4 space-y-2 border-l border-noir-rule pl-4">
              {site.careerInterests.map((interest) => (
                <li key={interest} className="text-sm text-noir-muted">
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-8 lg:col-span-5">
          <div className="dossier-card p-6">
            <p className="label-caps">Education</p>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="font-serif text-sm font-medium text-noir-ink">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-noir-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-mono text-xs text-noir-faint">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="dossier-card p-6">
            <p className="label-caps">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-noir-ink">{cert}</li>
              ))}
            </ul>
          </div>
          <div className="dossier-card p-6">
            <p className="label-caps">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-noir-muted"
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
