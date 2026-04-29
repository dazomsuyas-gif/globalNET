'use client';

import { motion } from 'framer-motion';

export default function CommunityPage() {
  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Global Community
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Connect with 5,000+ learners, creators, travelers. Groups, messages, language partners, story sharing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div className="glass-card p-10 rounded-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className="text-5xl mb-6">📝</div>
            <h2 className="text-3xl font-bold text-white mb-4">Create Posts</h2>
            <p className="text-white/70 mb-6">Share your learning journey, ask questions, get feedback from community.</p>
            <button className="w-full px-6 py-4 rounded-2xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
              Write Post
            </button>
          </motion.div>

          <motion.div className="glass-card p-10 rounded-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="text-5xl mb-6">👥</div>
            <h2 className="text-3xl font-bold text-white mb-4">Join Groups</h2>
            <p className="text-white/70 mb-6">Language practice groups, creator communities, travel buddies, story writers.</p>
            <Link href="/community/groups" className="w-full px-6 py-4 rounded-2xl bg-emerald-500 text-white font-bold block text-center hover:bg-emerald-600">
              Browse Groups
            </Link>
          </motion.div>

          <motion.div className="glass-card p-10 rounded-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="text-5xl mb-6">💬</div>
            <h2 className="text-3xl font-bold text-white mb-4">Direct Messages</h2>
            <p className="text-white/70 mb-6">Find language partners, collaborate with creators, chat with travel companions.</p>
            <Link href="/community/messages" className="w-full px-6 py-4 rounded-2xl bg-blue-500 text-white font-bold block text-center hover:bg-blue-600">
              Open Inbox
            </Link>
          </motion.div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl font-bold text-white mb-6">Active Groups (50+)</h2>
            <div className="space-y-4">
              {[
                { name: 'Swahili Conversation Practice', members: 1245, language: 'Swahili' },
                { name: 'YouTube Script Writers', members: 856, language: 'English' },
                { name: 'Serengeti Safari Travelers', members: 678, language: 'English' },
                { name: 'HSK Chinese Study Group', members: 543, language: 'Chinese' },
                { name: 'German Grammar Masters', members: 432, language: 'German' }
              ].map((group, index) => (
                <div key={index} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10">
                  <div className="w-12 h-12 bg-primaryGold rounded-2xl flex items-center justify-center">
                    <span className="text-navy font-bold">G</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{group.name}</h3>
                    <p className="text-white/60">{group.members} members • {group.language}</p>
                  </div>
                  <button className="px-6 py-2 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  'Sarah joined Swahili Practice Group',
                  'Kelvin posted new script template',
                  'Ahmed asked for German tutor',
                  'Fatuma shared Kilimanjaro story',
                  'Carlos started French conversation'
                ].map((activity, index) => (
                  <p key={index} className="text-white/70 text-sm">{activity}</p>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Find Language Partner</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {['Swahili', 'German', 'Chinese', 'Spanish'].map((lang) => (
                  <button key={lang} className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white">
                    {lang}
                  </button>
                ))}
              </div>
              <button className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold hover:from-emerald-600">
                Find Partner Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

