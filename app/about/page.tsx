import type { Metadata } from "next"
import Link from "next/link"
import { ProseBody } from "@/components/prose-body"

export const metadata: Metadata = {
  title: "About Married in Newport",
  description:
    "About Married in Newport — the couple-first planning guide built around real Newport wedding search intent, local perspective, and venue-first guidance.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <ProseBody>Newport has been hosting weddings for a long time. The venues know what they're doing. The photographers know the light. The caterers have worked every room on Bellevue. What couples planning from out of town don't always have is a clear picture of how it all fits together — which venue actually matches their guest count, which season makes sense for what they want, what a realistic weekend looks like when you're asking people to travel to coastal Rhode Island for a celebration. That's the gap this site is trying to close. Not a marketplace, not a generic directory — something closer to a well-connected local friend who happens to know every venue in Newport County and will tell you the truth about all of them.</ProseBody>
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
