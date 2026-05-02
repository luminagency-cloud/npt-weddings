import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wedding Planning",
  description:
    "Practical Newport wedding planning guidance for venue selection, timing, and budget decisions.",
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
      "A simple sequence for how couples should think about venue, vendors, guest flow, and key deadlines.",
    href: "#timeline",
  },
  {
    title: "Budget Mindset",
    description:
      "A practical view of how venue choices affect catering, rentals, staffing, and guest logistics in Newport.",
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
          Start with the decisions that actually shape the wedding.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
          The point of this section is to make the early planning choices clearer:
          venue style, time of year, guest logistics, and the budget tradeoffs
          that follow from them.
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
          <li>1. Pick the type of Newport wedding you want before you pick vendors.</li>
          <li>2. Set guest count range and budget guardrails early.</li>
          <li>3. Shortlist venues before diving into stylistic details.</li>
          <li>4. Once the venue is set, lock planner, photography, and food priorities.</li>
          <li>5. Use the directory to fill needs, not to define the whole event.</li>
        </ol>
      </section>

      <section id="budget" className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            Budget starts with format
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          In Newport, the venue format often determines the rest of the budget.
          A full-service property, a private estate, and a waterfront location can
          all support beautiful weddings, but they create very different staffing,
          transportation, rental, and guest-flow requirements. Start there.
        </p>
      </section>
    </div>
  )
}
