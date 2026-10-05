type ArticleHeadlineProps = {
  kicker?: string;
  headline: string;
  subhead?: string;
  id?: string;
  size?: "lead" | "section" | "column";
};

export function ArticleHeadline({
  kicker,
  headline,
  subhead,
  id,
  size = "section",
}: ArticleHeadlineProps) {
  const sizeClass =
    size === "lead"
      ? "text-3xl md:text-5xl lg:text-6xl"
      : size === "column"
        ? "text-xl md:text-2xl"
        : "text-2xl md:text-4xl";

  return (
    <header id={id} className="scroll-mt-24">
      {kicker && (
        <p className="mb-1 text-[11px] font-bold small-caps tracking-[0.2em] text-ink/70">
          {kicker}
        </p>
      )}
      <h2
        className={`font-headline font-bold leading-tight text-ink ${sizeClass}`}
      >
        {headline}
      </h2>
      {subhead && (
        <p className="mt-2 font-headline text-base font-medium italic text-ink/85 md:text-lg">
          {subhead}
        </p>
      )}
    </header>
  );
}
