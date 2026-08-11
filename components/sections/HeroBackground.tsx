"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingShape } from "@/components/ui/AbstractBackground";
import { easeOutExpo } from "@/lib/utils";

const lineNeutral = "rgba(17,17,17,0.18)";
const pinkLine = "rgba(17,17,17,0.18)";

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
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[var(--bg-cream)]"
    >
      <div className="absolute inset-0 bg-[var(--bg-cream)]" />
      <div className="absolute left-12 top-12 h-24 w-24 rounded-full border-[2px] border-[var(--border-color)] bg-[var(--accent-pink)] opacity-60" />
      <div className="absolute right-16 top-20 h-36 w-36 rounded-[40%] border-[2px] border-[var(--border-color)] bg-[var(--bg-sage)] opacity-70" />
      <div className="absolute bottom-16 right-24 h-28 w-28 rounded-[30%] border-[2px] border-[var(--border-color)] bg-[var(--accent-yellow)] opacity-55" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <motion.path
          d="M40,180 Q280,80 520,200 T960,160"
          stroke={pinkLine}
          strokeWidth="1.5"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: animate ? 2.8 : 0, ease: easeOutExpo }}
        />
        <motion.path
          d="M80,520 Q360,420 640,500 T1120,440"
          stroke={lineNeutral}
          strokeWidth="1.5"
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            duration: animate ? 3 : 0,
            delay: animate ? 0.3 : 0,
            ease: easeOutExpo,
          }}
        />

        {[
          "M120,140 L340,220 L560,160 L780,280 L1020,200",
          "M60,420 L280,360 L500,460 L720,380 L940,480",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke={lineNeutral}
            strokeWidth="1.2"
            initial={animate ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{
              duration: animate ? 2.4 : 0,
              delay: animate ? index * 0.25 : 0,
              ease: easeOutExpo,
            }}
          />
        ))}

        {[
          [340, 220, "rgba(17,17,17,0.9)"],
          [560, 160, "rgba(17,17,17,0.75)"],
          [780, 280, "rgba(17,17,17,0.8)"],
          [500, 460, "rgba(17,17,17,0.75)"],
          [720, 380, "rgba(17,17,17,0.75)"],
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
      </svg>

      <FloatingShape className="absolute right-[12%] top-[22%] opacity-70" delay={0.5} duration={20}>
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <circle cx="10" cy="30" r="3" fill="rgba(17,17,17,0.8)" />
          <circle cx="70" cy="20" r="2.5" fill="rgba(17,17,17,0.7)" />
          <path d="M10 30 L70 20" stroke="rgba(17,17,17,0.45)" strokeWidth="1.5" />
        </svg>
      </FloatingShape>

      <div className="absolute inset-x-0 bottom-0 h-16 border-t-[2px] border-[var(--border-color)] bg-[var(--bg-cream)]" />
    </div>
  );
}
