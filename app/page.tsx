import { Header } from "@/components/Header";
import { MetricCards } from "@/components/MetricCards";
import { ExperienceTable } from "@/components/ExperienceTable";
import {
  contact,
  titles,
  projects,
  skillGroups,
  certifications,
  whyFintechCloud,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="border-b border-navy/10 bg-navy text-cream">
          <div className="section-shell py-16 sm:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Portfolio · Delhi NCR
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {contact.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-cream/85 sm:text-xl">
              {titles.join(" · ")}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/75">
              Backend and AI systems developer with hands-on experience shipping FastAPI
              services, cloud deployments, multi-agent workflows, and RAG pipelines.
              B.Tech IT at KIET; led campus AI MVPs and hackathon delivery. AWS Cloud
              Practitioner—comfortable on Azure and Docker-based CI/CD.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-gold-light"
              >
                GitHub
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold-light"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-md border border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold-light"
              >
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="section-shell -mt-8 relative z-10 pb-4 pt-0 sm:pb-8">
          <MetricCards />
        </section>

        {/* Experience */}
        <section id="experience" className="section-shell py-16 sm:py-20">
          <div className="gold-rule mb-4" />
          <h2 className="font-display text-3xl font-semibold text-navy">Experience</h2>
          <p className="mt-2 max-w-2xl text-navy/70">
            Production-minded delivery across internships and campus technical leadership.
          </p>
          <div className="mt-8 overflow-x-auto">
            <ExperienceTable />
          </div>
        </section>

        {/* Why fintech / cloud */}
        <section
          id="why"
          className="border-y border-navy/10 bg-cream-dark py-16 sm:py-20"
        >
          <div className="section-shell">
            <div className="gold-rule mb-4" />
            <h2 className="font-display text-3xl font-semibold text-navy">
              Why fintech / cloud
            </h2>
            <p className="mt-2 max-w-2xl text-navy/70">
              Where I want to grow—and why my stack and track record align.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {whyFintechCloud.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-navy/10 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-navy-light">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/75">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-shell py-16 sm:py-20">
          <div className="gold-rule mb-4" />
          <h2 className="font-display text-3xl font-semibold text-navy">
            Selected work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="flex flex-col rounded-lg border border-navy/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-navy">{p.name}</h3>
                  <span className="shrink-0 rounded bg-gold/15 px-2 py-0.5 text-xs font-semibold text-gold-muted">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/75">{p.desc}</p>
                <p className="mt-4 text-xs text-navy/50">{p.stack.join(" · ")}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                    >
                      Live
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & certs */}
        <section id="skills" className="border-t border-navy/10 bg-navy py-16 text-cream sm:py-20">
          <div className="section-shell">
            <div className="h-px w-16 bg-gold" />
            <h2 className="mt-4 font-display text-3xl font-semibold">Skills & credentials</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                {skillGroups.map((g) => (
                  <div key={g.category}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                      {g.category}
                    </h3>
                    <p className="mt-2 text-sm text-cream/85">{g.items.join(", ")}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-cream/15 bg-navy-light p-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                  Certifications
                </h3>
                <ul className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-sm before:block before:h-2 before:w-2 before:rounded-full before:bg-gold"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-gold-light">
                  Education
                </h3>
                <p className="mt-3 text-sm text-cream/85">
                  B.Tech Information Technology — KIET Group of Institutions (AKTU),
                  Ghaziabad · Expected 2027
                </p>
                <p className="mt-2 text-xs text-cream/60">
                  Co-inventor — IoT-AI telemedicine patent (India 202511018153A, Apr 2025)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section-shell py-16 sm:py-20">
          <div className="gold-rule mb-4" />
          <h2 className="font-display text-3xl font-semibold text-navy">Contact</h2>
          <p className="mt-4 text-navy/70">
            Open to cloud, AI systems, and fintech-oriented engineering roles—and freelance
            work on APIs, deployments, and production AI features.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase text-navy/50">Email</dt>
              <dd>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-navy hover:text-gold-muted"
                >
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase text-navy/50">Phone</dt>
              <dd className="font-medium text-navy">{contact.phone}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase text-navy/50">Location</dt>
              <dd className="font-medium text-navy">{contact.location}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase text-navy/50">Profiles</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
                <a href={contact.github} className="text-navy hover:text-gold-muted" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={contact.linkedin} className="text-navy hover:text-gold-muted" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href={contact.x} className="text-navy hover:text-gold-muted" target="_blank" rel="noopener noreferrer">
                  X
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <footer className="border-t border-navy/10 bg-cream-dark py-8 text-center text-xs text-navy/50">
        © {new Date().getFullYear()} {contact.name}. Built with Next.js & Tailwind.
      </footer>
    </>
  );
}
