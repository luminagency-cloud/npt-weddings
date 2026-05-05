import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ background: "var(--primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/wedding" className="group flex flex-col leading-none">
            <span
              className="text-xl font-bold tracking-wide text-white group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Married in Newport
            </span>
            <span
              className="tracking-widest uppercase"
              style={{ fontSize: "10px", color: "var(--gold-light)" }}
            >
              Newport, Rhode Island
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/wedding" className="text-sm text-white/80 hover:text-white transition-colors">
              Directory
            </Link>
            <Link href="/reviews" className="text-sm text-white/80 hover:text-white transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
