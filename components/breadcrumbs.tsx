import Link from "next/link"

export type BreadcrumbLink = {
  href?: string
  label: string
}

type BreadcrumbsProps = {
  items: BreadcrumbLink[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={className}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-opacity hover:opacity-100">
                {item.label}
              </Link>
            ) : (
              <span className="opacity-90">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="opacity-40">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
