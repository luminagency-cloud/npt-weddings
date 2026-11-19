import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import styles from "./layout.module.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | Married in Newport`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Married in Newport — Newport, RI Wedding Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@marriedinnewport",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-default.svg"],
  },
  verification: siteConfig.googleVerification
    ? { google: siteConfig.googleVerification }
    : undefined,
};

const navItems = [
  { href: "/planning/venues", label: "Venues" },
  { href: "/wedding", label: "Directory" },
  { href: "/planning", label: "Planning" },
  { href: "/newport-guide", label: "Newport Guide" },
  { href: "/about", label: "About" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.siteUrl}/wedding?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <a className={styles.skipLink} href="#main-content">Skip to content</a>
        <div className="min-h-full flex flex-col">
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <Link href="/" className={styles.wordmark}>
                Married in <em>Newport</em>
              </Link>
              <nav className={styles.nav} aria-label="Main">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main id="main-content" className={`${styles.main} flex-1`} tabIndex={-1}>
            {children}
          </main>
          <footer className={`${styles.footer} border-t border-[var(--border)] bg-[var(--primary-dark)] text-white/70`}>
            <div className={`${styles.footerInner} flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between`}>
              <div className="max-w-xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--gold-light)]">
                  Married in Newport
                </p>
                <p className="mt-3 text-sm leading-6">
                  Newport wedding ideas, venue guidance, and local planning help
                  for couples who want a celebration that feels beautiful, easy,
                  and unmistakably coastal.
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
                <Link
                  href="/for-vendors"
                  className="transition-colors hover:text-white"
                >
                  For Vendors
                </Link>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
