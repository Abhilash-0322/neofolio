import { aboutParagraphs, certifications, profile } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="plaque-label">Curator&apos;s note</p>
          <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">About the collection</h2>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.05}>
            <div className="exhibit-frame exhibit-mat space-y-4 text-muted leading-relaxed">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="exhibit-frame exhibit-mat">
              <p className="plaque-label">Education</p>
              <p className="mt-3 font-medium text-text">{profile.education.degree}</p>
              <p className="text-sm text-muted">{profile.education.school}</p>
              <p className="text-sm text-muted">{profile.education.year}</p>

              <p className="plaque-label mt-6">Credentials</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {certifications.map((c) => (
                  <li key={c}>· {c}</li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-accent">{profile.availability}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
