import { profile } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing pb-16">
      <div className="container-shell">
        <Reveal>
          <div className="exhibit-frame exhibit-mat text-center sm:text-left">
            <p className="plaque-label">Visit the gallery</p>
            <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">Get in touch</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted sm:mx-0">
              Open to cloud engineering, AI systems, and fintech-oriented roles—and freelance work on APIs, deployments, and production AI features.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="cta-btn cta-btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="cta-btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
              <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.x}>
                X / Twitter
              </a>
            </div>

            <p className="mt-10 text-xs text-muted">
              © {new Date().getFullYear()} {profile.name} · Museum gallery theme · Port 5057
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
