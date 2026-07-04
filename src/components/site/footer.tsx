import { EVENT, NAV } from "@/lib/content";

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Newsletter", href: "#" },
];

export function Footer() {
  return (
    <footer data-theme="dark" className="bg-noir text-paper">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-y-12 border-t border-white/15 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
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

          <nav className="lg:col-span-3 lg:col-start-7">
            <p className="font-grotesk text-xs uppercase tracking-[0.2em] text-paper/40">
              Index
            </p>
            <ul className="mt-5 space-y-3">
              {[...NAV, { label: "RSVP", href: "#rsvp" }].map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="font-display text-xl text-paper/85 transition-colors hover:text-paper"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
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
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-grotesk text-xs uppercase tracking-[0.18em] text-paper/40">
            © {EVENT.year} Jamrock Fashion Week
          </p>
          <p className="font-grotesk text-xs uppercase tracking-[0.18em] text-paper/40">
            Kingston · Jamaica
          </p>
        </div>
      </div>
    </footer>
  );
}
