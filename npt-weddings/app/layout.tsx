import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Newport Weddings",
    template: "%s | Newport Weddings",
  },
  description:
    "A Newport wedding planning site with local venue ideas, planning guides, and a curated vendor directory.",
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/planning/venues", label: "Venues" },
  { href: "/wedding", label: "Vendors" },
  { href: "/planning", label: "Planning" },
  { href: "/newport-guide", label: "Newport Guide" },
  { href: "/about", label: "About" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">
        <div className="min-h-full flex flex-col">
          <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[color:color-mix(in_oklab,var(--color-cream)_82%,white)]/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white text-sm font-semibold tracking-[0.2em] text-[var(--color-gold-deep)]">
                  NW
                </span>
                <span className="leading-tight">
                  <span className="block font-sans text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
                    Newport
                  </span>
                  <span className="block text-lg font-semibold">Weddings</span>
                </span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted)] md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/planning"
                className="hidden rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-white sm:inline-flex"
              >
                Start Planning
              </Link>
            </div>
            <nav className="border-t border-[var(--color-line)] md:hidden">
              <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-sm text-[var(--color-muted)] sm:px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap transition-colors hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[var(--color-line)] bg-white/60">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold-deep)]">
                  Newport Weddings
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  A couple-first wedding planning site for Newport, Rhode Island:
                  venues, planning guidance, and a curated local directory.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-[var(--color-ink)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
