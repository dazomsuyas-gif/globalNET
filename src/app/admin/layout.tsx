'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (pathname === '/admin/login') {
      return;
    }

    if (!session) {
      router.push('/admin/login');
      return;
    }

    if (session.user?.role !== 'ADMIN') {
      router.push('/dashboard');
    }
  }, [status, session, pathname, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-deep">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!session || session.user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-navy-deep">
      <div className="flex flex-col lg:flex-row">
        <aside className="w-full lg:w-80 glass-card m-4 p-6 h-auto lg:h-[calc(100vh-2rem)] sticky top-4 overflow-y-auto">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="font-display text-2xl text-gold-primary">globalNET Admin</h2>
            <p className="text-white/60 text-sm">Secure admin workspace</p>
          </div>
          <nav className="space-y-3 text-white">
            <Link href="/admin/dashboard" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">📊 Dashboard</Link>
            <Link href="/admin/content/articles" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">📄 Articles</Link>
            <Link href="/admin/content/stories" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">📖 Stories</Link>
            <Link href="/admin/marketplace/products" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">🛒 Products</Link>
            <Link href="/admin/marketplace/orders" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">📦 Orders</Link>
            <Link href="/admin/community/users" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">👥 Users</Link>
            <Link href="/admin/payments/transactions" className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition">💰 Transactions</Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
