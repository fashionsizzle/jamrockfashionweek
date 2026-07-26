import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SubHeader } from "@/components/site/sub-header";
import { Footer } from "@/components/site/footer";
import { APPLICATIONS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to present, walk, or style at Jamrock Fashion Week — designer, model, and stylist applications.",
};

export default function ApplyIndexPage() {
  return (
    <>
      <SubHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 sm:pt-36"
      >
        <Reveal className="border-t border-line pt-10">
          <p className="label">Applications</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            Take part
          </h1>
          <p className="mt-6 max-w-xl font-grotesk text-sm leading-relaxed text-ink-soft">
            Jamrock is built from the people who make it — designers, models,
            and stylists from across the island and the diaspora. Choose an
            application below.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-3">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <Link href={`/apply/${a.slug}`} className="group block">
                <div className="flex aspect-[4/5] flex-col justify-between border border-line p-6 transition-colors group-hover:border-ink">
                  <span className="label">{a.short}</span>
                  <div>
                    <p className="font-display text-3xl leading-tight">
                      {a.label}
                    </p>
                    <p className="mt-3 font-grotesk text-sm leading-relaxed text-ink-soft">
                      {a.tagline}
                    </p>
                    <span className="editorial-link mt-6 inline-block text-xs">
                      Apply now
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-line pb-16" />
      </main>
      <Footer />
    </>
  );
}
