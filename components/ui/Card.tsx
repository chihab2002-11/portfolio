import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border-[var(--border-width)] border-[var(--border-color)] bg-[var(--surface)] p-5 sm:p-6",
        hover &&
          "transition-transform duration-200 hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </div>
  );
}
