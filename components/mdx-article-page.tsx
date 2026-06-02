import Link from "next/link"
import { Breadcrumbs, type BreadcrumbLink } from "@/components/breadcrumbs"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

type RelatedGuideLink = {
  href: string
  label: string
  description: string
}

type MdxArticlePageProps = {
  breadcrumbs?: BreadcrumbLink[]
  children: React.ReactNode
  description: string
  eyebrow: string
  intro: string
  path: string
  relatedLinks?: RelatedGuideLink[]
  title: string
}

export function MdxArticlePage({
  breadcrumbs,
  children,
  description,
  eyebrow,
  intro,
  path,
  relatedLinks,
  title,
}: MdxArticlePageProps) {
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? buildBreadcrumbList(
          breadcrumbs.map((item) => ({
            name: item.label,
            path: item.href ?? path,
          }))
        )
      : null
  const articleJsonLd = buildArticleJsonLd({ title, description, path })

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} className="mb-8" />
      )}

      <div className="max-w-3xl">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          {eyebrow}
        </p>
        <h1
          className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          {intro}
        </p>
      </div>

      <div className="article-mdx mt-12 space-y-0 text-[var(--color-ink)]">
        {children}
      </div>

      {relatedLinks && relatedLinks.length > 0 && (
        <nav className="mt-14 border-t border-[var(--color-line)] pt-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            Related guides
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1.4rem] border border-[var(--color-line)] bg-white p-5 transition-colors hover:border-[var(--color-line-strong)]"
              >
                <p className="text-sm font-semibold text-[var(--color-ink)]">{link.label}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}
