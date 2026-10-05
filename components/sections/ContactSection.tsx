import { profile } from "@/data/content";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, value: profile.phone },
  { label: "GitHub", href: profile.github, value: "Abhilash-0322" },
  { label: "LinkedIn", href: profile.linkedin, value: "Connect" },
  { label: "X", href: profile.x, value: "@abhilash_glitch" }
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender/35 via-sky/30 to-peach/35 p-10 md:p-16">
        <div
          aria-hidden
          className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 animate-blob bg-white/40 blur-3xl"
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Want to build something together?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted">
            Open to cloud and AI systems roles, fintech-oriented engineering,
            and freelance work—APIs, deployments, and production AI features.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex flex-col rounded-2xl bg-white/80 px-5 py-4 shadow-soft transition hover:bg-white"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-lavender">
                    {link.label}
                  </span>
                  <span className="font-medium text-ink">{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-lavender/20 pt-8 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Made with care in Next.js.</p>
        <a
          href={profile.resume}
          className="font-semibold text-ink hover:text-lavender"
        >
          abhilash_python.pdf
        </a>
      </footer>
    </section>
  );
}
