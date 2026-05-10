import { NextRequest, NextResponse } from 'next/server';
import Amadeus from 'amadeus';

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET,
});

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const {
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate,
      adults = 1,
      children = 0,
      infants = 0,
      currencyCode = 'USD'
    } = await request.json();

    if (!originLocationCode || !destinationLocationCode || !departureDate) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Search for flights
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode,
      destinationLocationCode,
      departureDate,
      returnDate: returnDate || undefined,
      adults,
      children: children || undefined,
      infants: infants || undefined,
      currencyCode,
      max: 10,
    });

    return NextResponse.json({
      data: response.data,
      dictionaries: response.meta?.['dictionary'] || {}
    });
  } catch (error: any) {
    console.error('Amadeus search error:', error);
    return NextResponse.json(
      { error: error.message || 'Flight search failed' },
      { status: 500 }
    );
  }
}

// Get airport info
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');

    if (!keyword || keyword.length < 2) {
      return NextResponse.json(
        { error: 'Keyword must be at least 2 characters' },
        { status: 400 }
      );
    }

    const response = await amadeus.referenceData.locations.get({
      keyword,
      subType: 'AIRPORT,CITY',
      limit: 10,
    });

    return NextResponse.json({
      data: response.data
    });
  } catch (error: any) {
    console.error('Airport search error:', error);
    return NextResponse.json(
      { error: error.message || 'Airport search failed' },
      { status: 500 }
    );
  }
}