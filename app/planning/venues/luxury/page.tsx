import type { Metadata } from "next"
import LuxuryVenuesArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/planning/venues/luxury.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/planning/venues/luxury" },
  openGraph: { type: "article" },
}

export default function LuxuryWeddingVenuesPage() {
  return (
    <MdxArticlePage
      breadcrumbs={breadcrumbs}
      description={description}
      eyebrow={eyebrow}
      intro={intro}
      path={path}
      relatedLinks={relatedLinks}
      title={title}
    >
      <LuxuryVenuesArticle />
    </MdxArticlePage>
  )
}
