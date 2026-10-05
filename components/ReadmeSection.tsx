import { ReactNode } from "react";

type ReadmeSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function ReadmeSection({ id, title, children }: ReadmeSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="group flex items-baseline gap-2 border-b border-readme-border pb-2 font-mono text-lg text-readme-heading">
        <span className="text-readme-muted select-none">##</span>
        <span>{title}</span>
        <a
          href={`#${id}`}
          className="ml-1 text-sm text-readme-muted opacity-0 transition-opacity group-hover:opacity-100"
          aria-label={`Link to ${title} section`}
        >
          #
        </a>
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
