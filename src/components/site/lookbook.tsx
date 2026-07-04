import { Plate } from "@/components/plate";
import { LOOKS } from "@/lib/content";

export function Lookbook() {
  return (
    <section
      id="looks"
      className="mt-32 sm:mt-44"
      aria-label="The looks — runway archive"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
          <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            The looks
          </h2>
          <p className="label max-w-xs pb-2 lg:text-right">
            III — From the floor. Scroll the archive.
          </p>
        </div>
      </div>

      {/* full-bleed horizontal scroller */}
      <div className="mt-14 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ol className="flex w-max snap-x snap-mandatory gap-5 px-6 sm:gap-6 sm:px-10">
          {LOOKS.map((look) => (
            <li
              key={look.no}
              className="group w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[30vw]"
            >
              <Plate
                index={look.no}
                tone={look.tone}
                src={look.src}
                caption={look.designer}
                className="aspect-[3/4] w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[0.99]"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
                <p className="font-display text-xl leading-none">
                  {look.designer}
                </p>
                <span className="label shrink-0">{look.no}</span>
              </div>
              <p className="mt-2 font-grotesk text-sm text-ink-soft">
                {look.look}
              </p>
            </li>
          ))}
          <li aria-hidden className="w-2 shrink-0 sm:w-6" />
        </ol>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] px-6 sm:px-10">
        <div className="rule" />
      </div>
    </section>
  );
}
