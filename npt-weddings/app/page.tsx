import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Newport Wedding Planning",
  description:
    "Plan a Newport wedding with venue ideas, local guidance, and a curated directory of vendors.",
}

const planningHighlights = [
  {
    title: "Start With Venues",
    description:
      "Begin with setting, season, and guest count before you start contacting everyone else.",
    href: "/planning/venues",
  },
  {
    title: "Build Your Timeline",
    description:
      "Use a practical sequence for venue, planner, photography, catering, beauty, and rentals.",
    href: "/planning",
  },
  {
    title: "Browse Vendors",
    description:
      "Explore a curated local directory without burying the useful planning context.",
    href: "/wedding",
  },
]

const quickTopics = [
  "Waterfront venues and estate settings",
  "Weekend itinerary ideas for guests",
  "Timing, weather, and seasonal tradeoffs",
  "Budget planning with Newport realities in mind",
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(182,145,84,0.24),_transparent_38%),linear-gradient(180deg,_#f8f1e5_0%,_#fffdf9_56%,_#fffaf2_100%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-24">
          <div className="max-w-3xl">
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Newport, Rhode Island
            </p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-6xl">
              Wedding planning with local taste, not directory fluff.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Find the right Newport venues, map out your weekend, and browse a
              curated set of vendors without sorting through filler.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/planning/venues"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-gold-deep)]"
              >
                Explore Venue Ideas
              </Link>
              <Link
                href="/wedding"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-white"
              >
                Browse the Directory
              </Link>
            </div>
          </div>
          <div className="grid gap-4 lg:pb-2">
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/80 p-6 shadow-[0_18px_40px_rgba(66,45,28,0.08)]">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
                Best use of the site
              </p>
              <ol className="mt-4 space-y-4 text-sm leading-6 text-[var(--color-muted)]">
                <li>
                  <span className="font-semibold text-[var(--color-ink)]">1.</span>{" "}
                  Choose the kind of Newport wedding you actually want.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-ink)]">2.</span>{" "}
                  Narrow your venue style before building the rest of the list.
                </li>
                <li>
                  <span className="font-semibold text-[var(--color-ink)]">3.</span>{" "}
                  Use the directory once you have a sharper point of view.
                </li>
              </ol>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-sand)] p-6">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
                What’s here at launch
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                {quickTopics.map((topic) => (
                  <li key={topic} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-gold-deep)]" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              MVP Focus
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              A tighter wedding planning experience beats a sprawling, empty site.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            The goal is to help couples make better decisions quickly, then layer
            monetization in later once the public product already feels strong.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {planningHighlights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_16px_36px_rgba(66,45,28,0.08)]"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-medium text-[var(--color-gold-deep)]">
                Go there
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              Why Newport
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              The appeal is obvious. The tradeoffs should be obvious too.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-[var(--color-cream-strong)] p-6">
              <h3 className="text-lg font-semibold">A real destination weekend</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Newport works best when ceremony, dinner, guest stays, and time on
                the water feel like one coherent plan rather than separate bookings.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[var(--color-cream-strong)] p-6">
              <h3 className="text-lg font-semibold">Season matters here</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Summer demand, shoulder-season value, and weather exposure all
                change the shape of the budget and the venue shortlist.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[var(--color-cream-strong)] p-6">
              <h3 className="text-lg font-semibold">Venue choice drives everything</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                In Newport, style, traffic, lodging, and guest flow usually get set
                by the venue before the rest of the planning decisions follow.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-[var(--color-cream-strong)] p-6">
              <h3 className="text-lg font-semibold">Curated beats exhaustive</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                The point is not to dump every listing on the page. It is to make
                the early decisions easier and the later searches cleaner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
