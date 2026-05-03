import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.luxuryVenues.metadataTitle,
  description: guidePages.luxuryVenues.description,
}

export default function LuxuryWeddingVenuesPage() {
  return <SeoGuidePage {...guidePages.luxuryVenues} />
}
