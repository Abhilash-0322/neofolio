import { Section } from "@/components/Section";
import { links, site } from "@/data/content";

const codingProfiles = [
  { label: "LeetCode", href: links.leetcode },
  { label: "Codeforces", href: links.codeforces },
  { label: "GeeksForGeeks", href: links.geeksforgeeks },
  { label: "HackerRank", href: links.hackerrank },
];

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        <div className="col-span-12 md:col-span-6">
          <p className="text-2xl font-medium leading-snug tracking-tight text-studio-text md:text-3xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-studio-accent underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p className="text-studio-muted">{site.phone}</p>
            <p className="text-studio-muted">{site.location}</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="rounded-lg border border-studio-border bg-studio-surface/50 p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-studio-muted">
              Output · Profiles
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { label: "GitHub", href: links.github },
                { label: "LinkedIn", href: links.linkedin },
                { label: "X", href: links.x },
                ...codingProfiles,
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-studio-dim underline-offset-4 transition-colors hover:text-studio-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
