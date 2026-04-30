'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PolicyAnalysis {
  id: string;
  title: string;
  region: string;
  impact: 'positive' | 'negative' | 'neutral';
  summary: string;
  source: string;
  date: string;
}

interface EconomicIndicator {
  id: string;
  name: string;
  value: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
}

const policyAnalyses: PolicyAnalysis[] = [
  {
    id: '1',
    title: 'Africa Continental Free Trade Area (AfCFTA)',
    region: 'Pan-Africa',
    impact: 'positive',
    summary: 'Creating the world\'s largest free trade area with 1.3B people. Reducing tariffs on 90% of goods across 54 nations.',
    source: 'AU Official',
    date: '2024-01-01'
  },
  {
    id: '2',
    title: 'Tanzania\'s 2025 Budget',
    region: 'Tanzania',
    impact: 'positive',
    summary: 'TSh 47.1T budget focusing on infrastructure, education, healthcare. 15% allocation to rural development.',
    source: 'Ministry of Finance',
    date: '2024-06-01'
  },
  {
    id: '3',
    title: 'Kenya Digital Economy Blueprint',
    region: 'Kenya',
    impact: 'positive',
    summary: 'KSh 2B investment in fiber optic, tech hubs, digital skills. Target: 100% broadband coverage by 2030.',
    source: 'Ministry of ICT',
    date: '2024-02-15'
  },
  {
    id: '4',
    title: 'Nigeria\'s Economic Recovery Plan',
    region: 'Nigeria',
    impact: 'neutral',
    summary: 'Diversification from oil to agriculture, tech. GDP growth target 5% in 2025. Challenges: inflation, security.',
    source: 'NEEDC',
    date: '2024-03-01'
  },
  {
    id: '5',
    title: 'East African Community Integration',
    region: 'EAC',
    impact: 'positive',
    summary: 'Common market protocol, free movement of goods, services, capital, labor. 5 new members joining by 2025.',
    source: 'EAC Secretariat',
    date: '2024-01-15'
  }
];

const economicIndicators: EconomicIndicator[] = [
  { id: '1', name: 'GDP Growth (Africa)', value: '4.2%', change: 0.5, trend: 'up' },
  { id: '2', name: 'Foreign Direct Investment', value: '$85B', change: 12, trend: 'up' },
  { id: '3', name: 'Inflation (Avg)', value: '8.3%', change: -2.1, trend: 'down' },
  { id: '4', name: 'Trade Volume (EAC)', value: '$45B', change: 8, trend: 'up' },
  { id: '5', name: 'Tech Startups', value: '6,400+', change: 25, trend: 'up' },
  { id: '6', name: 'Remittance Flows', value: '$95B', change: 3, trend: 'stable' }
];

export default function PoliticsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const regions = ['all', 'Pan-Africa', 'Tanzania', 'Kenya', 'Nigeria', 'EAC'];

  const filteredPolicies = selectedRegion === 'all' 
    ? policyAnalyses 
    : policyAnalyses.filter(p => p.region === selectedRegion || p.region === 'Pan-Africa');

  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-navy to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-6 bg-gradient-to-r from-primaryGold to-white bg-clip-text text-transparent">
            Politics & Economics
          </h1>
          <p className="text-2xl text-white/80 max-w-3xl mx-auto">
            Africa policy analysis, economic indicators, trade agreements, investment trends. Data-driven insights for 54 nations.
          </p>
        </motion.div>

        {/* Economic Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {economicIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              className="glass-card rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <h4 className="text-white/60 text-sm mb-2">{indicator.name}</h4>
              <div className="text-2xl font-black text-primaryGold mb-2">{indicator.value}</div>
              <div className={`text-sm ${
                indicator.trend === 'up' ? 'text-emerald-400' : 
                indicator.trend === 'down' ? 'text-red-400' : 'text-white/60'
              }`}>
                {indicator.trend === 'up' ? '↑' : indicator.trend === 'down' ? '↓' : '→'} 
                {indicator.change > 0 ? '+' : ''}{indicator.change}%
              </div>
            </motion.div>
          ))}
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedRegion === region
                  ? 'bg-primaryGold text-navy'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {region === 'all' ? '🌍 All Regions' : region}
            </button>
          ))}
        </div>

        {/* Policy Analyses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPolicies.map((policy, index) => (
            <motion.div
              key={policy.id}
              className="glass-card rounded-3xl p-8 hover:shadow-goldGlow transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/60 text-sm">{policy.region}</span>
                <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
                  policy.impact === 'positive' ? 'bg-emerald-500/20 text-emerald-400' :
                  policy.impact === 'negative' ? 'bg-red-500/20 text-red-400' :
                  'bg-white/10 text-white/60'
                }`}>
                  {policy.impact === 'positive' ? '📈 Positive' : 
                   policy.impact === 'negative' ? '📉 Negative' : '➡ Neutral'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{policy.title}</h3>
              <p className="text-white/70 mb-6">{policy.summary}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/50">{policy.source}</span>
                <span className="text-primaryGold">{policy.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="text-center mt-16">
          <div className="glass-card rounded-3xl p-12 inline-block">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Informed</h3>
            <p className="text-white/70 mb-6 max-w-lg">
              Weekly policy briefings, economic reports, trade opportunities delivered to your inbox. 
              Free for students & educators.
            </p>
            <div className="flex gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-primaryGold focus:outline-none"
              />
              <button className="px-8 py-4 rounded-xl bg-primaryGold text-navy font-bold hover:bg-goldBright">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
