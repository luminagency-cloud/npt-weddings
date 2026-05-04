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
  return <SeoGuidePage {...guidePages.smallWeddingVenues} />
}
