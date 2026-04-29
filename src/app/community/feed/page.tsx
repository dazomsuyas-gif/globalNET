'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
  group: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Kelvin Juma',
    avatar: '/avatars/kelvin.jpg',
    content: 'Just published new Swahili lesson for A1 learners! Check it out in Language Academy. #Swahili #Learning',
    likes: 45,
    comments: 12,
    time: '2h ago',
    group: 'Language Learners'
  },
  {
    id: '2',
    author: 'Sarah K.',
    avatar: '/avatars/sarah.jpg',
    content: 'Looking for German conversation partner. Available evenings UTC+3. DM me! #German #LanguageExchange',
    likes: 23,
    comments: 8,
    time: '5h ago',
    group: 'German Practice'
  },
  // More mock posts...
];

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate infinite scroll fetch
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const likePost = (postId: string) => {
    setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <button className="p-2 rounded-xl bg-primaryGold/20 text-primaryGold hover:bg-primaryGold/30">
              ✏️ Create Post
            </button>
            <div className="flex-1 bg-white/5 rounded-2xl p-3">
              <input placeholder="Share something with the community..." className="w-full bg-transparent text-white placeholder-white/60 border-none focus:ring-0" />
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {loading ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center py-32"
            >
              <div className="text-6xl animate-pulse mb-4">📱</div>
              <p className="text-white/70">Loading feed...</p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <motion.div 
                  key={post.id}
                  className="glass-card p-6 rounded-3xl hover:shadow-goldGlow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primaryGold to-goldBright flex items-center justify-center flex-shrink-0">
                      <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-lg">{post.author}</div>
                      <div className="flex items-center gap-2 text-xs text-white/50 mb-1">
                        <span>{post.time}</span>
                        <span>•</span>
                        <span className="px-2 py-1 bg-white/10 rounded-full">{post.group}</span>
                      </div>
                      <p className="text-white/90 leading-relaxed">{post.content}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                    <button onClick={() => likePost(post.id)} className="flex items-center gap-2 text-white/70 hover:text-primaryGold group">
                      <div className="group-hover:animate-ping">❤️</div>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-white/70 hover:text-primaryGold">
                      💬 {post.comments}
                    </button>
                    <Link href={`/community/post/${post.id}`} className="ml-auto text-xs text-primaryGold hover:text-goldBright">
                      View
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        <div className="text-center mt-20">
          <button className="px-12 py-6 rounded-3xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  );
}

