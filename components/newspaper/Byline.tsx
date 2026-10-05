import { site } from "@/data/content";

type BylineProps = {
  section: string;
  dateline?: string;
};

export function Byline({ section, dateline }: BylineProps) {
  const city = site.location.split("(")[0].trim();
  return (
    <p className="mt-2 border-b border-rule/30 pb-2 text-[11px] small-caps tracking-wider text-ink/65">
      By <span className="font-semibold text-ink">{site.name}</span>
      <span className="mx-1.5">·</span>
      {section}
      {dateline && (
        <>
          <span className="mx-1.5">·</span>
          <span className="italic normal-case tracking-normal">
            {dateline ?? city}
          </span>
        </>
      )}
    </p>
  );
}
