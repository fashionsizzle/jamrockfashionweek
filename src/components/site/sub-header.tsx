import Link from "next/link";

export function SubHeader({
  backHref = "/",
  backLabel = "Back to home",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-5 sm:px-10">
        <Link href="/" className="font-display text-lg leading-none">
          Jamrock
          <span className="ml-1.5 align-middle font-grotesk text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-ink-faint">
            Fashion Week
          </span>
        </Link>
        <Link href={backHref} className="editorial-link">
          {backLabel}
        </Link>
      </div>
    </header>
  );
}
