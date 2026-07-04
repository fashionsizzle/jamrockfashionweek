import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Plate } from "@/components/plate";
import { Footer } from "@/components/site/footer";
import {
  DESIGNERS,
  getDesigner,
  designerNeighbours,
  EVENT,
} from "@/lib/content";

export function generateStaticParams() {
  return DESIGNERS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDesigner(slug);
  if (!d) return { title: "Designer not found" };
  return {
    title: d.name,
    description: `${d.name} — ${d.discipline}, ${d.origin}. ${d.note}`,
  };
}

function SubHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-lg leading-none">
          Jamrock
          <span className="ml-1.5 align-middle font-grotesk text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ink-faint">
            Fashion Week
          </span>
        </Link>
        <Link href="/#designers" className="editorial-link">
          All designers
        </Link>
      </div>
    </header>
  );
}

const LOOK_LAYOUT = [
  "lg:col-span-7",
  "lg:col-span-5 lg:mt-16",
  "lg:col-span-5",
  "lg:col-span-7 lg:-mt-10",
];

export default async function DesignerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDesigner(slug);
  if (!d) notFound();

  const { prev, next } = designerNeighbours(slug);
  const [lead, ...rest] = d.looks;

  return (
    <>
      <SubHeader />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 sm:pt-36"
      >
        {/* masthead */}
        <Reveal>
          <p className="label">
            Designer {d.index} / {String(DESIGNERS.length).padStart(2, "0")} —{" "}
            {d.collection}
          </p>
          <h1 className="mt-6 font-display text-[14vw] leading-[0.9] tracking-[-0.02em] sm:text-8xl">
            {d.name}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl italic leading-snug text-ink-soft sm:text-3xl">
            {d.note}
          </p>
        </Reveal>

        {/* lead plate */}
        <Reveal delay={0.1} className="mt-14">
          <Plate
            index={lead.no}
            tone={lead.tone}
            src={d.src}
            caption={`${d.name} — ${lead.title}`}
            priority
            className="aspect-[16/10] w-full"
          />
        </Reveal>

        {/* profile + details */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="label">Profile</p>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-display text-2xl leading-[1.3] tracking-[-0.01em] sm:text-[1.7rem]">
                {d.bio}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-3">
            <Reveal delay={0.05}>
              <dl className="space-y-4">
                {[
                  ["Discipline", d.discipline],
                  ["Based", d.origin],
                  ["Established", d.established],
                  ["Collection", d.collection],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-line pt-3">
                    <dt className="label">{k}</dt>
                    <dd className="mt-1 font-display text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* the looks */}
        {rest.length > 0 && (
          <section className="mt-28">
            <h2 className="border-t border-line pt-10 font-display text-4xl tracking-[-0.02em] sm:text-6xl">
              The collection
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
              {rest.map((look, i) => (
                <Reveal
                  key={look.no}
                  delay={(i % 2) * 0.06}
                  className={LOOK_LAYOUT[i % LOOK_LAYOUT.length]}
                >
                  <Plate
                    index={look.no}
                    tone={look.tone}
                    caption={look.title}
                    className="aspect-[4/5] w-full"
                  />
                  <p className="mt-4 border-t border-line pt-3 font-grotesk text-sm text-ink-soft">
                    {look.title}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* prev / next */}
        <nav className="mt-28 grid grid-cols-2 gap-px border-t border-line pt-10">
          <Link href={`/designers/${prev.slug}`} className="group block pr-4">
            <span className="label">Previous</span>
            <p className="mt-2 font-display text-2xl leading-tight transition-opacity group-hover:opacity-60 sm:text-3xl">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/designers/${next.slug}`}
            className="group block pl-4 text-right"
          >
            <span className="label">Next</span>
            <p className="mt-2 font-display text-2xl leading-tight transition-opacity group-hover:opacity-60 sm:text-3xl">
              {next.name}
            </p>
          </Link>
        </nav>

        <p className="mt-16 label">
          {EVENT.edition} — {EVENT.dates}
        </p>
      </main>
      <Footer />
    </>
  );
}
