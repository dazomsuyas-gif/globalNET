import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { products as marketplaceProducts } from '@/data/marketplaceData';

// Mock products data
const mockProducts = marketplaceProducts.map((p: any) => ({
  id: p.id,
  name: p.name,
  slug: p.name.toLowerCase().replace(/\s+/g, '-'),
  description: p.description,
  price: p.priceUSD,
  category: p.category,
  images: p.images,
  stock: p.stock,
  published: p.published ?? true,
  createdAt: p.createdAt ?? new Date()
}));

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const take = parseInt(searchParams.get('take') || '12');

    if (!prisma) {
      // Return mock data
      let products = mockProducts;
      if (category) {
        products = products.filter((p: any) => p.category === category);
      }
      return NextResponse.json(products.slice(0, take));
    }

    const products = await prisma.product.findMany({
      where: category ? { category } : {},
      take,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(products);
  } catch (error) {
    // Fall back to mock data
    let products = mockProducts;
    const url = request.url;
    const category = new URL(url).searchParams.get('category');
    if (category) {
      products = products.filter((p: any) => p.category === category);
    }
    return NextResponse.json(products);
  }
}

export async function POST(request: Request) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 503 });
    }
    
    const body = await request.json();
    
    const product = await prisma.product.create({
      data: body
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
