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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ key, label }, index) => (
          <div
            key={key}
            className={index % 2 === 0 ? "sketch-card" : "sketch-card-alt"}
          >
            <p className="font-sketch text-xl text-sketch-coral">{label}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[key].map((skill) => (
                <span key={skill} className="sketch-pill text-xs text-ink md:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
