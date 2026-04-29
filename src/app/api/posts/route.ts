import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Mock posts for now
  const posts = [
    { id: '1', content: 'Test post', likes: 5, author: 'test' }
  ];
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Mock create
  return NextResponse.json({ id: 'new', ...body });
}

