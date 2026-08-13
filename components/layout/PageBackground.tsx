"use client";

export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-cream)]"
    >
      <div className="absolute inset-0 bg-[var(--bg-cream)]" />
      <div className="absolute left-3 top-24 h-24 w-24 rounded-full border-[2px] border-[var(--border-color)] bg-[var(--accent-pink)] opacity-20 sm:left-8 sm:top-20 sm:h-40 sm:w-40 sm:opacity-30" />
      <div className="absolute right-3 top-1/3 h-28 w-28 rounded-[40%] border-[2px] border-[var(--border-color)] bg-[var(--bg-sage)] opacity-30 sm:right-12 sm:h-56 sm:w-56 sm:opacity-60" />
      <div className="absolute bottom-20 left-1/4 h-24 w-24 rounded-[32%] border-[2px] border-[var(--border-color)] bg-[var(--accent-yellow)] opacity-20 sm:left-1/3 sm:h-44 sm:w-44 sm:opacity-30" />
    </div>
  );
}
