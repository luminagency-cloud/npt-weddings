import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Married in Newport and the couple-first point of view behind the site.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
        About
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
        A couple-first wedding site for one of the country’s marquee wedding destinations.
      </h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-muted)]">
        <p>
          Married in Newport is being built as a better starting point for couples
          planning weddings in Newport, Rhode Island. The goal is not to launch
          a bloated marketplace and call it a planning resource.
        </p>
        <p>
          The goal is to make the early planning decisions easier: venue style,
          season, guest experience, overall feel, and then the right local vendor
          search once those priorities are clearer.
        </p>
        <p>
          That is why the first version stays narrow, curated, and useful instead
          of pretending to be comprehensive before it earns that right.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Link
          href="/planning"
          className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-line-strong)]"
        >
          <h2 className="text-xl font-semibold text-neutral-900">Start with planning</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            Use the planning section if the venue format, season, or weekend structure is still unsettled.
          </p>
        </Link>
        <Link
          href="/wedding"
          className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-line-strong)]"
        >
          <h2 className="text-xl font-semibold text-neutral-900">Browse the directory</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            Use the directory once the bigger decisions are clearer and the shortlist can stay tighter.
          </p>
        </Link>
      </div>
    </div>
  )
}
