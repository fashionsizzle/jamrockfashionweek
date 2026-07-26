import Link from "next/link";
import { EVENT, NAV, APPLICATIONS, CONTACT, OFFICES } from "@/lib/content";
import { NewsletterTrigger } from "@/components/site/newsletter-popup";

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
];

export function Footer() {
  return (
    <footer data-theme="dark" className="bg-noir text-paper">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-y-12 border-t border-white/15 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="font-display text-4xl leading-none">
              Jamrock
              <span className="block text-base italic text-paper/60">
                Fashion Week
              </span>
            </p>
            <p className="mt-6 max-w-xs font-grotesk text-sm leading-relaxed text-paper/55">
              {EVENT.city} — {EVENT.dates}. An independent runway week, held
              each November since {2012}.
            </p>
          </div>

          <nav className="lg:col-span-2 lg:col-start-5">
            <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/40">
              Index
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 lg:col-start-7">
            <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/40">
              Apply
            </p>
            <ul className="mt-5 space-y-3">
              {APPLICATIONS.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/apply/${a.slug}`}
                    className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                  >
                    {a.short}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2 lg:col-start-9">
            <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/40">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              {CONTACT.map((c) =>
                c.href.startsWith("#") ? (
                  <li key={c.href}>
                    <a
                      href={c.href}
                      className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                    >
                      {c.label}
                    </a>
                  </li>
                ) : (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                    >
                      {c.label}
                    </Link>
                  </li>
                ),
              )}
              {OFFICES.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/contact#${o.slug}`}
                    className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                  >
                    {o.city}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 lg:col-start-11">
            <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/40">
              Follow
            </p>
            <ul className="mt-5 space-y-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <NewsletterTrigger className="font-display text-xl text-paper/85 transition-colors hover:text-paper" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/15 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-grotesk text-xs uppercase tracking-[0.18em] text-paper/40">
            © {EVENT.year} Jamrock Fashion Week
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-grotesk text-xs uppercase tracking-[0.18em] text-paper/40 transition-colors hover:text-paper/70"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-grotesk text-xs uppercase tracking-[0.18em] text-paper/40">
            Kingston · Jamaica
          </p>
        </div>
      </div>
    </footer>
  );
}
