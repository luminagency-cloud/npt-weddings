import type { Metadata } from "next"
import RehearsalDinnerIdeasArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/newport-guide/rehearsal-dinner-ideas.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/newport-guide/rehearsal-dinner-ideas" },
  openGraph: { type: "article" },
}

export default function RehearsalDinnerIdeasPage() {
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
      <RehearsalDinnerIdeasArticle />
    </MdxArticlePage>
  )
}
