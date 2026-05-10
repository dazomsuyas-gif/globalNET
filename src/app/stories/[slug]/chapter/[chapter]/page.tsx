'use client';

import { useParams, useRouter } from 'next/navigation';
import { getStoryBySlug } from '@/data/stories';
import Link from 'next/link';
import { useState } from 'react';

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const chapterNum = parseInt(params.chapter as string) || 1;

  const story = getStoryBySlug(slug);
  const chapter = story?.chapters.find(c => c.number === chapterNum);

  const [fontSize, setFontSize] = useState(16);

  if (!story || !chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Chapter Not Found</h1>
          <Link
            href="/stories"
            className="inline-block bg-gold px-8 py-3 rounded-lg font-semibold text-navy hover:bg-yellow-400 transition"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null;
  const nextChapter = chapterNum < story.chapters.length ? chapterNum + 1 : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Reader Header */}
      <div className="bg-navy border-b-2 border-gold p-4 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href={`/stories/${slug}`} className="text-gold hover:text-yellow-400">
            ← {story.title}
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-white">{chapter.number}/{story.chapters.length}</span>
            <div className="flex items-center gap-2 bg-slate-700 rounded px-3 py-1">
              <button
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                className="text-gold hover:text-yellow-400"
              >
                A−
              </button>
              <span className="text-white text-sm w-12 text-center">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="text-gold hover:text-yellow-400"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-12 px-6">
        {/* Chapter Header */}
        <div className="mb-12 text-center">
          <p className="text-gold mb-2">Chapter {chapter.number}</p>
          <h1 className="text-4xl font-bold text-white mb-4">{chapter.title}</h1>
          <div className="w-16 h-1 bg-gold mx-auto"></div>
        </div>

        {/* Chapter Content */}
        <div
          style={{ fontSize: `${fontSize}px` }}
          className="bg-slate-700 rounded-lg p-8 text-slate-200 leading-relaxed mb-8 border border-gold/20"
        >
          <p className="whitespace-pre-wrap">{chapter.content}</p>
        </div>

        {/* Word Count */}
        <div className="text-center text-slate-400 mb-8">
          <span className="text-sm">~{chapter.wordCount} words</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          {prevChapter ? (
            <Link
              href={`/stories/${slug}/chapter/${prevChapter}`}
              className="bg-slate-600 text-white px-6 py-3 rounded hover:bg-slate-500 transition"
            >
              ← Previous Chapter
            </Link>
          ) : (
            <div></div>
          )}

          {/* Chapter Selector */}
          <select
            value={chapterNum}
            onChange={e => router.push(`/stories/${slug}/chapter/${e.target.value}`)}
            className="bg-slate-600 text-white px-4 py-2 rounded border border-gold/30 focus:border-gold focus:outline-none"
          >
            {story.chapters.map(ch => (
              <option key={ch.number} value={ch.number}>
                Ch. {ch.number}: {ch.title}
              </option>
            ))}
          </select>

          {nextChapter ? (
            <Link
              href={`/stories/${slug}/chapter/${nextChapter}`}
              className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition"
            >
              Next Chapter →
            </Link>
          ) : (
            <div className="bg-slate-600 text-white px-6 py-3 rounded opacity-50 cursor-not-allowed">
              End of Story
            </div>
          )}
        </div>

        {/* Story Info Sidebar */}
        <div className="bg-slate-700 rounded-lg p-6 border border-gold/30">
          <h3 className="text-lg font-bold text-white mb-4">Story Info</h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p><span className="text-gold">Genre:</span> {story.genre}</p>
            <p><span className="text-gold">Author:</span> {story.author}</p>
            <p><span className="text-gold">Chapters:</span> {story.chapters.length}</p>
            <p><span className="text-gold">Rating:</span> {story.rating} ⭐</p>
            <p><span className="text-gold">Reviews:</span> {story.reviews}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
