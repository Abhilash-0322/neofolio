type SkillTileProps = {
  label: string;
};

export function SkillTile({ label }: SkillTileProps) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg border border-surface-border bg-surface-raised px-2.5 py-1.5 text-xs font-medium text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-text-primary"
    >
      {label}
    </span>
  );
}
