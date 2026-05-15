import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/admin/login');
  }

  if (session.user?.role !== 'ADMIN') {
    return redirect('/dashboard');
  }

  return redirect('/admin/dashboard');
}

