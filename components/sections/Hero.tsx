import { Badge } from "@/components/Badge";
import { badges, links, site } from "@/data/content";

export function Hero() {
  return (
    <header>
      <p className="font-mono text-sm text-readme-muted">
        <span className="text-readme-accent">#</span> {site.name}
      </p>
      <p className="mt-4 border-l-2 border-readme-border pl-4 text-base leading-relaxed text-readme-muted md:text-lg">
        {site.title} · {site.location}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {badges.map((badge) => (
          <Badge key={badge.label} label={badge.label} tone={badge.tone} />
        ))}
      </div>
      <pre
        className="mt-8 overflow-x-auto rounded-md border border-readme-border bg-readme-bg p-4 font-mono text-xs leading-relaxed text-readme-text md:text-sm"
      >
        <code>
          <span className="text-readme-muted">$ </span>
          <span className="text-readme-accent">git clone</span>{" "}
          <span className="text-readme-link">github.com/Abhilash-0322</span>
          {"\n"}
          <span className="text-readme-muted">$ </span>
          <span className="text-readme-accent">npm run</span> ship-backend
          {"\n"}
          <span className="text-readme-muted"># </span>
          FastAPI · RAG · agents · cloud deploys
        </code>
      </pre>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
        <a href={`mailto:${site.email}`} className="readme-link">
          email
        </a>
        <a
          href={site.resumePath}
          className="readme-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume.pdf
        </a>
        <a
          href={links.github}
          className="readme-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href={links.linkedin}
          className="readme-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          href={links.x}
          className="readme-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          x
        </a>
      </div>
    </header>
  );
}
