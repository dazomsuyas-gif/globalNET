'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function MarketplacePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products?take=16')
      .then(res => res.json())
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const checkout = async () => {
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        items: cart.map(p => ({ name: p.name, price: p.price, image: p.image, quantity: 1 })),
        total: cart.reduce((sum, p) => sum + p.price, 0),
        userId: 'demo-user'
      })
    });
    
    const { url } = await response.json();
    window.location.href = url!;
  };

  if (loading) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="text-primaryGold text-4xl animate-spin">🛒</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-24" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Global Marketplace
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            100+ digital & physical products. Secure Stripe + PayPal. AI pricing predictions.
          </p>
        </motion.div>

        {/* Cart Bar */}
        {cart.length > 0 && (
          <motion.div 
            className="glass-card rounded-3xl p-6 mb-12 flex items-center gap-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primaryGold/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primaryGold">{cart.length}</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl">{cart.length} Items</h3>
                <p className="text-white/60">${cart.reduce((sum, p) => sum + p.price, 0).toFixed(2)}</p>
              </div>
            </div>
            <button 
              onClick={checkout}
              className="ml-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-primaryGold to-goldBright text-navy font-bold text-lg shadow-goldGlow hover:shadow-2xl hover:scale-105 transition-all"
            >
              Checkout Securely →
            </button>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-goldGlow hover:scale-[1.02] transition-all cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/30">
                <Image 
                  src={product.image || '/product-placeholder.jpg'}
                  alt={product.name}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primaryGold/95 text-navy px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                  ${product.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] text-primaryGold font-semibold">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-primaryGold transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-primaryGold">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright hover:shadow-goldGlow transition-all group-hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <motion.div 
            className="text-center py-32"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
          >
            <div className="text-8xl mb-8">🛍️</div>
            <h2 className="text-4xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-xl text-white/70 mb-8 max-w-lg mx-auto">
              Marketplace launching with 100+ digital & physical products from Tanzania creators.
            </p>
            <Link href="/creator" className="inline-flex items-center px-8 py-4 rounded-2xl bg-primaryGold text-navy font-bold text-lg shadow-goldGlow hover:shadow-2xl hover:scale-105">
              Become Seller
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
