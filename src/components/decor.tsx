/** White label box with green italic letter-spaced text, e.g. "EXPERIENCE". */
export function SectionTag({ label }: { label: string }) {
  return (
    <div className="inline-block bg-white px-7 py-3 sm:px-9 sm:py-3.5">
      <span className="stretch-tall font-display text-base font-black tracking-[0.4em] text-race italic sm:text-lg">
        {label}
      </span>
    </div>
  );
}

/** Row of white skewed chips — the racing hazard stripe. */
export function HazardStripes({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center gap-2.5 ${className}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <span key={i} className="h-4 w-8 -skew-x-[28deg] bg-white sm:h-[18px] sm:w-10" />
      ))}
      <span className="h-4 w-3.5 -skew-x-[28deg] bg-white sm:h-[18px] sm:w-4" />
    </div>
  );
}

/** Two-row checkered flag strip for the page footer. */
export function CheckerStrip() {
  return (
    <div
      aria-hidden
      className="h-10 w-full"
      style={{
        backgroundImage: "repeating-conic-gradient(#d9d9d9 0% 25%, transparent 0% 50%)",
        backgroundSize: "2.5rem 2.5rem",
      }}
    />
  );
}
