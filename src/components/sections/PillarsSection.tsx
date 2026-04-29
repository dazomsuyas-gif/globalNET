'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const pillars = [
  {
    title: 'Knowledge Hub',
    description: '250+ articles across 14 categories',
    link: '/knowledge',
    icon: '📚'
  },
  {
    title: 'Language Academy',
    description: '6 languages - A1-C2/HSK 1-6 complete',
    link: '/languages',
    icon: '🌐'
  },
  {
    title: 'Story World',
    description: '20+ stories with 5,000-12,000 words each',
    link: '/stories',
    icon: '📖'
  },
  {
    title: 'Global Community',
    description: 'Groups, messages, profiles connection',
    link: '/community',
    icon: '👥'
  },
  {
    title: 'Marketplace',
    description: 'Buy/sell with AI pricing, 15+ payments',
    link: '/marketplace',
    icon: '🛒'
  },
  {
    title: 'Creator Hub',
    description: '100+ YouTube scripts & creator tools',
    link: '/creator',
    icon: '✍️'
  },
  {
    title: 'Tourism & Visa',
    description: 'Real flights, hotels, tours, visa help',
    link: '/tourism',
    icon: '✈️'
  },
  {
    title: 'Entertainment',
    description: 'Movies, TV shows, music booking system',
    link: '/entertainment',
    icon: '🎬'
  }
];

export default function PillarsSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-navy to-navy/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-center text-5xl md:text-6xl lg:text-7xl font-[var(--font-hero)] font-black text-white mb-20 bg-gradient-to-r from-white via-primaryGold to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our 8 Core Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="glass-card group cursor-pointer rounded-3xl p-10 border border-white/10 hover:border-primaryGold/50 transition-all duration-500 hover:shadow-goldGlow hover:-translate-y-4 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl group-hover:scale-110 transition-transform duration-300 mb-6">
                {pillar.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primaryGold transition-colors">{pillar.title}</h3>
                <p className="text-white/70 mb-8 leading-relaxed">{pillar.description}</p>
              </div>
              <Link 
                href={pillar.link}
                className="inline-flex items-center text-primaryGold font-semibold hover:text-goldBright transition-colors group-hover:translate-x-2"
              >
                Explore
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
