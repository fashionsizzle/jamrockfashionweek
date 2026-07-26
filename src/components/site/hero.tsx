"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HeroVideo } from "@/components/site/hero-video";
import { EVENT } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section
      id="top"
      data-theme="dark"
      className="relative flex min-h-svh flex-col overflow-hidden bg-noir text-paper"
    >
      <HeroVideo />

      {/* legibility scrims (kept to the video only — not decorative) */}
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10,10,11,0.34)" }}
      />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,11,0.92), rgba(10,10,11,0))",
        }}
      />
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,11,0.55), rgba(10,10,11,0))",
        }}
      />
      <span aria-hidden className="grain grain-dark absolute inset-0" />

      {/* content */}
      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-10 pt-28 sm:px-10 sm:pb-12">
        <motion.p
          {...rise(0.1)}
          className="label mb-6 text-paper/60"
        >
          {EVENT.edition} — {EVENT.city}
        </motion.p>

        <h1 className="font-display text-[15vw] leading-[0.9] tracking-[-0.02em] sm:text-[11vw] lg:text-[8vw]">
          <motion.span {...rise(0.18)} className="block">
            An archive
          </motion.span>
          <motion.span {...rise(0.28)} className="block italic">
            of the runway
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.42)}
          className="mt-7 max-w-md font-grotesk text-base leading-relaxed text-paper/75"
        >
          Five evenings of Caribbean design, presented across Kingston. New
          collections, new names, and the houses that built the calendar.
        </motion.p>

        <motion.div {...rise(0.52)} className="mt-9 flex items-center gap-8">
          <a href="#rsvp" className="editorial-link text-paper">
            Request an invitation
          </a>
          <Link
            href="/schedule"
            className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] text-paper/70 transition-colors hover:text-paper"
          >
            See the schedule
          </Link>
        </motion.div>

        {/* baseline meta row */}
        <motion.div
          {...rise(0.62)}
          className="mt-10 border-t border-white/20 pt-5"
        >
          <dl className="flex flex-wrap items-baseline justify-between gap-y-3">
            <div className="flex items-baseline gap-3">
              <dt className="label text-paper/55">Dates</dt>
              <dd className="font-display text-xl">{EVENT.dates}</dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="label text-paper/55">Location</dt>
              <dd className="font-display text-xl">
                <Link href="/contact" className="underline-offset-4 hover:underline">
                  {EVENT.city}
                </Link>
              </dd>
            </div>
            <div className="hidden items-baseline gap-3 sm:flex">
              <dt className="label text-paper/55">Status</dt>
              <dd className="font-display text-xl italic">Invitation only</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
