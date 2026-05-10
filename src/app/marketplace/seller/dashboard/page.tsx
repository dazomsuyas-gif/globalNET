'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const mockSalesData = [
  { date: '2024-03-01', sales: 4500 },
  { date: '2024-03-02', sales: 3200 },
  { date: '2024-03-03', sales: 6800 },
  { date: '2024-03-04', sales: 5100 },
  { date: '2024-03-05', sales: 3900 },
  { date: '2024-03-06', sales: 7200 },
  { date: '2024-03-07', sales: 5900 },
];

const mockOrders = [
  { id: 'ORD-123', customer: 'Sarah K.', total: '₦1,200,000 ($400)', status: 'Delivered' },
  { id: 'ORD-124', customer: 'Ahmed M.', total: '₦600,000 ($200)', status: 'Pending' },
  { id: 'ORD-125', customer: 'Fatuma H.', total: '₦900,000 ($300)', status: 'Shipped' },
];

export default function SellerDashboard() {
  const [dateRange, setDateRange] = useState('7days');
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [topProducts, setTopProducts] = useState<{ name: string; sales: number }[]>([]);

  useEffect(() => {
    // Mock data load
    setTotalEarnings(28450);
    setTopProducts([
      { name: 'iPhone 15', sales: 12 },
      { name: 'MacBook M3', sales: 8 },
      { name: 'Galaxy S24', sales: 7 }
    ] as any);
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-navy to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-12">
          <h1 className="text-5xl font-[var(--font-hero)] text-white mb-4">Seller Dashboard</h1>
          <p className="text-xl text-white/70">Your sales analytics and orders</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div className="glass-card p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">₦</div>
            <h2 className="text-4xl font-black text-primaryGold mb-2">{totalEarnings.toLocaleString()}</h2>
            <p className="text-white/70 uppercase tracking-wide">Total Earnings</p>
          </motion.div>
          <motion.div className="glass-card p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-4xl font-bold text-white mb-2">47</h2>
            <p className="text-white/70 uppercase tracking-wide">Total Orders</p>
          </motion.div>
          <motion.div className="glass-card p-10 text-center" whileHover={{ scale: 1.02 }}>
            <div className="text-5xl mb-4">⭐</div>
            <h2 className="text-4xl font-bold text-primaryGold mb-2">4.8</h2>
            <p className="text-white/70 uppercase tracking-wide">Avg Rating</p>
          </motion.div>
        </div>

        {/* Sales Chart */}
        <motion.div className="glass-card p-8 mb-12 rounded-3xl" whileHover={{ scale: 1.01 }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Sales Over Time</h3>
            <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="glass-card px-4 py-2 rounded-xl">
              <option value="7days">7 Days</option>
              <option value="30days">30 Days</option>
              <option value="90days">90 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={mockSalesData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#C9A84C" strokeWidth={3} dot={{ fill: '#C9A84C', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recent Orders */}
        <motion.div className="glass-card p-8 rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-2xl font-bold text-white mb-6">Recent Orders</h3>
          <div className="space-y-4">
            {mockOrders.map((order, i) => (
              <motion.div key={order.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/10" whileHover={{ scale: 1.01 }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primaryGold/20 rounded-xl flex items-center justify-center">
                    <span className="text-primaryGold font-bold">#{order.id.slice(-3)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{order.customer}</div>
                    <div className="text-white/60">{order.total}</div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${order.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-400' : order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {order.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div className="glass-card p-8 mt-12 rounded-3xl">
          <h3 className="text-2xl font-bold text-white mb-6">Top Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topProducts.map((product, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/5">
                <div className="text-3xl mb-2">{product.name}</div>
                <div className="text-2xl font-black text-primaryGold">{product.sales} sold</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

