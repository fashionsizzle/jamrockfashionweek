import * as React from "react";
import { SubHeader } from "@/components/site/sub-header";
import { Footer } from "@/components/site/footer";

export function LegalLayout({
  title,
  effective,
  children,
}: {
  title: string;
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SubHeader backHref="/" backLabel="Back to home" />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[820px] px-6 pt-32 pb-32 sm:px-10 sm:pt-40"
      >
        <p className="label">Legal</p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 font-grotesk text-sm text-ink-faint">
          Effective {effective}
        </p>

        <div className="mt-14 space-y-10 border-t border-line pt-10 font-grotesk text-[0.95rem] leading-relaxed text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl tracking-[-0.01em] text-ink">
        {heading}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
