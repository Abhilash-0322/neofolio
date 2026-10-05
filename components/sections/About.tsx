import { ReadmeSection } from "@/components/ReadmeSection";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <ReadmeSection id="about" title="About">
      <p className="text-base leading-relaxed text-readme-text md:text-[17px]">
        {site.bio}
      </p>
      <p className="mt-4 text-sm text-readme-muted">{site.freelanceNote}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-md border border-readme-border bg-readme-bg/50 p-4">
          <p className="font-mono text-xs text-readme-accent">focus[]</p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            {site.focusAreas.map((area) => (
              <li key={area}>
                <span className="text-readme-muted">- </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-readme-border bg-readme-bg/50 p-4">
          <p className="font-mono text-xs text-readme-accent">interests[]</p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            {site.careerInterests.map((item) => (
              <li key={item}>
                <span className="text-readme-muted">- </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-mono text-sm text-readme-heading">
            <span className="text-readme-muted">###</span> Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.degree} className="text-sm">
                <p className="font-medium text-readme-heading">{item.degree}</p>
                <p className="text-readme-muted">{item.school}</p>
                {item.period && (
                  <p className="mt-1 font-mono text-xs text-readme-muted">
                    {item.period}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-readme-heading">
            <span className="text-readme-muted">###</span> Certifications
          </h3>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            {certifications.map((cert) => (
              <li key={cert}>
                <span className="text-readme-accent">✓</span> {cert}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm text-readme-heading">
            <span className="text-readme-muted">###</span> Highlights
          </h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-readme-muted">
            {achievements.map((item) => (
              <li key={item}>
                <span className="font-mono text-readme-accent">*</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ReadmeSection>
  );
}
