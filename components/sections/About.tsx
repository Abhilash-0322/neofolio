import { Section } from "@/components/Section";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <Section id="about" label="About" sheetNo="01">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <div className="draw-corners border border-blueprint-line/35 p-6 md:p-8">
            <p className="text-sm leading-relaxed text-blueprint-ink md:text-base">
              {site.bio}
            </p>
            <p className="mt-6 border-l-2 border-blueprint-accent pl-4 text-sm text-blueprint-chalk/90">
              {site.freelanceNote}
            </p>
          </div>
          <div className="mt-8 border border-dashed border-blueprint-line/30 p-6">
            <p className="dim-line">Spec — focus areas</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {site.focusAreas.map((area) => (
                <li
                  key={area}
                  className="font-mono text-xs text-blueprint-chalk before:mr-2 before:text-blueprint-line before:content-['▸']"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-8 md:col-span-5">
          <div className="border border-blueprint-line/30 bg-blueprint-paper/50 p-5">
            <p className="dim-line">Education</p>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l border-blueprint-line pl-4"
                >
                  <p className="text-sm font-medium text-blueprint-chalk">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-xs text-blueprint-ink">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 font-mono text-[10px] text-blueprint-line/70">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-blueprint-line/30 p-5">
            <p className="dim-line">Certifications</p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-blueprint-ink">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-blueprint-line/30 p-5">
            <p className="dim-line">Recognition</p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-xs leading-relaxed text-blueprint-ink"
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
