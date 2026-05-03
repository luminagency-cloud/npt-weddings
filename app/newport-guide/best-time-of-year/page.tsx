import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.bestTimeOfYear.metadataTitle,
  description: guidePages.bestTimeOfYear.description,
}

export default function BestTimeOfYearPage() {
  return <SeoGuidePage {...guidePages.bestTimeOfYear} />
}
