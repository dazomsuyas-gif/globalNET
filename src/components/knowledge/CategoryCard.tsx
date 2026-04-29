'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';

interface CategoryCardProps {
  category: typeof categories[0];
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-3xl h-64 cursor-pointer glass-card hover:shadow-goldGlow transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <Link href={`/knowledge/${category.slug}`} className="block h-full w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-slate-900 opacity-80 group-hover:opacity-70 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:from-primaryGold/20" />
        <div className="absolute left-6 top-6">
          <div className="text-4xl mb-2">{category.icon}</div>
          <h2 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-primaryGold">{category.name}</h2>
        </div>
        <div className="absolute bottom-6 right-6 text-right">
          <p className="text-white/70 text-sm uppercase tracking-wide group-hover:text-white">Explore</p>
          <div className="h-0.5 w-0 bg-primaryGold mx-auto mt-1 group-hover:w-16 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
}

