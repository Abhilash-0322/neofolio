import { achievements, codingProfiles } from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";

export function Honors() {
  return (
    <ZenSection id="honors" kana="誉" title="Recognition">
      <ul className="space-y-5 text-sm leading-relaxed text-sumi-muted">
        {achievements.map((item) => (
          <li key={item} className="flex gap-4">
            <span className="mt-2 h-px w-6 shrink-0 bg-clay/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-20 border-t border-sumi/5 pt-16">
        <p className="mb-6 text-xs tracking-zen text-sumi-faint">
          Coding profiles
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-zen">
          {codingProfiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sumi-muted transition-colors hover:text-moss"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </ZenSection>
  );
}
