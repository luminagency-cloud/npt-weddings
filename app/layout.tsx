import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import Link from "next/link"
import Script from "next/script"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.seoName}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: siteConfig.googleVerification
    ? { google: siteConfig.googleVerification }
    : undefined,
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  }

  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        {siteConfig.gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-full flex flex-col">
          <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color:color-mix(in_oklab,var(--background)_88%,white)]/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
              <Link href="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--gold)] bg-white text-sm font-semibold tracking-[0.2em] text-[var(--primary)]">
                  MN
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                    Married in
                  </span>
                  <span className="block text-lg font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                    Newport
                  </span>
                </span>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/planning"
                className="hidden rounded-full border border-[var(--gold)] px-4 py-2 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-white sm:inline-flex"
              >
                Start Planning
              </Link>
            </div>
            <nav className="border-t border-[var(--border)] md:hidden">
              <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-3 text-sm text-neutral-600 sm:px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap transition-colors hover:text-[var(--primary)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[var(--border)] bg-[var(--primary-dark)] text-white/70">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--gold-light)]">
                  Married in Newport
                </p>
                <p className="mt-3 text-sm leading-6">
                  A Newport wedding planning guide for couples who want stronger
                  venue judgment, better local context, and a cleaner path into
                  the right vendors.
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-white"
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
