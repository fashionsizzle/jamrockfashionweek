import { Reveal } from "@/components/reveal";
import { VENUES } from "@/lib/content";

export function Venues() {
  return (
    <section
      id="venues"
      className="mx-auto mt-32 max-w-[1400px] px-6 sm:mt-44 sm:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
        <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
          The city
        </h1>
        <p className="label max-w-xs pb-2 lg:text-right">
          V — Selected rooms and gardens across Kingston.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-16 lg:grid-cols-2">
        {VENUES.map((v) => (
          <Reveal
            key={v.no}
            className="grid grid-cols-12 gap-4 border-t border-line py-7"
          >
            <span className="col-span-2 font-grotesk text-sm tabular-nums text-ink-faint">
              {v.no}
            </span>
            <div className="col-span-10">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl leading-none sm:text-3xl">
                  {v.name}
                </h3>
                <span className="label shrink-0">{v.area}</span>
              </div>
              <p className="mt-3 font-grotesk text-sm leading-relaxed text-ink-soft">
                {v.use}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
