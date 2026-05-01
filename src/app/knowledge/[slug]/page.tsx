import Link from 'next/link';
import { articles } from '@/data/articles';

// Mock article data fallback - works without database
function getArticle(slug: string) {
  return articles.find(a => a.slug === slug && a.published);
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-white/70 mb-8">Article not found</p>
          <Link href="/knowledge" className="text-primaryGold hover:underline">
            ← Back to Knowledge Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Hero Header */}
        <div className="relative mb-16 text-center">
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
              <span>By globalNET Team</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{article.views} views</span>
            </div>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 h-96 lg:h-[500px] bg-gradient-to-br from-navy to-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl opacity-20">📚</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-xl text-white/90 leading-relaxed">
            {article.content}
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-24 flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
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
        </div>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return articles
    .filter(a => a.published)
    .map((article) => ({
      slug: article.slug,
    }));
}
