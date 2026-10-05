import { skillGroups } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="mb-12 scroll-mt-20" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="section-label">Technical skills</h2>
      <div className="mt-4 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="border-b border-border/60 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">{group.label}</span>
            <p className="mt-1 text-ink">{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
