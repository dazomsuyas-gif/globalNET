import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { articles as mockArticles } from '@/data/articles';
import { marketplaceData } from '@/data/marketplaceData';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (q.length < 2) {
    return NextResponse.json([]);
  }

  try {
    // Mock search results when DB unavailable
    const mockProducts = marketplaceData.filter(p => 
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5).map(p => ({
      type: 'product' as const,
      title: p.title,
      slug: p.title.toLowerCase().replace(/\s+/g, '-'),
      category: 'electronics',
      price: p.priceUSD,
      href: `/marketplace/electronics`
    }));

    const mockArticlesResults = mockArticles.filter(a =>
      a.title.toLowerCase().includes(q.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5).map(a => ({
      type: 'article' as const,
      title: a.title,
      slug: a.slug,
      category: a.category,
      href: `/knowledge/${a.slug}`
    }));

    if (!prisma) {
      return NextResponse.json([...mockProducts, ...mockArticlesResults].slice(0, 15));
    }

    const [products, courses, articles] = await Promise.all([
      prisma.product.findMany({
        where: {
          OR: [
            { name: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } }
          ],
          published: true
        },
        select: { id: true, name: true, slug: true, category: true, price: true },
        take: 5
      }),
      prisma.course.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { description: { contains: q, mode: 'insensitive' } }
          ],
          published: true
        },
        select: { id: true, title: true, slug: true, language: true, price: true },
        take: 5
      }),
      prisma.article.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { content: { contains: q, mode: 'insensitive' } },
            { excerpt: { contains: q, mode: 'insensitive' } }
          ]
        },
        select: { id: true, title: true, slug: true, category: true },
        take: 5
      })
    ]);

    const results = [
      ...products.map(p => ({
        type: 'product' as const,
        title: p.name,
        slug: p.slug,
        category: p.category,
        price: p.price,
        href: `/marketplace/${p.slug}`
      })),
      ...courses.map((c: any) => ({
        type: 'course' as const,
        title: c.title,
        slug: c.slug,
        category: c.language,
        price: c.price,
        href: `/languages/${c.slug}`
      })),
      ...articles.map((a: any) => ({
        type: 'article' as const,
        title: a.title,
        slug: a.slug,
        category: a.category,
        href: `/knowledge/${a.slug}`
      }))
    ];

    return NextResponse.json(results.slice(0, 15));
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json([]);
  }
}
