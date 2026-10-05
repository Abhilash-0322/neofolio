import { profile } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" className="mb-8 scroll-mt-20" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-label">Contact</h2>
      <p className="mt-3 text-muted">
        Open to full-time roles, internships, and freelance work on APIs, cloud deployments, and production AI.
      </p>
      <div className="journal-card mt-6 space-y-2 p-5 font-mono text-sm">
        <p>
          <span className="text-muted">Email </span>
          <a href={`mailto:${profile.email}`} className="ink-link">{profile.email}</a>
        </p>
        <p>
          <span className="text-muted">Phone </span>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="ink-link">{profile.phone}</a>
        </p>
        <p>
          <span className="text-muted">Location </span>
          <span className="text-ink">{profile.location}</span>
        </p>
      </div>
    </section>
  );
}
