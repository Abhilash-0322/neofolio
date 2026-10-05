export function MemphisDecor() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-8 top-24 h-24 w-24 rotate-12 border-[3px] border-memphis-ink bg-memphis-pink" />
      <div className="absolute right-[8%] top-32 h-16 w-16 rounded-full border-[3px] border-memphis-ink bg-memphis-cyan" />
      <svg
        className="absolute left-[12%] top-[42%] h-14 w-14"
        viewBox="0 0 60 60"
        aria-hidden
      >
        <polygon
          points="30,5 55,55 5,55"
          fill="#FFE900"
          stroke="#0D0D0D"
          strokeWidth="3"
        />
      </svg>
      <svg
        className="absolute right-[20%] top-[55%] h-20 w-20 text-memphis-orange"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M10 50 Q30 10 50 50 T90 50"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
      </svg>
      <div className="absolute bottom-[30%] left-[5%] h-20 w-20 rounded-full border-[3px] border-dashed border-memphis-ink bg-memphis-lime/40" />
      <div className="absolute bottom-24 right-12 h-14 w-14 rotate-45 border-[3px] border-memphis-ink bg-memphis-purple" />
      <div className="dot-pattern absolute bottom-0 left-0 h-32 w-full opacity-[0.07]" />
    </div>
  );
}

export function SquiggleDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full text-memphis-ink ${className}`}
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 12 Q50 0 100 12 T200 12 T300 12 T400 12"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}
