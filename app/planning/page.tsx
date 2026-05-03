import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wedding Planning",
  description:
    "Practical Newport wedding planning guidance for venues, timing, guest experience, and budget decisions.",
}

const planningPages = [
  {
    title: "Venue Planning",
    description:
      "Start with setting, season, guest count, and the venue realities that shape the rest of the weekend.",
    href: "/planning/venues",
  },
  {
    title: "Wedding Timeline",
    description:
      "A practical order for venue, vendors, guest flow, and the deadlines that actually matter.",
    href: "/planning/timeline",
  },
  {
    title: "Budget Mindset",
    description:
      "A plain-English view of how venue choices affect food, rentals, staffing, and logistics in Newport.",
    href: "/planning/budget-guide",
  },
]

export default function PlanningPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Planning
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          The best Newport weddings are shaped by a few decisions made well.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
          The point of this section is to make the early planning choices
          clearer: venue style, time of year, guest logistics, and the budget
          tradeoffs that follow from those choices.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {planningPages.map((page) => (
          <Link
            key={page.title}
            href={page.href}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-line-strong)]"
          >
            <h2 className="text-xl font-semibold">{page.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {page.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-16 grid gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            The planning section should create better decisions, not more noise.
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          These guides are meant to reduce drift. The strongest Newport weddings
          usually come from getting venue, budget, guest experience, and
          weekend structure right early rather than trying to solve every
          decision at once.
        </p>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        <Link
          href="/planning/choose-a-venue"
          className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-line-strong)]"
        >
          <h2 className="text-xl font-semibold">How to Choose a Venue</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            A practical way to compare venue fit, weekend format, and guest experience.
          </p>
        </Link>
        <Link
          href="/planning/budget-guide"
          className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-line-strong)]"
        >
          <h2 className="text-xl font-semibold">Budget Guide</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            Understand how venue format changes the whole cost structure.
          </p>
        </Link>
        <Link
          href="/planning/timeline"
          className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 hover:border-[var(--color-line-strong)]"
        >
          <h2 className="text-xl font-semibold">Timeline</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            Use a better sequence so the early decisions actually reduce complexity.
          </p>
        </Link>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Where to start</h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          If the couple is early, start with venues. If the venue direction is
          already set, move to budget and timeline. The point is to choose the
          next page based on the current uncertainty, not just the next keyword.
        </p>
      </section>

      <section className="mt-14 grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Best first click
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            If you are unsure where to start, use the venue guide first. It usually clarifies more of the wedding than any other early decision.
          </p>
        </div>
        <div className="flex md:justify-end">
          <Link
            href="/planning/venues"
            className="inline-flex rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-gold-deep)]"
          >
            Go to venue planning
          </Link>
        </div>
      </section>
    </div>
  )
}
