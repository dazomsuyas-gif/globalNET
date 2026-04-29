'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const languages = [
  { name: 'English', icon: '🇺🇸🇬🇧', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], totalLessons: 560 },
  { name: 'Mandarin Chinese', icon: '🇨🇳', levels: ['HSK1', 'HSK2', 'HSK3', 'HSK4', 'HSK5', 'HSK6'], totalLessons: 720 },
  { name: 'Spanish', icon: '🇪🇸🇲🇽', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], totalLessons: 480 },
  { name: 'French', icon: '🇫🇷', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], totalLessons: 540 },
  { name: 'German', icon: '🇩🇪', levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'], totalLessons: 600 },
  { name: 'Swahili', icon: '🇹🇿🇰🇪', levels: ['Beginner', 'Intermediate', 'Advanced'], totalLessons: 360 }
];

export default function LanguageAcademy() {
  return (
    <section className="py-32 bg-gradient-to-r from-slate-900/50 via-navy/70 to-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-hero)] font-black mb-6 text-white">
            Language Academy
          </h2>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            3,360 interactive lessons across 6 languages. From A1 complete beginner to C2 native fluency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              className="glass-card group rounded-3xl p-12 border border-white/10 cursor-pointer hover:border-primaryGold/50 transition-all hover:shadow-goldGlow hover:scale-[1.02] h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-7xl mb-8 group-hover:scale-110 transition-transform">{language.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-primaryGold transition-colors">{language.name}</h3>
              <div className="space-y-3 mb-10">
                {language.levels.map((level, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primaryGold to-goldBright shadow-lg"></div>
                    <span className="text-lg font-semibold text-white">{level}</span>
                  </div>
                ))}
              </div>
              <div className="text-2xl font-black text-primaryGold mb-6">{language.totalLessons} Lessons</div>
              <Link href={`/languages/${language.name.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center text-primaryGold font-bold text-xl hover:text-goldBright group-hover:translate-x-2 transition-all">
                Start Learning
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
