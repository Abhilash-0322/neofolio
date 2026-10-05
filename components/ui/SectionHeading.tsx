type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={
        centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-lavender">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-lg text-muted">{description}</p>
      ) : null}
    </div>
  );
}
