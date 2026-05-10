import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const mockCourses = [
  { id: 'eng-a1', title: 'English A1 - Beginner', language: 'english', level: 'A1', lessons: 50, description: 'Learn basic English greetings and expressions', price: 29.99, published: true },
  { id: 'eng-a2', title: 'English A2 - Elementary', language: 'english', level: 'A2', lessons: 60, description: 'Build on your English skills', price: 39.99, published: true },
  { id: 'chi-hsk1', title: 'Chinese HSK1', language: 'chinese', level: 'HSK1', lessons: 50, description: 'Master basic Chinese characters', price: 49.99, published: true },
  { id: 'ger-a1', title: 'German A1 - Beginner', language: 'german', level: 'A1', lessons: 50, description: 'Start your German journey', price: 29.99, published: true },
];

export async function GET() {
  try {
    return NextResponse.json(mockCourses);
  } catch (error) {
    return NextResponse.json(mockCourses);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newCourse = {
      id: `course-${Date.now()}`,
      title: body.title || 'New course',
      language: body.language || 'general',
      level: body.level || 'A1',
      lessons: body.lessons || 0,
      description: body.description || 'New course created by the platform',
      price: body.price || 0,
      published: body.published ?? true,
    };

    mockCourses.unshift(newCourse);

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}
