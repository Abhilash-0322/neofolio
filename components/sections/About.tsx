import { site } from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";

export function About() {
  return (
    <ZenSection id="about" kana="静" title="Stillness & intent">
      <div className="space-y-12 text-sm leading-relaxed text-sumi-muted">
        <div>
          <p className="mb-4 text-xs tracking-zen text-sumi-faint">Focus</p>
          <ul className="space-y-2">
            {site.focusAreas.map((area) => (
              <li key={area} className="flex gap-3">
                <span className="text-clay">—</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs tracking-zen text-sumi-faint">
            Career interests
          </p>
          <ul className="space-y-2">
            {site.careerInterests.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-clay">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="border-l border-sumi/10 pl-6 text-sumi-faint">
          {site.freelanceNote}
        </p>
        <div>
          <p className="mb-4 text-xs tracking-zen text-sumi-faint">
            Also known as
          </p>
          <p className="text-sumi-faint">
            {site.titles.join(" · ")}
          </p>
        </div>
      </div>
    </ZenSection>
  );
}
