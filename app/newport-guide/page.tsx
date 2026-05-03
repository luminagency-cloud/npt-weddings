import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newport Wedding Guide",
  description:
    "Local Newport wedding guidance on timing, guest experience, and how to shape a strong weekend in one of the country’s top wedding destinations.",
}

import Link from "next/link"

const guideTopics = [
  {
    title: "Best time of year",
    description:
      "Season changes everything here: pricing, crowding, weather exposure, and what type of wedding feels natural.",
    href: "/newport-guide/best-time-of-year",
  },
  {
    title: "Guest experience",
    description:
      "Newport works best when the wedding feels like a coherent weekend rather than a set of disconnected reservations.",
    href: "/newport-guide/weekend-itinerary",
  },
  {
    title: "Rehearsal dinner ideas",
    description:
      "Use the first event of the weekend to set tone without creating more friction.",
    href: "/newport-guide/rehearsal-dinner-ideas",
  },
]

const planningRealities = [
  {
    title: "Season changes the whole decision tree",
    description:
      "A July harbor weekend, a shoulder-season estate wedding, and a late-fall celebration in town all come with different pricing pressure, backup-plan needs, and guest expectations.",
  },
  {
    title: "Distance looks small until guests start moving",
    description:
      "Newport can feel compact on a map, but ceremony timing, hotel clusters, parking, and rides between events still shape whether the weekend feels smooth or fragmented.",
  },
  {
    title: "The setting can do too much heavy lifting",
    description:
      "A strong Newport backdrop helps, but couples still need a clear format for the weekend so the event feels intentional instead of relying on scenery to carry the experience.",
  },
]

const nextSteps = [
  {
    eyebrow: "If you are early",
    title: "Start with venues and season",
    description:
      "Use the planning section first if the venue style, guest count, or time of year is still unsettled.",
    href: "/planning/venues",
    label: "Go to venue planning",
  },
  {
    eyebrow: "If the venue is clearer",
    title: "Map the guest weekend",
    description:
      "Once the venue direction is real, move into itinerary, dinner, and timing decisions so the weekend holds together.",
    href: "/newport-guide/weekend-itinerary",
    label: "Read the itinerary guide",
  },
]

export default function NewportGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Newport Guide
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
          Newport has prestige. It also has logistics, seasonality, and tradeoffs.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
          Newport is appealing for obvious reasons, but the practical side matters
          just as much: timing, guest movement, seasonal tradeoffs, and how the
          town changes the cost and pace of the weekend.
        </p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {guideTopics.map((topic) => (
          <Link
            key={topic.title}
            href={topic.href}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-line-strong)]"
          >
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {topic.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-16 grid gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Local Reality
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
            The strongest Newport weekends feel easy for guests because the hard choices were made earlier.
          </h2>
        </div>
        <div className="grid gap-4">
          {planningRealities.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        {nextSteps.map((step) => (
          <Link
            key={step.title}
            href={step.href}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 transition-colors hover:border-[var(--color-line-strong)]"
          >
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              {step.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">
              {step.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {step.description}
            </p>
            <span className="mt-5 inline-flex text-sm font-medium text-[var(--color-gold-deep)]">
              {step.label}
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-16 rounded-[2rem] border border-[var(--color-line)] bg-white p-7">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Use this section when
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
          The venue direction is mostly real, but you still need better judgment on season, guest movement, dinner plans, and what makes the weekend feel coherent instead of pieced together.
        </p>
      </section>
    </div>
  )
}
