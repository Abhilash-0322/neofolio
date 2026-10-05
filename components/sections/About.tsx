import { ContentPanel } from "@/components/ContentPanel";
import {
  achievements,
  certifications,
  education,
  site,
} from "@/data/content";

export function About() {
  return (
    <ContentPanel id="about" title="About" subtitle="Background">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-base leading-relaxed text-panel-muted">
            {site.freelanceNote}
          </p>
          <div className="mt-8 rounded-xl border border-panel-border bg-panel p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              Focus areas
            </p>
            <ul className="mt-4 space-y-2 text-sm text-panel-ink">
              {site.focusAreas.map((area) => (
                <li key={area} className="flex gap-2">
                  <span className="text-nav-accent" aria-hidden>—</span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              Education
            </p>
            <ul className="mt-4 space-y-5">
              {education.map((item) => (
                <li
                  key={item.degree}
                  className="border-l-2 border-nav-accent/60 pl-4"
                >
                  <p className="font-medium text-panel-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-panel-muted">{item.school}</p>
                  {item.period && (
                    <p className="mt-1 text-xs text-panel-muted">{item.period}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              Certifications
            </p>
            <ul className="mt-4 space-y-2 text-sm text-panel-ink">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              Recognition
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-panel-muted">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentPanel>
  );
}
