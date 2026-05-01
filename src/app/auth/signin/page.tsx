'use client';

import { signIn } from 'next-auth/client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (result?.ok) {
      router.push('/dashboard');
    } else {
      alert(result?.error || 'Sign in failed');
    }
  };

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-br from-navy via-slate-900/50 to-black">
      <motion.div 
        className="glass-card max-w-md w-full p-12 rounded-3xl"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-[var(--font-hero)] font-bold bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-white/80">Sign in to your globalNET account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-white mb-3">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-white mb-3">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-xl shadow-2xl hover:shadow-goldGlow hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-10 text-center space-y-4">
          <div className="text-white/60">
            <Link href="/auth/signup" className="text-primaryGold font-bold hover:underline">
              Create new account
            </Link>
          </div>
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full py-4 px-8 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:border-primaryGold hover:bg-primaryGold/10 hover:shadow-goldGlow transition-all"
          >
            Continue with Google
          </button>
        </div>
      </motion.div>
    </section>
  );
}
