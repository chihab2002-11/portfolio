"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AbstractDecorVariant =
  | "about"
  | "work"
  | "lumina"
  | "ai"
  | "skills"
  | "experience"
  | "contact";

type AbstractBackgroundProps = {
  variant: AbstractDecorVariant;
  className?: string;
};

const lineNeutral = "rgba(0,0,0,0.07)";
const pinkSoft = "rgba(255,45,117,0.16)";
const coralSoft = "rgba(255,107,74,0.14)";
const pinkLine = "rgba(255,45,117,0.14)";

function AboutDecor() {
  return (
    <>
      <div className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border border-black/[0.07]" />
      <div className="absolute -right-20 -top-20 h-[20rem] w-[20rem] rounded-full border border-[rgba(255,45,117,0.12)]" />
      <svg
        className="absolute -left-16 bottom-8 h-48 w-48 opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M20 160 Q100 40 180 120"
          stroke={pinkLine}
          strokeWidth="1"
        />
        <circle cx="20" cy="160" r="3.5" fill={pinkSoft} />
      </svg>
    </>
  );
}

function WorkDecor() {
  return (
    <>
      <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-black/[0.1] to-transparent" />
      <div className="absolute left-0 top-1/4 h-px w-1/4 bg-gradient-to-r from-black/[0.08] to-transparent" />
      <svg
        className="absolute right-8 top-16 h-32 w-32 opacity-55"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path d="M10 60 H110" stroke={lineNeutral} strokeWidth="1" />
        <path d="M60 10 V110" stroke={lineNeutral} strokeWidth="1" />
        <circle cx="60" cy="60" r="2.5" fill={pinkSoft} />
      </svg>
    </>
  );
}

function LuminaDecor() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(${lineNeutral} 1px, transparent 1px),
            linear-gradient(90deg, ${lineNeutral} 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 100% 0%, black, transparent)",
        }}
      />
      <svg
        className="absolute bottom-4 right-4 h-24 w-24 opacity-50"
        viewBox="0 0 100 100"
        fill="none"
      >
        <rect
          x="20"
          y="20"
          width="60"
          height="40"
          stroke={lineNeutral}
          strokeWidth="1"
        />
        <path d="M20 60 H80" stroke={pinkLine} strokeWidth="1" />
        <path d="M50 20 V60" stroke={lineNeutral} strokeWidth="1" />
      </svg>
    </>
  );
}

function AiDecor() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-50"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <circle cx="320" cy="60" r="3.5" fill={pinkSoft} />
      <circle cx="360" cy="100" r="3" fill={coralSoft} />
      <circle cx="280" cy="90" r="3" fill={pinkSoft} />
      <circle cx="340" cy="140" r="2.5" fill={lineNeutral} />
      <path
        d="M320 60 L360 100 M320 60 L280 90 M360 100 L340 140"
        stroke={pinkLine}
        strokeWidth="1"
      />
      <path d="M280 90 L340 140" stroke={lineNeutral} strokeWidth="1" />
    </svg>
  );
}

function SkillsDecor() {
  return (
    <>
      {[
        { top: "12%", left: "4%", size: 5 },
        { top: "20%", right: "6%", size: 4 },
        { bottom: "18%", left: "8%", size: 4 },
        { bottom: "24%", right: "4%", size: 5 },
      ].map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[rgba(255,45,117,0.22)]"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
      <svg
        className="absolute bottom-10 left-0 h-20 w-40 opacity-50"
        viewBox="0 0 160 80"
        fill="none"
      >
        <path d="M0 40 H160" stroke={lineNeutral} strokeWidth="1" />
        <path d="M40 0 V80" stroke={pinkLine} strokeWidth="1" />
      </svg>
      <svg
        className="absolute right-0 top-1/3 h-16 w-32 opacity-45"
        viewBox="0 0 128 64"
        fill="none"
      >
        <path d="M0 32 H128" stroke={lineNeutral} strokeWidth="1" />
        <circle cx="64" cy="32" r="2.5" fill={coralSoft} />
      </svg>
    </>
  );
}

function ExperienceDecor() {
  return (
    <>
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-[rgba(255,45,117,0.08)]" />
      <svg
        className="absolute right-6 top-12 h-28 w-28 opacity-50"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path
          d="M50 10 A40 40 0 0 1 90 50"
          stroke={pinkLine}
          strokeWidth="1"
        />
        <circle cx="50" cy="10" r="2.5" fill={pinkSoft} />
      </svg>
    </>
  );
}

function ContactDecor() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,117,0.12)_0%,transparent_65%)]" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,45,117,0.1)]" />
    </>
  );
}

const decorMap: Record<AbstractDecorVariant, () => ReactNode> = {
  about: AboutDecor,
  work: WorkDecor,
  lumina: LuminaDecor,
  ai: AiDecor,
  skills: SkillsDecor,
  experience: ExperienceDecor,
  contact: ContactDecor,
};

export function AbstractBackground({
  variant,
  className,
}: AbstractBackgroundProps) {
  const Decor = decorMap[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <Decor />
    </div>
  );
}

export function FloatingShape({
  children,
  className,
  delay = 0,
  duration = 22,
}: {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
