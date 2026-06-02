import type { Metadata } from "next"
import PlanningArticle, {
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  title,
} from "@/content/planning/index.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/planning" },
  openGraph: { type: "article" },
}

export default function PlanningPage() {
  return (
    <MdxArticlePage
      description={description}
      eyebrow={eyebrow}
      intro={intro}
      path={path}
      title={title}
    >
      <PlanningArticle />
    </MdxArticlePage>
  )
}
