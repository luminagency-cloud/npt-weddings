import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Newport Weddings and the couple-first approach behind the site.",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
        About
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
        A couple-first wedding site for Newport.
      </h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-muted)]">
        <p>
          Newport Weddings is being built as a better starting point for couples
          planning weddings in Newport, Rhode Island. The goal is not to create a
          bloated vendor marketplace on day one.
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
    </div>
  )
}
