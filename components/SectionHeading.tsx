type Props = {
  id: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: Props) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-lab-accent">
        Research log · {id}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-lab-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-lab-sub">{subtitle}</p>
    </header>
  );
}
