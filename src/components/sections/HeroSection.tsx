'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const taglines = [
  'Knowledge Without Borders',
  'Learn Languages, Explore Cultures',
  'Connect Globally, Grow Locally',
  'Your Gateway to Global Understanding',
  'Founded Arusha, Tanzania 2026'
];

export default function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-black/50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center rounded-full bg-primaryGold/20 border border-primaryGold/30 px-6 py-2 text-sm uppercase tracking-[0.3em] text-primaryGold font-semibold mb-8">
            Welcome to globalNET
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] font-black leading-tight mb-8 bg-gradient-to-r from-white to-primaryGold/80 bg-clip-text text-transparent"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          global<span className="text-primaryGold">NET</span>
        </motion.h1>

        <motion.div
          key={currentTagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-[var(--font-display)] text-white/90">
            {taglines[currentTagline]}
          </h2>
        </motion.div>

        <motion.p
          className="mx-auto max-w-3xl text-xl md:text-2xl text-white/75 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover knowledge, master languages, explore destinations, and connect with a global community.
          Your journey to understanding the world starts here. Founded in Arusha, Tanzania 2026.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/knowledge"
            className="group inline-flex items-center rounded-full bg-primaryGold px-10 py-5 text-xl font-semibold text-navy shadow-2xl shadow-primaryGold/25 hover:shadow-goldGlow hover:bg-goldBright hover:scale-105 transition-all duration-300"
          >
            Start Learning
            <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/tourism"
            className="inline-flex items-center rounded-full border-2 border-white/20 bg-white/5 px-10 py-5 text-xl font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-primaryGold/50 hover:shadow-goldGlow transition-all duration-300 hover:scale-105"
          >
            Explore World
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
