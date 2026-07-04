"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Plate } from "@/components/plate";

export function Interstitial() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // gentle vertical parallax on the plate; text drifts the opposite way
  const plateY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative mt-32 h-[88svh] overflow-hidden bg-noir sm:mt-44"
    >
      <motion.div
        style={reduce ? undefined : { y: plateY }}
        className="absolute inset-0 scale-110"
      >
        <Plate
          tone="noir"
          showIndex={false}
          caption="Devon House Lawn — opening night"
          className="h-full w-full"
        />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="relative z-10 flex h-full items-center justify-center px-6"
      >
        <p className="max-w-4xl text-center font-display text-[8vw] leading-[1.02] text-paper sm:text-5xl lg:text-6xl">
          “Dress is the first language. <span className="italic">Here it is
          spoken</span> in the accent of the island.”
        </p>
      </motion.div>

      <span className="absolute bottom-8 left-6 z-10 font-grotesk text-xs uppercase tracking-[0.24em] text-paper/50 sm:left-10">
        Interlude
      </span>
    </section>
  );
}
