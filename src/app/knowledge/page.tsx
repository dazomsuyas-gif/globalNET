'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { categories } from '@/data/categories';
import CategoryCard from '@/components/knowledge/CategoryCard';

export default function KnowledgePage() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-white to-primaryGold bg-clip-text text-transparent">
            Knowledge Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto">
            250+ articles across business, tech, culture, languages, travel and creator growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>

        <div className="col-span-full mt-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0,6).map((category, index) => (
              <motion.article
                key={category.slug}
                className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-primaryGold/20 to-transparent p-8 flex items-end">
                  <div className="uppercase tracking-[0.3em] text-primaryGold text-sm font-semibold bg-black/20 px-4 py-1 rounded-full">
                    {category.title}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-primaryGold transition-colors">
                    {category.description}
                  </h2>
                  <p className="text-white/70 mb-6 line-clamp-3 leading-relaxed">
                    Explore {category.title} content and resources
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      {category.articleCount || 25} articles
                    </span>
                    <Link 
                      href={`/knowledge/${category.slug}`}
                      className="inline-flex items-center text-primaryGold font-semibold hover:text-goldBright"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/knowledge?all=true"
            className="inline-flex items-center rounded-full bg-primaryGold px-12 py-6 text-xl font-bold text-navy shadow-2xl shadow-primaryGold/30 hover:shadow-goldGlow hover:scale-105 transition-all duration-300"
          >
            View All Articles (250+)
          </Link>
        </div>
      </div>
    </section>
  );
}
