import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { articles as mockArticles } from '@/data/articles';
import { products as marketplaceProducts } from '@/data/marketplaceData';
import { stories as mockStories } from '@/data/stories';
import { lessonsByLanguage } from '@/data/lessons';

export const dynamic = 'force-dynamic';

const withTimeout = <T>(promise: Promise<T>, ms = 2500) =>
  Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('DB query timeout')), ms)
    ),
  ]);

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (q.length < 2) {
    return NextResponse.json([]);
  }

  try {
    const languageMap: Record<string, string> = {
      eng: 'english',
      chi: 'chinese',
      spa: 'spanish',
      fre: 'french',
      ger: 'german',
      swa: 'swahili',
    };

    const mockProducts = marketplaceProducts.filter((p: any) =>
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5).map(p => ({
      type: 'product' as const,
      title: p.name,
      slug: p.name.toLowerCase().replace(/\s+/g, '-'),
      category: p.category,
      price: p.priceUSD,
      href: `/marketplace/${p.name.toLowerCase().replace(/\s+/g, '-')}`
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

    const mockStoriesResults = mockStories.filter(s =>
      s.title.toLowerCase().includes(q.toLowerCase()) ||
      s.description.toLowerCase().includes(q.toLowerCase()) ||
      s.genre.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5).map(s => ({
      type: 'story' as const,
      title: s.title,
      slug: s.slug,
      category: s.genre,
      href: `/stories/${s.slug}`
    }));

    const allLessons = Object.values(lessonsByLanguage).flat();
    const mockLessonResults = allLessons.filter(l =>
      l.title.toLowerCase().includes(q.toLowerCase()) ||
      l.grammar.title.toLowerCase().includes(q.toLowerCase()) ||
      l.grammar.rule.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 5).map(l => {
      const languageKey = l.id.split('-')[0];
      return {
        type: 'lesson' as const,
        title: l.title,
        slug: l.id,
        category: `${l.level} · Unit ${l.unit}`,
        href: `/languages/${languageMap[languageKey] ?? 'english'}`
      };
    });

    const fallbackResults = [
      ...mockProducts,
      ...mockArticlesResults,
      ...mockStoriesResults,
      ...mockLessonResults,
    ];

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(fallbackResults.slice(0, 15));
    }

    const [products, articles] = await Promise.all([
      withTimeout(
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
        })
      ),
      withTimeout(
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
      ),
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
      ...articles.map((a: any) => ({
        type: 'article' as const,
        title: a.title,
        slug: a.slug,
        category: a.category,
        href: `/knowledge/${a.slug}`
      })),
      ...mockStoriesResults,
      ...mockLessonResults,
    ];

    return NextResponse.json(results.slice(0, 15));
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json([]);
  }
}
