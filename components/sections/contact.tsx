import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/sections/about";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  const links = [
    { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
    { href: `tel:${profile.phone.replace(/\s/g, "")}`, label: profile.phone, icon: Phone },
    { href: profile.github, label: "GitHub", icon: Github },
    { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading title="Contact" subtitle="Let's build something durable" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-elevated p-5 shadow-card transition hover:border-emerald-muted hover:shadow-glow"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
                <Icon className="h-4 w-4 text-[var(--color-accent)]" />
              </span>
              <span className="text-sm font-medium text-ink">{label}</span>
            </a>
          ))}
          <a
            href={profile.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-elevated p-5 shadow-card transition hover:border-emerald-muted sm:col-span-2"
          >
            <span className="text-sm font-medium text-ink-muted">
              X (Twitter): @abhilash_glitch
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
