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
          <div className="relative overflow-hidden rounded-3xl border border-forge-iron/10 bg-gradient-to-br from-forge-concrete/80 via-forge-surface/50 to-forge-copper/20 p-10 dark:border-white/10 dark:from-forge-accent/10 dark:via-transparent dark:to-forge-iron/30 md:p-14">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "var(--forge-glow)" }}
              aria-hidden
            />
            <p className="text-sm uppercase tracking-[0.3em] text-forge-copper">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-forge-ink md:text-5xl">
              Let&apos;s build something reliable
            </h2>
            <p className="mt-4 max-w-xl text-forge-muted">
              Open to cloud, backend, and AI systems roles—and freelance work on APIs, deployments,
              and production AI features.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${profile.email}`}
                className="text-lg font-medium text-forge-accent hover:text-forge-copper"
              >
                {profile.email}
              </a>
              <span className="hidden text-forge-muted/50 sm:inline">·</span>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-forge-muted">
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
                  className="text-sm font-medium text-forge-muted transition hover:text-forge-ink"
                >
                  {s.label} →
                </a>
              ))}
              <a
                href={profile.resumePath}
                download
                className="text-sm font-medium text-forge-muted transition hover:text-forge-ink"
              >
                Download resume →
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 border-t border-forge-iron/10 pt-8 text-center text-xs text-forge-muted dark:border-white/10">
          © {new Date().getFullYear()} {profile.name}. Copper workshop & forge theme · Next.js & Tailwind.
        </footer>
      </div>
    </section>
  );
}
