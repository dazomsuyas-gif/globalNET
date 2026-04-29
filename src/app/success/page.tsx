'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const id = searchParams.get('session_id');
    if (id) {
      setSessionId(id);
      // Verify payment
      fetch('/api/stripe/verify', {
        method: 'POST',
        body: JSON.stringify({ session_id: id })
      });
    }
  }, [searchParams]);

  return (
    <section className="min-h-screen py-24 flex items-center justify-center bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-emerald-500/20">
      <motion.div 
        className="glass-card max-w-4xl w-full p-16 text-center rounded-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div 
          className="w-32 h-32 mx-auto mb-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <div className="text-4xl text-emerald-900 font-bold">✓</div>
        </motion.div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-8">
          Payment Successful!
        </h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-2xl text-white/90 mb-8">
            Your order has been confirmed and payment processed successfully.
          </p>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Transaction Details:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <span className="text-white/60 block">Session ID</span>
                <span className="font-mono text-emerald-400 font-bold">{sessionId.slice(-8) || 'Pending...'}</span>
              </div>
              <div>
                <span className="text-white/60 block">Status</span>
                <span className="text-emerald-400 font-bold">✅ Paid</span>
              </div>
              <div>
                <span className="text-white/60 block">Method</span>
                <span className="text-white font-bold">Stripe Card</span>
              </div>
              <div>
                <span className="text-white/60 block">Date</span>
                <span className="text-white">{new Date().toLocaleString()}</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-white/80 mb-12">
            You will receive a confirmation email with order details and download links shortly.
            Check your dashboard for order history.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          <Link 
            href="/dashboard"
            className="flex-1 py-5 px-10 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg shadow-2xl hover:shadow-emeraldGlow hover:scale-105 transition-all text-center"
          >
            Go to Dashboard
          </Link>
          <Link 
            href="/marketplace"
            className="flex-1 py-5 px-10 rounded-2xl border-2 border-white/30 bg-white/5 backdrop-blur-xl text-white font-bold text-lg hover:border-emerald-400 hover:shadow-goldGlow transition-all text-center"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-3xl border border-emerald-500/30">
          <h4 className="text-2xl font-bold text-emerald-200 mb-4">Need help?</h4>
          <p className="text-emerald-100 mb-6">
            Your WhatsApp support team will contact you within 1 hour to confirm order details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/255768868546" className="px-8 py-4 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-lg hover:shadow-emerald-500/25 transition-all">
              Contact WhatsApp
            </a>
            <Link href="/support" className="px-8 py-4 rounded-2xl border border-emerald-400 bg-transparent text-emerald-300 font-bold hover:bg-emerald-500/10 transition-all">
              Help Center
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
