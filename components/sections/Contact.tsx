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
          <p className="font-display text-2xl font-bold leading-snug tracking-tight text-arena-heading md:text-3xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <a href={`mailto:${site.email}`} className="neon-link font-semibold">
                {site.email}
              </a>
            </p>
            <p className="text-arena-muted">{site.phone}</p>
            <p className="text-arena-muted">{site.location}</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="arena-panel rgb-border-top p-6 md:p-8">
            <p className="arena-label">Profiles</p>
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
                    className="neon-link text-sm font-semibold"
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
