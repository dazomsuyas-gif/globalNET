'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const languages = [
  { name: 'English', flag: '🇺🇸🇬🇧', level: 'Beginner to Advanced' },
  { name: 'Mandarin Chinese', flag: '🇨🇳', level: 'HSK 1-6' },
  { name: 'Spanish', flag: '🇪🇸🇲🇽', level: 'DELE A1-C2' },
  { name: 'French', flag: '🇫🇷', level: 'DELF A1-C2' },
  { name: 'German', flag: '🇩🇪', level: 'Goethe A1-C2' },
  { name: 'Swahili', flag: '🇹🇿🇰🇪', level: 'Beginner to Fluent' }
];

export default function LanguagesPage() {
  return (
    <section className="min-h-screen space-y-12 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-center"
      >
        <h1 className="text-5xl font-[var(--font-hero)] font-bold text-white sm:text-6xl lg:text-7xl">
          Language Academy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-white/75 sm:text-2xl">
          Master the languages of the world with structured courses and expert tutors.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card rounded-3xl border border-white/10 p-6 hover:border-primaryGold card-hover"
          >
            <div className="text-4xl mb-3">{lang.flag}</div>
            <h2 className="text-2xl font-semibold text-white mb-2">{lang.name}</h2>
            <p className="text-white/70 mb-4">{lang.level}</p>
            <Link 
              href="/knowledge" 
              className="inline-flex items-center rounded-full bg-primaryGold/90 px-6 py-2 text-sm font-semibold text-navy hover:bg-primaryGold transition-all hover:scale-105"
            >
              Start Course
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/knowledge" 
          className="inline-flex items-center rounded-full bg-primaryGold px-8 py-4 text-lg font-semibold text-navy shadow-goldGlow hover:bg-goldBright"
        >
          Browse All Courses →
        </Link>
      </div>
    </section>
  );
}
