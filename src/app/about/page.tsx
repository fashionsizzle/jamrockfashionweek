import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SubHeader } from "@/components/site/sub-header";
import { Footer } from "@/components/site/footer";
import { EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jamrock Fashion Week — the world's stage for island creativity.",
};

export default function AboutPage() {
  return (
    <>
      <SubHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 sm:pt-36"
      >
        <Reveal className="border-t border-line pt-10">
          <p className="label">About</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            The world&apos;s stage
            <br />
            <span className="italic">for island creativity.</span>
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label">Our story</p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <Reveal delay={0.06}>
              <p className="max-w-3xl font-display text-2xl leading-[1.3] tracking-[-0.01em] sm:text-[1.7rem]">
                Rooted in heritage yet made for the world, it brings together
                designers, artisans, creatives, editors, buyers, and cultural
                leaders to experience the evolution of Caribbean fashion.
                This is more than a fashion week. It is the world&apos;s
                stage for island creativity. What follows is its story.
              </p>
            </Reveal>
          </div>
        </div>

        <p className="mt-24 border-t border-line pb-16 pt-10 label">
          {EVENT.edition} — {EVENT.dates}
        </p>
      </main>
      <Footer />
    </>
  );
}
