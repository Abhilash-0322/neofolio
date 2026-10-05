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
          <p className="text-base leading-relaxed text-slate-700 md:text-lg">
            {site.bio}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            {site.freelanceNote}
          </p>
          <div className="mt-10 dossier-card p-6 md:p-8">
            <p className="label-caps">Practice focus</p>
            <ul className="mt-4 space-y-2 border-l border-trust-gold/40 pl-4">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-slate-800">
                  {area}
                </li>
              ))}
            </ul>
            <p className="label-caps mt-8">Career interests</p>
            <ul className="mt-4 space-y-2 border-l border-slate-rule pl-4">
              {site.careerInterests.map((interest) => (
                <li key={interest} className="text-sm text-slate-700">
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
                  <p className="font-serif text-sm font-medium text-slate-ink">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-slate-500">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="dossier-card p-6">
            <p className="label-caps">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-slate-800">{cert}</li>
              ))}
            </ul>
          </div>
          <div className="dossier-card p-6">
            <p className="label-caps">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-slate-700"
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
