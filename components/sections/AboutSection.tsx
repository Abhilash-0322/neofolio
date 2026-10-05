import { certifications, education, profile } from "@/data/content";

export function AboutSection() {
  return (
    <section id="about" className="mb-12 scroll-mt-20" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-label">About</h2>
      <p className="mt-3 text-ink">{profile.bio}</p>
      <p className="mt-3 text-muted">{profile.focus}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="journal-card p-4">
          <h3 className="font-hand text-lg text-accent">Education</h3>
          <ul className="mt-2 space-y-3 text-sm">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="font-medium text-ink">{item.degree}</p>
                <p className="text-muted">{item.school}</p>
                {item.meta ? <p className="font-mono text-xs text-muted">{item.meta}</p> : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="journal-card p-4">
          <h3 className="font-hand text-lg text-accent">Certifications</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
