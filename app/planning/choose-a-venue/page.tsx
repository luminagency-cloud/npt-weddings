import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "How to Choose a Newport Wedding Venue",
  description:
    "A practical guide to choosing a Newport wedding venue based on guest flow, season, budget, and overall weekend style.",
}

export default function ChooseVenuePage() {
  return (
    <SeoGuidePage
      eyebrow="Planning Guide"
      title="Choosing a Newport wedding venue is really choosing the kind of weekend you want to host."
      intro="The right venue is not just the prettiest room or the best photo backdrop. In Newport, venue choice shapes lodging pressure, timing, transportation, weather risk, food service, and the social pace of the entire weekend."
      lead="Couples often search venues as if they are shopping for a backdrop. In reality, they are choosing a system. The strongest Newport weddings usually come from venues that align with guest count, service expectations, and the kind of destination experience the couple actually wants to create."
      checklist={{
        title: "Venue filters",
        items: [
          "Decide whether you want a destination-weekend feel or a tighter one-day format.",
          "Know how much weather exposure you can tolerate emotionally and financially.",
          "Be honest about whether you want built-in service or a more custom production.",
          "Judge the venue by guest experience, not just by the ceremony view.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/planning/venues", label: "Read the venue planning guide" },
        { href: "/planning/budget-guide", label: "See the budget guide" },
        { href: "/wedding/venues", label: "Browse Newport venues" },
      ]}
    />
  )
}
