"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Plate } from "@/components/plate";
import { CAMPAIGN } from "@/lib/content";

export function Campaign() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section
      ref={ref}
      aria-label="Campaign 2026"
      data-theme="dark"
      className="relative mt-32 h-[100svh] overflow-hidden bg-noir sm:mt-44"
    >
      <motion.div
        style={reduce ? undefined : { y: imgY }}
        className="absolute inset-0 scale-[1.12]"
      >
        <Plate
          src={CAMPAIGN.src}
          focus={CAMPAIGN.focus}
          tone="noir"
          showIndex={false}
          alt={CAMPAIGN.headline}
          className="h-full w-full"
        />
      </motion.div>

      {/* readability scrim along the bottom, no gradients elsewhere */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,11,0.78), rgba(10,10,11,0))",
        }}
      />

      <motion.div
        style={reduce ? undefined : { y: textY }}
        className="absolute inset-0 flex items-end"
      >
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-16 sm:px-10 sm:pb-20">
          <p className="font-grotesk text-xs uppercase tracking-[0.28em] text-paper/60">
            {CAMPAIGN.kicker}
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-[14vw] leading-[0.9] tracking-[-0.02em] text-paper sm:text-7xl lg:text-8xl">
            {CAMPAIGN.headline}
          </h2>
          <p className="mt-6 font-grotesk text-sm tracking-wide text-paper/55">
            {CAMPAIGN.credit}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
