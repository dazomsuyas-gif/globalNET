'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { stories } from '@/data/stories';
import { useState } from 'react';

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = stories.find(s => s.slug === params.slug);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [darkMode, setDarkMode] = useState(true);

  if (!story) {
    notFound();
  }

  const totalChapters = story.chapters.length;
  const chapter = story.chapters[currentChapter]?.content || '';
  const canGoNext = currentChapter < totalChapters - 1;
  const canGoPrev = currentChapter > 0;

  return (
    <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
      <article className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Reader Controls */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center justify-between mb-12 p-6 rounded-lg ${
              darkMode ? 'bg-gray-900' : 'bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="px-4 py-2 bg-[#C9A84C] text-black rounded"
              >
                A-
              </button>
              <span>{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(28, fontSize + 2))}
                className="px-4 py-2 bg-[#C9A84C] text-black rounded"
              >
                A+
              </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-[#C9A84C] text-black rounded"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </motion.div>

          {/* Story Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-4">{story.title}</h1>
            <div className="flex items-center gap-6 text-white/60">
              <span>By {story.author}</span>
              <span>{story.genre}</span>
              <span>Chapter {currentChapter + 1} of {totalChapters}</span>
            </div>
          </motion.div>

          {/* Chapter Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
            style={{ fontSize: `${fontSize}px` }}
          >
            <div className="whitespace-pre-wrap">{chapter}</div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between"
          >
            <button
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={!canGoPrev}
              className={`px-6 py-3 rounded ${
                canGoPrev
                  ? 'bg-[#C9A84C] text-black hover:bg-[#C9A84C]/80'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              } transition-colors`}
            >
              ← Previous Chapter
            </button>

            <div className="text-center">
              <div className="text-white/60 mb-2">
                Chapter {currentChapter + 1} / {totalChapters}
              </div>
              <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C9A84C] transition-all duration-300"
                  style={{
                    width: `${((currentChapter + 1) / totalChapters) * 100}%`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={() => setCurrentChapter(Math.min(totalChapters - 1, currentChapter + 1))}
              disabled={!canGoNext}
              className={`px-6 py-3 rounded ${
                canGoNext
                  ? 'bg-[#C9A84C] text-black hover:bg-[#C9A84C]/80'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              } transition-colors`}
            >
              Next Chapter →
            </button>
          </motion.div>
        </div>
      </article>
    </div>
  );
}