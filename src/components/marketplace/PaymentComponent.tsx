'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface PaymentComponentProps {
  amount: number;
  productId: string;
  productName: string;
  description?: string;
  image?: string;
  onSuccess?: () => void;
}

export default function PaymentComponent({
  amount,
  productId,
  productName,
  description,
  image,
  onSuccess,
}: PaymentComponentProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');

  const handleStripePayment = async () => {
    if (!session?.user?.id) {
      setError('Please sign in to make a payment');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          productId,
          userId: session.user.id,
          metadata: {
            productName,
            description,
            images: image ? [image] : [],
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create payment');
        return;
      }

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError('An error occurred during payment');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPayment = async () => {
    if (!session?.user?.id) {
      setError('Please sign in to make a payment');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/paypal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          productId,
          userId: session.user.id,
          metadata: {
            productName,
            description,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Failed to create PayPal order');
        return;
      }

      onSuccess?.();
      router.push('/success');
    } catch (err) {
      setError('An error occurred with PayPal payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white mb-4">{productName}</h3>
      
      {description && (
        <p className="text-white/80 mb-4">{description}</p>
      )}

      <div className="mb-6 p-4 rounded-lg bg-primaryGold/10 border border-primaryGold/20">
        <p className="text-white/60 text-sm mb-1">Amount to pay</p>
        <p className="text-3xl font-bold text-primaryGold">${amount.toFixed(2)}</p>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Choose Payment Method
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod('stripe')}
              className={`p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'stripe'
                  ? 'border-primaryGold bg-primaryGold/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <p className="text-white font-medium">Stripe</p>
              <p className="text-xs text-white/60">Card</p>
            </button>
            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'paypal'
                  ? 'border-primaryGold bg-primaryGold/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <p className="text-white font-medium">PayPal</p>
              <p className="text-xs text-white/60">Account</p>
            </button>
          </div>
        </div>

        <button
          onClick={paymentMethod === 'stripe' ? handleStripePayment : handlePayPalPayment}
          disabled={loading}
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold hover:shadow-goldGlow disabled:opacity-50 transition-all"
        >
          {loading ? 'Processing...' : `Pay $${amount.toFixed(2)} with ${paymentMethod === 'stripe' ? 'Stripe' : 'PayPal'}`}
        </button>
      </div>

      <p className="mt-4 text-xs text-white/50 text-center">
        Your payment is secure and encrypted
      </p>
    </div>
  );
}