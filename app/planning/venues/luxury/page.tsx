import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.luxuryVenues.metadataTitle,
  description: guidePages.luxuryVenues.description,
  alternates: { canonical: "/planning/venues/luxury" },
  openGraph: { type: "article" },
}

export default function LuxuryWeddingVenuesPage() {
  return (
    <SeoGuidePage
      {...guidePages.luxuryVenues}
      heroParagraph="The grand estates on Bellevue Avenue were built to impress people who were already impressed with everything. That standard of scale and hospitality didn't disappear when the Gilded Age ended — it transferred, slowly, into the event spaces, ballrooms, and manicured grounds that now host weddings for couples who want their weekend to feel like it belongs somewhere. A Newport estate wedding carries a particular weight. Guests arrive and the setting does something to their posture. The weekend has a formality to it that doesn't feel imposed — it feels inevitable, given where you are."
    />
  )
}
