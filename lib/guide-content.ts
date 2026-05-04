import type { BreadcrumbLink } from "@/components/breadcrumbs"

type GuideSection = {
  title: string
  body: string
}

type GuideChecklist = {
  title: string
  items: string[]
}

type GuideRelatedLink = {
  href: string
  label: string
}

type GuidePageContent = {
  breadcrumbs: BreadcrumbLink[]
  description: string
  decisionNotes?: GuideSection[]
  eyebrow: string
  intro: string
  lead: string
  path: string
  relatedLinks: GuideRelatedLink[]
  sections: GuideSection[]
  checklist: GuideChecklist
  title: string
  metadataTitle: string
}

export const guidePages = {
  budgetGuide: {
    metadataTitle: "Newport Wedding Cost Guide",
    description:
      "A practical Newport wedding budget guide covering venue format, staffing pressure, rentals, and guest-flow costs.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { label: "Budget Guide" },
    ],
    path: "/planning/budget-guide",
    eyebrow: "Planning Guide",
    title: "A Newport wedding budget is usually decided by format before it is decided by line items.",
    intro:
      "Couples often start by comparing florals, stationery, or rentals. In Newport, the bigger budget swings usually happen earlier: venue format, service model, guest movement, and how much infrastructure the weekend needs.",
    lead:
      "A full-service hotel or club, a private estate, and a waterfront setup can all produce a beautiful wedding. They do not create the same staffing needs, rental pressure, transportation demands, or weather contingency costs. That is why budget planning has to start with format.",
    checklist: {
      title: "Budget checks",
      items: [
        "Know whether you are pricing a full-service venue or a custom-build setup.",
        "Be realistic about guest transportation, lodging pressure, and weekend sprawl.",
        "Assume weather backup costs matter more here than couples want them to.",
        "Use the budget to narrow venue style, not just trim decor later.",
      ],
    },
    sections: [
      {
        title: "Venue format sets the ceiling",
        body:
          "The most expensive mistake is choosing a format that quietly requires more staffing, rentals, and logistics than the budget can support. A venue with more included services can often be the more efficient choice even if the headline number looks higher.",
      },
      {
        title: "Guest experience is a cost center",
        body:
          "In Newport, the guest experience often stretches beyond the ceremony and reception. Hotel blocks, car service, dinner movement, and waterfront timing all affect spend. That is not fluff. It is part of the event design.",
      },
      {
        title: "Weather exposure changes the budget",
        body:
          "Coastal settings are part of the appeal, but outdoor confidence has a price. If your plan depends on tents, backup space, or major weather pivots, budget for that honestly from the start.",
      },
      {
        title: "Editing the guest count matters",
        body:
          "In a market like Newport, guest count is often the fastest lever for protecting quality. A slightly tighter list can preserve the venue choice, food experience, and service level that made the wedding feel worth doing in Newport in the first place.",
      },
    ],
    relatedLinks: [
      { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
      { href: "/planning/venues", label: "Read the venue planning guide" },
      { href: "/wedding/venues", label: "Browse venue listings" },
    ],
  },
  timeline: {
    metadataTitle: "Newport Wedding Planning Timeline",
    description:
      "A Newport wedding timeline guide for sequencing venue, planning, photography, food, and guest-experience decisions.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { label: "Timeline" },
    ],
    path: "/planning/timeline",
    eyebrow: "Planning Guide",
    title: "A better Newport wedding timeline starts by sequencing the hard decisions first.",
    intro:
      "The cleanest wedding timelines do not come from managing every detail at once. They come from making the few high-impact decisions in the right order: venue, guest count, season, weekend format, and then the vendors that should follow.",
    lead:
      "In a destination market like Newport, timeline mistakes compound quickly. If venue style is unclear, everything downstream stays fuzzy. If guest flow is unresolved, vendor choices become guesswork. A better timeline is really a better order of decision-making.",
    checklist: {
      title: "Timeline priorities",
      items: [
        "Set venue direction before trying to build a full vendor stack.",
        "Lock guest-count range early so planning choices stop drifting.",
        "Treat planners and photographers as early priority hires once venue direction is clear.",
        "Use the timeline to reduce complexity, not to decorate complexity.",
      ],
    },
    sections: [
      {
        title: "Start with format and season",
        body:
          "A Newport summer weekend, a shoulder-season estate event, and a tighter one-day wedding all need different timelines. Decide the basic format first so the rest of the plan stops fighting itself.",
      },
      {
        title: "Venue before visual details",
        body:
          "Venue selection should happen before the couple gets overly attached to visual ideas that may not fit the actual flow, weather exposure, or operational reality of the weekend.",
      },
      {
        title: "Lock the key vendors early",
        body:
          "Once venue direction is clear, the next priorities are the vendors most tied to logistics and experience: planning support, photography, and food. Those choices affect the whole weekend more than small accessory decisions do.",
      },
      {
        title: "Leave room for refinement",
        body:
          "A strong timeline should make refinement easier later. It should not force you to solve branding, guest flow, transport, and aesthetics all at once before the foundational choices have settled.",
      },
    ],
    relatedLinks: [
      { href: "/planning/budget-guide", label: "Read the Newport wedding budget guide" },
      { href: "/planning/venues", label: "Start with venue planning" },
      { href: "/wedding/planners", label: "Browse planners" },
    ],
  },
  bestTimeOfYear: {
    metadataTitle: "Best Time of Year for a Newport Wedding",
    description:
      "A guide to choosing the best time of year for a Newport wedding based on seasonality, weather, pricing, and guest experience.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/newport-guide", label: "Newport Guide" },
      { label: "Best Time of Year" },
    ],
    path: "/newport-guide/best-time-of-year",
    eyebrow: "Local Guide",
    title: "The best time of year for a Newport wedding depends on what you value most.",
    intro:
      "There is no single best season for every Newport wedding. Summer brings prestige and energy. Shoulder season brings more breathing room. Each choice affects atmosphere, pricing pressure, guest movement, and how much weather risk couples are really buying.",
    lead:
      "Newport’s reputation pulls many couples toward peak-season dates automatically. Sometimes that is right. Sometimes shoulder season creates a better, calmer, and more financially sensible version of the same wedding idea.",
    checklist: {
      title: "Season checks",
      items: [
        "Decide whether you care more about peak Newport energy or more breathing room.",
        "Treat weather exposure honestly, especially near the water.",
        "Assume summer demand comes with higher pressure across the whole weekend.",
        "Use season to support the tone of the wedding, not just the postcard version of Newport.",
      ],
    },
    sections: [
      {
        title: "Summer is peak demand for a reason",
        body:
          "Summer Newport offers the fullest destination feel, but it also brings the highest traffic, strongest demand, and the least forgiveness around venue and guest logistics.",
      },
      {
        title: "Shoulder season can be more elegant",
        body:
          "Late spring and early fall often give couples a better balance of atmosphere, pacing, and pricing flexibility while still feeling unmistakably Newport.",
      },
      {
        title: "Weather should be part of the decision",
        body:
          "Couples often talk about season emotionally and only later deal with exposure, wind, rain backups, or heat. The better move is to factor those realities in from the start.",
      },
      {
        title: "The best date supports the format",
        body:
          "The right season depends on whether the wedding is estate-driven, waterfront, hotel-based, or tightly scheduled around a destination-weekend experience.",
      },
    ],
    relatedLinks: [
      { href: "/planning/venues/waterfront", label: "Waterfront wedding venues in Newport" },
      { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
      { href: "/planning/venues", label: "Start venue planning" },
    ],
  },
  weekendItinerary: {
    metadataTitle: "Newport Wedding Weekend Itinerary",
    description:
      "A Newport wedding weekend itinerary guide for structuring guest flow, dinner plans, celebration pacing, and the overall destination experience.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/newport-guide", label: "Newport Guide" },
      { label: "Weekend Itinerary" },
    ],
    path: "/newport-guide/weekend-itinerary",
    eyebrow: "Local Guide",
    title: "A strong Newport wedding weekend should feel curated, not overpacked.",
    intro:
      "The best Newport wedding weekends feel cohesive from arrival to farewell brunch. The goal is not to schedule every second. It is to create a pace that lets guests enjoy the destination without losing the shape of the event.",
    lead:
      "Because Newport is a destination market, the wedding is rarely just the ceremony and reception. The weekend becomes part of the product. That means itinerary design matters much more than it does in a purely local wedding.",
    checklist: {
      title: "Weekend checks",
      items: [
        "Think in terms of guest energy, not just event quantity.",
        "Use location shifts intentionally instead of stacking logistics.",
        "Create enough structure that the weekend feels hosted, but not crowded.",
        "Let Newport itself carry some of the experience.",
      ],
    },
    sections: [
      {
        title: "Arrival should feel easy",
        body:
          "The first event sets the emotional tone for the entire weekend. Couples should use arrival-night plans to create momentum without immediately exhausting the guest list.",
      },
      {
        title: "Every event should have a role",
        body:
          "A rehearsal dinner, drinks gathering, ceremony, reception, and farewell brunch can all work together well. The key is knowing why each event exists and what energy it is supposed to create.",
      },
      {
        title: "Guest movement should stay manageable",
        body:
          "A Newport weekend can start feeling fragmented fast if events are too scattered or transportation becomes a recurring stress point. Cohesion matters more than novelty.",
      },
      {
        title: "Leave room for the place",
        body:
          "One of Newport’s advantages is that guests often enjoy simply being there. The best itineraries create structure without eliminating breathing room or local texture.",
      },
    ],
    relatedLinks: [
      { href: "/newport-guide/rehearsal-dinner-ideas", label: "Newport rehearsal dinner ideas" },
      { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
      { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
    ],
  },
  rehearsalDinnerIdeas: {
    metadataTitle: "Newport Rehearsal Dinner Ideas",
    description:
      "Newport rehearsal dinner ideas for shaping a wedding weekend with the right tone, guest mix, and location flow.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/newport-guide", label: "Newport Guide" },
      { label: "Rehearsal Dinner Ideas" },
    ],
    path: "/newport-guide/rehearsal-dinner-ideas",
    eyebrow: "Local Guide",
    title: "A Newport rehearsal dinner should set the tone for the weekend, not compete with it.",
    intro:
      "The best rehearsal dinners in Newport feel like a confident opening note. They frame the weekend, gather the right people, and establish the pace without exhausting everyone before the main event.",
    lead:
      "Because the destination itself already carries so much atmosphere, rehearsal dinners here work best when they are thoughtful, well-placed, and scaled to the guest mix. The point is not to create a second wedding. It is to launch the weekend well.",
    checklist: {
      title: "Dinner checks",
      items: [
        "Choose a setting that fits the rest of the weekend instead of trying to outshine it.",
        "Think about who actually needs to be included and who does not.",
        "Use the event to create warmth, not logistical stress.",
        "Let the dinner feel connected to the destination and the broader wedding story.",
      ],
    },
    sections: [
      {
        title: "Tone matters more than scale",
        body:
          "A rehearsal dinner should feel intentional and socially useful, whether it is intimate or more expansive. The strongest ones create ease and momentum rather than performance pressure.",
      },
      {
        title: "Location should reduce friction",
        body:
          "Newport offers plenty of compelling settings, but not every compelling setting makes sense for the night before the wedding. Simplicity and flow should matter as much as charm.",
      },
      {
        title: "Guest mix should be deliberate",
        body:
          "The rehearsal dinner often works best when the guest list is clearly defined. Trying to blur the line between a focused hosted event and a wider welcome gathering can weaken both.",
      },
      {
        title: "It should support the whole weekend",
        body:
          "The dinner should help the weekend feel better organized, more social, and more settled. If it creates fatigue or complexity, it is probably doing too much.",
      },
    ],
    relatedLinks: [
      { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
      { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
      { href: "/planning/timeline", label: "Newport wedding timeline" },
    ],
  },
  chooseVenue: {
    metadataTitle: "How to Choose a Newport Wedding Venue",
    description:
      "A practical guide to choosing a Newport wedding venue based on guest flow, season, budget, and overall weekend style.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { label: "Choose a Venue" },
    ],
    path: "/planning/choose-a-venue",
    eyebrow: "Planning Guide",
    title: "Choosing a Newport wedding venue is really choosing the kind of weekend you want to host.",
    intro:
      "The right venue is not just the prettiest room or the best photo backdrop. In Newport, venue choice shapes lodging pressure, timing, transportation, weather risk, food service, and the social pace of the entire weekend.",
    lead:
      "Couples often search venues as if they are shopping for a backdrop. In reality, they are choosing a system. The strongest Newport weddings usually come from venues that align with guest count, service expectations, and the kind of destination experience the couple actually wants to create.",
    checklist: {
      title: "Venue filters",
      items: [
        "Decide whether you want a destination-weekend feel or a tighter one-day format.",
        "Know how much weather exposure you can tolerate emotionally and financially.",
        "Be honest about whether you want built-in service or a more custom production.",
        "Judge the venue by guest experience, not just by the ceremony view.",
      ],
    },
    sections: [
      {
        title: "Start with the pace of the weekend",
        body:
          "Some venues support a full destination rhythm with meaningful guest interaction across multiple events. Others are better for a focused, elegant one-day celebration. That difference matters more than couples think.",
      },
      {
        title: "Evaluate movement, not just beauty",
        body:
          "A venue should be judged by how people move through it: ceremony to cocktails to dinner to dancing, plus how guests arrive, leave, and regroup the next day. The beautiful venue that creates friction is not automatically the better venue.",
      },
      {
        title: "Match the budget to the format",
        body:
          "If the venue requires extensive rentals, transport planning, weather backup, or staffing lift, the budget has to support that. The smartest choice is often the venue that makes the whole system cleaner, not just the venue that photographs best.",
      },
      {
        title: "Think in terms of fit",
        body:
          "The right Newport venue should feel aligned with the guest list, season, service style, and the emotional tone of the weekend. Fit matters more than prestige in isolation.",
      },
    ],
    relatedLinks: [
      { href: "/planning/venues", label: "Read the venue planning guide" },
      { href: "/planning/budget-guide", label: "See the budget guide" },
      { href: "/wedding/venues", label: "Browse Newport venues" },
    ],
  },
  luxuryVenues: {
    metadataTitle: "Luxury Wedding Venues Newport RI",
    description:
      "A guide to luxury Newport wedding venues for couples looking for prestige, service, and a highly polished guest experience.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { href: "/planning/venues", label: "Venues" },
      { label: "Luxury Venues" },
    ],
    path: "/planning/venues/luxury",
    eyebrow: "Venue Intent",
    title: "Luxury Newport wedding venues should feel polished, not merely expensive.",
    intro:
      "Luxury in Newport is not just about historic prestige or water views. The best luxury venues combine setting, service, guest comfort, and operational calm in a way that makes the whole weekend feel effortless.",
    lead:
      "Newport has enough status in the market that luxury couples can get distracted by prestige alone. The better question is whether the venue delivers a consistently elevated experience from arrival through the final event of the weekend.",
    checklist: {
      title: "Luxury checks",
      items: [
        "Look past the headline reputation and study service quality.",
        "Judge how the venue handles guest comfort as closely as aesthetics.",
        "Make sure the level of staffing and execution matches the price point.",
        "Choose the venue that feels composed under pressure, not just glamorous in photos.",
      ],
    },
    decisionNotes: [
      {
        title: "Best fit",
        body:
          "Luxury venues tend to work best for couples who want the weekend to feel highly hosted, visually composed, and operationally calm from the first arrival through the farewell brunch.",
      },
      {
        title: "Where budgets stretch",
        body:
          "At this end of the market, the hidden pressure usually comes from maintaining the standard across rentals, floral scale, staffing, transportation, and guest hospitality rather than from the venue fee alone.",
      },
      {
        title: "What to watch for",
        body:
          "Some properties sell prestige better than they deliver flow. If the venue depends on patchwork logistics or inconsistent service, the luxury promise starts to break under real wedding pressure.",
      },
    ],
    sections: [
      {
        title: "Prestige is not enough",
        body:
          "The Newport market has venues with real cachet, but luxury couples still need to ask whether the actual event experience feels seamless, warm, and controlled. Prestige without execution gets exposed quickly.",
      },
      {
        title: "Service is part of the aesthetic",
        body:
          "At the high end, service quality shapes the entire emotional tone of the wedding. A luxury venue should feel refined in motion, not just beautiful at a standstill.",
      },
      {
        title: "Guest comfort matters more than spectacle",
        body:
          "A truly elevated wedding often feels smoother, calmer, and more intentional rather than simply larger or more dramatic. Luxury should reduce friction, not introduce more of it.",
      },
      {
        title: "The venue should carry the standard",
        body:
          "The strongest luxury venues make it easier for every other part of the wedding to succeed. They give planners, caterers, and creative partners a cleaner platform to work from.",
      },
      {
        title: "Look at the entire guest arc",
        body:
          "A luxury wedding starts before the ceremony and lasts beyond the final song. Evaluate how the property handles arrival, signage, weather backup, transport rhythm, and the handoff between events across the full weekend.",
      },
      {
        title: "The room should not need rescuing",
        body:
          "When a venue is truly strong, the design team can elevate it instead of compensating for it. Couples should not need excessive production just to make an expensive venue feel resolved.",
      },
    ],
    relatedLinks: [
      { href: "/planning/venues/waterfront", label: "Compare waterfront venues" },
      { href: "/planning/budget-guide", label: "Read the budget guide" },
      { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
      { href: "/wedding/venues", label: "Browse venue listings" },
    ],
  },
  waterfrontVenues: {
    metadataTitle: "Waterfront Wedding Venues Newport RI",
    description:
      "A guide to waterfront wedding venues in Newport for couples balancing scenery, weather exposure, and guest experience.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { href: "/planning/venues", label: "Venues" },
      { label: "Waterfront Venues" },
    ],
    path: "/planning/venues/waterfront",
    eyebrow: "Venue Intent",
    title: "Waterfront wedding venues in Newport earn their appeal. They also raise the stakes.",
    intro:
      "The waterfront is one of Newport’s strongest selling points, and couples search for it for obvious reasons. But the right waterfront venue is not just about a view. It is about handling wind, weather, timing, and guest movement without losing the elegance that made the venue attractive in the first place.",
    lead:
      "Waterfront venues can produce some of the most memorable weddings in Newport. They can also expose weak planning quickly. That makes them a high-upside category that benefits from more judgment, not less.",
    checklist: {
      title: "Waterfront checks",
      items: [
        "Treat wind and weather resilience as part of the venue decision, not a side note.",
        "Watch how the site handles arrival, transitions, and outdoor exposure.",
        "Assume timing matters more near the water than it does inland.",
        "Pick a venue that feels graceful even when conditions are imperfect.",
      ],
    },
    decisionNotes: [
      {
        title: "Best fit",
        body:
          "Waterfront venues are strongest for couples who genuinely want the harbor, coastline, or open-air setting to shape the emotional tone of the weekend rather than just appear in the photos.",
      },
      {
        title: "Operational pressure",
        body:
          "These venues ask more of timing, transportation, comfort planning, and backup options. That does not make them risky by default, but it does mean the logistics need to be treated as part of the design.",
      },
      {
        title: "What to watch for",
        body:
          "If the venue feels magical only in perfect weather, ask harder questions. The stronger properties still feel elegant when wind picks up, temperatures shift, or guest transitions take longer than expected.",
      },
    ],
    sections: [
      {
        title: "The scenery is real value",
        body:
          "A good waterfront venue can reduce the need to over-produce the event because the setting already carries so much of the mood and identity of the weekend.",
      },
      {
        title: "Exposure changes the plan",
        body:
          "The closer the event leans into open-air waterfront conditions, the more important backup planning, comfort, and timing become. That is not a reason to avoid these venues. It is a reason to choose them intelligently.",
      },
      {
        title: "Transitions matter",
        body:
          "Some waterfront properties handle ceremony-to-cocktail-to-reception movement beautifully. Others create bottlenecks or weather vulnerability. Study the flow, not just the photos.",
      },
      {
        title: "The best ones still feel calm",
        body:
          "The strongest waterfront venues feel composed, not fragile. They let the setting carry the atmosphere without making the whole event dependent on perfect conditions.",
      },
      {
        title: "Guest comfort is part of the brief",
        body:
          "Shuttles, footwear, shade, wraps, raw bars, champagne, and sunset timing can all feel romantic until guests are left waiting in wind or sun. Good waterfront planning protects the mood by protecting comfort.",
      },
      {
        title: "A weekend format helps",
        body:
          "Waterfront weddings often feel strongest when the rest of the weekend supports the same sense of place. Pairing the ceremony with an intentional itinerary gives the setting more coherence than treating the view as a one-off moment.",
      },
    ],
    relatedLinks: [
      { href: "/planning/venues/luxury", label: "Compare luxury venue tradeoffs" },
      { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
      { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
      { href: "/wedding/venues", label: "Browse venue listings" },
    ],
  },
  smallWeddingVenues: {
    metadataTitle: "Small Wedding Venues Newport RI",
    description:
      "A guide to small wedding venues in Newport for couples prioritizing intimacy, guest experience, and a cleaner weekend format.",
    breadcrumbs: [
      { href: "/", label: "Home" },
      { href: "/planning", label: "Planning" },
      { href: "/planning/venues", label: "Venues" },
      { label: "Small Wedding Venues" },
    ],
    path: "/planning/venues/small-weddings",
    eyebrow: "Venue Intent",
    title: "The best small wedding venues in Newport make intimacy feel intentional, not scaled down.",
    intro:
      "Small weddings in Newport work best when the venue supports closeness, movement, and a genuine sense of occasion. The goal is not to make a big-wedding venue feel emptier. The goal is to choose a place that feels right at a more intimate scale.",
    lead:
      "Because Newport is such a recognizable destination, smaller weddings can be especially strong here. When the venue, guest count, and pace of the weekend align, the result often feels more elevated than a larger wedding stretched across the wrong format.",
    checklist: {
      title: "Small venue checks",
      items: [
        "Look for venues that feel complete with a tighter guest count.",
        "Prioritize flow and atmosphere over sheer room size.",
        "Use a smaller format to improve food, service, and guest experience.",
        "Do not assume intimate means inexpensive. It means more focused.",
      ],
    },
    sections: [
      {
        title: "Scale should feel natural",
        body:
          "A good small-wedding venue should feel full and intentional with a reduced guest count. If the room or grounds need a much larger event to feel alive, it is probably the wrong fit.",
      },
      {
        title: "Guest experience gets stronger",
        body:
          "Smaller weddings make it easier to create a Newport weekend that feels relaxed, thoughtful, and socially connected. That can be a bigger luxury than spectacle.",
      },
      {
        title: "Design gets more disciplined",
        body:
          "With a smaller event, every design and service choice becomes more visible. The venue should help the wedding feel finished without requiring unnecessary production.",
      },
      {
        title: "Use intimacy as an advantage",
        body:
          "The right intimate venue lets couples spend more attention on food, hospitality, and atmosphere instead of trying to scale up to a venue or format that does not match the guest list.",
      },
    ],
    relatedLinks: [
      { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
      { href: "/planning/budget-guide", label: "Read the budget guide" },
      { href: "/wedding/venues", label: "Browse venue listings" },
    ],
  },
} as const satisfies Record<string, GuidePageContent>

export type GuidePageKey = keyof typeof guidePages
