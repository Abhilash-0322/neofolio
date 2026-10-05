import { ReadmeSection } from "@/components/ReadmeSection";
import { skills } from "@/data/content";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "languages" },
  { key: "backend", label: "backend" },
  { key: "frontend", label: "frontend" },
  { key: "data", label: "data" },
  { key: "platform", label: "platform" },
];

export function Skills() {
  return (
    <ReadmeSection id="skills" title="Skills">
      <div className="overflow-x-auto rounded-md border border-readme-border">
        <table className="w-full min-w-[28rem] text-left text-sm">
          <thead className="border-b border-readme-border bg-readme-bg/80 font-mono text-xs text-readme-muted">
            <tr>
              <th className="px-4 py-3 font-normal">stack</th>
              <th className="px-4 py-3 font-normal">tools</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(({ key, label }) => (
              <tr
                key={key}
                className="border-b border-readme-border last:border-0"
              >
                <td className="px-4 py-3 font-mono text-readme-accent">
                  {label}
                </td>
                <td className="px-4 py-3 text-readme-text">
                  {skills[key].join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ReadmeSection>
  );
}
