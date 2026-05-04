import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Newport Wedding Venues",
  description:
    "A practical guide to Newport wedding venues, venue styles, and how to narrow the right fit in one of America’s premier wedding destinations.",
  alternates: { canonical: "/planning/venues" },
  openGraph: { type: "article" },
}

const venueAngles = [
  {
    title: "Waterfront Venues",
    href: "/planning/venues/waterfront",
    description:
      "Best for couples who want the setting to carry the mood but are willing to treat exposure and timing as real planning constraints.",
  },
  {
    title: "Luxury Venues",
    href: "/planning/venues/luxury",
    description:
      "Best for couples who care about service quality, guest comfort, and a highly polished weekend from arrival through farewell.",
  },
  {
    title: "Small Wedding Venues",
    href: "/planning/venues/small-weddings",
    description:
      "Best for tighter guest counts where intimacy, flow, and hospitality matter more than scaling up for spectacle.",
  },
]

const venueDecisionCards = [
  {
    title: "Choose the weekend shape first",
    body:
      "A destination-heavy wedding, a one-day city wedding, and a coastal estate weekend are different systems. Your venue should match the system you want.",
  },
  {
    title: "Compare operational load, not just beauty",
    body:
      "Some venues quietly require more rentals, transport planning, weather backup, and staffing than the headline price suggests.",
  },
  {
    title: "Use the venue to reduce later noise",
    body:
      "A strong venue simplifies later vendor decisions. A weak-fit venue makes every later decision feel like patchwork.",
  },
]

export default function VenuePlanningPage() {
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Planning", path: "/planning" },
    { name: "Venues", path: "/planning/venues" },
  ])
  const articleJsonLd = buildArticleJsonLd({
    title: "Newport Wedding Venues",
    description:
      "A practical guide to Newport wedding venues, venue styles, and how to narrow the right fit in one of America’s premier wedding destinations.",
    path: "/planning/venues",
  })

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/planning", label: "Planning" },
              { label: "Venues" },
            ]}
            className="mb-5 text-[var(--color-muted)]"
          />
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Venue Planning
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
            In Newport, the venue does more than host the wedding. It sets the tone.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            Before you compare vendors, get clear on the kind of weekend you want
            to host. In Newport, venue decisions usually determine guest flow,
            budget pressure, seasonality, and the overall tone of the event.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_40px_rgba(66,45,28,0.08)]">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Start here
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
            <li>Choose between a destination-weekend feel and a tighter one-day format.</li>
            <li>Decide how much weather exposure you are actually willing to tolerate.</li>
            <li>Estimate guest count before shortlisting too aggressively.</li>
            <li>Be honest about whether the budget fits full-service or custom-build logistics.</li>
          </ul>
        </div>
      </div>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {venueAngles.map((angle) => (
          <Link
            key={angle.title}
            href={angle.href}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6 transition-colors hover:border-[var(--color-line-strong)]"
          >
            <h2 className="text-xl font-semibold">{angle.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {angle.description}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-3">
        {venueDecisionCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
          >
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{card.body}</p>
          </article>
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
              Some formats need much more coordination around tents, power, furniture, staffing, and weather backup.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <h3 className="text-lg font-semibold">Weekend atmosphere</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              The venue should support the social pace you want, from intimate and understated to high-energy and guest-heavy.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-4 rounded-[2rem] border border-[var(--color-line)] bg-white p-7 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Next move
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
            Once the venue model feels clearer, move into the directory with fewer
            open questions. The point is to browse from a stronger point of view,
            not to start browsing in order to find one.
          </p>
        </div>
        <Link
          href="/wedding/venues"
          className="inline-flex rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-cream-strong)]"
        >
          Browse venue listings
        </Link>
      </section>
    </div>
  )
}
