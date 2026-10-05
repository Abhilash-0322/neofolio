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
          <p className="font-display text-3xl leading-tight tracking-wide text-[rgb(var(--text))] md:text-4xl">
            Open to cloud, AI systems, and backend roles—plus client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-3 text-sm">
            <p>
              <a href={`mailto:${site.email}`} className="link-tag">
                {site.email}
              </a>
            </p>
            <p className="text-[rgb(var(--text-muted))]">{site.phone}</p>
            <p className="text-[rgb(var(--text-muted))]">{site.location}</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="surface sticker-tilt p-6 shadow-sticker-lg md:p-8">
            <p className="label-stencil">Profiles</p>
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
                    className="link-tag text-sm"
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
