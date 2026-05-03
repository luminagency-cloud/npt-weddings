import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Small Wedding Venues in Newport",
  description:
    "A guide to small wedding venues in Newport for couples prioritizing intimacy, guest experience, and a cleaner weekend format.",
}

export default function SmallWeddingVenuesPage() {
  return (
    <SeoGuidePage
      eyebrow="Venue Intent"
      title="The best small wedding venues in Newport make intimacy feel intentional, not scaled down."
      intro="Small weddings in Newport work best when the venue supports closeness, movement, and a genuine sense of occasion. The goal is not to make a big-wedding venue feel emptier. The goal is to choose a place that feels right at a more intimate scale."
      lead="Because Newport is such a recognizable destination, smaller weddings can be especially strong here. When the venue, guest count, and pace of the weekend align, the result often feels more elevated than a larger wedding stretched across the wrong format."
      checklist={{
        title: "Small venue checks",
        items: [
          "Look for venues that feel complete with a tighter guest count.",
          "Prioritize flow and atmosphere over sheer room size.",
          "Use a smaller format to improve food, service, and guest experience.",
          "Do not assume intimate means inexpensive. It means more focused.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
        { href: "/planning/budget-guide", label: "Read the budget guide" },
        { href: "/wedding/venues", label: "Browse venue listings" },
      ]}
    />
  )
}
