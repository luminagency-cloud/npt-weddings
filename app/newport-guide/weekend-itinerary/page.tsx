import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Newport Wedding Weekend Itinerary",
  description:
    "A Newport wedding weekend itinerary guide for structuring guest flow, dinner plans, celebration pacing, and the overall destination experience.",
}

export default function WeekendItineraryPage() {
  return (
    <SeoGuidePage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/newport-guide", label: "Newport Guide" },
        { label: "Weekend Itinerary" },
      ]}
      description="A Newport wedding weekend itinerary guide for structuring guest flow, dinner plans, celebration pacing, and the overall destination experience."
      path="/newport-guide/weekend-itinerary"
      eyebrow="Local Guide"
      title="A strong Newport wedding weekend should feel curated, not overpacked."
      intro="The best Newport wedding weekends feel cohesive from arrival to farewell brunch. The goal is not to schedule every second. It is to create a pace that lets guests enjoy the destination without losing the shape of the event."
      lead="Because Newport is a destination market, the wedding is rarely just the ceremony and reception. The weekend becomes part of the product. That means itinerary design matters much more than it does in a purely local wedding."
      checklist={{
        title: "Weekend checks",
        items: [
          "Think in terms of guest energy, not just event quantity.",
          "Use location shifts intentionally instead of stacking logistics.",
          "Create enough structure that the weekend feels hosted, but not crowded.",
          "Let Newport itself carry some of the experience.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/newport-guide/rehearsal-dinner-ideas", label: "Newport rehearsal dinner ideas" },
        { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
        { href: "/planning/choose-a-venue", label: "How to choose a Newport wedding venue" },
      ]}
    />
  )
}
