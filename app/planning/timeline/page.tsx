import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.timeline.metadataTitle,
  description: guidePages.timeline.description,
  alternates: { canonical: "/planning/timeline" },
  openGraph: { type: "article" },
}

export default function TimelinePage() {
  return <SeoGuidePage {...guidePages.timeline} />
}
