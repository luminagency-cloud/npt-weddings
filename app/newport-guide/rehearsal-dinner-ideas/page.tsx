import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Newport Rehearsal Dinner Ideas",
  description:
    "Newport rehearsal dinner ideas for shaping a wedding weekend with the right tone, guest mix, and location flow.",
}

export default function RehearsalDinnerIdeasPage() {
  return (
    <SeoGuidePage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/newport-guide", label: "Newport Guide" },
        { label: "Rehearsal Dinner Ideas" },
      ]}
      description="Newport rehearsal dinner ideas for shaping a wedding weekend with the right tone, guest mix, and location flow."
      path="/newport-guide/rehearsal-dinner-ideas"
      eyebrow="Local Guide"
      title="A Newport rehearsal dinner should set the tone for the weekend, not compete with it."
      intro="The best rehearsal dinners in Newport feel like a confident opening note. They frame the weekend, gather the right people, and establish the pace without exhausting everyone before the main event."
      lead="Because the destination itself already carries so much atmosphere, rehearsal dinners here work best when they are thoughtful, well-placed, and scaled to the guest mix. The point is not to create a second wedding. It is to launch the weekend well."
      checklist={{
        title: "Dinner checks",
        items: [
          "Choose a setting that fits the rest of the weekend instead of trying to outshine it.",
          "Think about who actually needs to be included and who does not.",
          "Use the event to create warmth, not logistical stress.",
          "Let the dinner feel connected to the destination and the broader wedding story.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/newport-guide/weekend-itinerary", label: "Newport wedding weekend itinerary" },
        { href: "/newport-guide/best-time-of-year", label: "Best time of year for a Newport wedding" },
        { href: "/planning/timeline", label: "Newport wedding timeline" },
      ]}
    />
  )
}
