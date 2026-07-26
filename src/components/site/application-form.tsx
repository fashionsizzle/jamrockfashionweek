"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ApplicationField } from "@/lib/content";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");
}

function Field({ field }: { field: ApplicationField }) {
  const labelEl = (
    <span className="font-grotesk text-xs uppercase tracking-[0.2em] text-ink-faint">
      {field.label}
    </span>
  );

  if (field.type === "textarea") {
    return (
      <label className="block">
        {labelEl}
        <textarea
          name={field.name}
          required={field.required}
          rows={3}
          className="mt-3 w-full resize-none border-b border-line bg-transparent pb-3 font-display text-2xl outline-none transition-colors focus:border-ink"
        />
      </label>
    );
  }

  return (
    <label className="block">
      {labelEl}
      <input
        name={field.name}
        type={field.type}
        required={field.required}
        autoComplete={field.autoComplete}
        className="mt-3 w-full border-b border-line bg-transparent pb-3 font-display text-2xl outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}

export function ApplicationForm({
  formName,
  fields,
}: {
  formName: string;
  fields: ApplicationField[];
}) {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [pending, setPending] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setError(false);
    const form = e.currentTarget;
    const data: Record<string, string> = { "form-name": formName };
    new FormData(form).forEach((value, key) => {
      data[key] = String(value);
    });

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error(`${res.status}`);
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex min-h-[16rem] flex-col justify-center border-t border-line pt-10"
        >
          <p className="font-display text-4xl leading-tight">
            Application received.
          </p>
          <p className="mt-4 max-w-sm font-grotesk text-sm leading-relaxed text-ink-soft">
            Thank you — your submission has reached the office. We review
            every application and will follow up by email if it&apos;s a fit
            for this edition.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          name={formName}
          data-netlify="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          onSubmit={onSubmit}
          className="space-y-10"
        >
          <input type="hidden" name="form-name" value={formName} />
          {fields.map((f) => (
            <Field key={f.name} field={f} />
          ))}

          {error && (
            <p className="font-grotesk text-sm text-bordeaux">
              Something went wrong sending your application. Please try
              again, or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center gap-3 pt-2 disabled:opacity-50"
          >
            <span className="font-grotesk text-xs font-semibold uppercase tracking-[0.2em]">
              {pending ? "Sending…" : "Submit application"}
            </span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
