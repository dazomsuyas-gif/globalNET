'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), { ssr: false });
const PillarsSection = dynamic(() => import('@/components/sections/PillarsSection'), { ssr: false });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), { ssr: false });
const LanguageAcademy = dynamic(() => import('@/components/sections/LanguageAcademy'), { ssr: false });
const KnowledgeHub = dynamic(() => import('@/components/sections/KnowledgeHub'), { ssr: false });
const Globe3D = dynamic(() => import('@/components/effects/Globe3D'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen bg-navy" />}>
        <HeroSection />
        <Globe3D />
        <PillarsSection />
        <LanguageAcademy />
        <KnowledgeHub />
        <StatsSection />
      </Suspense>
    </main>
  );
}
