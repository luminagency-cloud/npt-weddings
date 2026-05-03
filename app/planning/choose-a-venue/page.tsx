import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.chooseVenue.metadataTitle,
  description: guidePages.chooseVenue.description,
}

export default function ChooseVenuePage() {
  return <SeoGuidePage {...guidePages.chooseVenue} />
}
