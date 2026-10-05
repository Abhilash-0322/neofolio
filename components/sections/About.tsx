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
          <p className="text-base leading-relaxed text-arena-text md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-arena-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-10 arena-panel p-6 md:p-8">
            <p className="arena-label">Focus sectors</p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-arena-text"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-magenta shadow-neon-magenta"
                    aria-hidden
                  />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-5">
          <div className="arena-panel p-6">
            <p className="arena-label">Education</p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-neon-cyan pl-4"
                >
                  <p className="text-sm font-semibold text-arena-heading">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-arena-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-mono text-xs text-neon-violet">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="arena-panel p-6">
            <p className="arena-label">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-arena-text">{cert}</li>
              ))}
            </ul>
          </div>
          <div className="arena-panel p-6">
            <p className="arena-label">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-arena-muted"
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
