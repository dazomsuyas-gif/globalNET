'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { signIn } from 'next-auth/client';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    whatsapp: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Auto sign in
        const result = await signIn('credentials', {
          email: formData.email,
          password: formData.password,
          redirect: false
        });
        if (result?.ok) {
          router.push('/dashboard');
        }
      } else {
        const data = await response.json();
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-br from-slate-900/50 via-navy to-black/80">
      <motion.div 
        className="glass-card max-w-lg w-full p-12 rounded-3xl"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-[var(--font-hero)] font-bold bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent mb-4">
            Join globalNET
          </h1>
          <p className="text-xl text-white/80">Create your account in 30 seconds</p>
        </div>

        {error && (
          <motion.div 
            className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-100 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-white mb-3">Full Name</label>
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="Kelvin Juma Msuya"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-white mb-3">Email Address</label>
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-3">WhatsApp (optional)</label>
            <input
              name="whatsapp"
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="+255 768 868 546"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-3">Password</label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="8+ characters"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-3">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white placeholder-white/50 text-lg focus:border-primaryGold focus:outline-none transition-all shadow-inner"
              placeholder="Repeat password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-xl shadow-2xl hover:shadow-goldGlow hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-10 text-center space-y-4">
          <div className="text-white/60">
            <Link href="/auth/signin" className="text-primaryGold font-bold hover:underline">
              Already have account? Sign in
            </Link>
          </div>
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full py-4 px-8 rounded-2xl border-2 border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold hover:border-primaryGold hover:bg-primaryGold/10 hover:shadow-goldGlow transition-all"
          >
            Sign up with Google
          </button>
        </div>

        <p className="mt-12 text-xs text-white/50 text-center">
          By signing up, you agree to our Terms of Service and Privacy Policy.
        </p>
      </motion.div>
    </section>
  );
}
