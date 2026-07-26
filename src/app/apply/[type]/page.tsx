import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SubHeader } from "@/components/site/sub-header";
import { ApplicationForm } from "@/components/site/application-form";
import { Footer } from "@/components/site/footer";
import { APPLICATIONS, getApplication, EVENT } from "@/lib/content";

export function generateStaticParams() {
  return APPLICATIONS.map((a) => ({ type: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const a = getApplication(type);
  if (!a) return { title: "Application not found" };
  return {
    title: a.label,
    description: a.tagline,
  };
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const a = getApplication(type);
  if (!a) notFound();

  return (
    <>
      <SubHeader backHref="/apply" backLabel="All applications" />
      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-[1400px] px-6 pt-28 sm:px-10 sm:pt-36"
      >
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label">Apply</p>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl">
                {a.label}
              </h1>
              <p className="mt-6 max-w-sm font-grotesk text-sm leading-relaxed text-ink-soft">
                {a.description}
              </p>

              <dl className="mt-12 space-y-5">
                <div className="flex items-baseline gap-4 border-t border-line pt-4">
                  <dt className="w-28 shrink-0 font-grotesk text-xs uppercase tracking-[0.2em] text-ink-faint">
                    When
                  </dt>
                  <dd className="font-display text-xl">{EVENT.dates}</dd>
                </div>
                <div className="flex items-baseline gap-4 border-t border-line pt-4">
                  <dt className="w-28 shrink-0 font-grotesk text-xs uppercase tracking-[0.2em] text-ink-faint">
                    Where
                  </dt>
                  <dd className="font-display text-xl">{EVENT.city}</dd>
                </div>
              </dl>

              <div className="mt-12 flex flex-wrap gap-6 border-t border-line pt-6">
                {APPLICATIONS.filter((o) => o.slug !== a.slug).map((o) => (
                  <a
                    key={o.slug}
                    href={`/apply/${o.slug}`}
                    className="editorial-link text-xs"
                  >
                    Apply as {o.short}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ApplicationForm
                formName={`application-${a.slug}`}
                fields={a.fields}
              />
            </Reveal>
          </div>
        </div>

        <p className="mt-24 label pb-16">
          {EVENT.edition} — {EVENT.dates}
        </p>
      </main>
      <Footer />
    </>
  );
}
