import { Reveal } from "@/components/reveal";
import { PRESS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Press() {
  return (
    <section
      id="press"
      className="mx-auto mt-32 max-w-[1400px] px-6 sm:mt-44 sm:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
        <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
          In the press
        </h1>
        <p className="label max-w-xs pb-2 lg:text-right">
          VI — Selected notices from the last edition.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-20 lg:grid-cols-2">
        {PRESS.map((q, i) => (
          <Reveal
            key={q.source}
            delay={(i % 2) * 0.08}
            className={cn(i % 2 === 1 && "lg:mt-24")}
          >
            <figure>
              <blockquote className="font-display text-3xl leading-[1.16] tracking-[-0.01em] sm:text-[2.2rem]">
                <span className="text-ink-faint">“</span>
                {q.text}
                <span className="text-ink-faint">”</span>
              </blockquote>
              <figcaption className="mt-8 flex items-baseline gap-4 border-t border-line pt-4">
                <span className="font-display text-lg italic">{q.source}</span>
                <span className="label">{q.place}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
