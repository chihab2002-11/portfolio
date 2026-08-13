import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[clamp(2rem,10vw,2.75rem)] font-bold leading-[0.98] text-[var(--text-primary)] sm:text-4xl lg:text-[2.75rem] lg:leading-[0.95]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
