import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--border-width)] border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--surface)] hover:opacity-90",
  secondary:
    "border-[var(--border-width)] border-[var(--border-color)] bg-[var(--bg-cream)] text-[var(--text-primary)] hover:bg-[var(--surface)]",
  ghost:
    "border-[var(--border-width)] border-transparent bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-color)] hover:bg-[var(--surface)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm sm:text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-cream)]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
