import { profile } from "@/data/content";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/60 via-fuchsia-950/30 to-[#0a0614] px-8 py-16 text-center md:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-violet-600/25 blur-3xl" />
          <h2 className="relative font-display text-3xl font-bold text-ink md:text-4xl">
            Let&apos;s build something that ships
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted">
            Open to backend, AI systems, and cloud roles — and to freelance work on APIs, deployments, and
            production AI features.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-950 transition hover:bg-violet-50"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
          <p className="relative mt-6 text-xs text-muted">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
