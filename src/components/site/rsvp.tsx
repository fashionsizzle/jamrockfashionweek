"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { EVENT } from "@/lib/content";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "profession",
    label: "Profession / Publication",
    type: "text",
    autoComplete: "organization",
  },
] as const;

function Underline({
  label,
  type,
  name,
  autoComplete,
}: {
  label: string;
  type: string;
  name: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
        {label}
      </span>
      <input
        required
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="mt-3 w-full border-b border-white/25 bg-transparent pb-3 font-display text-2xl text-paper outline-none transition-colors placeholder:text-paper/25 focus:border-paper"
      />
    </label>
  );
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

export function Rsvp() {
  const [sent, setSent] = React.useState(false);
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <section
      id="rsvp"
      data-theme="dark"
      className="mt-32 bg-noir text-paper sm:mt-44"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-grotesk text-xs uppercase tracking-[0.24em] text-paper/45">
              VII — Attend
            </p>
            <h2 className="mt-8 font-display text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl">
              Request an
              <br />
              <span className="italic">invitation</span>
            </h2>
            <p className="mt-8 max-w-sm font-grotesk text-sm leading-relaxed text-paper/60">
              Jamrock is an invitation-only week. Editors, buyers, and
              collaborators are welcome to apply for accreditation. We respond
              to every request before the calendar opens.
            </p>

            <dl className="mt-12 space-y-5">
              <div className="flex items-baseline gap-4 border-t border-white/15 pt-4">
                <dt className="w-28 shrink-0 font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
                  When
                </dt>
                <dd className="font-display text-xl">{EVENT.dates}</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-white/15 pt-4">
                <dt className="w-28 shrink-0 font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
                  Where
                </dt>
                <dd className="font-display text-xl">{EVENT.city}</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-white/15 pt-4">
                <dt className="w-28 shrink-0 font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
                  Press
                </dt>
                <dd className="font-display text-xl italic">
                  press@jamrockfashionweek.com
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full min-h-[18rem] flex-col justify-center border-t border-white/20 pt-10"
                >
                  <p className="font-display text-4xl leading-tight">
                    Thank you.
                  </p>
                  <p className="mt-4 max-w-sm font-grotesk text-sm leading-relaxed text-paper/60">
                    Your request has reached the office. We will confirm
                    accreditation by email before the schedule is published.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  name="rsvp"
                  data-netlify="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setPending(true);
                    setError(false);
                    const data: Record<string, string> = {
                      "form-name": "rsvp",
                    };
                    new FormData(e.currentTarget).forEach((value, key) => {
                      data[key] = String(value);
                    });
                    try {
                      const res = await fetch("/__forms.html", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode(data),
                      });
                      if (!res.ok) throw new Error(`${res.status}`);
                      setSent(true);
                    } catch {
                      setError(true);
                    } finally {
                      setPending(false);
                    }
                  }}
                  className="space-y-10"
                >
                  <input type="hidden" name="form-name" value="rsvp" />
                  {FIELDS.map((f) => (
                    <Underline key={f.name} {...f} />
                  ))}

                  <label className="block">
                    <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/45">
                      Note (optional)
                    </span>
                    <textarea
                      name="note"
                      rows={2}
                      className="mt-3 w-full resize-none border-b border-white/25 bg-transparent pb-3 font-display text-2xl text-paper outline-none transition-colors focus:border-paper"
                    />
                  </label>

                  {error && (
                    <p className="font-grotesk text-sm text-bordeaux">
                      Something went wrong sending your request. Please try
                      again, or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="group inline-flex items-center gap-3 pt-2 disabled:opacity-50"
                  >
                    <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.2em]">
                      {pending ? "Sending…" : "Submit request"}
                    </span>
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
