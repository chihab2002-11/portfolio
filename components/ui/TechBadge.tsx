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
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs transition-colors duration-300",
        variant === "default" &&
          "border-subtle bg-white text-text-secondary hover:border-accent/20 hover:text-text-primary",
        variant === "accent" &&
          "border-accent/20 bg-accent/5 text-accent hover:border-accent/35",
        variant === "mono" &&
          "border-subtle bg-bg-tertiary font-mono text-[11px] uppercase tracking-wider text-text-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
