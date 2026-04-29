'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch {
      alert('Error sending message');
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl font-[var(--font-hero)] bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-white/75 mt-4">Questions? Partnerships? Let's talk.</p>
        </motion.div>

        {success ? (
          <motion.div className="glass-card p-12 rounded-3xl text-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
            <p className="text-white/70">We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form onSubmit={handleSubmit} className="glass-card p-12 rounded-3xl space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white focus:border-primaryGold"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white focus:border-primaryGold"
              required
            />
            <textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-6 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur text-white focus:border-primaryGold resize-none"
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-xl shadow-goldGlow hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

