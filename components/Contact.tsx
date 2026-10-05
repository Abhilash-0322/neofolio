import { profile } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.x },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-line/60 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeading
          id="05"
          title="Let's build something reliable"
          subtitle="Open to full-time, internships, and client projects — especially where backend and AI meet production."
        />

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="w-full rounded-lg border border-teal-glow/50 bg-teal-dim/10 px-8 py-4 font-mono text-sm uppercase tracking-wider text-teal-glow transition-all hover:shadow-teal-glow sm:w-auto"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-slate-400 link-glow"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-magenta-glow link-glow"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
