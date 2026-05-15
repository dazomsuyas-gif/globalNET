'use client';

import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <div className="text-white text-lg">Loading your dashboard...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <section className="min-h-screen py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h1 className="text-5xl font-[var(--font-hero)] text-white">Welcome back, {session.user?.name ?? 'Learner'}</h1>
              <p className="text-white/70 mt-2">Keep exploring courses, marketplace offers, and your activity.</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/auth/signin' })}
              className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition"
            >
              Sign Out
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">My profile</h2>
            <p className="text-white/70 mb-2">Name</p>
            <p className="text-white text-lg font-semibold">{session.user?.name ?? '—'}</p>
            <p className="text-white/70 mt-4 mb-2">Email</p>
            <p className="text-white text-lg font-semibold">{session.user?.email ?? '—'}</p>
            <p className="text-white/70 mt-4 mb-2">Role</p>
            <p className="text-white text-lg font-semibold">{session.user?.role ?? 'USER'}</p>
          </div>

          <div className="glass-card rounded-3xl p-10">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Link href="/languages" className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white hover:border-primaryGold/50 transition">
                Continue Language Lessons
              </Link>
              <Link href="/marketplace" className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white hover:border-primaryGold/50 transition">
                Browse Marketplace
              </Link>
              <Link href="/stories" className="block rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white hover:border-primaryGold/50 transition">
                Read Stories
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Learning Progress</h3>
            <p className="text-white/70">Continue your active lessons, track your milestones, and build daily habits.</p>
          </div>
          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Marketplace Watchlist</h3>
            <p className="text-white/70">View saved products, seller offers, and in-progress purchases.</p>
          </div>
          <div className="glass-card rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-white mb-4">Support</h3>
            <p className="text-white/70">Reach out to support at support@globalnet.com if you need help with your account.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
