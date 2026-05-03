import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Newport Wedding Budget Guide",
  description:
    "A practical Newport wedding budget guide covering venue format, staffing pressure, rentals, and guest-flow costs.",
}

export default function BudgetGuidePage() {
  return (
    <SeoGuidePage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/planning", label: "Planning" },
        { label: "Budget Guide" },
      ]}
      description="A practical Newport wedding budget guide covering venue format, staffing pressure, rentals, and guest-flow costs."
      path="/planning/budget-guide"
      eyebrow="Planning Guide"
      title="A Newport wedding budget is usually decided by format before it is decided by line items."
      intro="Couples often start by comparing florals, stationery, or rentals. In Newport, the bigger budget swings usually happen earlier: venue format, service model, guest movement, and how much infrastructure the weekend needs."
      lead="A full-service hotel or club, a private estate, and a waterfront setup can all produce a beautiful wedding. They do not create the same staffing needs, rental pressure, transportation demands, or weather contingency costs. That is why budget planning has to start with format."
      checklist={{
        title: "Budget checks",
        items: [
          "Know whether you are pricing a full-service venue or a custom-build setup.",
          "Be realistic about guest transportation, lodging pressure, and weekend sprawl.",
          "Assume weather backup costs matter more here than couples want them to.",
          "Use the budget to narrow venue style, not just trim decor later.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
        { href: "/planning/venues", label: "Read the venue planning guide" },
        { href: "/wedding/venues", label: "Browse venue listings" },
      ]}
    />
  )
}
