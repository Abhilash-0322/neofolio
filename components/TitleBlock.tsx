import { drawingMeta, site } from "@/data/content";

type TitleBlockProps = {
  compact?: boolean;
};

export function TitleBlock({ compact = false }: TitleBlockProps) {
  const date = new Date().toISOString().slice(0, 10);

  if (compact) {
    return (
      <div className="font-mono text-[9px] leading-relaxed text-arch-line/70">
        <span className="text-arch-accent">{drawingMeta.sheet}</span>
        <span className="mx-2 text-arch-line/40">|</span>
        REV {drawingMeta.rev}
      </div>
    );
  }

  return (
    <div
      className="draw-corners border border-arch-line/40 bg-arch-deep/60 p-3 font-mono text-[10px] leading-snug text-arch-ink"
      role="presentation"
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
        <p>
          <span className="text-arch-line/60">TITLE</span>
          <br />
          <span className="text-arch-chalk">{site.name}</span>
        </p>
        <p className="text-right">
          <span className="text-arch-line/60">SHEET</span>
          <br />
          <span className="text-arch-accent">{drawingMeta.sheet}</span>
        </p>
        <p>
          <span className="text-arch-line/60">DISCIPLINE</span>
          <br />
          {drawingMeta.discipline}
        </p>
        <p className="text-right">
          <span className="text-arch-line/60">SCALE</span>
          <br />
          {drawingMeta.scale}
        </p>
        <p>
          <span className="text-arch-line/60">DATE</span>
          <br />
          {date}
        </p>
        <p className="text-right">
          <span className="text-arch-line/60">REV</span>
          <br />
          {drawingMeta.rev}
        </p>
      </div>
    </div>
  );
}
