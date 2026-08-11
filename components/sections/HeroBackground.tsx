"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingShape } from "@/components/ui/AbstractBackground";
import { easeOutExpo } from "@/lib/utils";

const lineNeutral = "rgba(0,0,0,0.07)";
const pinkLine = "rgba(255,45,117,0.22)";

export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animate = mounted && !prefersReducedMotion;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-page-base" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,45,117,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,117,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(255,45,117,0.14),transparent_52%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_8%,rgba(255,107,74,0.11),transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,rgba(255,92,147,0.08),transparent_42%)]" />

      <FloatingShape
        className="absolute -left-20 top-[12%] h-72 w-72 rounded-[40%] bg-[radial-gradient(circle,rgba(255,45,117,0.12)_0%,transparent_70%)] blur-2xl"
        duration={26}
      />
      <FloatingShape
        className="absolute -right-16 top-[8%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,107,74,0.1)_0%,transparent_68%)] blur-3xl"
        delay={2}
        duration={30}
      />
      <FloatingShape
        className="absolute bottom-[15%] right-[10%] h-56 w-56 rotate-12 rounded-3xl border border-[rgba(255,45,117,0.1)] bg-[rgba(255,45,117,0.04)]"
        delay={1}
        duration={24}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,45,117,0)" />
            <stop offset="50%" stopColor="rgba(255,45,117,0.28)" />
            <stop offset="100%" stopColor="rgba(255,107,74,0.12)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M40,180 Q280,80 520,200 T960,160"
          stroke="url(#hero-line)"
          strokeWidth="1"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 0.55 }}
          transition={{ duration: animate ? 2.8 : 0, ease: easeOutExpo }}
        />
        <motion.path
          d="M80,520 Q360,420 640,500 T1120,440"
          stroke={lineNeutral}
          strokeWidth="1"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{
            duration: animate ? 3 : 0,
            delay: animate ? 0.3 : 0,
            ease: easeOutExpo,
          }}
        />
        <path
          d="M200,680 Q600,600 1000,660"
          stroke={pinkLine}
          strokeWidth="1"
          opacity="0.45"
        />

        {[
          "M120,140 L340,220 L560,160 L780,280 L1020,200",
          "M60,420 L280,360 L500,460 L720,380 L940,480",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="url(#hero-line)"
            strokeWidth="1"
            initial={animate ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{
              duration: animate ? 2.4 : 0,
              delay: animate ? index * 0.25 : 0,
              ease: easeOutExpo,
            }}
          />
        ))}

        {[
          [340, 220, "rgba(255,45,117,0.5)"],
          [560, 160, "rgba(255,107,74,0.45)"],
          [780, 280, "rgba(255,45,117,0.4)"],
          [500, 460, "rgba(255,92,147,0.38)"],
          [720, 380, "rgba(255,107,74,0.4)"],
        ].map(([cx, cy, fill], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx as number}
            cy={cy as number}
            r="3"
            fill={fill as string}
            initial={animate ? { opacity: 0, scale: 0 } : false}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{
              duration: animate ? 0.9 : 0,
              delay: animate ? 0.5 + index * 0.1 : 0,
              ease: easeOutExpo,
            }}
          />
        ))}

        <circle
          cx="980"
          cy="120"
          r="48"
          stroke="rgba(255,45,117,0.12)"
          strokeWidth="1"
        />
        <circle
          cx="180"
          cy="620"
          r="36"
          stroke={lineNeutral}
          strokeWidth="1"
        />
        <circle cx="980" cy="120" r="3.5" fill="rgba(255,45,117,0.35)" />
      </svg>

      <FloatingShape
        className="absolute right-[12%] top-[22%] opacity-65"
        delay={0.5}
        duration={20}
      >
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <circle cx="10" cy="30" r="3" fill="rgba(255,45,117,0.45)" />
          <circle cx="70" cy="20" r="2.5" fill="rgba(255,107,74,0.4)" />
          <path
            d="M10 30 L70 20"
            stroke="rgba(255,45,117,0.2)"
            strokeWidth="1"
          />
        </svg>
      </FloatingShape>

      <div
        className="absolute bottom-[18%] left-[6%] h-24 w-32 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,45,117,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,45,117,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "16px 16px",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg-primary/90 to-transparent" />
    </div>
  );
}
