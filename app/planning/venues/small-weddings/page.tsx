import type { Metadata } from "next"
import SmallWeddingVenuesArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/planning/venues/small-weddings.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/planning/venues/small-weddings" },
  openGraph: { type: "article" },
}

export default function SmallWeddingVenuesPage() {
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
      <SmallWeddingVenuesArticle />
    </MdxArticlePage>
  )
}
