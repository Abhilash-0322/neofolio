import { ReadmeSection } from "@/components/ReadmeSection";
import { links, site } from "@/data/content";

const codingProfiles = [
  { label: "leetcode", href: links.leetcode },
  { label: "codeforces", href: links.codeforces },
  { label: "geeksforgeeks", href: links.geeksforgeeks },
  { label: "hackerrank", href: links.hackerrank },
];

export function Contact() {
  return (
    <ReadmeSection id="contact" title="Contact">
      <p className="text-base leading-relaxed text-readme-text md:text-lg">
        Open to roles in cloud, AI systems, and backend engineering—and to client
        work on APIs and production AI.
      </p>
      <pre
        className="mt-6 overflow-x-auto rounded-md border border-readme-border bg-readme-bg p-4 font-mono text-sm"
      >
        <code>
          {`{
  "email": "${site.email}",
  "phone": "${site.phone}",
  "location": "${site.location}"
}`}
        </code>
      </pre>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-readme-muted">social</p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            {[
              { label: "github", href: links.github },
              { label: "linkedin", href: links.linkedin },
              { label: "x", href: links.x },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="readme-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs text-readme-muted">coding profiles</p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            {codingProfiles.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="readme-link"
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
    </ReadmeSection>
  );
}
