export default function TourismToursPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Tourism Tours</p>
          <h1 className="text-4xl font-semibold">Tour packages for adventure, culture, and wildlife</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Choose from safaris, mountain climbs, beach holidays, and cultural experiences built for Tanzania travelers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Safari Packages</h2>
            <p className="mt-3 text-slate-700">Wildlife adventures through Serengeti, Ngorongoro, and Tarangire.</p>
          </article>
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Beach Holidays</h2>
            <p className="mt-3 text-slate-700">Relax on Zanzibar beaches with optional snorkeling and spice tours.</p>
          </article>
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Cultural Tours</h2>
            <p className="mt-3 text-slate-700">Explore local villages, markets, and traditional art across Tanzania.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
