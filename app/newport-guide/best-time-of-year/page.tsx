import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Best Time of Year for a Newport Wedding",
  description:
    "When to get married in Newport, RI — real tradeoffs by season. Peak pricing, shoulder-season value, weather realities, and the local events that affect hotel availability.",
  alternates: { canonical: "/newport-guide/best-time-of-year" },
  openGraph: { type: "article" },
}

export default function BestTimeOfYearPage() {
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Newport Guide", path: "/newport-guide" },
    { name: "Best Time of Year", path: "/newport-guide/best-time-of-year" },
  ])
  const articleJsonLd = buildArticleJsonLd({
    title: "Best Time of Year for a Newport Wedding",
    description:
      "When to get married in Newport, RI — real tradeoffs by season. Peak pricing, shoulder-season value, weather realities, and the local events that affect hotel availability.",
    path: "/newport-guide/best-time-of-year",
  })

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: "/newport-guide", label: "Newport Guide" },
          { label: "Best Time of Year" },
        ]}
        className="mb-8"
      />

      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Newport Guide
        </p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Best time of year for a Newport wedding
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          Every month works for someone. But they do not all work the same way — and some months
          have traps that couples do not find out about until the hotel block is gone. Here is an
          honest breakdown by season, with a real recommendation at the end.
        </p>
      </div>

      {/* Warning box: check the calendar */}
      <div className="mt-10 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-amber-700">
          The thing most sites get wrong
        </p>
        <p className="mt-3 text-base leading-7 text-amber-900">
          Picking a month is not enough. Newport hosts several major annual events that lock up
          hotel inventory across the entire island — sometimes months in advance. Before you set
          your date, check whether your specific weekend conflicts with the Newport Folk Festival,
          Newport Jazz Festival, the Hall of Fame tennis tournament, or the Pell Bridge Run.
          A Saturday in late July that clears Folk Festival weekend is a completely different
          planning situation from Folk Festival Saturday itself. Check the Newport event calendar
          before you book anything.
        </p>
      </div>

      {/* Key events to avoid */}
      <div className="mt-6 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Dates to check before setting yours
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            {
              event: "Newport Folk Festival",
              timing: "Late July",
              note: "Fort Adams. Massive draw. Hotel inventory disappears weeks out.",
            },
            {
              event: "Newport Jazz Festival",
              timing: "Early August",
              note: "Also Fort Adams. Same hotel problem. Back-to-back with Folk some years.",
            },
            {
              event: "Hall of Fame Tennis",
              timing: "Mid-July",
              note: "Newport Casino. Fills boutique hotels and inns on Bellevue specifically.",
            },
            {
              event: "Pell Bridge Run",
              timing: "Check annually",
              note: "Road closures affect guest arrival and shuttle routing.",
            },
          ].map(({ event, timing, note }) => (
            <div key={event} className="rounded-[1rem] border border-[var(--color-line)] bg-white p-4 text-sm">
              <p className="font-semibold text-[var(--color-ink)]">{event}</p>
              <p className="mt-0.5 text-xs font-medium text-[var(--color-gold-deep)]">{timing}</p>
              <p className="mt-1.5 text-[var(--color-muted)]">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 space-y-14">

        {/* June / July / August */}
        <section>
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              June, July, August
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-3 py-0.5 text-xs font-medium text-[var(--color-muted)]">
              Peak season
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Peak season exists for real reasons. Newport in summer is genuinely exceptional — the
            light off the harbor in the late afternoon, the energy of a town that knows exactly
            what it is doing, the warmth that makes a waterfront ceremony feel effortless. If the
            budget supports it and the venue is locked, a July or August Saturday in Newport is
            hard to beat.
          </p>

          <h3 className="mt-6 text-base font-semibold text-[var(--color-ink)]">What peak season gives you</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Long days with light that holds well past 7pm — ceremony timing is flexible and sunset shots are extraordinary",
              "Warm enough for fully outdoor ceremonies, cocktail hours, and open-air receptions without backup anxiety",
              "Maximum destination energy — guests traveling for a summer Newport weekend feel like they went somewhere",
              "Full vendor availability — every photographer, florist, and band you might want is local and operating",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-base font-semibold text-[var(--color-ink)]">What peak season costs you</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Venue fees and hotel rates are at their highest — a venue that charges one rate in May charges more in July",
              "Hotel room blocks are the most expensive and most competitive of the year — lock yours early or lose the best options",
              "Tourist congestion on Thames Street, Bellevue, and the waterfront is real and affects guest logistics",
              "Parking is effectively impossible near most popular venues — shuttle planning is non-negotiable",
              "The Folk Festival, Jazz Festival, and Hall of Fame week can consume hotel inventory for your entire weekend",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
            June is the gentlest of the three months. Traffic and hotel pressure are real but
            slightly less severe than July and August. If peak season is the goal and the budget
            allows, a June Saturday is often the most manageable version of it.
          </p>
        </section>

        {/* September */}
        <section>
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              September
            </span>
            <span className="rounded-full border border-[var(--color-gold-deep)] bg-[var(--color-cream-strong)] px-3 py-0.5 text-xs font-semibold text-[var(--color-gold-deep)]">
              The insider pick
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            September is the best month to get married in Newport. That is not a hedge — it is a
            genuine recommendation based on what the month actually delivers compared to peak
            summer and what it saves you in the process.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The crowds thin noticeably after Labor Day. The tourists leave. The light gets better,
            not worse — golden hour arrives earlier, the angle sharpens, and the haze that sits
            over the harbor in August lifts. Temperatures are ideal for an outdoor ceremony or
            cocktail hour without anyone overheating. Hotel rates soften. Venue fees often drop.
            And the best Newport vendors, fully booked through August, suddenly have weekends open.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The guest experience in September is arguably better than in July: no parking
            nightmare, no Thames Street gridlock, no competition for restaurant reservations on
            Friday night. Guests can actually enjoy the town rather than navigate it.
          </p>
          <div className="mt-5 rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-5 text-sm leading-6 text-[var(--color-muted)]">
            <span className="font-semibold text-[var(--color-ink)]">The only caveat: </span>
            Early September weekends that fall on or near Labor Day weekend can still carry summer
            pricing and summer hotel demand. The real shoulder-season break tends to happen after
            the second week of September. Target mid-to-late September if the savings matter.
          </div>
        </section>

        {/* October */}
        <section>
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              October
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-3 py-0.5 text-xs font-medium text-[var(--color-muted)]">
              Strong for estate weddings
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            October in Newport is beautiful in a way that is different from summer — less
            about the harbor energy and more about color, atmosphere, and a quieter version of
            the place. The estate properties look exceptional. The grounds have a richness that
            peak summer actually does not have. Guests find the town easy to move through.
            Hotel rates are genuinely lower.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The tradeoff is weather variability. October temperatures in Newport range from
            sweater weather to genuinely cold, sometimes in the same weekend. Wind off the water
            picks up. Sunset is earlier — you are losing the long summer evening, which matters
            for outdoor receptions and ceremony timing. A fully outdoor waterfront wedding in
            October requires a more robust weather contingency than the same wedding in September.
            See the{" "}
            <Link
              href="/planning/venues/waterfront"
              className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
            >
              waterfront venues guide
            </Link>{" "}
            for how to think about weather exposure.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            October works best for venues that have strong indoor space and use the outdoor
            setting as a complement rather than the main event. Estate weddings where the
            ceremony is on the lawn and the reception moves inside are a natural fit. Fully
            outdoor tent receptions in October are a higher-risk proposition.
          </p>
        </section>

        {/* November / December */}
        <section>
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              November and December
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-3 py-0.5 text-xs font-medium text-[var(--color-muted)]">
              Not for everyone — but right for some
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Newport goes quiet in late fall, and that is either a problem or an opportunity
            depending on what you are planning. The town itself is still beautiful — the
            architecture does not stop being extraordinary because it is November. The water is
            still there. Some of the estate properties and full-service hotel venues remain
            operational and can be genuinely stunning in an off-season way.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            This works well for couples who want an intimate, indoor-leaning wedding with a
            lower budget than peak season requires. The guest list tends to be tighter — fewer
            people will travel for a late-fall Newport weekend than for a summer one, which is
            not necessarily a bad thing. If the couple is local or regionally based, a November
            wedding at a venue they love is a completely legitimate choice.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            What does not work in November: expecting the full Newport destination-weekend
            experience. Some restaurants close for the season. Guest activity options thin out.
            The town is not putting on a show. If the appeal of Newport is partly the energy of
            the place in full swing, November is not the answer.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            December is narrow. Some venues close. Those that stay open can be charming —
            candlelight, a fireplace, a stripped-down evening that feels intentional. But confirm
            vendor and venue availability before building a plan around a December date.
          </p>
        </section>

        {/* April / May */}
        <section>
          <div className="flex items-baseline gap-3">
            <span
              className="text-3xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              April and May
            </span>
            <span className="rounded-full border border-[var(--color-line)] px-3 py-0.5 text-xs font-medium text-[var(--color-muted)]">
              Shoulder season, opening up
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            April and May are coming out of the off-season, which means pricing is better, vendor
            availability opens up, and the town has not yet hit the summer rush. May in particular
            can be genuinely lovely — the gardens are blooming, the light is good, and a warm May
            Saturday in Newport feels like a gift.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The honest problem: spring weather in coastal Rhode Island is unpredictable in a way
            that summer and even early fall are not. A cold front, a rainy stretch, or a windy
            weekend can arrive without warning. If the wedding design depends on outdoor space,
            spring requires a solid indoor backup — not a contingency you are hoping not to use,
            but a plan you are genuinely comfortable executing. Some couples are fine with this
            tradeoff. Others find the uncertainty hard to manage emotionally in the months leading
            up to the day.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            April is more of a gamble than May. Late April and early May can be beautiful.
            They can also be cold and grey. If the venue has strong indoor options and the couple
            is flexible, this is a real value window. If the outdoor setting is central to the
            vision, September is a better bet than hoping for a warm April.
          </p>
        </section>

        {/* Honest summary table */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The honest summary
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Most Newport couples who are not locked to a specific month should look at September
            first. If September does not work, June is the gentlest of the peak months. July
            and August are extraordinary but expensive and logistically demanding. October is
            a strong choice for estate venues with solid indoor space. Spring works if the
            weather risk is acceptable.
          </p>
          <div className="mt-6 divide-y divide-[var(--color-line)] rounded-[1.75rem] border border-[var(--color-line)] bg-white overflow-hidden">
            {[
              { month: "June", verdict: "Peak season, gentlest version of it", rating: "Great" },
              { month: "July", verdict: "Extraordinary — budget for it and check the event calendar", rating: "Great" },
              { month: "August", verdict: "Same as July — Folk and Jazz Festival dates are the trap", rating: "Great" },
              { month: "September", verdict: "Best overall — better experience, lower cost", rating: "Best" },
              { month: "October", verdict: "Strong for estate and indoor-leaning venues", rating: "Good" },
              { month: "November", verdict: "Works for intimate, indoor, off-peak couples", rating: "Selective" },
              { month: "December", verdict: "Very narrow — confirm everything is open first", rating: "Narrow" },
              { month: "April", verdict: "Risky weather, real value — needs indoor backup", rating: "Careful" },
              { month: "May", verdict: "Better than April, still unpredictable — solid indoor backup required", rating: "Careful" },
            ].map(({ month, verdict, rating }) => (
              <div key={month} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">{month}</span>
                  <span className="ml-3 text-sm text-[var(--color-muted)]">{verdict}</span>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-semibold ${
                  rating === "Best"
                    ? "bg-[var(--color-cream-strong)] text-[var(--color-gold-deep)] border border-[var(--color-gold-deep)]"
                    : rating === "Great"
                    ? "bg-white text-[var(--color-ink)] border border-[var(--color-line-strong)]"
                    : "bg-white text-[var(--color-muted)] border border-[var(--color-line)]"
                }`}>
                  {rating}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Date-specific advice */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Pick a month, then check the specific weekend
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Once you have a month in mind, look at the Newport event calendar for your target
            weekends before calling venues. A venue coordinator will usually tell you which
            weekends are gone, but they will not always flag why — and knowing that a weekend in
            late July is wide open because it falls during Folk Festival (and therefore has no
            hotel rooms) is critical information before you get excited about it.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The Newport Visitors and Convention Bureau publishes an event calendar. Google the
            specific weekend you are considering before you commit. This takes 10 minutes and can
            save an enormous amount of frustration. A July Saturday in Newport that does not
            conflict with a major event is a prize. One that does is a problem that surfaces
            late — when your guests are trying to book rooms six months out and finding nothing
            under $500.
          </p>
        </section>

      </div>

      {/* Internal links */}
      <nav className="mt-14 border-t border-[var(--color-line)] pt-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Keep planning
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            {
              href: "/newport-guide/weekend-itinerary",
              label: "Wedding weekend itinerary",
              description:
                "How to build a weekend guests will love — arrival, day-of flow, and Sunday morning.",
            },
            {
              href: "/wedding/venues",
              label: "Browse Newport venues",
              description:
                "The venue directory — filtered by category, with context for each type.",
            },
            {
              href: "/planning/venues/waterfront",
              label: "Waterfront venues",
              description:
                "Weather, exposure, and timing considerations specific to outdoor and waterfront sites.",
            },
            {
              href: "/newport-guide/marriage-license-ri",
              label: "Rhode Island marriage license",
              description:
                "Where to apply, the 3-day waiting period, and what out-of-state couples need to know.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5 transition-colors hover:border-[var(--color-line-strong)]"
            >
              <p className="text-sm font-semibold text-[var(--color-ink)]">{link.label}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{link.description}</p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
