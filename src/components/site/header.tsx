"use client";

import * as React from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { NAV, EVENT } from "@/lib/content";
import { cn } from "@/lib/utils";

const HEADER_H = 68;

function Wordmark({
  onClick,
  dark,
}: {
  onClick?: () => void;
  dark?: boolean;
}) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="font-display text-lg leading-none tracking-tight"
    >
      Jamrock
      <span
        className={cn(
          "ml-1.5 align-middle text-[0.6rem] font-grotesk font-semibold uppercase tracking-[0.24em]",
          dark ? "text-paper/60" : "text-ink-faint",
        )}
      >
        Fashion Week
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [onDark, setOnDark] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Switch the header to light type while a dark section sits under it.
  React.useEffect(() => {
    const darks = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme="dark"]'),
    );
    const active = new Set<Element>();
    let io: IntersectionObserver | null = null;

    const build = () => {
      io?.disconnect();
      const bottom = Math.max(0, window.innerHeight - HEADER_H);
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) active.add(e.target);
            else active.delete(e.target);
          }
          setOnDark(active.size > 0);
        },
        { rootMargin: `0px 0px -${bottom}px 0px`, threshold: 0 },
      );
      darks.forEach((d) => io!.observe(d));
    };

    build();
    window.addEventListener("resize", build);
    return () => {
      io?.disconnect();
      window.removeEventListener("resize", build);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress — blends against whatever is beneath it */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-white mix-blend-difference"
        style={{ scaleX: scrollYProgress }}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          onDark
            ? "bg-transparent"
            : scrolled
              ? "bg-paper/85 backdrop-blur-sm"
              : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between border-b px-6 py-5 transition-colors duration-500 sm:px-10",
            scrolled
              ? onDark
                ? "border-white/15"
                : "border-line"
              : "border-transparent",
            onDark ? "text-paper" : "text-ink",
          )}
        >
          <Wordmark dark={onDark} />

          <nav className="hidden items-center gap-9 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-grotesk text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                  onDark
                    ? "text-paper/65 hover:text-paper"
                    : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#rsvp"
              className={cn("editorial-link", onDark && "text-paper")}
            >
              RSVP
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "font-grotesk text-xs font-semibold uppercase tracking-[0.2em] md:hidden",
              onDark ? "text-paper" : "text-ink",
            )}
            aria-label="Open index"
          >
            Index
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-noir text-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5 sm:px-10">
              <span className="font-display text-lg">Jamrock</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-grotesk text-xs font-semibold uppercase tracking-[0.2em]"
                aria-label="Close index"
              >
                Close
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2 px-6 sm:px-10">
              {[...NAV, { label: "RSVP", href: "#rsvp" }].map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="flex items-baseline justify-between border-b border-white/15 py-5"
                >
                  <span className="font-display text-4xl">{item.label}</span>
                  <span className="font-grotesk text-xs tracking-[0.2em] text-white/40">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <p className="absolute bottom-8 left-6 font-grotesk text-xs uppercase tracking-[0.2em] text-white/40 sm:left-10">
              {EVENT.dates} — {EVENT.city}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
