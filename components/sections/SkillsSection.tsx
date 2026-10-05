import { codingProfiles, skillGroups } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="plaque-label">Archives</p>
          <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">Technical collection</h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, idx) => (
            <Reveal key={group.label} delay={idx * 0.04}>
              <div className="exhibit-frame exhibit-mat">
                <p className="plaque-label">{group.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="exhibit-frame exhibit-mat mt-6">
            <p className="plaque-label">Coding profiles</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-sm border border-frame px-3 py-2 text-sm transition hover:border-accent hover:shadow-spotlight"
                >
                  <span className="font-medium text-text">{p.name}</span>
                  <span className="text-muted">{p.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
