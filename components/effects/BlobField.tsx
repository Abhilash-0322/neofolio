import clsx from "clsx";

type BlobProps = {
  className?: string;
  color?: string;
  slow?: boolean;
};

export function Blob({ className, color, slow }: BlobProps) {
  return (
    <div
      aria-hidden
      className={clsx(
        "pointer-events-none absolute blur-3xl opacity-70",
        slow ? "animate-blob-slow" : "animate-blob",
        className
      )}
      style={{ background: color ?? "linear-gradient(135deg, #CDB4DB, #A2D2FF)" }}
    />
  );
}

export function BlobField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Blob
        className="left-[-8%] top-[12%] h-72 w-72 md:h-96 md:w-96"
        color="linear-gradient(145deg, #FFB5A7 0%, #FFC8DD 100%)"
      />
      <Blob
        slow
        className="right-[-5%] top-[28%] h-64 w-64 md:h-80 md:w-80"
        color="linear-gradient(160deg, #A2D2FF 0%, #B8E0D2 100%)"
      />
      <Blob
        className="bottom-[8%] left-[20%] h-56 w-56 opacity-50"
        color="linear-gradient(120deg, #CDB4DB 0%, #FFB5A7 80%)"
        slow
      />
    </div>
  );
}
