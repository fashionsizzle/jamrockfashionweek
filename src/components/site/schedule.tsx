import { Reveal } from "@/components/reveal";
import { SCHEDULE } from "@/lib/content";

export function Schedule() {
  return (
    <section
      id="schedule"
      className="mx-auto mt-32 max-w-[1400px] px-6 sm:mt-44 sm:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
        <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
          Schedule
        </h2>
        <p className="label max-w-xs pb-2 lg:text-right">
          IV — Five evenings, fourteen venues. Times are local to Kingston.
        </p>
      </div>

      <div className="mt-16">
        {SCHEDULE.map((day) => (
          <Reveal
            key={day.date}
            className="grid grid-cols-1 gap-x-8 border-t border-line py-10 lg:grid-cols-12"
          >
            <div className="mb-6 lg:col-span-3 lg:mb-0">
              <p className="font-display text-3xl leading-none">{day.date}</p>
              <p className="label mt-2">{day.day}</p>
            </div>

            <ol className="lg:col-span-9">
              {day.shows.map((show, i) => (
                <li
                  key={show.title}
                  className="group grid grid-cols-12 items-baseline gap-4 py-4"
                  style={{
                    borderTop:
                      i === 0 ? "none" : "1px solid var(--color-line)",
                  }}
                >
                  <span className="col-span-3 font-grotesk text-sm tabular-nums text-ink-soft sm:col-span-2">
                    {show.time}
                  </span>
                  <span className="col-span-9 font-display text-xl leading-tight sm:col-span-6 sm:text-2xl">
                    {show.title}
                  </span>
                  <span className="col-span-7 col-start-4 font-grotesk text-sm text-ink-soft sm:col-span-3 sm:col-start-auto">
                    {show.venue}
                  </span>
                  <span className="label col-span-5 col-start-8 text-right sm:col-span-1 sm:text-left">
                    {show.tag}
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
