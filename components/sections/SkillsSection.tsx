import { skillGroups } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Skills"
        title="Toolbox for backends, data, and AI"
        description="From FastAPI services to vector RAG and CI/CD—stack drawn from resume and shipped work."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className="rounded-3xl border border-white bg-white/85 p-6 shadow-soft"
            style={{
              transform: i % 2 === 1 ? "rotate(-0.5deg)" : "rotate(0.5deg)"
            }}
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl bg-gradient-to-r from-blush/30 to-sky/20 px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
