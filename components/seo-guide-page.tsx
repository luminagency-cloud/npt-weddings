import { Breadcrumbs, type BreadcrumbLink } from "@/components/breadcrumbs"
import Link from "next/link"
import {
  buildArticleJsonLd,
  buildBreadcrumbList,
  serializeJsonLd,
} from "@/lib/structured-data"

type Section = {
  title: string
  body: string
}

type ChecklistBlock = {
  title: string
  items: string[]
}

type RelatedLink = {
  href: string
  label: string
}

type SeoGuidePageProps = {
  breadcrumbs: BreadcrumbLink[]
  description: string
  decisionNotes?: Section[]
  eyebrow: string
  path: string
  title: string
  intro: string
  lead: string
  checklist: ChecklistBlock
  sections: Section[]
  relatedLinks: RelatedLink[]
}

export function SeoGuidePage({
  breadcrumbs,
  description,
  decisionNotes,
  eyebrow,
  path,
  title,
  intro,
  lead,
  checklist,
  sections,
  relatedLinks,
}: SeoGuidePageProps) {
  const breadcrumbJsonLd = buildBreadcrumbList(
    breadcrumbs.map((item) => ({
      name: item.label,
      path: item.href ?? path,
    }))
  )
  const articleJsonLd = buildArticleJsonLd({ title, description, path })

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} className="text-[var(--color-muted)]" />
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em]">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            {intro}
          </p>
        </div>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_40px_rgba(66,45,28,0.08)]">
          <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
            {checklist.title}
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
            {checklist.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mt-14 grid gap-8 border-t border-[var(--color-line)] pt-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">
            Why this matters
          </h2>
        </div>
        <p className="text-sm leading-7 text-[var(--color-muted)]">{lead}</p>
      </section>

      {decisionNotes && decisionNotes.length > 0 && (
        <section className="mt-14 grid gap-4 md:grid-cols-3">
          {decisionNotes.map((note) => (
            <article
              key={note.title}
              className="rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-6"
            >
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {note.body}
              </p>
            </article>
          ))}
        </section>
      )}

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[1.75rem] border border-[var(--color-line)] bg-white p-6"
          >
            <h2 className="text-xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {section.body}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-cream-strong)] p-7">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
          Keep planning
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--primary)] hover:underline"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
