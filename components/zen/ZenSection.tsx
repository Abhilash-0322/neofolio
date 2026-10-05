import { InkStroke } from "./InkStroke";

type ZenSectionProps = {
  id: string;
  kana?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ZenSection({
  id,
  kana,
  title,
  children,
  className = "",
}: ZenSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-24 md:py-32 ${className}`}
    >
      <header className="mb-14 md:mb-20">
        {kana && (
          <p
            className="mb-3 font-serif text-xs tracking-zen text-sumi-faint"
            lang="ja"
          >
            {kana}
          </p>
        )}
        <h2 className="font-serif text-2xl font-normal tracking-wide text-sumi md:text-3xl">
          {title}
        </h2>
        <InkStroke className="mt-6" />
      </header>
      {children}
    </section>
  );
}
