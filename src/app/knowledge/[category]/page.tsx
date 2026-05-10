import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

const categories = [
  { slug: 'richest-people', title: 'Richest People' },
  { slug: 'science-technology', title: 'Science & Technology' },
  { slug: 'nature', title: 'Nature' },
  { slug: 'culture', title: 'Culture' },
  { slug: 'food', title: 'Food' },
  { slug: 'health', title: 'Health' },
  { slug: 'tourism-visa', title: 'Tourism & Visa' },
  { slug: 'library', title: 'Library' },
  { slug: 'events-trends', title: 'Events & Trends' },
  { slug: 'empires-leaders', title: 'Empires & Leaders' },
  { slug: 'economies', title: 'Economies' },
  { slug: 'wars', title: 'Wars' },
  { slug: 'creator-hub', title: 'Creator Hub' },
  { slug: 'language-academy', title: 'Language Academy' }
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find(cat => cat.slug === params.category);
  if (!category) {
    notFound();
  }

  const categoryArticles = articles.filter(article => article.category === params.category);

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9A84C] bg-clip-text text-transparent">
            {category.title}
          </h1>
          <p className="text-xl text-white/75">
            {categoryArticles.length} articles in {category.title.toLowerCase()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryArticles.map((article, index) => (
            <article
              key={article.slug}
              className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full"
            >
              <Link href={`/knowledge/${article.category}/${article.slug}`}>
                <div className="h-48 bg-gradient-to-br from-[#C9A84C]/20 to-transparent p-8 flex items-end">
                  <div className="text-[#C9A84C] text-sm font-semibold bg-black/20 px-4 py-1 rounded-full">
                    {article.readTime} min read
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
                    <span>{article.likes} likes</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}