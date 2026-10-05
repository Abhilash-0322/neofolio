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
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 md:col-span-6">
          <p className="font-display text-2xl leading-snug text-cream md:text-3xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-3 text-sm text-cream-muted">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="text-gold-light transition-colors hover:text-cream"
              >
                {site.email}
              </a>
            </p>
            <p>{site.phone}</p>
            <p>{site.location}</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="deco-frame deco-frame-inner">
            <p className="deco-eyebrow">Profiles</p>
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
                    className="deco-link"
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
