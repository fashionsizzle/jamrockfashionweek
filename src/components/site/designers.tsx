import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Plate } from "@/components/plate";
import { DESIGNERS, type Designer } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Editorial placement per designer — column span, offset and image ratio.
 *  Indexed to DESIGNERS order to build a deliberately irregular grid. */
type EntryLayout = {
  col: string;
  pad: string;
  ratio: string;
  tone: "ash" | "noir" | "bone";
};

const LAYOUT: EntryLayout[] = [
  { col: "lg:col-span-5", pad: "", ratio: "aspect-[3/4]", tone: "ash" },
  { col: "lg:col-span-4 lg:col-start-8", pad: "lg:mt-28", ratio: "aspect-[4/5]", tone: "bone" },
  { col: "lg:col-span-7", pad: "lg:-mt-16", ratio: "aspect-[16/10]", tone: "noir" },
  { col: "lg:col-span-4 lg:col-start-9", pad: "lg:mt-8", ratio: "aspect-[4/5]", tone: "ash" },
  { col: "lg:col-span-5", pad: "lg:mt-10", ratio: "aspect-[5/6]", tone: "bone" },
  { col: "lg:col-span-4 lg:col-start-8", pad: "lg:-mt-24", ratio: "aspect-[3/4]", tone: "noir" },
];

function Entry({ d, layout }: { d: Designer; layout: EntryLayout }) {
  return (
    <Reveal className={cn("group", layout.col, layout.pad)}>
      <Link href={`/designers/${d.slug}`} className="block">
        <Plate
          index={d.index}
          tone={layout.tone}
          src={d.src}
          className={cn(
            "w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[0.985]",
            layout.ratio,
          )}
        />
        <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-4">
          <h3 className="font-display text-2xl leading-none sm:text-3xl">
            {d.name}
          </h3>
          <span className="label shrink-0">{d.discipline}</span>
        </div>
        <p className="mt-3 max-w-md font-grotesk text-sm leading-relaxed text-ink-soft">
          {d.note}
        </p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="label">{d.origin}</p>
          <span className="editorial-link text-[0.7rem]">View house</span>
        </div>
      </Link>
    </Reveal>
  );
}

function ApplyBox() {
  return (
    <Reveal className="group lg:col-span-4 lg:col-start-9 lg:mt-8">
      <Link
        href="/apply/designer"
        className="flex aspect-[4/5] flex-col justify-between border border-line bg-noir p-6 text-paper transition-colors group-hover:border-paper/40 sm:aspect-[3/4]"
      >
        <span className="label text-paper/50">Apply</span>
        <div>
          <p className="font-display text-3xl leading-tight sm:text-4xl">
            Present your
            <br />
            <span className="italic">house</span>
          </p>
          <p className="mt-4 max-w-xs font-grotesk text-sm leading-relaxed text-paper/60">
            Jamrock is casting designers for the next edition. Submit your
            work for consideration.
          </p>
          <span className="editorial-link mt-6 inline-block text-[0.7rem] text-paper">
            Designer application
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function Designers() {
  return (
    <section
      id="designers"
      className="mx-auto mt-32 max-w-[1400px] px-6 sm:mt-44 sm:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
        <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.02em] sm:text-7xl">
          The designers
        </h2>
        <p className="label max-w-xs pb-2 lg:text-right">
          II — Six houses presenting this edition, drawn from across the island.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-12">
        {DESIGNERS.map((d, i) => (
          <Entry key={d.index} d={d} layout={LAYOUT[i]} />
        ))}
        <ApplyBox />
      </div>
    </section>
  );
}
