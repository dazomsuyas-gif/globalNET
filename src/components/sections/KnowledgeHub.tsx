'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { name: 'Business', icon: '💼', articles: 42, slug: 'business' },
  { name: 'Technology', icon: '💻', articles: 38, slug: 'technology' },
  { name: 'Languages', icon: '🌐', articles: 25, slug: 'languages' },
  { name: 'Culture', icon: '🎭', articles: 31, slug: 'culture' },
  { name: 'Travel', icon: '✈️', articles: 28, slug: 'travel' },
  { name: 'Health', icon: '🩺', articles: 35, slug: 'health' },
  { name: 'Finance', icon: '📈', articles: 22, slug: 'finance' },
  { name: 'Education', icon: '📚', articles: 29, slug: 'education' }
];

export default function KnowledgeHub() {
  return (
    <section className="py-32 bg-gradient-to-r from-navy/80 to-slate-900/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-hero)] font-black mb-6 text-white">
            Knowledge Hub
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            250+ expert articles across 14 categories. 3,500+ total words of curated global knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="glass-card rounded-3xl p-10 border border-white/10 cursor-pointer hover:border-primaryGold/50 group hover:shadow-goldGlow hover:-translate-y-3 transition-all duration-500 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300 opacity-90">
                {category.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primaryGold transition-colors line-clamp-2">
                {category.name}
              </h3>
              <div className="text-4xl font-black text-primaryGold mb-8">{category.articles}</div>
              <p className="text-white/60 mb-10">Articles</p>
              <Link 
                href={`/knowledge/${category.slug}`}
                className="inline-flex items-center text-primaryGold font-bold hover:text-goldBright group-hover:translate-x-3 transition-all"
              >
                Read All
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/knowledge"
            className="inline-flex items-center px-12 py-6 rounded-3xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-2xl shadow-2xl hover:shadow-goldGlow hover:scale-105 transition-all duration-300"
          >
            Explore All Articles
            <svg className="ml-4 w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
