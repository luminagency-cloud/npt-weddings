import type { Metadata } from "next"
import { SeoGuidePage } from "@/components/seo-guide-page"
import { guidePages } from "@/lib/guide-content"

export const metadata: Metadata = {
  title: guidePages.budgetGuide.metadataTitle,
  description: guidePages.budgetGuide.description,
  alternates: { canonical: "/planning/budget-guide" },
  openGraph: { type: "article" },
}

export default function BudgetGuidePage() {
  return <SeoGuidePage {...guidePages.budgetGuide} />
}
