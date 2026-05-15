'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

interface SearchResult {
  type: 'product' | 'article' | 'story' | 'lesson';
  title: string;
  slug: string;
  category?: string;
  price?: number;
  href: string;
}

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = searchParams?.get('q') || '';
    setQuery(q);
    if (q) {
      fetchResults(q);
    }
  }, [searchParams]);

  const fetchResults = async (q: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    await fetchResults(query.trim());
  };

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl font-[var(--font-hero)] bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Search globalNET
          </h1>
          <p className="text-xl text-white/75 mt-4">{query ? `${results.length} results for "${query}"` : 'Search across articles, products, stories, lessons, and more.'}</p>
        </motion.div>

        <form onSubmit={handleSearch} className="glass-card rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search products, courses, articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-6 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white focus:border-primaryGold"
            />
            <button type="submit" disabled={loading} className="rounded-2xl bg-primaryGold px-8 py-4 text-navy font-bold hover:bg-goldBright disabled:opacity-50">
              Search
            </button>
          </div>
        </form>

        {loading ? (
          <div className="text-center py-32">
            <div className="text-6xl animate-spin">🔍</div>
          </div>
        ) : results.length === 0 ? (
          <motion.div className="text-center py-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-8xl mb-8">📭</div>
            <h2 className="text-4xl font-bold text-white mb-4">No results found</h2>
            <p className="text-xl text-white/70">Try different keywords or explore a category.</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {results.map((result, index) => (
              <motion.div
                key={`${result.type}-${index}`}
                className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-goldGlow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primaryGold/20 to-transparent flex items-center justify-center text-2xl">
                  {result.type === 'product' ? '🛍️' : result.type === 'article' ? '📄' : result.type === 'lesson' ? '📚' : '📖'}
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={result.href} className="block">
                    <h3 className="text-xl font-bold text-white hover:text-primaryGold">{result.title}</h3>
                    {result.category && <p className="text-white/70 mt-1">{result.category}</p>}
                  </Link>
                </div>
                {result.price !== undefined && <div className="text-2xl font-black text-primaryGold">${result.price}</div>}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

