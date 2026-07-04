import { TICKER } from "@/lib/content";

function Diamond() {
  return (
    <span
      aria-hidden
      className="mx-8 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-paper/50 sm:mx-12"
    />
  );
}

function Sequence() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER.map((phrase) => (
        <span key={phrase} className="flex shrink-0 items-center">
          <span className="font-display text-3xl italic leading-none text-paper sm:text-5xl">
            {phrase}
          </span>
          <Diamond />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <section
      aria-label="Jamrock Fashion Week"
      className="overflow-hidden border-y border-white/10 bg-noir py-7 sm:py-9"
    >
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {/* duplicated for a seamless -50% loop */}
        <Sequence />
        <Sequence />
      </div>
    </section>
  );
}
