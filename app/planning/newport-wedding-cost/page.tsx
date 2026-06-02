import type { Metadata } from "next"
import NewportWeddingCostArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/planning/newport-wedding-cost.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description,
  alternates: { canonical: "/planning/newport-wedding-cost" },
  openGraph: { type: "article" },
}

export default function NewportWeddingCostPage() {
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
      <NewportWeddingCostArticle />
    </MdxArticlePage>
  )
}
