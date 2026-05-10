export default function PoliticsHistoryPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Politics & History</p>
          <h1 className="text-4xl font-semibold">Stories of leadership, governance, and African heritage.</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Deep dives into political trends, historic milestones, and the people shaping the future of East Africa.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Political Analysis</h2>
            <p className="mt-3 text-slate-700">From elections to civic engagement, understand the forces driving change across the region.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Historical Context</h2>
            <p className="mt-3 text-slate-700">Explore the stories and movements that shaped Tanzania, East Africa, and the world.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
