import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "X", href: profile.x },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-lab-border px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="05"
          title="Collaborate"
          subtitle="Available for full-time cloud and AI roles, and selective freelance on APIs and production AI."
        />

        <div className="card-lab flex flex-col items-start justify-between gap-8 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-2xl font-semibold text-lab-ink">{profile.name}</p>
            <p className="mt-2 text-lab-sub">{profile.email}</p>
            <p className="font-mono text-sm text-lab-sub">{profile.phone}</p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-lab-border bg-lab-muted/50 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-lab-ink transition-all hover:border-lab-synapse hover:shadow-synapse"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
