'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Admin credentials
    if (formData.email === 'dazomsuyas@gmail.com' && formData.password === '@Kelvin1998') {
      // Mock login - set session or localStorage
      localStorage.setItem('adminToken', 'admin-auth-token');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-navy to-slate-900">
      <motion.div 
        className="glass-card p-12 rounded-3xl shadow-2xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-primaryGold rounded-3xl flex items-center justify-center shadow-goldGlow">
            <span className="text-3xl font-bold text-navy">A</span>
          </div>
          <h1 className="text-4xl font-[var(--font-hero)] text-white mb-2">Admin Login</h1>
          <p className="text-white/70">Secure access to globalNET admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div 
              className="bg-red-500/20 border border-red-500/50 text-red-400 p-4 rounded-2xl text-center font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          <div>
            <label className="block text-white font-bold mb-3">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="dazomsuyas@gmail.com"
              className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold focus:outline-none transition-all"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-white font-bold mb-3">Password</label>
            <input 
              type="password" 
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="@Kelvin1998"
              className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold focus:outline-none transition-all"
              required
              disabled={loading}
            />
          </div>

          <motion.button 
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primaryGold to-goldBright text-navy py-6 px-8 rounded-3xl text-xl font-bold shadow-2xl shadow-primaryGold/30 hover:shadow-goldGlow disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
                Signing In...
              </>
            ) : (
              'Sign In to Admin'
            )}
          </motion.button>

          <div className="text-center">
            <Link href="/dashboard" className="text-primaryGold hover:text-goldBright font-bold underline">
              ← Back to User Dashboard
            </Link>
          </div>
        </form>

        <div className="mt-8 p-4 bg-white/5 rounded-2xl text-xs text-white/60 text-center">
          <div className="font-bold mb-1">Admin Credentials</div>
          <div>Email: dazomsuyas@gmail.com</div>
          <div>Password: @Kelvin1998</div>
        </div>
      </motion.div>
    </div>
  );
}

