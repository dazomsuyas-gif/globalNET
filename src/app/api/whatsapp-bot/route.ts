import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const handleMessage = (message: string): string => {
  const lower = message.toLowerCase();

  if (lower.includes('chinese tones') || lower.includes('tones')) {
    return 'Chinese has 4 tones: 1st (ma - high level), 2nd (ma - rising), 3rd (ma - falling-rising), 4th (ma - falling). Practice: mā mother, má hemp, mǎ horse, mà scold. Click here for Tone Practice!';
  }

  if (lower.includes('german dative') || lower.includes('dative case')) {
    return 'Dative case (Wem? - To whom?) changes articles: der → dem, die → der, das → dem, die (plural) → den. Example: Ich gebe dem Mann (the man) das Buch. Check German Lessons for more!';
  }

  if (lower.includes('swahili') || lower.includes('speak swahili')) {
    return 'Karibu! Start with greetings: \'Jambo\' (Hello), \'Habari\' (How are you), \'Nzuri\' (Good), \'Asante\' (Thank you), \'Kwaheri\' (Goodbye). Swahili noun classes: M-WA for people (mtu → watu), KI-VI for things (kiti → viti). Full lessons in Language Academy!';
  }

  if (lower.includes('hsk 3') || lower.includes('hsk3')) {
    return 'HSK 3 requires 600 words. Top 10: ? (�i - love), ? (ba - eight), ?? (b�ba - dad), ?? (Beijing - Beijing), ? (bei - cup), ? (ben - measure word for books), ??? (b� k� qi - you\'re welcome), ? (c�i - dish), ? (ch� - tea), ? (chi - eat). Full list in Chinese lessons!';
  }

  if (lower.includes('find iphone') || lower.includes('iphone')) {
    return '?? iPhones in stock: iPhone 14 Pro (2,997,000 TZS / $999), iPhone 15 (3,500,000 TZS / $1,167), iPhone 15 Pro (4,200,000 TZS / $1,400), iPhone 15 Pro Max (4,800,000 TZS / $1,600). Tap to buy!';
  }

  if (lower.includes('order status') || lower.includes('tracking')) {
    return 'Order #ORD123 is currently SHIPPED. Estimated delivery: 2-3 days. Tracking number: TRK7890123. Need help? Contact seller directly.';
  }

  if (lower.includes('sell') || lower.includes('become seller')) {
    return 'To become a seller: 1. Login/Register, 2. Go to Dashboard, 3. Click \'Become a Seller\', 4. Submit your ID and business info, 5. Once approved, go to Seller Dashboard ? Products ? Add New Product. Commission: 5% per sale.';
  }

  if (lower.includes('watch game of thrones') || lower.includes('game of thrones')) {
    return 'Game of Thrones: 8 seasons, 73 episodes. Price: 500 TZS ($0.17) per episode or 7,000 TZS ($2.33) per season. Tap to buy season 1 now!';
  }

  if (lower.includes('free music') || lower.includes('music offer')) {
    return '?? FREE MUSIC: Buy 5+ movies OR any full TV season and get \'Best of African Music: Top 50 Hits\' album FREE automatically added to cart! Current movies: Inception, Dark Knight, Interstellar, Avatar, The Lion King...';
  }

  if (lower.includes('zanzibar hotels') || lower.includes('zanzibar hotel')) {
    return '?? Recommended Zanzibar hotels: Park Hyatt ($250/night) - Luxury beachfront, The Residence ($180/night) - Private villas, DoubleTree ($120/night) - Family friendly, Tembo House ($80/night) - Budget Stone Town. Book now with free cancellation!';
  }

  if (lower.includes('serengeti safari') || lower.includes('serengeti price')) {
    return '?? Serengeti Safari packages: 3-day Migration Safari ($450) includes 2 nights lodging, 3 game drives, park fees, meals. 5-day package ($750) adds Olduvai Gorge visit. 7-day luxury ($1,200) includes hot air balloon safari!';
  }

  if (lower.includes('tanzania visa') || lower.includes('visa')) {
    return '?? Tanzania Visa: Most nationalities get visa on arrival ($50 USD). Requirements: Passport valid 6+ months, yellow fever certificate if arriving from endemic country, return ticket. E-visa available at immigration.go.tz 2 weeks before travel.';
  }

  if (lower.includes('love stories') || lower.includes('romance')) {
    return '?? Romance stories: \'Love in Stone Town\' (9 chapters) - A tourist falls in love with a local guide. \'Serengeti Sunset\' (10 chapters) - Love blooms during safari. \'The Zanzibar Wedding\' (8 chapters) - Destination wedding romance. Start reading for free!';
  }

  return 'Hello! I\'m globalNET AI assistant. I can help with language learning, marketplace shopping, entertainment, tourism, and stories. What would you like to know?';
};

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = handleMessage(message);

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
