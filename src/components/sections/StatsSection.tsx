'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '250+', label: 'Articles', color: 'text-primaryGold' },
  { value: '3,360', label: 'Lessons', color: 'text-english' },
  { value: '100+', label: 'Scripts', color: 'text-chinese' },
  { value: '20+', label: 'Stories', color: 'text-spanish' },
  { value: '6', label: 'Languages', color: 'text-french' },
  { value: '15+', label: 'Payments', color: 'text-swahili' }
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);

  return (
    <section className="py-32 bg-gradient-to-b from-black/50 to-navy">
      <div 
        ref={ref}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-hero)] font-black mb-20 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            animate: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
        >
          By The Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group"
              initial="initial"
              animate={controls}
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.1
                  }
                }
              }}
            >
              <motion.div
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-transparent via-white to-primaryGold bg-clip-text text-transparent group-hover:text-primaryGold transition-all duration-700"
                animate={isInView ? {
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 20px rgba(201,168,76,0)',
                    '0 0 30px rgba(201,168,76,0.5)',
                    '0 0 20px rgba(201,168,76,0)'
                  ]
                } : {}}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  textShadow: { duration: 2, repeat: Infinity }
                }}
              >
                {stat.value}
              </motion.div>
              <p className={`text-lg md:text-xl font-semibold ${stat.color}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
