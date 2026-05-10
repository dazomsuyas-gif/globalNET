'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '@/data/marketplaceData';

const categories = ['electronics', 'fashion', 'food', 'home', 'audio', 'cameras', 'local'];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const filteredProducts = products.filter(p => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (p.priceUSD < priceRange[0] || p.priceUSD > priceRange[1]) return false;
    return true;
  });

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#C9A84C] bg-clip-text text-transparent">
            Global Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-2xl mx-auto">
            100+ products, 16 payment methods, fast delivery across Tanzania
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  selectedCategory === null ? 'bg-[#C9A84C] text-black' : 'text-white/60'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-4 py-2 rounded capitalize ${
                    selectedCategory === cat ? 'bg-[#C9A84C] text-black' : 'text-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="glass-card group rounded-3xl overflow-hidden hover:shadow-goldGlow transition-all duration-500 h-full cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <Link href={`/marketplace/${product.id}`}>
                    <div className="h-48 bg-gradient-to-br from-[#C9A84C]/20 to-transparent p-4 flex items-end relative">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover absolute inset-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://via.placeholder.com/200?text=Product';
                        }}
                      />
                      <div className="relative z-10 bg-black/50 px-3 py-1 rounded">
                        <div className="text-[#C9A84C] text-sm font-semibold">
                          ⭐ {product.rating}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                        {product.name}
                      </h3>
                      <div className="text-[#C9A84C] font-bold mb-2">
                        ${product.priceUSD.toFixed(2)} / {product.priceTZS.toLocaleString()} TZS
                      </div>
                      <div className="text-sm text-white/50">
                        Stock: {product.stock}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
