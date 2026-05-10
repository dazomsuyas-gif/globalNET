'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Redirect if not authenticated or not admin
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && session?.user?.role !== 'ADMIN') {
      router.push('/dashboard');
    }
  }, [status, session, router]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.role === 'ADMIN') {
      fetchStats();
    }
  }, [session]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-navy py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/60">Manage your platform and content</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-white/60 text-sm mb-2">Total Users</p>
            <p className="text-3xl font-bold text-primaryGold">{stats.totalUsers}</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-white/60 text-sm mb-2">Total Orders</p>
            <p className="text-3xl font-bold text-primaryGold">{stats.totalOrders}</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-white/60 text-sm mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-primaryGold">${stats.totalRevenue.toFixed(2)}</p>
          </div>
          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <p className="text-white/60 text-sm mb-2">Pending Orders</p>
            <p className="text-3xl font-bold text-primaryGold">{stats.pendingOrders}</p>
          </div>
        </div>

        {/* Management Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/content/articles">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Articles</h3>
              <p className="text-white/60 text-sm">Create and manage articles</p>
            </div>
          </Link>

          <Link href="/admin/login">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">🛍️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Products</h3>
              <p className="text-white/60 text-sm">Manage marketplace products</p>
            </div>
          </Link>

          <Link href="/admin/login">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Orders</h3>
              <p className="text-white/60 text-sm">View and manage orders</p>
            </div>
          </Link>

          <Link href="/admin/login">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Users</h3>
              <p className="text-white/60 text-sm">Manage user accounts</p>
            </div>
          </Link>

          <Link href="/admin/login">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Messaging</h3>
              <p className="text-white/60 text-sm">Handle contact messages</p>
            </div>
          </Link>

          <Link href="/admin/login">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-primaryGold/20 flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Settings</h3>
              <p className="text-white/60 text-sm">Platform settings</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

