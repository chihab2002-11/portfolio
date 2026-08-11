"use client";

export function PageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-cream)]"
    >
      <div className="absolute inset-0 bg-[var(--bg-cream)]" />
      <div className="absolute left-8 top-20 h-40 w-40 rounded-full border-[2px] border-[var(--border-color)] bg-[var(--accent-pink)] opacity-30" />
      <div className="absolute right-12 top-1/3 h-56 w-56 rounded-[40%] border-[2px] border-[var(--border-color)] bg-[var(--bg-sage)] opacity-60" />
      <div className="absolute bottom-20 left-1/3 h-44 w-44 rounded-[32%] border-[2px] border-[var(--border-color)] bg-[var(--accent-yellow)] opacity-30" />
    </div>
  );
}
