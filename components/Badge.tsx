type BadgeProps = {
  label: string;
  tone?: "default" | "accent";
};

export function Badge({ label, tone = "default" }: BadgeProps) {
  return (
    <span
      className={
        tone === "accent"
          ? "readme-badge border-readme-accent/40 text-readme-accent"
          : "readme-badge"
      }
    >
      {label}
    </span>
  );
}
