export default function SportsEntertainmentHealthPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Sports, Entertainment & Health</p>
          <h1 className="text-4xl font-semibold">Fitness, fun, and culture for every Tanzanian lifestyle.</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Stay updated with sports highlights, entertainment picks, and health guides to help you live your best life.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Sports</h2>
            <p className="mt-3 text-slate-400">Latest scores, athlete profiles, and local sports news.</p>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Entertainment</h2>
            <p className="mt-3 text-slate-400">Movies, music, TV reviews, and creative community highlights.</p>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Health</h2>
            <p className="mt-3 text-slate-400">Health tips, wellness advice, and practical lifestyle content.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
