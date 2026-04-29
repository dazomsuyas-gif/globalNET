'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewProduct() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priceUSD: '',
    priceTZS: '',
    category: 'electronics',
    stock: '',
    images: [] as string[],
    specifications: {} as Record<string, string>
  });
  const [specs, setSpecs] = useState([{ key: '', value: '' }]);

  const categories = ['electronics', 'fashion', 'food', 'home', 'audio', 'digital'];

  const addSpec = () => setSpecs([...specs, { key: '', value: '' }]);
  const updateSpec = (index: number, field: string, value: string) => {
    const newSpecs = [...specs];
    newSpecs[index] = { ...newSpecs[index], [field]: value };
    setSpecs(newSpecs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      priceTZS: (Number(formData.priceUSD) * 3000).toLocaleString(),
      specifications: Object.fromEntries(specs.map(s => [s.key, s.value]).filter(([k]) => k))
    };
    console.log('New product:', finalData); // API call
    alert('Product created! Redirecting...');
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-navy to-slate-900">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-[var(--font-hero)] bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent mb-4">
            Add New Product
          </h1>
          <p className="text-xl text-white/70">List your item for sale - reach 10,000+ customers</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="glass-card p-12 rounded-3xl space-y-8" whileHover={{ scale: 1.01 }}>
          {/* Basic Info */}
          <div>
            <label className="block text-white font-bold mb-3">Product Title</label>
            <input 
              type="text" 
              placeholder="iPhone 15 Pro Max 256GB Natural Titanium"
              className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold focus:outline-none text-lg"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-bold mb-3">Price (USD)</label>
              <input 
                type="number" 
                placeholder="1199"
                className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold"
                value={formData.priceUSD}
                onChange={(e) => {
                  const usd = e.target.value;
                  setFormData({ ...formData, priceUSD: usd, priceTZS: usd ? (Number(usd) * 3000).toLocaleString() : '' });
                }}
                required
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-3">Price (TZS)</label>
              <input 
                type="text" 
                placeholder="3,597,000"
                className="w-full p-5 rounded-2xl glass-card bg-white/10 text-white"
                value={formData.priceTZS}
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-bold mb-3">Category</label>
              <select 
                className="w-full p-5 rounded-2xl glass-card text-white focus:ring-2 ring-primaryGold"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white font-bold mb-3">Stock Quantity</label>
              <input 
                type="number" 
                placeholder="25"
                className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-bold mb-3">Description</label>
            <textarea 
              rows={6}
              placeholder="Describe your product features, condition, warranty..."
              className="w-full p-5 rounded-2xl glass-card text-white placeholder-white/60 focus:ring-2 ring-primaryGold resize-vertical"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>

          {/* Specifications */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <label className="text-white font-bold">Specifications</label>
              <button type="button" onClick={addSpec} className="bg-primaryGold text-navy px-4 py-2 rounded-xl font-bold hover:bg-goldBright">
                + Add
              </button>
            </div>
            {specs.map((spec, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 mb-4 p-4 bg-white/5 rounded-xl">
                <input 
                  placeholder="Key (Storage)"
                  className="p-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:ring-1 ring-primaryGold"
                  value={spec.key}
                  onChange={(e) => updateSpec(index, 'key', e.target.value)}
                />
                <input 
                  placeholder="Value (256GB)"
                  className="p-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:ring-1 ring-primaryGold"
                  value={spec.value}
                  onChange={(e) => updateSpec(index, 'value', e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* Images */}
          <div>
            <label className="block text-white font-bold mb-3">Product Images</label>
            <p className="text-white/60 mb-4">Upload 3-8 high quality images (max 5MB each)</p>
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-primaryGold/50 transition-colors">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-white/60 text-sm">Image {i+1}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.button 
            type="submit"
            className="w-full bg-gradient-to-r from-primaryGold to-goldBright text-navy py-6 px-8 rounded-3xl text-xl font-bold shadow-2xl shadow-primaryGold/30 hover:shadow-goldGlow hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            🚀 Publish Product & Start Selling
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

