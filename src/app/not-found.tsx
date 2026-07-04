import Link from "next/link";
import { EVENT } from "@/lib/content";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="relative flex min-h-svh flex-col">
      <header className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-lg leading-none">
          Jamrock
          <span className="ml-1.5 align-middle font-grotesk text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ink-faint">
            Fashion Week
          </span>
        </Link>
        <span className="label">Error 404</span>
      </header>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 sm:px-10">
        <p className="label">Page not found</p>
        <h1 className="mt-6 font-display text-[18vw] leading-[0.9] tracking-[-0.02em] sm:text-[12vw] lg:text-[9rem]">
          Off the
          <br />
          <span className="italic">schedule</span>
        </h1>
        <p className="mt-8 max-w-md font-grotesk text-base leading-relaxed text-ink-soft">
          The page you were looking for has left the runway. It may have been an
          old link, or a show that has since wrapped.
        </p>
        <div className="mt-10 flex items-center gap-8">
          <Link href="/" className="editorial-link">
            Return home
          </Link>
          <Link
            href="/#designers"
            className="font-grotesk text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft transition-colors hover:text-ink"
          >
            See the designers
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10">
        <p className="label border-t border-line py-6">
          {EVENT.edition} — {EVENT.dates} — {EVENT.city}
        </p>
      </div>
    </main>
  );
}
