import type { Metadata } from "next"
import MarriageLicenseArticle, {
  breadcrumbs,
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  relatedLinks,
  title,
} from "@/content/newport-guide/marriage-license-ri.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description,
  alternates: { canonical: "/newport-guide/marriage-license-ri" },
  openGraph: { type: "article" },
}

export default function MarriageLicensePage() {
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
      <MarriageLicenseArticle />
    </MdxArticlePage>
  )
}
