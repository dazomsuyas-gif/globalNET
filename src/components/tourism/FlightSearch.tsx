'use client';

import { useState } from 'react';

interface FlightOffer {
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  numberOfBookableSeats: number;
  itineraries: any[];
  price: {
    total: string;
    base: string;
    fee: string;
    grandTotal: string;
  };
  pricingOptions: any;
  validatingAirlineCodes: string[];
  travelerPricings: any[];
}

interface FlightSearchProps {
  onSearch?: (flights: FlightOffer[]) => void;
}

export default function FlightSearch({ onSearch }: FlightSearchProps) {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [flights, setFlights] = useState<FlightOffer[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/flights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate: departDate,
          returnDate: returnDate || undefined,
          adults,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Flight search failed');
        return;
      }

      setFlights(data.data || []);
      onSearch?.(data.data || []);
    } catch (err) {
      setError('An error occurred during flight search');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="glass-card p-8 rounded-3xl border border-white/10 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Search Flights</h2>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              From (Airport Code)
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value.toUpperCase())}
              placeholder="e.g., JFK"
              maxLength={3}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-primaryGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              To (Airport Code)
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toUpperCase())}
              placeholder="e.g., LAX"
              maxLength={3}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-primaryGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Departure Date
            </label>
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-primaryGold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Return Date (Optional)
            </label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-primaryGold focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-white/80 mb-2">
            Number of Adults
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-primaryGold focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num} className="bg-navy">
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold hover:shadow-goldGlow disabled:opacity-50 transition-all"
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>

      {flights.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white mb-4">{flights.length} Flights Found</h3>
          {flights.map((flight) => (
            <div key={flight.id} className="glass-card p-6 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white font-bold">{flight.validatingAirlineCodes.join(', ')}</p>
                  <p className="text-white/60 text-sm">
                    {flight.itineraries.length} leg{flight.itineraries.length > 1 ? 's' : ''}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primaryGold">${flight.price.grandTotal}</p>
                  <p className="text-white/60 text-sm">per person</p>
                </div>
              </div>
              <button className="w-full py-2 px-4 rounded-lg bg-primaryGold/20 border border-primaryGold/50 text-primaryGold font-medium hover:bg-primaryGold/30 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}