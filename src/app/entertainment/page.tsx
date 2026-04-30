'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { entertainmentData } from '@/data/entertainmentData';

type TabType = 'movies' | 'tv' | 'music';

export default function EntertainmentPage() {
  const [activeTab, setActiveTab] = useState<TabType>('movies');

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-navy to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Entertainment
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Stream movies, TV shows & music. Pay with M-Pesa, Stripe, or mobile money. 
            Afro内容 from Tanzania & global.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['movies', 'tv', 'music'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all ${
                activeTab === tab 
                  ? 'bg-primaryGold text-navy shadow-goldGlow' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab === 'movies' ? '🎬 Movies' : tab === 'tv' ? '📺 TV Shows' : '🎵 Music'}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {activeTab === 'movies' && entertainmentData.movies.map((movie, index) => (
            <motion.div
              key={movie.id}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-goldGlow transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primaryGold text-navy px-3 py-1 rounded-lg font-bold">
                  {movie.rating}⭐
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{movie.title}</h3>
                <p className="text-white/60 text-sm mb-2">{movie.duration} • {movie.genre}</p>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{movie.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primaryGold">${movie.priceUSD}</span>
                  <button className="px-4 py-2 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
                    Stream
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {activeTab === 'tv' && entertainmentData.tvShows.map((show, index) => (
            <motion.div
              key={show.id}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-goldGlow transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="h-80 relative overflow-hidden">
                <Image
                  src={show.poster}
                  alt={show.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primaryGold text-navy px-3 py-1 rounded-lg font-bold">
                  {show.rating}⭐
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{show.title}</h3>
                <p className="text-white/60 text-sm mb-2">{show.seasons} seasons • {show.totalEpisodes} episodes</p>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{show.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primaryGold">${show.pricePerEpisodeUSD}/ep</span>
                  <button className="px-4 py-2 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
                    Watch
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          {activeTab === 'music' && entertainmentData.musicTracks.map((track, index) => (
            <motion.div
              key={track.id}
              className="glass-card rounded-3xl p-6 group hover:shadow-goldGlow transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primaryGold to-goldBright flex items-center justify-center text-2xl">
                  🎵
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white line-clamp-1">{track.title}</h3>
                  <p className="text-white/60 text-sm">{track.artist}</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-4">{track.duration} • {track.genre}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-primaryGold">${track.priceUSD}</span>
                <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600">
                  ▶ Play
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Upload Your Content</h3>
            <p className="text-white/70 mb-6">Creators earn 70% revenue share. Upload movies, music, podcasts.</p>
            <Link href="/creator" className="px-8 py-4 rounded-2xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
              Become Creator →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
