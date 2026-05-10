import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const [totalUsers, totalOrders, pendingOrders] = await Promise.all([
      prisma.user.count(),
      prisma.order.count(),
      prisma.order.count({ where: { status: 'pending' } })
    ]);

    const revenueData = await prisma.order.aggregate({
      _sum: { total: true },
      where: { status: 'completed' }
    });

    const totalRevenue = revenueData._sum?.total || 0;

    return NextResponse.json({
      totalUsers,
      totalOrders,
      totalRevenue,
      pendingOrders
    });
  } catch (error) {
    console.error('Stats fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
