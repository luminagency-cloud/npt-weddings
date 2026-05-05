import type { Metadata } from "next"
import Link from "next/link"
import { ProseBody } from "@/components/prose-body"

export const metadata: Metadata = {
  title: "Newport Wedding Planning",
  description:
    "Find the right Newport wedding venue, shape the weekend around it, and plan a celebration that feels unmistakably coastal, polished, and personal.",
  alternates: { canonical: "/" },
  openGraph: { type: "website" },
}

const venueStarts = [
  {
    title: "Waterfront",
    description:
      "For couples who want sea air, harbor light, and a setting that feels open, breezy, and distinctly Newport.",
    href: "/planning/venues/waterfront",
  },
  {
    title: "Grand estate",
    description:
      "For a black-tie mood, layered guest experience, and the kind of backdrop that carries the whole weekend.",
    href: "/planning/venues/luxury",
  },
  {
    title: "Smaller gathering",
    description:
      "For intimate celebrations where charm, warmth, and flow matter more than scale.",
    href: "/planning/venues/small-weddings",
  },
]

const planningSteps = [
  {
    title: "Pick your spot",
    description:
      "Choose the setting first. In Newport, the venue shapes the budget, guest movement, and the overall tone of the celebration.",
  },
  {
    title: "Shape the weekend",
    description:
      "Decide whether you want a full destination weekend, a refined one-day event, or something in between for your guests.",
  },
  {
    title: "Build the team",
    description:
      "Once the venue and pace are clear, photographers, florists, planners, and rentals become much easier to choose well.",
  },
]

const vendorCategories = [
  { label: "Photographers", href: "/wedding/photographers" },
  { label: "Planners", href: "/wedding/planners" },
  { label: "Florists", href: "/wedding/florists" },
  { label: "Caterers", href: "/wedding/caterers" },
  { label: "Hair & Makeup", href: "/wedding/hair-makeup" },
  { label: "Bands & DJs", href: "/wedding/music" },
]

const weekendIdeas = [
  "Welcome drinks with harbor views",
  "A ceremony backdrop that actually fits your guest count",
  "A reception flow that feels easy instead of overstuffed",
  "A Newport plan that still works when the weather shifts",
]

const whyNewport = [
  {
    title: "It feels like a destination without asking guests to fly to Europe.",
    description:
      "Newport gives you mansions, sailboats, gardens, inns, and coastal light in one compact place that already knows how to host a wedding weekend.",
  },
  {
    title: "The venue really is the decision that changes everything.",
    description:
      "A harborfront ceremony, a grand estate reception, and a smaller inn celebration lead to different budgets, timelines, and vendor needs.",
  },
  {
    title: "The best weekends feel considered, not crowded.",
    description:
      "You do not need every possible event. You need the right setting, the right pace, and a guest experience that still feels generous.",
  },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative isolate">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,_#f6efe4_0%,_#fffaf4_54%,_#fffdf9_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_right,_rgba(201,169,110,0.22),_transparent_34%),radial-gradient(circle_at_left_center,_rgba(44,74,107,0.12),_transparent_36%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-18 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <ProseBody>Newport does something to a wedding that's hard to explain until you've seen it. The harbor light in late afternoon. The scale of the estates on Bellevue. The way the whole town already knows how to hold a celebration — has been doing it for a century and a half — so the backdrop doesn't feel rented or assembled. It feels earned. Couples who get married here don't just get a venue. They get a place with a personality, and that personality tends to make the whole weekend feel bigger than the sum of its parts.</ProseBody>
            <p className="font-sans text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
              Married in Newport
            </p>
            <h1
              className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-[var(--color-ink)] sm:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Pick the Newport backdrop that makes the whole wedding feel right.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
              Start with venues. Waterfront vows, a grand estate weekend, a
              smaller celebration tucked into town. Once the setting is right,
              the rest of the planning gets a lot clearer.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/planning/venues"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary)]"
              >
                Pick Your Venue Style
              </Link>
              <Link
                href="/wedding/venues"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/75 px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-white"
              >
                Browse Newport Venues
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {vendorCategories.slice(0, 4).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[var(--color-line)] bg-white/70 px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-ink)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 top-6 hidden h-28 w-28 rounded-full bg-[rgba(201,169,110,0.18)] blur-2xl sm:block" />
            <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/88 p-7 shadow-[0_24px_60px_rgba(66,45,28,0.1)] backdrop-blur">
              <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
                Start here
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                Plan the place before the spreadsheet.
              </h2>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                {weekendIdeas.map((idea) => (
                  <li key={idea} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-gold-deep)]" />
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/planning/timeline"
                className="mt-7 inline-flex text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--color-gold-deep)]"
              >
                Build your planning timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              First decisions
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              A strong Newport plan usually starts the same way.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            Couples do not need more generic advice here. They need help making
            the first few decisions in the right order.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {planningSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_16px_36px_rgba(66,45,28,0.05)]"
            >
              <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line)] bg-[color:color-mix(in_oklab,var(--color-cream)_76%,white)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              Start with venues
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              Choose the kind of Newport wedding you want to host.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {venueStarts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_18px_40px_rgba(66,45,28,0.08)]"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-[var(--primary)] transition-colors group-hover:text-[var(--color-gold-deep)]">
                  Explore this style
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              Build your team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              Once the venue is right, the rest of the shortlist gets easier.
            </h2>
          </div>
          <Link
            href="/wedding"
            className="text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--color-gold-deep)]"
          >
            Browse the full directory
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vendorCategories.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-[1.4rem] border border-[var(--color-line)] bg-white px-5 py-4 text-base font-medium text-[var(--color-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:shadow-[0_14px_30px_rgba(66,45,28,0.06)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
              Why Newport
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
              Newport already has the atmosphere. The trick is choosing how you want to use it.
            </h2>
          </div>
          <div className="grid gap-4">
            {whyNewport.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
