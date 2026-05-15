'use client';

import Link from 'next/link';

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4 py-24">
      <div className="max-w-lg w-full glass-card rounded-3xl border border-white/10 p-10 text-center">
        <h1 className="text-4xl font-[var(--font-hero)] text-white mb-4">Authentication Error</h1>
        <p className="text-white/70 mb-8">
          Something went wrong during sign in. Please try signing in again or contact support if the issue persists.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/auth/signin" className="rounded-2xl bg-primaryGold px-6 py-3 text-navy font-semibold hover:bg-goldBright transition">
            Return to Sign In
          </Link>
          <Link href="/" className="rounded-2xl border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
