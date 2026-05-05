import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.smallWeddingVenues.metadataTitle,
  description: guidePages.smallWeddingVenues.description,
  alternates: { canonical: "/planning/venues/small-weddings" },
  openGraph: { type: "article" },
}

export default function SmallWeddingVenuesPage() {
  return (
    <SeoGuidePage
      {...guidePages.smallWeddingVenues}
      heroParagraph="Some of the best Newport weddings happen in rooms that seat forty people. Not because the couple couldn't have done more, but because they understood that a smaller room with the right people in it has a warmth that no ballroom can manufacture. Newport has always done this well — tucked-away gardens, inn dining rooms with low ceilings and good candlelight, courtyards that feel like they were designed for exactly this moment. The town scales down gracefully, and an intimate Newport wedding can feel just as considered, just as coastal, just as unmistakably itself as anything happening at the grand estates a mile up the road."
    />
  )
}
