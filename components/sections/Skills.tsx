import { Section } from "@/components/Section";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string; accent: string }[] = [
  { key: "languages", label: "Languages", accent: "text-neon-cyan" },
  { key: "backend", label: "Backend", accent: "text-neon-magenta" },
  { key: "frontend", label: "Frontend", accent: "text-neon-lime" },
  { key: "data", label: "Data", accent: "text-neon-violet" },
  { key: "platform", label: "Platform", accent: "text-neon-cyan" },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label, accent }) => (
          <div key={key} className="arena-panel p-6 md:p-8">
            <p className={`arena-label ${accent}`}>{label}</p>
            <p className="mt-4 text-sm leading-relaxed text-arena-text">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
