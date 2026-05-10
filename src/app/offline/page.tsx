'use client';

import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">📡</div>
        <h1 className="text-4xl font-bold text-white mb-4">You're Offline</h1>
        <p className="text-white/60 mb-8">
          You're currently offline, but you can still access some content we've cached for you.
        </p>
        <div className="space-y-3">
          <Link href="/">
            <button className="w-full py-3 px-4 rounded-lg bg-primaryGold text-navy font-bold hover:bg-goldBright transition-colors">
              Go to Home
            </button>
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 px-4 rounded-lg border border-primaryGold text-primaryGold font-bold hover:bg-primaryGold/10 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}