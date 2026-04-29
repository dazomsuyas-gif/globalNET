'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  category: string;
  views: number;
  published: boolean;
  publishedAt: string;
}

const mockArticles: Article[] = [
  { id: '1', title: 'Mastering AI for Business Growth', category: 'business', views: 1250, published: true, publishedAt: '2024-03-20' },
  { id: '2', title: 'German Dative Case Explained', category: 'language', views: 890, published: false, publishedAt: '2024-03-19' },
  { id: '3', title: 'Zanzibar Travel Guide 2024', category: 'tourism', views: 2345, published: true, publishedAt: '2024-03-18' },
  { id: '4', title: 'YouTube Script for Tech Reviews', category: 'creator', views: 678, published: true, publishedAt: '2024-03-17' },
  // Mock 20+ articles...
];

export default function AdminArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    setArticles(mockArticles);
  }, []);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(search.toLowerCase()) &&
    (!categoryFilter || article.category === categoryFilter)
  );

  const togglePublish = (id: string) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, published: !a.published } : a));
  };

  const deleteArticle = (id: string) => {
    if (confirm('Delete this article?')) {
      setArticles(prev => prev.filter(a => a.id !== id));
    }
  };

  const updateTitle = (id: string) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, title: editTitle } : a));
    setEditingId(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-12">
          <h1 className="text-5xl font-[var(--font-hero)] text-white mb-4">Manage Articles</h1>
          <p className="text-xl text-white/70">CRUD operations for 250+ articles</p>
        </motion.div>

        {/* Filters */}
        <div className="glass-card p-6 rounded-3xl mb-8 flex flex-wrap gap-4">
          <input 
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[300px] glass-card p-4 rounded-2xl text-white placeholder-white/60"
          />
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="glass-card p-4 rounded-2xl text-white"
          >
            <option value="">All Categories</option>
            <option value="business">Business</option>
            <option value="language">Language</option>
            <option value="tourism">Tourism</option>
            <option value="creator">Creator</option>
          </select>
          <button className="bg-primaryGold text-navy px-8 py-4 rounded-2xl font-bold hover:bg-goldBright">
            + New Article
          </button>
        </div>

        {/* Articles Table */}
        <div className="glass-card rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-white/5">
                <th className="p-6 text-left text-white font-bold">Title</th>
                <th className="p-6 text-left text-white font-bold">Category</th>
                <th className="p-6 text-left text-white font-bold">Views</th>
                <th className="p-6 text-left text-white font-bold">Status</th>
                <th className="p-6 text-left text-white font-bold">Published</th>
                <th className="p-6 text-left text-white font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <motion.tr 
                  key={article.id}
                  className="border-b border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <td className="p-6">
                    {editingId === article.id ? (
                      <input 
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={() => updateTitle(article.id)}
                        className="bg-transparent text-white border-b border-white/50 w-full"
                        autoFocus
                      />
                    ) : (
                      <div>
                        <div className="font-bold text-white">{article.title}</div>
                        <button onClick={() => {
                          setEditingId(article.id);
                          setEditTitle(article.title);
                        }} className="text-primaryGold text-sm underline hover:no-underline">
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="p-6">
                    <span className="px-4 py-2 bg-primaryGold/20 text-primaryGold rounded-full text-sm font-bold">
                      {article.category}
                    </span>
                  </td>
                  <td className="p-6 font-mono text-primaryGold font-bold">
                    {article.views.toLocaleString()}
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${article.published ? 'bg-emerald-500/20 text-emerald-400' : 'bg-orange-500/20 text-orange-400'}`}>
                      {article.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-6 text-white/60">
                    {article.publishedAt}
                  </td>
                  <td className="p-6">
                    <div className="flex gap-2">
                      <motion.button 
                        onClick={() => togglePublish(article.id)}
                        className="px-4 py-2 bg-primaryGold/80 text-navy rounded-xl font-bold hover:bg-primaryGold text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {article.published ? 'Unpublish' : 'Publish'}
                      </motion.button>
                      <motion.button 
                        onClick={() => deleteArticle(article.id)}
                        className="px-4 py-2 bg-red-500/80 text-white rounded-xl font-bold hover:bg-red-500 text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        Delete
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-white/60 mb-8">Try adjusting your search or filters</p>
              <button className="bg-primaryGold text-navy px-8 py-4 rounded-2xl font-bold">
                Create First Article
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

