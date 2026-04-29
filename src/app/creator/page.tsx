'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Script {
  id: string;
  title: string;
  category: string;
  length: number;
  price: number;
  thumbnail: string;
}

const demoScripts: Script[] = [
  { id: '1', title: 'Tech Review Script Template', category: 'YouTube', length: 12, price: 15, thumbnail: '/scripts/tech-review.jpg' },
  { id: '2', title: 'Educational Explainer', category: 'Courses', length: 8, price: 25, thumbnail: '/scripts/education.jpg' },
  { id: '3', title: 'Product Launch Script', category: 'Business', length: 10, price: 20, thumbnail: '/scripts/launch.jpg' },
  { id: '4', title: 'Vlog Travel Story', category: 'Stories', length: 15, price: 12, thumbnail: '/scripts/travel.jpg' },
];

export default function CreatorPage() {
  const [tab, setTab] = useState('scripts');

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Creator Hub
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            100+ YouTube scripts, templates & tools. Sell on marketplace. Grow your channel.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="glass-card rounded-3xl p-1 mb-12 max-w-2xl mx-auto">
          <div className="flex bg-white/5 rounded-2xl overflow-hidden">
            {['scripts', 'tools', 'analytics', 'monetize'].map((t) => (
              <button
                key={t}
                className={`flex-1 py-4 px-6 font-bold text-lg transition-all ${
                  tab === t 
                    ? 'bg-primaryGold text-navy shadow-goldGlow' 
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {tab === 'scripts' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoScripts.map((script, index) => (
              <motion.div 
                key={script.id}
                className="glass-card rounded-3xl overflow-hidden group hover:shadow-goldGlow cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="h-64 relative">
                  <Image 
                    src={script.thumbnail} 
                    alt={script.title}
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wide text-primaryGold font-semibold">
                      {script.category} • {script.length}min
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{script.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-primaryGold">${script.price}</span>
                    <Link href={`/creator/scripts/${script.id}`} className="px-6 py-3 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright shadow-goldGlow hover:shadow-lg transition-all">
                      Download
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Link 
            href="/marketplace"
            className="inline-flex items-center px-12 py-6 rounded-3xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-2xl shadow-2xl shadow-primaryGold/30 hover:shadow-goldGlow hover:scale-105 transition-all duration-300"
          >
            Sell Your Scripts → Make Money
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
