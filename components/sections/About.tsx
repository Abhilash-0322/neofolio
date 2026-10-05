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
          <p className="text-base leading-relaxed text-neutral-800 md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-neutral-600">
            {site.freelanceNote}
          </p>
          <div className="mt-10 border border-neutral-200 p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-neutral-800">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l border-neutral-900 pl-4">
                  <p className="text-sm font-medium text-neutral-900">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-neutral-500">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-neutral-800">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-neutral-700">
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
