import { links, site } from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";
import { Enso } from "@/components/zen/InkStroke";

export function Reach() {
  return (
    <ZenSection id="reach" kana="縁" title="Reach">
      <div className="space-y-8 text-sm text-sumi-muted">
        <p className="leading-relaxed">
          Professional, employer- and client-ready. Emphasis on shipped systems,
          cloud deployment, and AI that works beyond demos.
        </p>
        <div className="space-y-3">
          <a
            href={`mailto:${site.email}`}
            className="block font-serif text-lg text-sumi transition-colors hover:text-moss"
          >
            {site.email}
          </a>
          <p>{site.phone}</p>
          <p className="text-sumi-faint">{site.location}</p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-zen pt-4">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sumi"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sumi"
          >
            LinkedIn
          </a>
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sumi"
          >
            X
          </a>
          <a
            href={site.resumePath}
            className="transition-colors hover:text-sumi"
          >
            Resume (PDF)
          </a>
        </div>
      </div>
      <footer className="mt-24 flex flex-col items-start gap-6 border-t border-sumi/5 pt-16">
        <Enso className="h-12 w-12 opacity-60" />
        <p className="text-xs text-sumi-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </ZenSection>
  );
}
