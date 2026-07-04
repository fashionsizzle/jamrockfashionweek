"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EVENT } from "@/lib/content";

const ease = [0.76, 0, 0.24, 1] as const;

export function Curtain() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = React.useState(true);
  const [lift, setLift] = React.useState(false);

  React.useEffect(() => {
    // Show once per browsing session, and never when reduced motion is set.
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("jfw_intro_seen");

    if (reduce || seen) {
      const skip = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(skip);
    }

    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => setLift(true), 1500);
    return () => window.clearTimeout(t);
  }, [reduce]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-noir text-paper"
      initial={{ y: "0%" }}
      animate={{ y: lift ? "-100%" : "0%" }}
      transition={{ duration: 0.9, ease }}
      onAnimationComplete={() => {
        if (lift) {
          document.body.style.overflow = "";
          window.sessionStorage.setItem("jfw_intro_seen", "1");
          setVisible(false);
        }
      }}
    >
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
      >
        <p className="text-center font-display text-4xl leading-none sm:text-6xl">
          Jamrock
          <span className="mt-2 block font-grotesk text-xs uppercase tracking-[0.4em] text-paper/55">
            Fashion Week
          </span>
        </p>
      </motion.div>

      <motion.p
        className="absolute bottom-10 font-grotesk text-xs uppercase tracking-[0.28em] text-paper/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {EVENT.dates}
      </motion.p>
    </motion.div>
  );
}
