import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/languages', label: 'Languages' },
  { href: '/stories', label: 'Stories' },
  { href: '/search', label: 'Search' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/tourism', label: 'Tourism' },
  { href: '/creator', label: 'Creator' },
  { href: '/', label: 'Home' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/languages', label: 'Languages' },
  { href: '/stories', label: 'Stories' },
  { href: '/search', label: 'Search' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/tourism', label: 'Tourism' },
  { href: '/creator', label: 'Creator' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/knowledge', label: 'Knowledge' },
  { href: '/languages', label: 'Languages' },
  { href: '/stories', label: 'Stories' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/tourism', label: 'Tourism' },
  { href: '/creator', label: 'Creator' }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-primaryGold p-3 shadow-goldGlow">
            <span className="text-xl font-bold text-navy">G</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold uppercase tracking-wide text-white">globalNET</h1>
            <p className="text-xs text-white/60">Knowledge Without Borders</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-white/70 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primaryGold after:transition-all hover:text-white hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/signin"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Sign In
          </Link>
        </div>

        <button className="md:hidden text-white">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
