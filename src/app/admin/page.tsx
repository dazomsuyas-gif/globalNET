'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user?.email !== 'dazomsuyas@gmail.com') {
      router.push('/auth/signin');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl font-[var(--font-hero)] bg-gradient-to-r from-primaryGold to-red-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-2xl text-white/80 mt-4">Manage users, orders, refunds, content, marketplace.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          <motion.div className="glass-card p-8 rounded-3xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-2xl font-bold text-white mb-2">Users</h3>
            <p className="text-primaryGold text-3xl font-black">2,450</p>
            <Link href="/admin/users" className="mt-4 inline-block px-6 py-2 rounded-xl bg-primaryGold text-navy font-bold">
              Manage
            </Link>
          </motion.div>

          <motion.div className="glass-card p-8 rounded-3xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-white mb-2">Orders</h3>
            <p className="text-primaryGold text-3xl font-black">1,234</p>
            <Link href="/admin/marketplace/orders" className="mt-4 inline-block px-6 py-2 rounded-xl bg-primaryGold text-navy font-bold">
              View Orders
            </Link>
          </motion.div>

          <motion.div className="glass-card p-8 rounded-3xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-2">Revenue</h3>
            <p className="text-emerald-400 text-3xl font-black">TZS 245M</p>
            <Link href="/admin/payments/transactions" className="mt-4 inline-block px-6 py-2 rounded-xl bg-emerald-500 text-white font-bold">
              Transactions
            </Link>
          </motion.div>

          <motion.div className="glass-card p-8 rounded-3xl text-center" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-white mb-2">Pending Refunds</h3>
            <p className="text-orange-400 text-3xl font-black">23</p>
            <Link href="/admin/marketplace/refunds" className="mt-4 inline-block px-6 py-2 rounded-xl bg-orange-500 text-white font-bold">
              Review Refunds
            </Link>
          </motion.div>

          <motion.div className="glass-card p-8 rounded-3xl text-center md:col-span-2 lg:col-span-1" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-2">Pending Disputes</h3>
            <p className="text-red-400 text-3xl font-black">8</p>
            <Link href="/admin/community/disputes" className="mt-4 inline-block px-6 py-2 rounded-xl bg-red-500 text-white font-bold">
              Resolve Disputes
            </Link>
          </motion.div>

          <motion.div className="glass-card p-8 rounded-3xl text-center md:col-span-2 lg:col-span-1" whileHover={{ scale: 1.05 }}>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-white mb-2">Content Moderation</h3>
            <p className="text-blue-400 text-3xl font-black">15</p>
            <Link href="/admin/content/reports" className="mt-4 inline-block px-6 py-2 rounded-xl bg-blue-500 text-white font-bold">
              Moderate Reports
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Orders</h3>
            <div className="space-y-3">
              {[
                { id: '#1234', customer: 'Sarah K.', product: 'iPhone 15 Pro', amount: 'TZS 2.5M', status: 'Shipped' },
                { id: '#1233', customer: 'Ahmed M.', product: 'JBL Speaker', amount: 'TZS 350K', status: 'Delivered' },
                { id: '#1232', customer: 'Fatuma H.', product: 'Swahili Course', amount: 'TZS 49K', status: 'Digital Download' }
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                  <div>
                    <div className="font-mono text-sm text-white/70">{order.id}</div>
                    <div className="font-bold text-white">{order.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primaryGold">{order.amount}</div>
                    <span className="text-xs text-white/60 capitalize">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-3">
              {[
                'New refund approved #1234',
                'Seller payout processed TZS 2.3M',
                'New user registered from Dar es Salaam',
                'Low stock alert: iPhone cases (3 left)',
                'Content report resolved'
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/90">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

