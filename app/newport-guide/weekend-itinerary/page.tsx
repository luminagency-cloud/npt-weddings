import type { Metadata } from "next"
import { MdxArticlePage } from "@/components/mdx-article-page"
import WeekendItineraryArticle from "@/content/newport-guide/weekend-itinerary.mdx"

const description =
  "How to build a Newport wedding weekend guests will actually love. Arrival tips, rehearsal dinner ideas, day-of flow, and Sunday morning wind-down recommendations from people who know the town."

export const metadata: Metadata = {
  title: {
    absolute: "Newport Wedding Weekend Itinerary for Guests | Married in Newport",
  },
  description,
  alternates: { canonical: "/newport-guide/weekend-itinerary" },
  openGraph: { type: "article" },
}

const breadcrumbs = [
  { href: "/", label: "Home" },
  { href: "/newport-guide", label: "Newport Guide" },
  { label: "Weekend Itinerary" },
]

const relatedLinks = [
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
      "Browse the venue listings. The venue choice shapes everything downstream in the weekend plan.",
  },
  {
    href: "/planning/venues",
    label: "Venue planning guide",
    description:
      "How to evaluate venues by guest flow, service model, and weekend format, not just photos.",
  },
  {
    href: "/newport-guide/marriage-license-ri",
    label: "Marriage license in RI",
    description:
      "The three-day waiting period, where to apply, and what out-of-state couples need to know.",
  },
]

export default function WeekendItineraryPage() {
  return (
    <MdxArticlePage
      breadcrumbs={breadcrumbs}
      description={description}
      eyebrow="Newport Guide"
      intro="Newport works best as a weekend, not just a wedding day. The couples who design the full arc of arrival, dinner, ceremony, and Sunday morning end up with something that feels genuinely hosted rather than just scheduled."
      path="/newport-guide/weekend-itinerary"
      relatedLinks={relatedLinks}
      title="How to build a Newport wedding weekend guests will actually remember"
    >
      <WeekendItineraryArticle />
    </MdxArticlePage>
  )
}
