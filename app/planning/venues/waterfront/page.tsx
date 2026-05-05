import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.waterfrontVenues.metadataTitle,
  description: guidePages.waterfrontVenues.description,
  alternates: { canonical: "/planning/venues/waterfront" },
  openGraph: { type: "article" },
}

export default function WaterfrontWeddingVenuesPage() {
  return (
    <SeoGuidePage
      {...guidePages.waterfrontVenues}
      heroParagraph="There's a moment at a Newport waterfront wedding — usually during cocktail hour, usually facing the harbor — when guests stop talking and just look. The light does something particular here in the late afternoon, going gold across the water, and for a few minutes the whole party just breathes it in. That moment is what couples are buying when they choose a waterfront venue, and it is absolutely real. The planning considerations that follow are real too, and worth taking seriously — but they exist to protect that moment, not to talk you out of it."
    />
  )
}
