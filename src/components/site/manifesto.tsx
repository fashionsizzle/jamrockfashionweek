import { Reveal } from "@/components/reveal";
import { STATS } from "@/lib/content";

export function Manifesto() {
  return (
    <section id="shows" className="mx-auto max-w-[1400px] px-6 sm:px-10">
      <div className="border-t border-line pt-10">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label">I — The Week</p>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <Reveal>
              <p className="font-display text-3xl leading-[1.18] tracking-[-0.01em] sm:text-4xl lg:text-[2.9rem]">
                Jamrock&apos;s journey started on the runways of New York
                City. Our aspiration is to establish that same platform in
                Jamaica, where the island&apos;s designers, artisans and
                makers can present their work in the city that shaped their
                creative vision.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl font-grotesk text-base leading-relaxed text-ink-soft">
                No imported headliners, no borrowed format. Each November the
                houses return, the graduates arrive, and the editors fly in to
                see what the island has made. What follows is the record of it.
              </p>
            </Reveal>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="pr-4">
              <dt className="font-display text-5xl leading-none sm:text-6xl">
                {s.figure}
              </dt>
              <dd className="label mt-3">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
