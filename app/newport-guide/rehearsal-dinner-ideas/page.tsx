import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.rehearsalDinnerIdeas.metadataTitle,
  description: guidePages.rehearsalDinnerIdeas.description,
}

export default function RehearsalDinnerIdeasPage() {
  return <SeoGuidePage {...guidePages.rehearsalDinnerIdeas} />
}
