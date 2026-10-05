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
    <Section id="contact" label="Contact" sheetNo="05">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6">
          <p className="font-mono text-xl font-medium leading-snug text-blueprint-chalk md:text-2xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-10 space-y-4 border-l-2 border-blueprint-line pl-5 font-mono text-sm">
            <p>
              <span className="text-[10px] text-blueprint-line/60">MAIL</span>
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-blueprint-chalk hover:text-blueprint-accent"
              >
                {site.email}
              </a>
            </p>
            <p className="text-blueprint-ink">
              <span className="text-[10px] text-blueprint-line/60">TEL</span>
              <br />
              {site.phone}
            </p>
            <p className="text-blueprint-ink">
              <span className="text-[10px] text-blueprint-line/60">LOC</span>
              <br />
              {site.location}
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="draw-corners border border-blueprint-line/40 p-6 md:p-8">
            <p className="dim-line">Interface — profiles</p>
            <ul className="mt-6 space-y-3">
              {[
                { label: "GitHub", href: links.github },
                { label: "LinkedIn", href: links.linkedin },
                { label: "X", href: links.x },
                ...codingProfiles,
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-blueprint-line/50" />
                  <a
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-wide text-blueprint-chalk hover:text-blueprint-accent"
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
