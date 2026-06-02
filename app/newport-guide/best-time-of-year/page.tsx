import type { Metadata } from "next"
import BestTimeOfYearArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/newport-guide/best-time-of-year.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/newport-guide/best-time-of-year" },
  openGraph: { type: "article" },
}

export default function BestTimeOfYearPage() {
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
      <BestTimeOfYearArticle />
    </MdxArticlePage>
  )
}
