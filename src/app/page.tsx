'use client';

import HeroSection from '@/components/sections/HeroSection';
import PillarsSection from '@/components/sections/PillarsSection';
import StatsSection from '@/components/sections/StatsSection';
import LanguageAcademy from '@/components/sections/LanguageAcademy';
import KnowledgeHub from '@/components/sections/KnowledgeHub';
import Globe3D from '@/components/effects/Globe3D';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Globe3D />
      <PillarsSection />
      <LanguageAcademy />
      <KnowledgeHub />
      <StatsSection />
    </main>
  );
}
