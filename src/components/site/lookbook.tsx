"use client";

import { useEffect, useRef, useState } from "react";
import { Plate } from "@/components/plate";
import { LOOKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Lookbook() {
  const trackRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(LOOKS.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) {
      const delta =
        card.getBoundingClientRect().left - track.getBoundingClientRect().left;
      track.scrollTo({ left: track.scrollLeft + delta, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackLeft = track.getBoundingClientRect().left;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const dist = Math.abs(el.getBoundingClientRect().left - trackLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="looks"
      className="mt-32 sm:mt-44"
      aria-label="The looks — runway archive"
      aria-roledescription="carousel"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
          <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            The looks
          </h2>

          <div className="flex items-end gap-6 pb-2">
            <p className="label max-w-xs lg:text-right">
              III — From the floor. Scroll the archive.
            </p>

            <div className="flex items-center gap-3">
              <span className="label tabular-nums text-ink-faint">
                {String(active + 1).padStart(2, "0")} / {String(LOOKS.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollToIndex(active - 1)}
                  disabled={active === 0}
                  aria-label="Previous look"
                  className="flex h-9 w-9 items-center justify-center border border-line transition-opacity disabled:opacity-30"
                >
                  <ArrowIcon flip />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToIndex(active + 1)}
                  disabled={active === LOOKS.length - 1}
                  aria-label="Next look"
                  className="flex h-9 w-9 items-center justify-center border border-line transition-opacity disabled:opacity-30"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* full-bleed horizontal carousel */}
      <ol
        ref={trackRef}
        className="mt-14 flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-6 [scrollbar-width:none] sm:gap-6 sm:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {LOOKS.map((look, i) => (
          <li
            key={look.no}
            className={cn(
              "group w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[30vw]",
              "transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-90",
            )}
          >
            <Plate
              index={look.no}
              tone={look.tone}
              src={look.src}
              caption={look.designer}
              className="aspect-[3/4] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[0.99]"
            />
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
              <p className="font-display text-xl leading-none">
                {look.designer}
              </p>
              <span className="label shrink-0">{look.no}</span>
            </div>
            <p className="mt-2 font-grotesk text-sm text-ink-soft">
              {look.look}
            </p>
          </li>
        ))}
        <li aria-hidden className="w-2 shrink-0 sm:w-6" />
      </ol>

      <div className="mx-auto mt-12 max-w-[1400px] px-6 sm:px-10">
        <div className="rule" />
      </div>
    </section>
  );
}

function ArrowIcon({ flip }: { flip?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={flip ? "rotate-180" : undefined}
      aria-hidden
    >
      <path
        d="M2 8H14M14 8L9 3M14 8L9 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
