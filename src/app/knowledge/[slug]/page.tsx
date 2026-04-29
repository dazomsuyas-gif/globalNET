import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const prisma = new PrismaClient();

interface ArticlePageProps {
  params: { slug: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
    include: { author: true }
  });

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Header */}
        <motion.div 
          className="relative mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`inline-block px-6 py-2 mb-8 rounded-full uppercase tracking-[0.3em] text-sm font-semibold ${
            article.category === 'business' ? 'bg-primaryGold/20 text-primaryGold border-primaryGold/30 border' :
            article.category === 'tech' ? 'bg-blue-500/20 text-blue-400 border-blue-400/30 border' :
            'bg-purple-500/20 text-purple-400 border-purple-400/30 border'
          }`}>
            {article.category.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[var(--font-hero)] font-black mb-6 leading-tight bg-gradient-to-r from-white to-primaryGold/50 bg-clip-text text-transparent">
            {article.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-6 md:items-center justify-center text-white/70">
            <div className="flex items-center gap-4 text-sm">
              <span>By {article.author?.name || 'globalNET Team'}</span>
              <span>•</span>
              <time>{new Date(article.createdAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</time>
              <span>•</span>
              <span>{article.views} views</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 h-96 lg:h-[500px] bg-gradient-to-br from-navy to-black"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image 
            src={`/articles/${article.slug}-hero.jpg`} 
            alt={article.title}
            fill 
            className="object-cover hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div 
          className="prose prose-invert max-w-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div 
            className="prose-headings:font-[var(--font-display)] prose-headings:text-3xl md:prose-headings:text-4xl prose-headings:font-bold prose-headings:text-white mb-12 prose-p:text-xl prose-p:text-white/90 prose-p:leading-relaxed prose-li:text-lg prose-li:text-white/85 prose-a:text-primaryGold prose-a:no-underline prose-a:hover:text-goldBright prose-strong:font-semibold prose-strong:text-white prose-hr:bg-white/20 prose-blockquote:italic prose-blockquote:text-white/80 prose-blockquote:border-primaryGold prose-blockquote:p-6 prose-blockquote:rounded-2xl prose-blockquote:my-8 prose-img:rounded-2xl prose-img:shadow-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        {/* Action Bar */}
        <motion.div 
          className="mt-24 flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Loved this article?</h3>
            <p className="text-white/70">Join 5,000+ learners getting weekly insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/knowledge"
              className="px-8 py-4 rounded-full bg-primaryGold text-navy font-bold text-lg shadow-goldGlow hover:shadow-goldGlow/75 hover:scale-105 transition-all"
            >
              ← Read More
            </Link>
            <button className="px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:bg-white/10 hover:border-primaryGold transition-all hover:scale-105">
              Share Article
            </button>
          </div>
        </motion.div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const articles = await prisma.article.findMany({
    select: { slug: true }
  });

  return articles.map((article) => ({
    slug: article.slug,
  }));
}
