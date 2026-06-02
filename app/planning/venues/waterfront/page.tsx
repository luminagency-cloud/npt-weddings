import type { Metadata } from "next"
import WaterfrontVenuesArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/planning/venues/waterfront.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/planning/venues/waterfront" },
  openGraph: { type: "article" },
}

export default function WaterfrontWeddingVenuesPage() {
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
      <WaterfrontVenuesArticle />
    </MdxArticlePage>
  )
}
