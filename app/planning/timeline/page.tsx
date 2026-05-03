import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"

export const metadata: Metadata = {
  title: "Newport Wedding Timeline",
  description:
    "A Newport wedding timeline guide for sequencing venue, planning, photography, food, and guest-experience decisions.",
}

export default function TimelinePage() {
  return (
    <SeoGuidePage
      eyebrow="Planning Guide"
      title="A better Newport wedding timeline starts by sequencing the hard decisions first."
      intro="The cleanest wedding timelines do not come from managing every detail at once. They come from making the few high-impact decisions in the right order: venue, guest count, season, weekend format, and then the vendors that should follow."
      lead="In a destination market like Newport, timeline mistakes compound quickly. If venue style is unclear, everything downstream stays fuzzy. If guest flow is unresolved, vendor choices become guesswork. A better timeline is really a better order of decision-making."
      checklist={{
        title: "Timeline priorities",
        items: [
          "Set venue direction before trying to build a full vendor stack.",
          "Lock guest-count range early so planning choices stop drifting.",
          "Treat planners and photographers as early priority hires once venue direction is clear.",
          "Use the timeline to reduce complexity, not to decorate complexity.",
        ],
      }}
      sections={[
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
      ]}
      relatedLinks={[
        { href: "/planning/budget-guide", label: "Read the Newport wedding budget guide" },
        { href: "/planning/venues", label: "Start with venue planning" },
        { href: "/wedding/planners", label: "Browse planners" },
      ]}
    />
  )
}
