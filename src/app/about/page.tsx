import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">About globalNET</p>
          <h1 className="text-4xl font-semibold">Connecting Tanzanians to content, commerce, and culture.</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            globalNET is a Tanzanian digital hub for knowledge, stories, language learning, marketplace products, tourism, and community. It brings together premium content with local services for East Africa and the world.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="mt-3 text-slate-700">
              To build a modern Tanzanian platform that combines learning, entertainment, travel, and commerce under one roof, while celebrating local heritage and global innovation.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-slate-700">
              Empower users with high-quality content, language tools, local products, travel planning, and a safe community experience.
            </p>
          </article>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-semibold">Get Started</h2>
          <p className="mt-4 text-slate-700">
            Explore our Knowledge Hub, Stories World, Language Academy, Marketplace, and Tourism sections.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/knowledge" className="rounded-full bg-primaryGold px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-goldBright">
              Knowledge Hub
            </Link>
            <Link href="/stories" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500">
              Story World
            </Link>
            <Link href="/languages" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500">
              Language Academy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
