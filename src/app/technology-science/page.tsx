export default function TechnologySciencePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Technology & Science</p>
          <h1 className="text-4xl font-semibold">Discover science, innovation, and the tech shaping tomorrow.</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Explore deep dives into breakthroughs, research, and the future of technology in Africa and beyond.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Science Reports</h2>
            <p className="mt-3 text-slate-700">Accessible articles on the latest research, climate science, and health discoveries.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Tech Updates</h2>
            <p className="mt-3 text-slate-700">Technology news, mobile trends, AI, and digital innovation for modern Tanzania.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
