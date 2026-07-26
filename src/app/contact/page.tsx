import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SubHeader } from "@/components/site/sub-header";
import { Footer } from "@/components/site/footer";
import { OFFICES, EVENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Jamrock Fashion Week offices in Kingston, New York City, and London.",
};

export default function ContactPage() {
  return (
    <>
      <SubHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 sm:pt-36"
      >
        <Reveal className="border-t border-line pt-10">
          <p className="label">Contact</p>
          <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            Our offices
          </h1>
          <p className="mt-6 max-w-xl font-grotesk text-sm leading-relaxed text-ink-soft">
            Jamrock is run from Kingston, with partner offices in New York
            City and London. Reach the right office below, or use the{" "}
            <a href="/#rsvp" className="editorial-link text-[0.85rem]">
              RSVP
            </a>{" "}
            form for accreditation requests.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-10 sm:grid-cols-3">
          {OFFICES.map((o, i) => (
            <div key={o.city} id={o.slug} className="scroll-mt-28">
              <Reveal delay={i * 0.06}>
                <p className="label">{o.region}</p>
                <p className="mt-4 font-display text-4xl leading-none">
                  {o.city}
                </p>
                <p className="mt-4 max-w-xs font-grotesk text-sm leading-relaxed text-ink-soft">
                  {o.note}
                </p>
                <a
                  href={`mailto:${o.email}`}
                  className="editorial-link mt-6 inline-block text-xs"
                >
                  {o.email}
                </a>
              </Reveal>
            </div>
          ))}
        </div>

        <p className="mt-24 border-t border-line pb-16 pt-10 label">
          {EVENT.edition} — {EVENT.dates}
        </p>
      </main>
      <Footer />
    </>
  );
}
