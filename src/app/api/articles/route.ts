import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { articles as mockArticles } from '@/data/articles';

// Handle database connection - fails gracefully if no DB
let prisma: PrismaClient | null = null;
try {
  prisma = new PrismaClient();
} catch (e) {
  console.warn('Database connection failed, using mock data');
  prisma = null;
}

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    if (!prisma) {
      // Return mock data
      return NextResponse.json(mockArticles.map(a => ({
        id: a.slug,
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        category: a.category,
        createdAt: new Date()
      })));
    }
    
    const articles = await prisma.article.findMany({
      take: 20,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        category: true,
        createdAt: true
      }
    });

    return NextResponse.json(articles);
  } catch (error) {
    // Fall back to mock data on error
    return NextResponse.json(mockArticles.map(a => ({
      id: a.slug,
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      category: a.category,
      createdAt: new Date(),
      views: 0
    })));
  }
}

export async function POST(request: Request) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 503 });
    }
    
    const body = await request.json();
    
    const article = await prisma.article.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        excerpt: body.excerpt,
        category: body.category,
        authorId: body.authorId,
        published: body.published || false
      }
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
