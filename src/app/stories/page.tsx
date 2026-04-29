'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    id: '1',
    title: 'The Journey from Arusha to Kilimanjaro',
    excerpt: 'Kelvin\'s story of growing up in Tanzania and building globalNET during the toughest times.',
    image: '/stories/arusha-kili.jpg',
    author: 'Kelvin Juma Msuya',
    words: 8500,
    category: 'Personal'
  },
  {
    id: '2',
    title: 'How Swahili Connects Africa',
    excerpt: 'The lingua franca that unites 200 million speakers across 14 countries.',
    image: '/stories/swahili.jpg',
    author: 'Language Team',
    words: 6200,
    category: 'Culture'
  },
  {
    id: '3',
    title: 'Building Startups in Tanzania',
    excerpt: 'Lessons from Arusha tech ecosystem with real founder stories.',
    image: '/stories/startups.jpg',
    author: 'Business Team',
    words: 11200,
    category: 'Business'
  }
];

export default function StoriesPage() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Story World
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            20+ original stories (5k-12k words). Culture, business, personal journeys from Tanzania creators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {stories.map((story, index) => (
            <motion.div 
              key={story.id}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-goldGlow cursor-pointer h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={story.image} 
                  alt={story.title}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-primaryGold/90 text-navy text-xs font-bold uppercase tracking-wide">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-10">
                <Link href={`/stories/${story.id}`} className="block">
                  <h2 className="text-3xl font-bold text-white mb-4 line-clamp-2 group-hover:text-primaryGold transition-colors">
                    {story.title}
                  </h2>
                  <p className="text-white/70 mb-6 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </Link>
                <div className="flex items-center gap-6 text-sm text-white/60">
                  <span>{story.author}</span>
                  <span>•</span>
                  <span>{story.words} words</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }}>
          <Link 
            href="/creator"
            className="inline-flex items-center px-12 py-6 rounded-3xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-2xl shadow-2xl hover:shadow-goldGlow hover:scale-105 transition-all"
          >
            Write Your Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
