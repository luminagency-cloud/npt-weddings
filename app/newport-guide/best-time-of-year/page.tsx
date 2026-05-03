import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Best Time of Year for a Newport Wedding",
  description:
    "A guide to choosing the best time of year for a Newport wedding based on seasonality, weather, pricing, and guest experience.",
}

export default function BestTimeOfYearPage() {
  return (
    <SeoGuidePage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/newport-guide", label: "Newport Guide" },
        { label: "Best Time of Year" },
      ]}
      description="A guide to choosing the best time of year for a Newport wedding based on seasonality, weather, pricing, and guest experience."
      path="/newport-guide/best-time-of-year"
      eyebrow="Local Guide"
      title="The best time of year for a Newport wedding depends on what you value most."
      intro="There is no single best season for every Newport wedding. Summer brings prestige and energy. Shoulder season brings more breathing room. Each choice affects atmosphere, pricing pressure, guest movement, and how much weather risk couples are really buying."
      lead="Newport’s reputation pulls many couples toward peak-season dates automatically. Sometimes that is right. Sometimes shoulder season creates a better, calmer, and more financially sensible version of the same wedding idea."
      checklist={{
        title: "Season checks",
        items: [
          "Decide whether you care more about peak Newport energy or more breathing room.",
          "Treat weather exposure honestly, especially near the water.",
          "Assume summer demand comes with higher pressure across the whole weekend.",
          "Use season to support the tone of the wedding, not just the postcard version of Newport.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/planning/venues/waterfront", label: "Waterfront wedding venues in Newport" },
        { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
        { href: "/planning/venues", label: "Start venue planning" },
      ]}
    />
  )
}
