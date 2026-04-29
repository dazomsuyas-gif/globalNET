'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function GroupPage() {
  const params = useParams();
  const groupId = params.groupId as string;

  const group = {
    id: groupId,
    name: 'Swahili Conversation Practice',
    description: 'Daily conversation practice for beginners to advanced learners. Native speakers welcome!',
    members: 1245,
    posts: 2345,
    created: '2024-01-15',
    rules: ['No spam', 'Respect all members', 'English/Swahili only'],
    admins: ['Kelvin Juma', 'Fatuma Hassan']
  };

  const recentPosts = [
    { id: 1, author: 'Sarah K.', content: 'Hello everyone! Looking for daily practice partner.', time: '2h ago' },
    { id: 2, author: 'Ahmed M.', content: 'How do you say "good morning" in formal Swahili?', time: '5h ago' },
    { id: 3, author: 'Fatuma H.', content: 'Welcome new members! Check pinned post for rules.', time: '1d ago' }
  ];

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-navy to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <button className="mb-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white">
            ← All Groups
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <motion.div className="lg:col-span-2 space-y-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">{group.name}</h1>
                  <p className="text-white/70 mt-2">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-primaryGold">{group.members}</div>
                  <div className="text-white/70">Members</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-primaryGold">{group.posts}</div>
                  <div className="text-white/70">Posts</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {group.rules.map((rule, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">
                    {rule}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-white/70 text-sm">Created {group.created}</p>
                <p className="text-white/70 text-sm">Admins: {group.admins.join(', ')}</p>
              </div>

              <textarea 
                placeholder="Write your first post..."
                className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 resize-none focus:border-primaryGold"
                rows={3}
              />
              <button className="mt-3 w-full px-6 py-3 rounded-2xl bg-primaryGold text-navy font-bold hover:bg-goldBright shadow-goldGlow">
                Post to Group
              </button>
            </div>

            <div className="glass-card rounded-3xl">
              <h3 className="p-6 border-b border-white/10 text-xl font-bold text-white">Recent Posts</h3>
              <div className="divide-y divide-white/10">
                {recentPosts.map((post) => (
                  <div key={post.id} className="p-6 hover:bg-white/5">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">SK</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{post.author}</div>
                        <div className="text-xs text-white/50">{post.time}</div>
                      </div>
                    </div>
                    <p className="text-white/90 ml-11">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="glass-card p-6 rounded-2xl sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Group Members (1,245)</h3>
              <div className="space-y-2">
                {['Kelvin J.', 'Sarah K.', 'Ahmed M.', 'Fatuma H.', 'Carlos R.'].map((member) => (
                  <div key={member} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/10">
                    <div className="w-8 h-8 bg-primaryGold rounded-full flex items-center justify-center">
                      <span className="text-navy text-xs font-bold">{member.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="text-white text-sm">{member}</span>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/30">
                View All Members
              </button>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Similar Groups</h3>
              <div className="space-y-3">
                {[
                  { name: 'German Conversation', members: 432 },
                  { name: 'YouTube Creators', members: 856 },
                  { name: 'Kilimanjaro Climbers', members: 289 }
                ].map((g, i) => (
                  <Link key={i} href="#" className="block p-3 rounded-xl hover:bg-white/10">
                    <div className="font-semibold text-white">{g.name}</div>
                    <div className="text-white/60 text-sm">{g.members} members</div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

