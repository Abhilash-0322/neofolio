import clsx from "clsx";

type MdChipProps = {
  children: React.ReactNode;
  className?: string;
};

export function MdChip({ children, className }: MdChipProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md-sm border border-md-outline-variant bg-md-surface-container-low px-3 py-1 md-label-large text-md-on-surface-variant",
        className
      )}
    >
      {children}
    </span>
  );
}
