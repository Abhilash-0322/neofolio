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
          <p className="text-base leading-relaxed text-foreground md:text-lg">
            {site.bio}
          </p>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            {site.freelanceNote}
          </p>
          <div className="mt-10 border border-border bg-surface p-6 md:p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>
            <ul className="mt-4 space-y-2">
              {site.focusAreas.map((area) => (
                <li key={area} className="text-sm text-foreground">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 space-y-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Education
            </p>
            <ul className="mt-4 space-y-6">
              {education.map((item) => (
                <li key={item.degree} className="border-l-2 border-accent pl-4">
                  <p className="text-sm font-medium text-foreground">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  {item.period && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.period}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Certifications
            </p>
            <ul className="mt-4 space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-foreground">{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Recognition
            </p>
            <ul className="mt-4 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-muted-foreground"
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
