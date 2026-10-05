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
          <div className="sketch-border-lg p-8">
            <p className="sketch-title text-3xl leading-snug md:text-4xl">
              Open to cloud, AI systems, and backend roles—and client work on APIs
              and production AI.
            </p>
            <div className="mt-10 space-y-3 text-sm">
              <p>
                <a href={`mailto:${site.email}`} className="sketch-link !text-base">
                  {site.email}
                </a>
              </p>
              <p className="text-ink-muted">{site.phone}</p>
              <p className="font-sketch text-lg text-ink-faint">{site.location}</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="sketch-card-alt h-full">
            <p className="font-sketch text-2xl text-sketch-sky">Find me online</p>
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
                    className="sketch-link !text-base"
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
