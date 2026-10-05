import { Section } from "@/components/Section";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "data", label: "Data" },
  { key: "platform", label: "Platform" },
];

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }) => (
          <div key={key} className="card-vellum p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-wine-light">
              {label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              {skills[key].join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
