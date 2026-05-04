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
    absolute: "Newport Wedding Weekend Itinerary for Guests | Married in Newport",
  },
  description:
    "How to build a Newport wedding weekend guests will actually love. Arrival tips, rehearsal dinner ideas, day-of flow, and Sunday morning wind-down recommendations from people who know the town.",
  alternates: { canonical: "/newport-guide/weekend-itinerary" },
  openGraph: { type: "article" },
}

export default function WeekendItineraryPage() {
  const breadcrumbJsonLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Newport Guide", path: "/newport-guide" },
    { name: "Wedding Weekend Itinerary", path: "/newport-guide/weekend-itinerary" },
  ])
  const articleJsonLd = buildArticleJsonLd({
    title: "Newport Wedding Weekend Itinerary for Guests",
    description:
      "How to build a Newport wedding weekend guests will actually love. Arrival tips, rehearsal dinner ideas, day-of flow, and Sunday morning wind-down recommendations from people who know the town.",
    path: "/newport-guide/weekend-itinerary",
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
          { label: "Weekend Itinerary" },
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
          How to build a Newport wedding weekend guests will actually remember
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          Newport works best as a weekend, not just a wedding day. The couples who design the
          full arc — arrival, dinner, ceremony, and Sunday morning — end up with something that
          feels genuinely hosted rather than just scheduled. Here is how to build that.
        </p>
      </div>

      <div className="mt-12 space-y-14 text-[var(--color-ink)]">

        {/* Friday: Getting In */}
        <section>
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Friday
            </span>
            <h2
              className="text-2xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Arrival
            </h2>
          </div>

          <h3 className="mt-5 text-lg font-semibold text-[var(--color-ink)]">Getting here</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            Tell guests to fly into Providence (PVD), not Boston. Most people default to Logan
            out of habit, but Providence is 30 minutes from Newport on a clear day. Logan is
            closer to 90 minutes before you factor in summer traffic on 138, which can stall on a
            Friday afternoon with everyone arriving for a summer weekend. PVD is smaller, easier,
            and genuinely closer — it is the right answer for almost every guest coming from the
            northeast, mid-Atlantic, or connecting through.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Guests driving from New York are looking at roughly 3 hours on a good day, 4+ if they
            leave after noon on a summer Friday. Encourage early arrivals. Anyone who shows up
            stressed and hungry at 7pm is going to have a different weekend than the guest who got
            there at 3 and walked the wharf.
          </p>

          <h3 className="mt-7 text-lg font-semibold text-[var(--color-ink)]">Hotel clusters and where to put guests</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            Newport's hotels tend to cluster in ways that matter for wedding logistics. Bellevue
            Avenue — where most of the estate venues sit — has walkable inn options and is the
            right neighborhood for guests who want to be close to the ceremony and the Cliff Walk.
            The waterfront hotels near Goat Island and Gurney's have harbor views and a
            destination-resort feel but add a shuttle leg to most inland venues. Downtown and
            Thames Street properties are walkable to dining and Bowen's Wharf, which is great for
            guests who want to explore, but can have summer parking and noise tradeoffs.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Match the hotel recommendation to your{" "}
            <Link href="/planning/venues" className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]">
              venue type
            </Link>
            . If the ceremony is on Bellevue, put guests on Bellevue. If the reception is
            waterfront and transport is handled, waterfront hotels work beautifully. Mixing
            clusters is fine — just build a clear shuttle plan so no one is left problem-solving
            at 10pm.
          </p>

          <h3 className="mt-7 text-lg font-semibold text-[var(--color-ink)]">The welcome drink moment</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            Friday evening does not need an event. It needs a moment — a place where guests can
            land, find each other, and feel like the weekend has actually begun. A casual gathering
            at the hotel bar works. A reserved section at a waterfront restaurant works better.
            A private room or inn buyout is the most seamless version of this, and Newport has
            enough of them that it is worth asking your venue or planner what is realistic.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Keep it short — two hours maximum. Guests are tired from travel, Saturday is the main
            event, and the worst thing you can do is exhaust everyone the night before. The goal is
            warmth and a sense of place, not a second party.
          </p>
        </section>

        {/* Rehearsal Dinner */}
        <section>
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Friday Evening
            </span>
            <h2
              className="text-2xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Rehearsal dinner
            </h2>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Newport's rehearsal dinner scene is genuinely strong. The formats that tend to work
            best here are not the fanciest — they are the ones that feel connected to the place
            rather than trying to preview Saturday.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Waterfront restaurant with a private room",
                body:
                  "Bannister's Wharf and Bowen's Wharf have restaurants that do private dining well. Harbor views, easy parking by Newport standards, and a relaxed waterfront atmosphere that still feels intentional.",
              },
              {
                title: "Inn or hotel buyout",
                body:
                  "Several Newport inns will do a full or partial evening buyout for smaller guest lists. This is the highest-comfort option — guests are already there, flow is seamless, and the setting feels like Newport at its most personal.",
              },
              {
                title: "Harbor-view restaurant",
                body:
                  "A well-chosen restaurant with a harbor view does not need to be private to feel special. For smaller rehearsal dinners, a reserved section in a good room is often the right size and the right energy.",
              },
              {
                title: "Venue-adjacent dinner",
                body:
                  "If your ceremony venue has a hospitality team or a preferred caterer, ask whether a Thursday or Friday dinner is possible. For estate venues, this can create a remarkable sense of the place before the wedding day itself.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-5"
              >
                <p className="font-semibold text-[var(--color-ink)]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
            For a full guide to rehearsal dinner planning in Newport, including what to avoid and
            how to match the dinner to your overall weekend tone, see the{" "}
            <Link
              href="/newport-guide/rehearsal-dinner-ideas"
              className="underline underline-offset-2 hover:text-[var(--color-gold-deep)]"
            >
              rehearsal dinner guide
            </Link>
            .
          </p>
        </section>

        {/* Wedding Day */}
        <section>
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Saturday
            </span>
            <h2
              className="text-2xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Wedding day flow
            </h2>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Newport's compact geography is one of its best features for weddings — until it is not.
            Venues, hotels, and restaurants are close together, which means transitions can be
            seamless. It also means that summer traffic, one-way streets, and parking can turn a
            10-minute gap in the schedule into a 30-minute problem.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">The geography advantage</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            In a normal destination wedding city, moving 120 guests from a ceremony to a cocktail
            hour to a reception can mean long shuttles or three different neighborhoods. In Newport,
            those three moments can be within half a mile of each other. When the venue supports
            that flow — estate properties especially — the day feels continuous and easy for guests
            rather than fractured by logistics.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">Where it creates friction</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            Thames Street is one-way and jammed on summer Saturdays. Bellevue Avenue narrows near
            the estates. If your venue requires guest vehicles, assume they will take longer than
            Google Maps suggests. The most common Newport wedding-day friction point is a cocktail
            hour that starts 20 minutes late because no one accounted for the parking situation
            after the ceremony.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The cleanest solution: design the day so guests do not need to park at all. Shuttles
            from the hotel block to the venue and back — ideally running on a loop rather than as
            a single dispatch — eliminate the problem entirely. If that is not in the budget, at
            least build a 20-minute buffer into every transition on the schedule.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">Ceremony to cocktail hour to reception</h3>
          <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
            The venues that handle this best are the ones where all three happen on the same
            property — or within a short, managed walk. When the ceremony ends and guests filter
            naturally onto a lawn or terrace for cocktails before moving inside for dinner, the
            day feels effortless. When guests have to make a driving decision after the ceremony,
            you are counting on 120 people to navigate Newport traffic while emotional and possibly
            in heels. Avoid it when you can.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            If the ceremony and reception are at different locations, keep the transfer short and
            staffed. Someone at the ceremony venue directing guests to shuttles, someone at the
            reception entrance welcoming them — those two hires make the gap invisible.
          </p>
        </section>

        {/* What to tell guests */}
        <section>
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Saturday Morning
            </span>
            <h2
              className="text-2xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What to tell guests before the ceremony
            </h2>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Newport rewards exploration, but most guests need a nudge before they will wander on
            their own. A one-page note in the welcome bag — or a note in the wedding website — with
            three or four genuine local recommendations does more for guest experience than almost
            anything else you can do for a Saturday morning.
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                place: "The Cliff Walk",
                detail:
                  "The 3.5-mile path along the Bellevue coastline is one of the best walks in New England, and most guests staying on or near Bellevue Avenue can reach it in 10 minutes on foot. Saturday morning, before the heat and the crowds, is the right time to go. Tell them to start at the Memorial Boulevard entrance and walk south. They do not have to do the whole thing — even 30 minutes out and back earns the view.",
              },
              {
                place: "Easton's Beach",
                detail:
                  "Newport's main beach is a 10-minute walk from Bellevue or a short drive. It is a real sand beach with a parking lot, a snack bar, and waves worth swimming in. For guests who want to spend Saturday morning on the water rather than on a path, this is the right answer.",
              },
              {
                place: "The Mansions",
                detail:
                  "The Breakers, Marble House, and Rosecliff are all worth seeing — and if guests have never been, a Saturday morning mansion tour is genuinely memorable. Rosecliff in particular has a personal connection to Newport weddings (it was a ceremony venue in The Great Gatsby). Tickets at the door, no reservations required.",
              },
              {
                place: "Bowen's Wharf for a casual lunch",
                detail:
                  "The wharf area is the right answer for guests who want harbor views, something to eat, and a browse without a plan. It is compact, walkable, and easy — several good lunch spots, some shopping, and the waterfront within view. Friday afternoon or Saturday pre-ceremony, it works well as a gathering point.",
              },
            ].map(({ place, detail }) => (
              <div
                key={place}
                className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-6"
              >
                <p className="font-semibold text-[var(--color-ink)]">{place}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sunday */}
        <section>
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Sunday
            </span>
            <h2
              className="text-2xl font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Sunday morning wind-down — don't skip this
            </h2>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Most couples under-invest in Sunday morning, and it is the easiest place to make a
            genuine impression. Guests are happy, slightly tired, and not in a rush to leave. The
            wedding is done and the pressure is gone. A simple hosted brunch — even a casual one at
            the hotel or at a nearby restaurant with a reserved section — turns the weekend from a
            great event into a great memory.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            It does not need to be elaborate. It needs to be present. An informal brunch from 10 to
            noon gives guests a reason to linger, lets you actually talk to people you missed at the
            reception, and creates a proper goodbye rather than the awkward hotel lobby exit where
            everyone is rolling luggage and trying to catch the couple for one more hug.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Newport on a Sunday morning in summer is genuinely beautiful — quieter than Saturday,
            the light is good, and the town has not yet filled with day-trippers. A walk to the
            Cliff Walk, a stroll along the waterfront, or just coffee on a porch is part of what
            makes Newport a destination rather than just a venue. Give guests a reason to experience
            it before they drive back to wherever they came from.
          </p>
          <div
            className="mt-6 rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
          >
            <p className="text-sm font-semibold text-[var(--color-ink)]">Sunday brunch formats that work well</p>
            <ul className="mt-3 space-y-2">
              {[
                "Hotel breakfast, reserved section — lowest effort, high comfort",
                "Private room at a Bellevue or waterfront restaurant — feels hosted without being formal",
                "Casual inn setup with pastries and coffee — works especially well if you've done an inn buyout",
                "Outdoor brunch at a venue that allows it — the best option when weather and timing align",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold-deep)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Transportation */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Transportation: plan it, don't assume it
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            Uber and Lyft exist in Newport, but they surge heavily on summer weekends. A Friday
            evening after a rehearsal dinner with 40 guests trying to call rides at the same time
            is not a scenario that ends gracefully. Do not build your transportation plan around the
            assumption that rideshare will be available when you need it.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Chartered shuttles are the better answer, and Newport wedding vendors are familiar with
            the logistics. A coach or two running a loop between the hotel block and the venue
            handles most of the volume, removes the parking problem, and lets guests drink at the
            reception without worrying about driving. Build the shuttle cost into the budget early —
            it is one of the highest-value line items in a Newport weekend.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            For the end of the reception, run the shuttle in waves rather than a single late
            departure. Some guests leave early; some stay until the last song. A 10pm run and a
            midnight run is more useful than a single 11:30pm bus that half the room is not ready
            for.
          </p>
        </section>

        {/* What makes it cohesive */}
        <section>
          <h2
            className="text-2xl font-semibold tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What makes a Newport weekend feel cohesive instead of fragmented
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            The couples whose guests talk about the weekend for years afterward are not the ones who
            overscheduled it. They are the ones who gave guests a sense of the place — and then got
            out of the way.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            Newport is a town that rewards wandering. The best Saturday morning a guest can have
            before your ceremony is probably one where they found a coffee shop on their own, walked
            somewhere beautiful by accident, and ate lunch somewhere they would not have discovered
            from a list. That experience does not require a schedule. It requires knowing where to
            stay so the wandering is easy, and having a light suggestion or two in the welcome note
            so they know where to start.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The structure you provide should be minimal: know how guests are getting from the hotel
            to the ceremony, know how they are getting home from the reception, and have a brunch
            plan for Sunday. Everything else — the walk, the beach, the mansions, the wharf — is
            something Newport delivers on its own if you point people in roughly the right direction.
          </p>
          <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
            The fragmented weekend, by contrast, is one where guests are not sure where to go,
            scramble for dinner reservations on their own, and feel like they are navigating an
            unfamiliar town with no guidance. That is a hosting failure, not a Newport failure.
            The town will do its part. Your job is to reduce the friction so guests can enjoy it.
          </p>
        </section>

      </div>

      {/* Keep reading */}
      <nav className="mt-14 border-t border-[var(--color-line)] pt-10">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Related guides
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              href: "/newport-guide/rehearsal-dinner-ideas",
              label: "Rehearsal dinner ideas",
              description:
                "How to set the right tone for Friday night without overshadowing Saturday.",
            },
            {
              href: "/newport-guide/best-time-of-year",
              label: "Best time of year",
              description:
                "How season affects the weekend experience, pricing, and how relaxed the whole thing feels.",
            },
            {
              href: "/wedding/venues",
              label: "Newport venues",
              description:
                "Browse the venue listings — the venue choice shapes everything downstream in the weekend plan.",
            },
            {
              href: "/planning/venues",
              label: "Venue planning guide",
              description:
                "How to evaluate venues by guest flow, service model, and weekend format — not just photos.",
            },
            {
              href: "/newport-guide/marriage-license-ri",
              label: "Marriage license in RI",
              description:
                "The 3-day waiting period, where to apply, and what out-of-state couples need to know.",
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
