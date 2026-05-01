import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import { lessonsData } from '@/data/lessons';

export const dynamic = 'force-dynamic';

// Mock courses data from lessons
const mockCourses = [
  { id: 'eng-a1', title: 'English A1 - Beginner', language: 'english', level: 'A1', lessons: 50, description: 'Learn basic English greetings and expressions', price: 29.99, published: true },
  { id: 'eng-a2', title: 'English A2 - Elementary', language: 'english', level: 'A2', lessons: 60, description: 'Build on your English skills', price: 39.99, published: true },
  { id: 'chi-hsk1', title: 'Chinese HSK1', language: 'chinese', level: 'HSK1', lessons: 50, description: 'Master basic Chinese characters', price: 49.99, published: true },
  { id: 'ger-a1', title: 'German A1 - Beginner', language: 'german', level: 'A1', lessons: 50, description: 'Start your German journey', price: 29.99, published: true },
];

export async function GET() {
  try {
    if (!prisma) {
      return NextResponse.json(mockCourses);
    }
    
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(courses);
  } catch (error) {
    // Fall back to mock data
    return NextResponse.json(mockCourses);
  }
}

export async function POST(request: Request) {
  try {
    if (!prisma) {
      return NextResponse.json({ error: 'Database not available' }, { status: 503 });
    }
    
    const body = await request.json();
    
    const course = await prisma.course.create({
      data: body
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
