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
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {topic.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
