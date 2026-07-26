"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plate } from "@/components/plate";

const STORAGE_KEY = "jamrock-newsletter-seen";
const DELAY_MS = 6000;

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

export function NewsletterTrigger({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() =>
        window.dispatchEvent(new Event("open-newsletter-popup"))
      }
    >
      Newsletter
    </button>
  );
}

export function NewsletterPopup() {
  const [visible, setVisible] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [pending, setPending] = React.useState(false);

  const dismiss = React.useCallback(() => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage unavailable — nothing to persist
    }
  }, []);

  React.useEffect(() => {
    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    const timer = window.setTimeout(() => setVisible(true), DELAY_MS);

    const onOpenRequest = () => {
      window.clearTimeout(timer);
      setVisible(true);
    };
    window.addEventListener("open-newsletter-popup", onOpenRequest);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("open-newsletter-popup", onOpenRequest);
    };
  }, []);

  React.useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const email = new FormData(e.currentTarget).get("email");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "newsletter", email: String(email) }),
      });
      if (!res.ok) throw new Error(`${res.status}`);
      setSent(true);
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // localStorage unavailable — nothing to persist
      }
    } catch {
      setPending(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-noir/70 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={dismiss}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Newsletter signup"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-3xl grid-cols-1 border border-white/15 bg-noir text-paper sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]"
          >
            <Plate
              tone="noir"
              index="01"
              caption="Kingston, runway"
              className="hidden aspect-[3/4] w-full sm:block"
            />

            <div className="relative p-8 sm:p-10">
              <button
                type="button"
                onClick={dismiss}
                aria-label="Close"
                className="absolute right-5 top-5 font-grotesk text-xs uppercase tracking-[0.2em] text-paper/50 transition-colors hover:text-paper"
              >
                Close
              </button>

              {sent ? (
                <div className="pt-6">
                  <p className="font-display text-3xl leading-tight">
                    You&apos;re on the list.
                  </p>
                  <p className="mt-4 font-grotesk text-sm leading-relaxed text-paper/60">
                    We&apos;ll email you when the schedule and accreditation
                    open.
                  </p>
                </div>
              ) : (
                <>
                  <p className="label text-paper/45">Stay informed</p>
                  <p className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                    Get the calendar
                    <br />
                    <span className="italic">before it&apos;s public.</span>
                  </p>
                  <p className="mt-4 max-w-sm font-grotesk text-sm leading-relaxed text-paper/60">
                    Join the list for schedule announcements, designer
                    reveals, and accreditation windows.
                  </p>

                  <form
                    name="newsletter"
                    data-netlify="true"
                    onSubmit={onSubmit}
                    className="mt-8 flex flex-col gap-4"
                  >
                    <input type="hidden" name="form-name" value="newsletter" />
                    <label className="block">
                      <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
                        Email
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="mt-3 w-full border-b border-white/25 bg-transparent pb-3 font-display text-xl text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-paper"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={pending}
                      className="group inline-flex shrink-0 items-center gap-3 pt-2 disabled:opacity-50"
                    >
                      <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.2em]">
                        {pending ? "Sending…" : "Subscribe"}
                      </span>
                      <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                        →
                      </span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
