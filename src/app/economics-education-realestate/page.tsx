export default function EconomicsEducationRealestatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Economics, Education & Real Estate</p>
          <h1 className="text-4xl font-semibold">Learn, invest, and grow with local and global insights.</h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300">
            Explore articles, guides, and resources about economic trends, education innovation, and the Tanzanian real estate market.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Economics</h2>
            <p className="mt-3 text-slate-400">Market insights, business news, investment strategies, and local economic forecasts.</p>
          </article>
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-3 text-slate-400">Learning tools, study guides, and education technology for students and teachers.</p>
          </article>
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Real Estate</h2>
            <p className="mt-3 text-slate-400">Housing market updates, property buying tips, and investment opportunities in Tanzania.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
