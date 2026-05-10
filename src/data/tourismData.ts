// Complete Tourism Data - Flights, Hotels, Tours, Visas

export interface Flight {
  id: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  priceUSD: number;
  priceTZS: number;
  airline: string;
  duration: string;
  stops: number;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  pricePerNightUSD: number;
  pricePerNightTZS: number;
  rating: number;
  reviews: number;
  description: string;
  amenities: string[];
  image: string;
}

export interface Tour {
  id: string;
  name: string;
  destination: string;
  duration: number; // in days
  pricePerPersonUSD: number;
  pricePerPersonTZS: number;
  groupSize: number;
  description: string;
  highlights: string[];
  image: string;
  season: string;
}

export interface VisaInfo {
  country: string;
  visaType: string;
  duration: number; // days
  costUSD: number;
  costTZS: number;
  processingDays: number;
  requirements: string[];
  borderEntry: string[];
}

// DOMESTIC FLIGHTS (Tanzania)
export const domesticFlights: Flight[] = [
  {
    id: 'flight-1',
    origin: 'DAR (Julius Nyerere Int\'l)',
    destination: 'ARK (Arusha)',
    departureTime: '06:00 AM',
    arrivalTime: '07:30 AM',
    priceUSD: 120,
    priceTZS: 360000,
    airline: 'Air Tanzania',
    duration: '1h 30m',
    stops: 0
  },
  {
    id: 'flight-2',
    origin: 'DAR (Julius Nyerere Int\'l)',
    destination: 'JRO (Kilimanjaro)',
    departureTime: '07:00 AM',
    arrivalTime: '08:45 AM',
    priceUSD: 130,
    priceTZS: 390000,
    airline: 'Air Tanzania',
    duration: '1h 45m',
    stops: 0
  },
  {
    id: 'flight-3',
    origin: 'DAR (Julius Nyerere Int\'l)',
    destination: 'ZNZ (Zanzibar)',
    departureTime: '08:00 AM',
    arrivalTime: '08:50 AM',
    priceUSD: 80,
    priceTZS: 240000,
    airline: 'Coastal Aviation',
    duration: '50 min',
    stops: 0
  },
  {
    id: 'flight-4',
    origin: 'DAR (Julius Nyerere Int\'l)',
    destination: 'MWZ (Mwanza)',
    departureTime: '05:30 AM',
    arrivalTime: '07:45 AM',
    priceUSD: 150,
    priceTZS: 450000,
    airline: 'Air Tanzania',
    duration: '2h 15m',
    stops: 0
  },
  {
    id: 'flight-5',
    origin: 'ARK (Arusha)',
    destination: 'ZNZ (Zanzibar)',
    departureTime: '09:00 AM',
    arrivalTime: '10:15 AM',
    priceUSD: 110,
    priceTZS: 330000,
    airline: 'Precision Air',
    duration: '1h 15m',
    stops: 0
  }
];

// HOTELS - ZANZIBAR
export const hotelsZanzibar: Hotel[] = [
  {
    id: 'hotel-zanzibar-1',
    name: 'Park Hyatt Zanzibar',
    city: 'Zanzibar',
    pricePerNightUSD: 450,
    pricePerNightTZS: 1350000,
    rating: 4.9,
    reviews: 1234,
    description: 'Luxury resort overlooking the Indian Ocean with private beach access and world-class amenities.',
    amenities: ['Private Beach', 'Infinity Pool', '5-Star Restaurant', 'Spa', 'Water Sports', 'Concierge'],
    image: '/images/hotels/park-hyatt-zanzibar.jpg'
  },
  {
    id: 'hotel-zanzibar-2',
    name: 'The Residence Zanzibar',
    city: 'Zanzibar',
    pricePerNightUSD: 380,
    pricePerNightTZS: 1140000,
    rating: 4.8,
    reviews: 892,
    description: 'Boutique resort with stunning ocean views and personalized service in a tropical setting.',
    amenities: ['Beach Access', 'Pool', 'Restaurant', 'Bar', 'Yoga Classes'],
    image: '/images/hotels/the-residence-zanzibar.jpg'
  },
  {
    id: 'hotel-zanzibar-3',
    name: 'DoubleTree by Hilton',
    city: 'Zanzibar',
    pricePerNightUSD: 220,
    pricePerNightTZS: 660000,
    rating: 4.6,
    reviews: 567,
    description: 'Mid-range hotel with comfortable rooms and easy access to Stone Town attractions.',
    amenities: ['Pool', 'Restaurant', 'Fitness Center', 'WiFi'],
    image: '/images/hotels/doubletree-zanzibar.jpg'
  },
  {
    id: 'hotel-zanzibar-4',
    name: 'Tembo House Hotel',
    city: 'Zanzibar',
    pricePerNightUSD: 150,
    pricePerNightTZS: 450000,
    rating: 4.5,
    reviews: 345,
    description: 'Budget-friendly hotel in the heart of Stone Town with rooftop restaurant.',
    amenities: ['Rooftop Restaurant', 'WiFi', 'Tour Desk'],
    image: '/images/hotels/tembo-house.jpg'
  }
];

// HOTELS - ARUSHA
export const hotelsArusha: Hotel[] = [
  {
    id: 'hotel-arusha-1',
    name: 'Serena Hotel Arusha',
    city: 'Arusha',
    pricePerNightUSD: 320,
    pricePerNightTZS: 960000,
    rating: 4.8,
    reviews: 678,
    description: 'Luxury hotel with beautiful gardens and proximity to Mount Meru and Serengeti.',
    amenities: ['Garden', 'Pool', 'Restaurant', 'Safari Desk'],
    image: '/images/hotels/serena-arusha.jpg'
  },
  {
    id: 'hotel-arusha-2',
    name: 'Mount Meru Hotel',
    city: 'Arusha',
    pricePerNightUSD: 200,
    pricePerNightTZS: 600000,
    rating: 4.6,
    reviews: 456,
    description: 'Mid-range hotel with views of Mount Meru and excellent service.',
    amenities: ['Pool', 'Restaurant', 'Bar', 'WiFi'],
    image: '/images/hotels/mount-meru-hotel.jpg'
  }
];

// HOTELS - KILIMANJARO
export const hotelsKilimanjaro: Hotel[] = [
  {
    id: 'hotel-km-1',
    name: 'Kilimanjaro Hotel',
    city: 'Moshi',
    pricePerNightUSD: 280,
    pricePerNightTZS: 840000,
    rating: 4.7,
    reviews: 534,
    description: 'Premium hotel with Kilimanjaro views and mountaineering preparation services.',
    amenities: ['Restaurant', 'Pool', 'Mountaineering Desk', 'Laundry'],
    image: '/images/hotels/kilimanjaro-hotel.jpg'
  }
];

// HOTELS - DAR ES SALAAM
export const hotelsDar: Hotel[] = [
  {
    id: 'hotel-dar-1',
    name: 'The Slipway Hotel',
    city: 'Dar es Salaam',
    pricePerNightUSD: 290,
    pricePerNightTZS: 870000,
    rating: 4.8,
    reviews: 912,
    description: 'Waterfront luxury hotel with stunning harbour views and fine dining.',
    amenities: ['Waterfront', 'Pool', 'Fine Dining', 'Spa'],
    image: '/images/hotels/slipway-dar.jpg'
  },
  {
    id: 'hotel-dar-2',
    name: 'New Africa Hotel',
    city: 'Dar es Salaam',
    pricePerNightUSD: 180,
    pricePerNightTZS: 540000,
    rating: 4.5,
    reviews: 623,
    description: 'Historic hotel in the city center with business facilities.',
    amenities: ['Restaurant', 'WiFi', 'Business Center'],
    image: '/images/hotels/new-africa-dar.jpg'
  }
];

// TOUR PACKAGES
export const tourPackages: Tour[] = [
  {
    id: 'tour-1',
    name: 'Serengeti Safari Adventure',
    destination: 'Serengeti National Park',
    duration: 5,
    pricePerPersonUSD: 1200,
    pricePerPersonTZS: 3600000,
    groupSize: 6,
    description: 'Experience the greatest wildlife spectacle on Earth. Witness the great migration and encounter Africa\'s Big Five.',
    highlights: [
      'Great Migration crossing',
      'Lion and leopard sightings',
      'Ngorongoro Crater',
      'Maasai village visit',
      'Hot air balloon safari'
    ],
    image: '/images/tours/serengeti-safari.jpg',
    season: 'June-October, November-March'
  },
  {
    id: 'tour-2',
    name: 'Kilimanjaro Climbing',
    destination: 'Mount Kilimanjaro',
    duration: 7,
    pricePerPersonUSD: 800,
    pricePerPersonTZS: 2400000,
    groupSize: 8,
    description: 'Climb Africa\'s highest mountain through five distinct ecosystems. Professional guides and all equipment included.',
    highlights: [
      'Uhuru Peak summit',
      'Machame Route',
      'Altitude acclimatization program',
      'Professional mountaineering guides',
      'Certificate of achievement'
    ],
    image: '/images/tours/kilimanjaro-climb.jpg',
    season: 'January-March, June-October'
  },
  {
    id: 'tour-3',
    name: 'Zanzibar Island Paradise',
    destination: 'Zanzibar',
    duration: 4,
    pricePerPersonUSD: 600,
    pricePerPersonTZS: 1800000,
    groupSize: 10,
    description: 'Explore the Spice Island with pristine beaches, historic Stone Town, and turquoise waters.',
    highlights: [
      'Stone Town UNESCO heritage tour',
      'Spice plantation tour',
      'Beach relaxation',
      'Snorkeling in Nungwi',
      'Traditional dhow sailing'
    ],
    image: '/images/tours/zanzibar-paradise.jpg',
    season: 'Year-round'
  },
  {
    id: 'tour-4',
    name: 'Ngorongoro Crater Tour',
    destination: 'Ngorongoro Conservation Area',
    duration: 3,
    pricePerPersonUSD: 450,
    pricePerPersonTZS: 1350000,
    groupSize: 6,
    description: 'Visit the world\'s largest intact crater with diverse wildlife and stunning landscapes.',
    highlights: [
      'Crater floor safari',
      'Big Five wildlife',
      'Maasai communities',
      'Scenic viewpoints',
      'Olduvai Gorge'
    ],
    image: '/images/tours/ngorongoro-crater.jpg',
    season: 'Year-round'
  },
  {
    id: 'tour-5',
    name: 'Cultural Tanzania Experience',
    destination: 'Various',
    duration: 6,
    pricePerPersonUSD: 900,
    pricePerPersonTZS: 2700000,
    groupSize: 8,
    description: 'Immerse yourself in Tanzanian culture, meeting local communities and learning traditions.',
    highlights: [
      'Maasai warrior training',
      'Traditional cooking class',
      'Local market visits',
      'Traditional music and dance',
      'Craft workshops'
    ],
    image: '/images/tours/cultural-tanzania.jpg',
    season: 'Year-round'
  }
];

// VISA INFORMATION
export const visaInformation: VisaInfo[] = [
  {
    country: 'United States',
    visaType: 'Tourist Visa',
    duration: 90,
    costUSD: 125,
    costTZS: 375000,
    processingDays: 5,
    requirements: [
      'Valid passport (6+ months)',
      'Completed visa form',
      'Passport photos',
      'Proof of funds',
      'Return ticket'
    ],
    borderEntry: ['Julius Nyerere Int\'l (DAR)', 'Kilimanjaro Int\'l (JRO)', 'Zanzibar Stone Town']
  },
  {
    country: 'United Kingdom',
    visaType: 'Tourist Visa',
    duration: 90,
    costUSD: 100,
    costTZS: 300000,
    processingDays: 7,
    requirements: [
      'Valid passport',
      'Visa application',
      'Proof of accommodation',
      'Financial evidence',
      'Medical clearance'
    ],
    borderEntry: ['Julius Nyerere Int\'l (DAR)', 'Kilimanjaro Int\'l (JRO)']
  },
  {
    country: 'Schengen Area',
    visaType: 'Schengen Visa',
    duration: 90,
    costUSD: 80,
    costTZS: 240000,
    processingDays: 14,
    requirements: [
      'Valid passport',
      'Schengen visa form',
      'Proof of travel insurance',
      'Accommodation proof',
      'Bank statements'
    ],
    borderEntry: ['Multiple entry points']
  },
  {
    country: 'Kenya',
    visaType: 'Tourist Visa',
    duration: 90,
    costUSD: 50,
    costTZS: 150000,
    processingDays: 3,
    requirements: ['Valid passport', 'Visa form', 'Passport photo'],
    borderEntry: ['Land borders', 'Nairobi airport']
  },
  {
    country: 'Uganda',
    visaType: 'Tourist Visa',
    duration: 90,
    costUSD: 50,
    costTZS: 150000,
    processingDays: 3,
    requirements: ['Valid passport', 'Visa application', 'Passport photo'],
    borderEntry: ['Land borders', 'Entebbe airport']
  }
];

export const getFlightsByRoute = (origin: string, destination: string): Flight[] => {
  return domesticFlights.filter(
    flight => 
      flight.origin.includes(origin) && 
      flight.destination.includes(destination)
  );
};

export const getHotelsByCity = (city: string): Hotel[] => {
  const allHotels = [...hotelsZanzibar, ...hotelsArusha, ...hotelsKilimanjaro, ...hotelsDar];
  return allHotels.filter(hotel => hotel.city === city);
};

export const getVisaByCountry = (country: string): VisaInfo | undefined => {
  return visaInformation.find(visa => visa.country === country);
};
