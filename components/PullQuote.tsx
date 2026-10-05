type PullQuoteProps = {
  quote: string;
  attribution: string;
};

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <figure
      className="my-12 border-y-2 border-ink py-8 md:my-16 md:py-10"
      aria-label="Pull quote"
    >
      <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl lg:text-4xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-sans text-xs uppercase tracking-[0.25em] text-ink/60">
        {attribution}
      </figcaption>
    </figure>
  );
}
