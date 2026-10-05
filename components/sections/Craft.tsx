import { skills } from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";

const groups: { label: string; items: string[] }[] = [
  { label: "Languages", items: skills.languages },
  { label: "Backend", items: skills.backend },
  { label: "Frontend", items: skills.frontend },
  { label: "Data", items: skills.data },
  { label: "Platform", items: skills.platform },
];

export function Craft() {
  return (
    <ZenSection id="craft" kana="技" title="The craft">
      <div className="space-y-14">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-4 text-xs tracking-zen text-sumi-faint">
              {g.label}
            </p>
            <p className="text-sm leading-loose text-sumi-muted">
              {g.items.join("  ·  ")}
            </p>
          </div>
        ))}
      </div>
    </ZenSection>
  );
}
