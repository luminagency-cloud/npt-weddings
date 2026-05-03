import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.weekendItinerary.metadataTitle,
  description: guidePages.weekendItinerary.description,
}

export default function WeekendItineraryPage() {
  return <SeoGuidePage {...guidePages.weekendItinerary} />
}
