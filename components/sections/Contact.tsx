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
          <p className="font-serif text-3xl leading-snug text-parchment md:text-4xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <a href={`mailto:${site.email}`} className="link-scholar">
                {site.email}
              </a>
            </p>
            <p className="text-ink-muted">{site.phone}</p>
            <p className="text-ink-muted">{site.location}</p>
            <p className="pt-4">
              <a
                href={site.resumePath}
                className="inline-flex items-center gap-2 border border-wine/50 px-4 py-2 text-sm text-parchment transition-colors hover:border-wine-glow hover:bg-wine-deep/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé (PDF)
              </a>
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="card-vellum p-6 md:p-8">
            <p className="font-serif text-xl text-parchment">Profiles</p>
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
                    className="link-scholar text-sm"
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
