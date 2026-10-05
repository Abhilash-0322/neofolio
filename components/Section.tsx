type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-serif text-lg text-ink mb-8 pb-3 border-b border-rule">
        {title}
      </h2>
      {children}
    </section>
  );
}
