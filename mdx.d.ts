declare module "*.mdx" {
  import type { ComponentType } from "react"

  const MDXComponent: ComponentType<Record<string, unknown>>

  export const metadataTitle: string
  export const description: string
  export const eyebrow: string
  export const title: string
  export const intro: string
  export const path: string
  export const breadcrumbs: Array<{ href?: string; label: string }>
  export const relatedLinks: Array<{
    href: string
    label: string
    description: string
  }>

  export default MDXComponent
}
