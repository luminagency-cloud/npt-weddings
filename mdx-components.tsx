import Link from "next/link"
import type { MDXComponents } from "mdx/types"

function MdxLink({
  href = "",
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

const components = {
  a: MdxLink,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
