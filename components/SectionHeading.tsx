type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-24 mb-12 md:mb-16">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-stage-amber">
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl leading-none tracking-wide text-white md:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-lg text-neutral-400">{subtitle}</p>
      ) : null}
    </div>
  );
}
