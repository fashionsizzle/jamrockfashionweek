"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";

const VIDEO_ID = "IZ-ymk_JGsE";
const START = 60; // seconds — begin at 1:00

type YTPlayer = {
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy?: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement,
        opts: Record<string, unknown>,
      ) => YTPlayer;
      PlayerState: { ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

/**
 * Full-bleed, cover-fit YouTube background for the hero. Muted autoplay (so
 * browsers allow it), no controls, and looped from START on every cycle via
 * the IFrame API. Skipped entirely under prefers-reduced-motion.
 */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const mountRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<YTPlayer | null>(null);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (reduce) return;
    let cancelled = false;

    const create = () => {
      if (cancelled || !mountRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(mountRef.current, {
        videoId: VIDEO_ID,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          start: START,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            e.target.mute();
            e.target.seekTo(START, true);
            e.target.playVideo();
            setReady(true);
          },
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            if (window.YT && e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(START, true);
              e.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      create();
    } else {
      if (!document.getElementById("yt-iframe-api")) {
        const s = document.createElement("script");
        s.id = "yt-iframe-api";
        s.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(s);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        create();
      };
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="hero-video absolute inset-0"
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity 1.2s ease",
      }}
    >
      <div ref={mountRef} />
    </div>
  );
}
