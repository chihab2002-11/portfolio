import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  className?: string;
  variant?: "default" | "accent" | "mono";
};

export function TechBadge({
  label,
  className,
  variant = "default",
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-full border-[var(--border-width)] border-[var(--border-color)] bg-[var(--surface)] px-2.5 py-1 text-xs leading-snug text-[var(--text-secondary)] transition-colors duration-200",
        variant === "default" && "bg-[var(--surface)] text-[var(--text-primary)]",
        variant === "accent" && "bg-[var(--accent-yellow)] text-[var(--text-primary)]",
        variant === "mono" && "bg-[var(--bg-cream)] font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-primary)]",
        className,
      )}
    >
      {label}
    </span>
  );
}
