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
    href: "#timeline",
  },
  {
    title: "Budget Mindset",
    description:
      "A plain-English view of how venue choices affect food, rentals, staffing, and logistics in Newport.",
    href: "#budget",
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

      <section id="timeline" className="mt-16 grid gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            Suggested planning order
          </h2>
        </div>
        <ol className="space-y-5 text-sm leading-6 text-[var(--color-muted)]">
          <li>1. Decide what kind of Newport experience you want before browsing vendors too hard.</li>
          <li>2. Set a real guest-count range and budget guardrails early.</li>
          <li>3. Shortlist venues before getting lost in decorative details.</li>
          <li>4. Once the venue direction is clearer, lock planning, photography, and food priorities.</li>
          <li>5. Use the directory to fill gaps, not to define the whole event from scratch.</li>
        </ol>
      </section>

      <section id="budget" className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            Budget starts with format
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          In Newport, venue format often determines the rest of the budget. A
          full-service property, a private estate, and a waterfront setup can
          all produce a strong wedding, but they create very different staffing,
          rental, transport, and guest-flow requirements. Start there.
        </p>
      </section>
    </div>
  )
}
