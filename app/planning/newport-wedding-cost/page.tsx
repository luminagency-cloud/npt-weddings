import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

export const metadata: Metadata = {
  title: {
    absolute: "How Much Does a Newport Wedding Cost? | Married in Newport",
  },
  description:
    "Real cost ranges for a Newport, RI wedding — how venue format drives catering, rentals, staffing, and total budget. Plain-English numbers without the national averages that don't apply here.",
  alternates: { canonical: "/planning/newport-wedding-cost" },
  openGraph: { type: "article" },
}

export default function NewportWeddingCostPage() {
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Planning", path: "/planning" },
    { name: "Newport Wedding Cost", path: "/planning/newport-wedding-cost" },
  ])
  const articleJsonLd = buildArticleJsonLd({
    title: "How Much Does a Newport Wedding Cost?",
    description:
      "Real cost ranges for a Newport, RI wedding — how venue format drives catering, rentals, staffing, and total budget. Plain-English numbers without the national averages that don't apply here.",
    path: "/planning/newport-wedding-cost",
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
          { href: "/planning", label: "Planning" },
          { label: "Newport Wedding Cost" },
        ]}
        className="mb-8"
      />

      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Planning Guide
        </p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          How much does a Newport wedding actually cost?
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          The national wedding cost averages you find online are not useful for Newport. Newport is
          a premium destination market with a specific cost structure — and understanding that
          structure before venue shopping saves a lot of pain.
        </p>
      </div>

      {/* Honest framing */}
      <div className="mt-10 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Start here
        </p>
        <p className="mt-3 text-base leading-7 text-[var(--color-ink)]">
          Newport is one of the most sought-after wedding destinations in New England. That means
          vendors are experienced, the venues are genuinely beautiful, and the guest experience is
          hard to replicate. It also means prices reflect that demand. Couples who come in expecting
          to spend national-average money in Newport usually either adjust the format, reduce the
          guest count, or move the date to shoulder season. All three are legitimate levers. None of
          them are bad news — they are just Newport's version of the budget conversation.
        </p>
      </div>

      <div className="mt-12 space-y-14">

        {/* Venue drives everything */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The venue format sets the budget — not the other way around
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            This is the most important thing to understand before you start pricing anything.
            In Newport, two weddings with the same guest count can have costs that differ by
            $80,000 — not because one couple splurged on flowers and the other didn't, but because
            one chose a full-service hotel and the other chose a raw outdoor site that required a
            tent, a kitchen, a generator, portable restrooms, and staffing from scratch.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The venue format determines what infrastructure you are responsible for, what service
            model you are buying into, and what your catering options actually cost. Those three
            things account for the majority of most Newport wedding budgets. Florists, photographers,
            music, and stationery — the categories most couples spend time researching — typically
            represent a smaller share of the total than people expect.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Choose the venue format first. Build the budget from there. See the{" "}
            <Link
              href="/planning/venues"
              className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
            >
              venue planning guide
            </Link>{" "}
            for how to think through that decision before you start touring.
          </p>
        </section>

        {/* All-inclusive vs build-your-own */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            All-inclusive venues vs. build-your-own — the cost structure difference
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Newport venues broadly split into two models, and understanding which one you are
            looking at changes what you are actually pricing.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6">
              <p className="font-semibold text-[var(--color-ink)]">Full-service venues</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Hotels, clubs, and some estate properties include catering, service staff, linens,
                tables, chairs, and often a coordinator in their per-head pricing. The headline
                number can feel high, but the actual cost-per-element when you unbundle it is often
                comparable to or better than assembling the same wedding from scratch. These venues
                also carry the operational risk — if something goes wrong with the kitchen, it is
                their problem, not yours.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6">
              <p className="font-semibold text-[var(--color-ink)]">Raw or semi-raw venues</p>
              <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                Outdoor estate properties, harborfront sites, and some historic spaces require you
                to bring almost everything. Catering is external and charged separately. Tables,
                chairs, linens, glassware, a tent if needed, lighting, a kitchen setup, portable
                restrooms, a generator — these are all rental line items. The base venue fee may
                look reasonable. The total cost rarely is, and couples who do not account for rental
                spend early in the planning process often end up significantly over budget.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
            Neither model is better. Full-service venues offer predictability. Raw sites offer
            creative control. The mistake is treating the venue fee as the whole number when it is
            actually just the starting point.
          </p>
        </section>

        {/* Cost bands */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Rough cost ranges by format
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            These are honest ranges based on what Newport weddings in each format typically cost
            all-in — venue, catering, florals, photography, music, and basic logistics. They are
            ranges because the variables are real. Use them to calibrate expectations, not to build
            a line-item spreadsheet.
          </p>

          <div className="mt-7 space-y-5">
            {/* Intimate */}
            <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p
                  className="text-xl font-semibold text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Intimate — under 50 guests
                </p>
                <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                  $40,000–$80,000 [VERIFY]
                </p>
              </div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Weekday or off-peak date, full-service venue or inn buyout
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Intimate Newport weddings are where the format advantage is clearest. A smaller
                guest count lets you access inn buyouts, private dining rooms, and venues that
                simply are not available at 150 guests. Food and service quality can be higher. The
                weekend can feel more curated and personal. At the lower end of this range, you are
                typically looking at a weekday ceremony, off-peak season, and a venue that provides
                most of the infrastructure. At the higher end, a small peak-season wedding at a
                full-service property with a strong catering program.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                See the{" "}
                <Link
                  href="/planning/venues/small-weddings"
                  className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
                >
                  small wedding venues guide
                </Link>{" "}
                for venue options suited to this format.
              </p>
            </div>

            {/* Mid-size */}
            <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p
                  className="text-xl font-semibold text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Mid-size — 75 to 125 guests
                </p>
                <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                  $90,000–$175,000 [VERIFY]
                </p>
              </div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Peak season, full-service hotel or waterfront venue
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                This is the most common Newport wedding format. A guest count in this range works
                well with most of Newport's major full-service venues, fits comfortably into the
                estate and waterfront properties that define the market, and allows for a genuine
                destination weekend without requiring the kind of logistical infrastructure a larger
                wedding demands. At the lower end you are typically at a full-service venue on a
                Saturday in May, June, or September. At the higher end you are looking at a
                July or August Saturday at one of the more premium waterfront or estate properties,
                with a full photographer, florals, a live band, and shuttle service.
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                <Link
                  href="/planning/venues/waterfront"
                  className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
                >
                  Waterfront venues
                </Link>{" "}
                and{" "}
                <Link
                  href="/planning/venues/luxury"
                  className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
                >
                  luxury estate properties
                </Link>{" "}
                are both common choices for this guest count.
              </p>
            </div>

            {/* Full destination */}
            <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p
                  className="text-xl font-semibold text-[var(--color-ink)]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Full destination weekend — 150+ guests
                </p>
                <p className="text-sm font-semibold text-[var(--color-gold-deep)]">
                  $175,000–$350,000+ [VERIFY]
                </p>
              </div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                July or August, estate or major waterfront venue, full weekend programming
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                A full Newport destination weekend at scale is a significant production. At 150+
                guests in peak summer, you are managing hotel room blocks across multiple properties,
                shuttle logistics for a large group across several days, rehearsal dinner and
                brunch catering on top of the main event, and vendor fees across photography, floral,
                music, planning, and rentals that scale with guest count. The venue fee alone at some
                of Newport's premier estate properties can be substantial before catering is
                factored in. Couples in this format who come in with an $80,000 budget have almost
                always not accounted for what the format actually requires.
              </p>
            </div>
          </div>
        </section>

        {/* Newport-specific cost pressures */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Newport-specific costs most planning guides miss
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Generic wedding budget guides do not account for what makes Newport different. These are
            the line items that catch Newport couples off guard most often.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                title: "Hotel room blocks",
                body: "Newport hotels are expensive and fill fast in summer. If your guests are coming from out of town — and in Newport, most of them are — the hotel bill is a real consideration even if you are not covering it directly. A room on Bellevue Avenue in July can run $350–$600+/night [VERIFY]. Guests paying that for two nights are effectively spending $700–$1,200 just to attend your wedding. Factor this into how you set expectations, and negotiate a room block early — the best properties sell out many months in advance.",
              },
              {
                title: "Transportation and shuttles",
                body: "Newport's parking situation is genuinely difficult in summer. Street parking near most venues is limited, and summer traffic can turn a 10-minute drive into a 30-minute problem. Shuttles between the hotel block, the venue, and any satellite events are not optional at most Newport weddings — they are the difference between a smooth weekend and one where guests are stressed about logistics. Budget $2,000–$5,000+ [VERIFY] depending on the number of runs, vehicles, and hours.",
              },
              {
                title: "Tent and rental costs",
                body: "If you choose a venue without built-in infrastructure — an outdoor estate, a waterfront site, a private garden — you are responsible for bringing everything in. A full tent with flooring, sidewalls, and lighting can run $15,000–$40,000+ [VERIFY] before tables, chairs, linens, glassware, and kitchen equipment. Many couples see a low venue fee and assume it means an affordable wedding. At a raw site, the rental spend often erases that advantage.",
              },
              {
                title: "Weather backup costs",
                body: "Newport's coastal weather is beautiful and unpredictable. If your venue is primarily outdoors, a credible weather backup plan has a price — whether that is a tent, an indoor overflow space, or both. Budget for it explicitly rather than hoping for good weather.",
              },
              {
                title: "Vendor travel and accommodation",
                body: "Newport-based vendors are experienced with local weddings and typically do not charge travel fees for Newport events. Out-of-town vendors — photographers, bands, or specialists brought in from New York or Boston — often do. Clarify travel and accommodation costs before signing contracts.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
              >
                <p className="font-semibold text-[var(--color-ink)]">{title}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shoulder season */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What shoulder season actually saves you
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            May, early June, and September through October are Newport's shoulder months, and the
            savings are real. They are also specific — it is worth knowing where the relief comes
            from rather than assuming everything gets cheaper.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Venue fees",
                detail:
                  "Most venues offer meaningfully lower site fees on shoulder-season dates, particularly weekdays and Sundays. Some drop rates by 20–30% [VERIFY] for May and October Saturdays vs. July and August.",
              },
              {
                label: "Hotel room blocks",
                detail:
                  "Shoulder season hotel rates in Newport can be significantly lower than peak summer. A room that runs $450/night in July might be $250 in October [VERIFY]. For out-of-town guests, this matters.",
              },
              {
                label: "Vendor availability",
                detail:
                  "Peak Newport photographers, planners, and florists book July and August Saturdays first. A September or May date opens access to vendors who are otherwise committed for the summer.",
              },
              {
                label: "What doesn't soften",
                detail:
                  "Catering per-head costs, rental minimums, and tent pricing are relatively stable year-round. Shoulder season does not make a raw outdoor site dramatically cheaper to build out.",
              },
            ].map(({ label, detail }) => (
              <div key={label} className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{label}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
            For a full look at how timing affects the Newport wedding experience beyond just cost,
            see the{" "}
            <Link
              href="/newport-guide/best-time-of-year"
              className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
            >
              best time of year guide
            </Link>
            .
          </p>
        </section>

        {/* Splurge vs over-invest */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where to spend. Where couples over-invest.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Newport's setting does part of the job for you. A ceremony with a harbor backdrop or
            an estate lawn needs less decoration to feel special than a hotel ballroom in a generic
            city. That is a real budget advantage if you use it — and a missed opportunity if you
            try to over-produce on top of it.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-deep)]">
                Worth the spend
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Photography — Newport light is exceptional and the settings are irreplaceable. This is the one vendor category where going to the top of your range pays back for decades.",
                  "Food and service quality — guests remember what they ate and how they were treated far longer than they remember the centerpieces.",
                  "Shuttle logistics — removing friction from guest movement earns more goodwill than almost any decor upgrade.",
                  "An experienced planner — Newport vendors have relationships and local knowledge that saves money and avoids mistakes. A planner who has done 20 Newport weddings is worth the fee.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-deep)]">
                Where couples over-invest
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Elaborate floral installations at outdoor venues — the Newport backdrop already does most of the work. Spending heavily to enhance a harbor view is often redundant.",
                  "Extensive stationery — beautiful invitations matter, but most guests remember the weekend, not the envelope liner.",
                  "Favors — almost universally left behind at destination weddings. The budget is better spent on an extra hour of the band.",
                  "Over-programming the weekend — too many hosted events exhausts guests and inflates catering spend. One welcome moment, the wedding, and a Sunday brunch is a coherent weekend.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Guest count as lever */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Guest count is the fastest budget lever
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            In Newport's cost structure, trimming the guest list does more per name removed than
            almost any other budget adjustment. Every guest you remove reduces per-head catering
            cost, rental count, transportation volume, hotel block pressure, and florals. A wedding
            that goes from 130 to 100 guests is meaningfully different in total cost — and often
            meaningfully better in experience.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Newport as a destination also gives you a natural reason to keep the list focused.
            Guests understand that destination weddings require more of them — travel, hotel spend,
            time away. An invitation to a Newport weekend is a real ask. A curated guest list at a
            high-quality Newport venue often produces a better guest experience than a larger list
            stretched thin across a venue that cannot comfortably support it.
          </p>
        </section>

        {/* Catering note */}
        <div className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            A note on catering prices
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            We have deliberately not published specific per-head catering figures here. Newport
            catering costs vary significantly by venue, service model, menu, and season — and
            published numbers go stale quickly. When you tour venues, ask for their current
            food-and-beverage minimum and per-head ranges directly. Ask what is included
            (staffing, rentals, cake cutting, coat check) and what is extra. The difference between
            two venues that both quote "around $200 per head" can be thousands of dollars once
            those details are unbundled.
          </p>
        </div>

      </div>

      {/* Internal links */}
      <nav className="mt-14 border-t border-[var(--color-line)] pt-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Keep planning
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/planning/budget-guide",
              label: "Budget planning guide",
              description:
                "How venue format, guest flow, and service model interact to set the real budget ceiling.",
            },
            {
              href: "/planning/venues",
              label: "Venue planning",
              description:
                "Start here — venue format is the single decision that shapes everything else.",
            },
            {
              href: "/wedding/venues",
              label: "Browse Newport venues",
              description: "The directory of Newport wedding venues, organized by category.",
            },
            {
              href: "/planning/venues/waterfront",
              label: "Waterfront venues",
              description:
                "Cost and operational considerations specific to waterfront and outdoor sites.",
            },
            {
              href: "/planning/venues/luxury",
              label: "Luxury venues",
              description:
                "Full-service estate and hotel venues — where premium pricing delivers operational calm.",
            },
            {
              href: "/planning/venues/small-weddings",
              label: "Small wedding venues",
              description:
                "Intimate formats that access a different tier of Newport properties entirely.",
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
