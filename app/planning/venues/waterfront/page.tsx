import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Waterfront Wedding Venues in Newport",
  description:
    "A guide to waterfront wedding venues in Newport for couples balancing scenery, weather exposure, and guest experience.",
}

export default function WaterfrontWeddingVenuesPage() {
  return (
    <SeoGuidePage
      eyebrow="Venue Intent"
      title="Waterfront wedding venues in Newport earn their appeal. They also raise the stakes."
      intro="The waterfront is one of Newport’s strongest selling points, and couples search for it for obvious reasons. But the right waterfront venue is not just about a view. It is about handling wind, weather, timing, and guest movement without losing the elegance that made the venue attractive in the first place."
      lead="Waterfront venues can produce some of the most memorable weddings in Newport. They can also expose weak planning quickly. That makes them a high-upside category that benefits from more judgment, not less."
      checklist={{
        title: "Waterfront checks",
        items: [
          "Treat wind and weather resilience as part of the venue decision, not a side note.",
          "Watch how the site handles arrival, transitions, and outdoor exposure.",
          "Assume timing matters more near the water than it does inland.",
          "Pick a venue that feels graceful even when conditions are imperfect.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
        { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
        { href: "/wedding/venues", label: "Browse venue listings" },
      ]}
    />
  )
}
