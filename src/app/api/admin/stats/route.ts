import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const [usersCount, ordersCount, productsCount] = await Promise.all([
      prisma.user.count(),
      prisma.order.count(),
      prisma.product.count({ where: { published: true } })
    ]);

    const revenue = await prisma.order.aggregate({
      _sum: { total: true },
      where: { status: { in: ['completed', 'shipped'] } }
    });

    return NextResponse.json({
      users: usersCount,
      orders: ordersCount,
      revenue: revenue._sum.total || 0,
      products: productsCount
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}

