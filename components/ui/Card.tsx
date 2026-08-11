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
        "rounded-xl border border-subtle bg-white p-5 sm:p-6 card-shadow",
        hover &&
          "transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
