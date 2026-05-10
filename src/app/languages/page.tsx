'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { languages } from '@/data/languages';

export default function LanguagesPage() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9A84C] bg-clip-text text-transparent">
            Language Academy
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto">
            Master 6 languages with interactive lessons, tones practice, and cultural immersion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {languages.map((language, index) => (
            <motion.div
              key={language.slug}
              className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Link href={`/languages/${language.slug}`}>
                <div className="h-48 bg-gradient-to-br from-[#C9A84C]/20 to-transparent p-8 flex items-end">
                  <div className="text-4xl mb-4">{language.flag}</div>
                  <div className="uppercase tracking-[0.3em] text-[#C9A84C] text-sm font-semibold bg-black/20 px-4 py-1 rounded-full">
                    {language.levels.length} levels
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C9A84C] transition-colors">
                    {language.name}
                  </h2>
                  <p className="text-white/60 text-sm mb-4">
                    {language.description}
                  </p>
                  <div className="text-[#C9A84C] text-sm font-semibold">
                    {language.totalLessons} lessons total
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/languages/placement-test"
            className="inline-block bg-[#C9A84C] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#C9A84C]/80 transition-colors"
          >
            Take Placement Test
          </Link>
        </div>
      </div>
    </section>
  );
}
