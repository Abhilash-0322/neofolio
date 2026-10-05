type Props = {
  id?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, subtitle }: Props) {
  return (
    <div className="mb-12">
      {id && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-magenta-glow/70">
          {id}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}
