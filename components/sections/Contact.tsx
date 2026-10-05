import { ContentPanel } from "@/components/ContentPanel";
import { links, site } from "@/data/content";

const codingProfiles = [
  { label: "LeetCode", href: links.leetcode },
  { label: "Codeforces", href: links.codeforces },
  { label: "GeeksForGeeks", href: links.geeksforgeeks },
  { label: "HackerRank", href: links.hackerrank },
];

export function Contact() {
  return (
    <ContentPanel id="contact" title="Contact" subtitle="Connect">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-panel-muted md:text-xl">
            Open to roles in cloud, AI systems, and backend engineering—and to
            client work on APIs and production AI.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p>
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-panel-ink underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </p>
            <p className="text-panel-muted">{site.phone}</p>
            <p className="text-panel-muted">{site.location}</p>
          </div>
        </div>
        <div className="rounded-xl border border-panel-border bg-panel p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
            Profiles
          </p>
          <ul className="mt-5 space-y-3">
            {[
              { label: "GitHub", href: links.github },
              { label: "LinkedIn", href: links.linkedin },
              { label: "X", href: links.x },
              ...codingProfiles,
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-panel-ink underline-offset-4 hover:underline"
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
      <footer className="mt-10 border-t border-panel-border pt-6 text-xs text-panel-muted">
        © {new Date().getFullYear()} {site.name} · Split-screen portfolio
      </footer>
    </ContentPanel>
  );
}
