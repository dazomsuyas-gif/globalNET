'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { articles } from '@/data/articles';

export default function ArticlePage({ params }: { params: { category: string; slug: string } }) {
  const article = articles.find(a => a.slug === params.slug && a.category === params.category);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-[#C9A84C] text-sm font-semibold mb-4">
            {article.category.replace('-', ' ').toUpperCase()}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-white/60 mb-8">
            <span>By {article.author}</span>
            <span>{article.date}</span>
            <span>{article.readTime} min read</span>
            <span>{article.likes} likes</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between">
            <button className="text-[#C9A84C] hover:text-white transition-colors">
              ← Previous Article
            </button>
            <button className="text-[#C9A84C] hover:text-white transition-colors">
              Next Article →
            </button>
          </div>
        </motion.div>
      </div>
    </article>
  );
}