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
          <p className="text-base leading-relaxed text-[rgb(var(--text))] md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-[rgb(var(--text-muted))]">
            {site.freelanceNote}
          </p>
          <div className="surface sticker-tilt mt-10 p-6 shadow-sticker md:p-8">
            <p className="label-stencil">Focus</p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-[rgb(var(--text))]"
                >
                  <span className="h-1.5 w-1.5 bg-[rgb(var(--accent))]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div className="surface p-6 md:p-8">
            <p className="label-stencil">Education</p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-4 border-[rgb(var(--accent))] pl-4"
                >
                  <p className="text-sm font-bold text-[rgb(var(--text))]">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-[rgb(var(--text-muted))]">
                    {item.school}
                  </p>
                  {item.period && (
                    <p className="mt-1 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface p-6 md:p-8">
            <p className="label-stencil">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-[rgb(var(--text))]">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface p-6 md:p-8">
            <p className="label-stencil">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-[rgb(var(--text-muted))]"
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
