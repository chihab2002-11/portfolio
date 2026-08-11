import { cn } from "@/lib/utils";
import {
  AbstractBackground,
  type AbstractDecorVariant,
} from "@/components/ui/AbstractBackground";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  decor?: AbstractDecorVariant;
};

export function Section({
  id,
  children,
  className,
  ariaLabel,
  decor,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative overflow-hidden py-20 sm:py-24 lg:py-28", className)}
    >
      {decor ? <AbstractBackground variant={decor} /> : null}
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
