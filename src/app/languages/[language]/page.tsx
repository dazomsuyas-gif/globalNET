interface LanguagePageProps {
  params: { language: string }
}

const languageData = {
  english: {
    title: 'English Mastery Program',
    levels: ['A1 Beginner', 'A2 Elementary', 'B1 Intermediate', 'B2 Upper Intermediate', 'C1 Advanced', 'C2 Proficient'],
    lessons: 560,
    description: 'Complete English from A1-C2. 560 lessons with native speakers.',
    price: 99
  },
  chinese: {
    title: 'Mandarin Chinese HSK Program',
    levels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'],
    lessons: 720,
    description: 'Full HSK 1-6 track. Simplified Chinese with pinyin.',
    price: 129
  },
  spanish: {
    title: 'Spanish DELE Certification',
    levels: ['DELE A1', 'DELE A2', 'DELE B1', 'DELE B2', 'DELE C1', 'DELE C2'],
    lessons: 480,
    description: 'DELE exam preparation across all CEFR levels.',
    price: 89
  }
  // Add more languages...
};

export default function LanguagePage({ params }: LanguagePageProps) {
  const data = languageData[params.language as keyof typeof languageData] || languageData.english;

  return (
    <section className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-[var(--font-hero)] mb-8 bg-gradient-to-r from-white via-primaryGold to-white bg-clip-text text-transparent">
            {data.title}
          </h1>
          <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            {data.description}
          </p>
          <div className="inline-flex items-center rounded-full bg-primaryGold/90 text-navy px-12 py-6 text-xl font-bold shadow-2xl shadow-primaryGold/30 hover:shadow-goldGlow hover:scale-105 cursor-pointer transition-all">
            Enroll Now - ${data.price}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {data.levels.map((level, index) => (
            <div key={level} className="glass-card rounded-3xl p-10 text-center group hover:shadow-goldGlow hover:border-primaryGold/50 transition-all cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primaryGold/20 to-primaryGold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-primaryGold">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{level}</h3>
              <p className="text-white/70 mb-8">{index * 80 + 80} Lessons</p>
              <div className="inline-flex items-center text-primaryGold font-semibold hover:text-goldBright">
                Start Level {index + 1} →
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 mb-12">
            <div className="text-5xl">🎯</div>
            <h3 className="text-3xl font-bold text-white">Complete Track Guarantee</h3>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Finish all {data.levels.length} levels and get certification. Money back if you don't reach fluency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
