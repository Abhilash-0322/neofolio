import { profile } from "@/data/content";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing pb-20">
      <div className="container-shell">
        <div className="timetable-card ticket-notch mx-auto max-w-2xl rounded-sm p-8 text-center">
          <p className="kicker">06 / contact</p>
          <h2 className="mt-3 font-display text-3xl font-bold">Have a hard problem?</h2>
          <p className="mt-4 text-muted">
            Open to backend, AI systems, and cloud roles — plus freelance work on APIs, deployments, and production AI features.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="cta-btn cta-btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="cta-btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
          <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            NEOFOLIO 5062 · SWISS GRID / DUAL THEME
          </p>
        </div>
      </div>
    </section>
  );
}
