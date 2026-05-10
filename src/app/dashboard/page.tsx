'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock session for now
const useSession = () => {
  return { data: { user: { name: 'User' } }, status: 'authenticated' as const };
};

interface Stats {
  users: number;
  orders: number;
  revenue: number;
  products: number;
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<Stats>({ users: 0, orders: 0, revenue: 0, products: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  if (!session) return <div className="min-h-screen flex items-center justify-center text-white text-xl">Please sign in</div>;

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primaryGold rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-navy">👤</span>
            </div>
            <div>
              <h1 className="text-5xl font-[var(--font-hero)] text-white">Dashboard</h1>
              <p className="text-xl text-white/70">Welcome back, {session.user?.name}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div className="glass-card rounded-3xl p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-3xl font-bold text-white mb-2">{stats.users.toLocaleString()}</h3>
            <p className="text-white/70 uppercase tracking-wide">Total Users</p>
          </motion.div>

          <motion.div className="glass-card rounded-3xl p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">🛒</div>
            <h3 className="text-3xl font-bold text-white mb-2">{stats.orders.toLocaleString()}</h3>
            <p className="text-white/70 uppercase tracking-wide">Orders</p>
          </motion.div>

          <motion.div className="glass-card rounded-3xl p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">$</div>
            <h3 className="text-3xl font-bold text-primaryGold mb-2">${stats.revenue.toLocaleString()}</h3>
            <p className="text-white/70 uppercase tracking-wide">Revenue</p>
          </motion.div>

          <motion.div className="glass-card rounded-3xl p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-3xl font-bold text-white mb-2">{stats.products.toLocaleString()}</h3>
            <p className="text-white/70 uppercase tracking-wide">Products</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass-card rounded-3xl p-10 mb-8">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                Recent Orders
              </h2>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primaryGold to-goldBright flex items-center justify-center">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-lg truncate">iPhone 15 Pro Max</h4>
                      <p className="text-white/60 text-sm">Order #123{i + 1}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-primaryGold">$1,299</div>
                      <span className="text-sm text-white/60 block">Shipped</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="glass-card rounded-3xl p-10 sticky top-24">
              <h2 className="text-3xl font-bold text-white mb-8">Quick Actions</h2>
              <div className="space-y-4">
                <Link href="/marketplace" className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-emerald-500 text-xl">🛒</span>
                    </div>
                    <span className="font-bold text-white">Shop</span>
                  </div>
                </Link>
                <Link href="/creator" className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primaryGold/20 rounded-xl flex items-center justify-center">
                      <span className="text-primaryGold text-xl">✍️</span>
                    </div>
                    <span className="font-bold text-white">Create Content</span>
                  </div>
                </Link>
                <Link href="/admin/products" className="block p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-blue-500 text-xl">📦</span>
                    </div>
                    <span className="font-bold text-white">Manage Products</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
