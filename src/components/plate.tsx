import * as React from "react";
import { cn } from "@/lib/utils";

type PlateProps = {
  /** Two-digit index shown on the placeholder plate, e.g. "03". */
  index?: string;
  /** Caption rendered along the lower edge. */
  caption?: string;
  /** Optional photograph (local path under /public, or remote URL). */
  src?: string;
  alt?: string;
  /** Visual key — controls the duotone of the placeholder. */
  tone?: "ash" | "noir" | "bone";
  className?: string;
  /** Render the oversized index numeral on the placeholder. */
  showIndex?: boolean;
  priority?: boolean;
  /** Editorial monochrome treatment on real photos (default true). */
  mono?: boolean;
  /** object-position for the photo, e.g. "50% 30%" — useful for portraits. */
  focus?: string;
};

const TONES: Record<
  NonNullable<PlateProps["tone"]>,
  { bg: string; fg: string; sub: string }
> = {
  ash: { bg: "#2b2723", fg: "#e7e2d8", sub: "#9a9388" },
  noir: { bg: "#100e0c", fg: "#d8d2c6", sub: "#857f74" },
  bone: { bg: "#ddd8ce", fg: "#2a2620", sub: "#6f695e" },
};

/**
 * Full-bleed editorial image plate.
 * When `src` is provided it renders the photograph (cover) under a fine grain.
 * Otherwise it renders an art-directed placeholder so the layout never breaks
 * and never falls back to a cartoon icon — drop a real runway photo in later
 * by passing `src`.
 */
export function Plate({
  index,
  caption,
  src,
  alt,
  tone = "ash",
  className,
  showIndex = true,
  priority,
  mono = true,
  focus = "50% 35%",
}: PlateProps) {
  const t = TONES[tone];
  const dark = tone !== "bone";

  return (
    <figure
      className={cn(
        "relative isolate grain overflow-hidden",
        dark && "grain-dark",
        className,
      )}
      style={{ backgroundColor: t.bg }}
    >
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt ?? caption ?? ""}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: focus,
              filter: mono
                ? "grayscale(1) contrast(1.05) brightness(0.98)"
                : undefined,
            }}
          />
          {/* fine grain over the photo */}
          <span aria-hidden className="grain grain-dark absolute inset-0" />
          {/* vignette to seat the image in the page */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{ boxShadow: "inset 0 0 160px rgba(0,0,0,0.5)" }}
          />
        </>
      ) : (
        <div className="absolute inset-0">
          {/* hairline frame */}
          <span
            aria-hidden
            className="absolute inset-4 border"
            style={{ borderColor: t.sub, opacity: 0.4 }}
          />
          {showIndex && index ? (
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display leading-none"
              style={{
                color: t.fg,
                fontSize: "clamp(4rem, 16vw, 11rem)",
                opacity: 0.9,
              }}
            >
              {index}
            </span>
          ) : null}
        </div>
      )}

      {caption ? (
        <figcaption
          className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4"
          style={{ color: src ? "#efece5" : t.sub }}
        >
          <span className="label" style={{ color: "inherit" }}>
            {caption}
          </span>
          {index ? (
            <span className="label" style={{ color: "inherit" }}>
              {index}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
