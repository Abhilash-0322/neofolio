import { links, site } from "@/data/content";
import { ContentPanel } from "@/components/ContentPanel";

export function Overview() {
  return (
    <ContentPanel id="overview" title={site.name} subtitle="Portfolio">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="font-display text-2xl leading-snug text-panel-ink md:text-3xl">
            {site.title}
          </p>
          <p className="mt-4 text-sm text-panel-muted">{site.location}</p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-panel-muted md:text-lg">
            {site.bio}
          </p>
        </div>
        <div className="flex flex-col justify-end gap-4 lg:col-span-4">
          <div className="rounded-xl bg-panel p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-panel-muted">
              Interests
            </p>
            <ul className="mt-3 space-y-2 text-sm text-panel-ink">
              {site.careerInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-nav px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Get in touch
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-panel-border px-4 py-2 text-sm font-medium text-panel-ink transition hover:border-panel-muted"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </ContentPanel>
  );
}
