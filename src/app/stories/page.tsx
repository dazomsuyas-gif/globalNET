'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { stories } from '@/data/stories';

const genreColors: Record<string, string> = {
  Romance: '#E91E63',
  Horror: '#FF6B6B',
  Mystery: '#9C27B0',
  Adventure: '#4CAF50',
  'Life & Drama': '#FF9800'
};

export default function StoriesPage() {
  const genres = Array.from(new Set(stories.map(s => s.genre)));

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9A84C] bg-clip-text text-transparent">
            Story World
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto">
            20 complete stories across 5 genres - immerse yourself in captivating narratives
          </p>
        </motion.div>

        {genres.map((genre, genreIndex) => (
          <div key={genre} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8" style={{ color: genreColors[genre] }}>
              {genre}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories
                .filter(story => story.genre === genre)
                .map((story, index) => (
                  <motion.article
                    key={story.slug}
                    className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Link href={`/stories/${story.slug}`}>
                      <div
                        className="h-48 bg-gradient-to-br to-transparent p-8 flex items-end"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${genreColors[genre]}20, transparent)`
                        }}
                      >
                        <div
                          className="text-sm font-semibold bg-black/20 px-4 py-1 rounded-full"
                          style={{ color: genreColors[genre] }}
                        >
                            {story.chapters.length} chapters
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                          {story.title}
                        </h3>
                        <p className="text-white/60 text-sm mb-4 line-clamp-3">
                          {story.description}
                        </p>
                        <div className="text-sm text-white/50">
                          By {story.author}
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
