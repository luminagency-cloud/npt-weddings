import type { Metadata } from "next"
import VenuePlanningArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  title,
} from "@/content/planning/venues/index.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/planning/venues" },
  openGraph: { type: "article" },
}

export default function VenuePlanningPage() {
  return (
    <MdxArticlePage
      breadcrumbs={breadcrumbs}
      description={description}
      eyebrow={eyebrow}
      intro={intro}
      path={path}
      title={title}
    >
      <VenuePlanningArticle />
    </MdxArticlePage>
  )
}
