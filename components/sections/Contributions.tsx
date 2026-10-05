import { Badge } from "@/components/Badge";
import { ReadmeSection } from "@/components/ReadmeSection";
import { contributions } from "@/data/content";

export function Contributions() {
  return (
    <ReadmeSection id="contributions" title="Contributions">
      <p className="text-sm leading-relaxed text-readme-muted md:text-base">
        Open-source maintainer mindset: ship small PRs, review thoughtfully, and
        leave repos better than I found them.
      </p>
      <ul className="mt-8 space-y-4">
        {contributions.map((item) => (
          <li
            key={item.program}
            className="rounded-md border border-readme-border bg-readme-bg/40 p-4 md:p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-mono text-base text-readme-heading">
                {item.program}
              </h3>
              <span className="font-mono text-xs text-readme-accent">
                {item.role}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-readme-text">
              {item.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </ReadmeSection>
  );
}
