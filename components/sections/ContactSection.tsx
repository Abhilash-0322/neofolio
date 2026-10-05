import { profile } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

const social = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.x },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-forest-moss/25 bg-gradient-to-br from-forest-mist via-transparent to-forest-bark/10 p-10 md:p-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-forest-fern/20 blur-3xl"
              aria-hidden
            />
            <p className="text-sm uppercase tracking-[0.3em] text-forest-fern">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forest-ink md:text-5xl">
              Let&apos;s build something reliable
            </h2>
            <p className="mt-4 max-w-xl text-forest-muted">
              Open to cloud, backend, and AI systems roles—and freelance work on APIs, deployments,
              and production AI features.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-medium text-forest-moss hover:text-forest-fern"
              >
                {profile.email}
              </a>
              <span className="hidden text-forest-muted/50 sm:inline">·</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-forest-muted">
                {profile.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-forest-muted transition hover:text-forest-ink"
                >
                  {s.label} →
                </a>
              ))}
              <a
                href={profile.resumePath}
                download
                className="text-sm font-medium text-forest-muted transition hover:text-forest-ink"
              >
                Download resume →
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 border-t border-forest-moss/20 pt-8 text-center text-xs text-forest-muted">
          © {new Date().getFullYear()} {profile.name}. Forest moss & deep woods · Next.js ·
          next-themes.
        </footer>
      </div>
    </section>
  );
}
