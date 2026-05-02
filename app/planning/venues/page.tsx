import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Newport Wedding Venues",
  description:
    "A practical guide to Newport wedding venues, venue styles, and how to narrow the right fit for your weekend.",
}

const venueAngles = [
  "Waterfront venues with strong guest experience",
  "Estate-style weddings with a more private feel",
  "Smaller celebrations that still feel distinctly Newport",
]

export default function VenuePlanningPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Venue Planning
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
            Newport wedding venues should shape the weekend, not just host the ceremony.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Before you compare vendors, get clear on the type of weekend you want
            to create. In Newport, venue decisions tend to determine guest flow,
            budget pressure, seasonality, and the overall tone of the event.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_40px_rgba(66,45,28,0.08)]">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Start here
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
            <li>Choose between a destination-weekend feel and a tighter single-day format.</li>
            <li>Decide how much weather exposure you want to tolerate.</li>
            <li>Estimate guest count before shortlisting venues too aggressively.</li>
            <li>Be honest about whether the budget fits a full-service or custom-build setup.</li>
          </ul>
        </div>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {venueAngles.map((angle) => (
          <div
            key={angle}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
          >
            <h2 className="text-xl font-semibold">{angle}</h2>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            What to evaluate
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white p-5">
            <h3 className="text-lg font-semibold">Guest movement</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Ceremony, cocktail hour, reception, and lodging should work together rather than create friction.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <h3 className="text-lg font-semibold">Weather resilience</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Coastal appeal is great until rain, wind, or summer heat change the plan.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <h3 className="text-lg font-semibold">Rental complexity</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Some formats need much more coordination for tents, power, furniture, and staffing.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <h3 className="text-lg font-semibold">Weekend atmosphere</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              The venue should support the type of social pace you want, from intimate to high-energy.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-14">
        <Link
          href="/wedding"
          className="inline-flex rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-white"
        >
          Continue to the directory
        </Link>
      </div>
    </div>
  )
}
