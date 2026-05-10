'use client';

import { motion } from 'framer-motion';

export default function Globe3D() {
  return (
    <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-navy/50 relative">
      {/* Simplified globe using CSS/SVG instead of Three.js */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative w-64 h-64"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {/* Globe background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-navy border-4 border-primaryGold/30 shadow-inner" />
          
          {/* Continents - simplified */}
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            {/* Africa */}
            <path 
              d="M45,30 Q50,25 55,35 L52,45 Q48,40 45,30" 
              fill="#2d5a27" 
              opacity="0.8"
            />
            {/* Europe */}
            <path 
              d="M42,22 Q48,20 52,25 L48,30 Q44,28 42,22" 
              fill="#3d7a37" 
              opacity="0.8"
            />
            {/* Asia */}
            <path 
              d="M55,20 Q70,18 80,30 L75,45 Q65,40 55,30 Z" 
              fill="#2d5a27" 
              opacity="0.7"
            />
            {/* Americas */}
            <path 
              d="M15,25 Q20,20 25,35 L20,50 Q18,45 15,25 Z" 
              fill="#2d5a27" 
              opacity="0.6"
            />
          </svg>
          
          {/* Tanzania marker */}
          <motion.div 
            className="absolute w-4 h-4 rounded-full bg-primaryGold"
            style={{ left: '55%', top: '58%' }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 rounded-full bg-primaryGold animate-ping opacity-75" />
          </motion.div>
          
          {/* Grid lines */}
          <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
          <div className="absolute inset-4 border border-white/5 rounded-full" />
          <div className="absolute inset-8 border border-white/5 rounded-full" />
        </motion.div>
      </div>
      
      {/* Label */}
      <div className="absolute bottom-4 left-4 text-white/60 text-sm">
        <span className="text-primaryGold">●</span> Arusha, Tanzania
      </div>
    </div>
  );
}
