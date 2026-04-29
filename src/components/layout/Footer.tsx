import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/95 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primaryGold p-2 shadow-goldGlow">
                <span className="text-lg font-bold text-navy">G</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">globalNET</h3>
                <p className="text-sm text-white/60">Knowledge Without Borders</p>
              </div>
            </div>
            <p className="mb-6 text-sm text-white/70 leading-relaxed">
              globalNET is a premium digital platform empowering learners, creators and travelers with curated content, marketplace services, language learning and travel support. Founded in Arusha, Tanzania 2026.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/officialmsuya" className="text-white/70 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://instagram.com/mk_africa21" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/KelvinJumaMsuya" className="text-white/70 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/70">Platform</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/knowledge" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/languages" className="hover:text-white transition-colors">Language Academy</Link></li>
              <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/tourism" className="hover:text-white transition-colors">Tourism</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/70">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/creator" className="hover:text-white transition-colors">Creators</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
<li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/search" className="hover:text-white transition-colors">Search</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/70">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="font-semibold">Arusha, Tanzania</p>
                <p>Owner: Kelvin Juma Msuya</p>
              </div>
              <div>
                <p>WhatsApp: +255768868546</p>
                <p>+255767456512</p>
              </div>
              <div>
                <p>dazomsuyas@gmail.com</p>
                <p>kelvinmsuya27@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/50">
          © 2026 globalNET. All rights reserved. Founded in Arusha, Tanzania.
        </div>
      </div>
    </footer>
  );
}
