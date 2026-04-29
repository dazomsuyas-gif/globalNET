import { NextRequest, NextResponse } from 'next/server';

const handleMessage = (message: string): string => {
  const lower = message.toLowerCase();
  
  if (lower.includes('tone') || lower.includes('chinese tones')) {
    return 'Chinese tones: 1st mā (mother-high flat), 2nd má (hemp-rising), 3rd mǎ (horse-dipping), 4th mà (scold-falling). Use TonePractice for practice! /languages/chinese/hsk1';
  } else if (lower.includes('iphone') || lower.includes('samsung') || lower.includes('phone')) {
    return '📱 Marketplace: iPhone 15 Pro Max $1199 (₦3,597,000), Galaxy S24 Ultra $1299. Visit /marketplace #electronics';
  } else if (lower.includes('game of thrones') || lower.includes('tv')) {
    return '📺 Entertainment: Game of Thrones S1-8, $0.17/episode (₦500). Full season $13.60. /entertainment/tv-show/game-of-thrones';
  } else if (lower.includes('zanzibar') || lower.includes('hotel') || lower.includes('tour')) {
    return '🏖️ Tourism: Zanzibar Palace Hotel $120/night, Serena $250. Flights JRO-ZNZ ₦180k. /tourism/hotels #zanzibar';
  } else if (lower.includes('romance') || lower.includes('story')) {
    return '💕 Stories: "Love in Zanzibar" Romance (12 chapters). Free to read! /stories/love-in-zanzibar #romance';
  } else if (lower.includes('order')) {
    return '📦 Order status? Share order ID (ORD-XXXXX). Check /marketplace/orders';
  } else if (lower.includes('learn') || lower.includes('lesson')) {
    return '📚 Languages: Swahili C2, Chinese HSK6, German B2. 3,360+ lessons. Start /languages/swahili/a1';
  }
  
  return 'I can help with Language lessons, Marketplace, Stories, Tourism, Entertainment, Orders. Type "iPhone", "Chinese tones", "Zanzibar hotel", "Game of Thrones", "romance story" or "learn Swahili"!';
};

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    const response = handleMessage(message);
    
    return NextResponse.json({ reply: response });
  } catch (error) {
    console.error('WhatsApp bot error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

