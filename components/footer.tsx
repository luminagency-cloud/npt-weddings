import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 text-white/70" style={{ background: "var(--primary-dark)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-white text-lg font-semibold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Married in Newport
            </h3>
            <p className="text-sm leading-relaxed">
              Newport County&rsquo;s guide to exceptional wedding vendors. Find the perfect team for your special day.
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Directory</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/wedding" className="hover:text-white transition-colors">All Categories</Link>
              </li>
              <li>
                <Link href="/wedding/venues" className="hover:text-white transition-colors">Venues</Link>
              </li>
              <li>
                <Link href="/wedding/photographers" className="hover:text-white transition-colors">Photographers</Link>
              </li>
              <li>
                <Link href="/wedding/florists" className="hover:text-white transition-colors">Florists</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 text-xs text-white/30 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          &copy; {new Date().getFullYear()} Married in Newport &middot; Newport, Rhode Island
        </div>
      </div>
    </footer>
  )
}
