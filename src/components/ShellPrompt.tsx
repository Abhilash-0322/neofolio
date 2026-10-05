type ShellPromptProps = {
  path?: string;
  command?: string;
  className?: string;
};

export function ShellPrompt({
  path = "~",
  command,
  className = "",
}: ShellPromptProps) {
  return (
    <div className={`flex flex-wrap items-baseline gap-x-2 text-sm md:text-base ${className}`}>
      <span className="term-prompt">abhilash@portfolio</span>
      <span className="text-term-muted">:</span>
      <span className="term-path">{path}</span>
      <span className="text-term-muted">$</span>
      {command && <span className="text-term-text">{command}</span>}
    </div>
  );
}
