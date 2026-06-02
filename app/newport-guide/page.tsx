import type { Metadata } from "next"
import NewportGuideArticle, {
  description,
  eyebrow,
  intro,
  metadataTitle,
  path,
  title,
} from "@/content/newport-guide/index.mdx"
import { MdxArticlePage } from "@/components/mdx-article-page"

export const metadata: Metadata = {
  title: metadataTitle,
  description,
  alternates: { canonical: "/newport-guide" },
  openGraph: { type: "article" },
}

export default function NewportGuidePage() {
  return (
    <MdxArticlePage
      description={description}
      eyebrow={eyebrow}
      intro={intro}
      path={path}
      title={title}
    >
      <NewportGuideArticle />
    </MdxArticlePage>
  )
}
