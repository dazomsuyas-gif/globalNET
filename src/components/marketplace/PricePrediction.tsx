'use client';

import { motion } from 'framer-motion';

interface PricePredictionProps {
  views: number;
  wishlist: number;
  currentPrice: number;
}

export default function PricePrediction({ views, wishlist, currentPrice }: PricePredictionProps) {
  const demandScore = (views / 1000) + (wishlist / 50);
  const predictedPrice = currentPrice * (1 + (demandScore * 0.1));
  const confidence = Math.min(95, 70 + (demandScore * 5));
  const recommendation = demandScore > 10 ? 'Buy Now - High Demand' : demandScore > 5 ? 'Good Time' : 'Wait - Price May Drop';

  return (
    <motion.div 
      className="glass-card p-8 rounded-3xl border-2 border-primaryGold/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-2xl font-bold text-primaryGold mb-6 flex items-center gap-3">
        🤖 AI Price Prediction <span className="text-sm bg-primaryGold/20 px-3 py-1 rounded-full">{confidence}% confidence</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div>
          <div className="text-4xl font-black text-white mb-1">{currentPrice.toFixed(0)} USD</div>
          <div className="text-sm text-white/60 uppercase tracking-wide">Current</div>
        </div>
        <div className="relative">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primaryGold to-goldBright flex items-center justify-center text-xl font-bold absolute -left-4 top-6 transform -rotate-12">
            ↑
          </div>
        </div>
        <div>
          <div className="text-4xl font-black text-primaryGold mb-1">{predictedPrice.toFixed(0)} USD</div>
          <div className="text-sm text-primaryGold/80 uppercase tracking-wide">30 Days</div>
        </div>
      </div>
      <div className="bg-white/5 backdrop-blur rounded-2xl p-6">
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>Views: {views.toLocaleString()}</div>
          <div>Wishlist: {wishlist}</div>
          <div>Demand Score: {demandScore.toFixed(1)}</div>
          <div>Change: +{(demandScore * 10).toFixed(0)}%</div>
        </div>
        <div className={`px-6 py-3 rounded-xl font-bold text-center text-lg ${recommendation.includes('Buy') ? 'bg-emerald-500/20 text-emerald-400' : recommendation.includes('Wait') ? 'bg-orange-500/20 text-orange-400' : 'bg-primaryGold/20 text-primaryGold'}`}>
          {recommendation}
        </div>
      </div>
    </motion.div>
  );
}

