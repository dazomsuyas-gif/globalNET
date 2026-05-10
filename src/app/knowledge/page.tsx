'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { articles } from '@/data/articles';

const categories = [
  { slug: 'richest-people', title: 'Richest People', count: 20, color: '#C9A84C' },
  { slug: 'science-technology', title: 'Science & Technology', count: 25, color: '#4A90E2' },
  { slug: 'nature', title: 'Nature', count: 15, color: '#7ED321' },
  { slug: 'culture', title: 'Culture', count: 15, color: '#F5A623' },
  { slug: 'food', title: 'Food', count: 15, color: '#D0021B' },
  { slug: 'health', title: 'Health', count: 20, color: '#50E3C2' },
  { slug: 'tourism-visa', title: 'Tourism & Visa', count: 20, color: '#B8E986' },
  { slug: 'library', title: 'Library', count: 15, color: '#9013FE' },
  { slug: 'events-trends', title: 'Events & Trends', count: 15, color: '#FF6B6B' },
  { slug: 'empires-leaders', title: 'Empires & Leaders', count: 20, color: '#4ECDC4' },
  { slug: 'economies', title: 'Economies', count: 15, color: '#45B7D1' },
  { slug: 'wars', title: 'Wars', count: 15, color: '#F39C12' },
  { slug: 'creator-hub', title: 'Creator Hub', count: 20, color: '#E91E63' },
  { slug: 'language-academy', title: 'Language Academy', count: 20, color: '#9C27B0' }
];

export default function KnowledgePage() {
  const latestArticles = articles.slice(0, 6);

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9A84C] bg-clip-text text-transparent">
            Knowledge Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto">
            250+ articles across business, tech, culture, languages, travel and creator growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link href={`/knowledge/${category.slug}`}>
                <div className="h-48 bg-gradient-to-br from-[#C9A84C]/20 to-transparent p-8 flex items-end">
                  <div className="uppercase tracking-[0.3em] text-[#C9A84C] text-sm font-semibold bg-black/20 px-4 py-1 rounded-full">
                    {category.count} articles
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-white/60 text-sm">
                    Explore {category.count} in-depth articles
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={`/knowledge/${article.category}/${article.slug}`}>
                  <div className="h-48 bg-gradient-to-br from-[#C9A84C]/20 to-transparent p-8 flex items-end">
                    <div className="text-[#C9A84C] text-sm font-semibold bg-black/20 px-4 py-1 rounded-full">
                      {article.category.replace('-', ' ').toUpperCase()}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/50">
                      <span>{article.author}</span>
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
