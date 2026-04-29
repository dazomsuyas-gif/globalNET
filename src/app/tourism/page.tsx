'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Flight {
  id: string;
  origin: string;
  destination: string;
  price: number;
  departure: string;
  duration: string;
}

const mockFlights: Flight[] = [
  { id: '1', origin: 'JRO', destination: 'JFK', price: 1250, departure: '2024-03-15T10:00', duration: '18h 30m' },
  { id: '2', origin: 'DAR', destination: 'DXB', price: 450, departure: '2024-03-16T14:20', duration: '5h 40m' },
  { id: '3', origin: 'JRO', destination: 'NBO', price: 180, departure: '2024-03-17T08:30', duration: '1h 20m' },
  { id: '4', origin: 'DAR', destination: 'LHR', price: 980, departure: '2024-03-18T22:45', duration: '12h 15m' },
];

export default function TourismPage() {
  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-navy to-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Travel Anywhere
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12">
            Real flights via Amadeus API. Hotels. Visa assistance. Curated Tanzania tours.
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          className="glass-card rounded-3xl p-12 mb-20 max-w-4xl mx-auto"
          initial={{ scale: 0.95, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <div className="grid md:grid-cols-4 gap-6">
            <input 
              placeholder="From (JRO, DAR...)" 
              className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/60 focus:border-primaryGold focus:outline-none transition-all"
              value={search.from}
              onChange={(e) => setSearch({...search, from: e.target.value})}
            />
            <input 
              placeholder="To (JFK, DXB...)" 
              className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/60 focus:border-primaryGold focus:outline-none transition-all"
              value={search.to}
              onChange={(e) => setSearch({...search, to: e.target.value})}
            />
            <input 
              type="date" 
              className="w-full px-6 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white focus:border-primaryGold focus:outline-none transition-all"
              value={search.date}
              onChange={(e) => setSearch({...search, date: e.target.value})}
            />
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-lg shadow-goldGlow hover:shadow-2xl hover:scale-105 transition-all">
              Search Flights
            </button>
          </div>
        </motion.div>

        {/* Flights Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          {mockFlights.map((flight, index) => (
            <motion.div 
              key={flight.id}
              className="glass-card rounded-3xl p-8 group hover:shadow-goldGlow hover:border-primaryGold/50 transition-all cursor-pointer overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primaryGold flex items-center justify-center">
                    <span className="text-navy font-bold">{flight.origin}</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-0.5 mx-auto bg-white/30"></div>
                    <div className="w-3 h-3 bg-primaryGold rounded-full mx-auto mt-2 shadow-lg"></div>
                    <div className="text-xs text-white/60 mt-1">{flight.duration}</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <span className="text-emerald-900 font-bold">{flight.destination}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-primaryGold">${flight.price}</div>
                  <div className="text-sm text-white/60">per person</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all">
                  Book Now
                </button>
                <span className="text-sm text-white/50">Depart {new Date(flight.departure).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-24">
          <div className="max-w-4xl mx-auto p-12 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 mb-12">
            <h3 className="text-4xl font-bold text-white mb-6">Powered by Amadeus</h3>
            <p className="text-xl text-white/80 mb-8">
              Real-time flights, hotels and car rentals from 700+ airlines and 400k+ hotels worldwide.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black text-primaryGold mb-2">700+</div>
                <div className="text-white/70">Airlines</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primaryGold mb-2">400k+</div>
                <div className="text-white/70">Hotels</div>
              </div>
              <div>
                <div className="text-3xl font-black text-primaryGold mb-2">190+</div>
                <div className="text-white/70">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
