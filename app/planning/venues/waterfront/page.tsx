import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.waterfrontVenues.metadataTitle,
  description: guidePages.waterfrontVenues.description,
}

export default function WaterfrontWeddingVenuesPage() {
  return <SeoGuidePage {...guidePages.waterfrontVenues} />
}
