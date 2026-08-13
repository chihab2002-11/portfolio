"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function AIExplainerVisual() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const animate = mounted && !prefersReducedMotion;

  return (
    <div
      aria-label="AI Material Explainer interface mockup"
      className="overflow-hidden rounded-xl border border-subtle bg-white font-mono text-xs card-shadow"
    >
      <div className="border-b border-subtle px-4 py-2.5 text-[10px] uppercase tracking-wider text-text-muted">
        Material Explainer · Visual representation
      </div>

      <div className="space-y-0">
        <section className="border-b border-subtle p-4">
          <p className="text-[10px] uppercase tracking-wider text-text-muted">
            Material
          </p>
          <p className="mt-2 break-all text-sm text-text-primary">
            Introduction_to_Algebra.pdf
          </p>
        </section>

        <section className="border-b border-subtle p-4">
          <p className="text-[10px] uppercase tracking-wider text-accent">
            Local AI
          </p>
          <div className="mt-3 flex items-center gap-2 text-text-secondary">
            {animate ? (
              <motion.span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            ) : (
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
              />
            )}
            <span>Processing material...</span>
          </div>
          <p className="mt-3 text-text-muted">
            Explain this concept simply
          </p>
        </section>

        <section className="p-4">
          <p className="text-[10px] uppercase tracking-wider text-text-muted">
            Explanation
          </p>
          <p className="mt-2 leading-relaxed text-text-secondary">
            The concept can be understood as a relationship between unknown
            values and the operations that connect them...
          </p>
          {animate ? (
            <motion.span
              aria-hidden="true"
              className="mt-3 inline-block h-4 w-0.5 bg-accent"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            />
          ) : (
            <span
              aria-hidden="true"
              className="mt-3 inline-block h-4 w-0.5 bg-accent"
            />
          )}
        </section>
      </div>
    </div>
  );
}
