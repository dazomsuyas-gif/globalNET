'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const groups = [
  { id: 'swahili-practice', name: 'Swahili Conversation Practice', members: 1245, language: 'Swahili', description: 'Daily conversation practice for beginners to advanced.' },
  { id: 'youtube-scripts', name: 'YouTube Script Writers', members: 856, language: 'English', description: 'Share script templates, get feedback, find collaborators.' },
  { id: 'serengeti-travel', name: 'Serengeti Safari Travelers', members: 678, language: 'English', description: 'Plan trips, share photos, find travel partners.' },
  { id: 'hsk-chinese', name: 'HSK Chinese Study Group', members: 543, language: 'Chinese', description: 'HSK 1-6 preparation with daily practice.' },
  { id: 'german-grammar', name: 'German Grammar Masters', members: 432, language: 'German', description: 'Master 4 cases and complex grammar.' },
  { id: 'spanish-conversation', name: 'Spanish Conversation Partners', members: 389, language: 'Spanish', description: 'Practice Latin American Spanish daily.' },
  { id: 'french-debutants', name: 'French Débutants', members: 312, language: 'French', description: 'A1 level French learners community.' },
  { id: 'story-writers', name: 'Story World Writers', members: 267, language: 'English', description: 'Share your stories, get feedback.' }
];

export default function GroupsPage() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-[var(--font-hero)] bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent mb-6">
            Community Groups
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            Join 50+ groups for language practice, creators, travelers, story writers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div 
              key={group.id}
              className="glass-card p-8 rounded-3xl hover:shadow-goldGlow group cursor-pointer h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link href={`/community/groups/${group.id}`} className="block h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primaryGold to-goldBright flex items-center justify-center">
                    <span className="text-navy font-bold text-lg">{group.language.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">{group.name}</h3>
                    <span className="text-primaryGold font-semibold">{group.members.toLocaleString()} members</span>
                  </div>
                </div>
                <p className="text-white/70 mb-6 line-clamp-2">{group.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/50">{group.language}</span>
                  <button className="px-6 py-2 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright group-hover:scale-105 transition-all">
                    Join Group
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link 
            href="/community/groups/create"
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg shadow-emeraldGlow hover:shadow-2xl hover:scale-105 transition-all"
          >
            Create New Group
          </Link>
        </div>
      </div>
    </section>
  );
}

