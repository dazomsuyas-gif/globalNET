export default function TourismFlightsPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Tourism Flights</p>
          <h1 className="text-4xl font-semibold">Domestic flight routes across Tanzania</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Search flights between Dar es Salaam, Arusha, Kilimanjaro, Zanzibar, Mwanza, and more. Compare prices and carriers in one place.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Dar to Arusha</h2>
            <p className="mt-3 text-slate-700">Fast domestic service with early morning departures and comfortable cabins.</p>
          </article>
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Dar to Zanzibar</h2>
            <p className="mt-3 text-slate-700">Beach getaway flights with reliable schedules and convenient airport transfers.</p>
          </article>
          <article className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Arusha to Kilimanjaro</h2>
            <p className="mt-3 text-slate-700">Connect to the Kilimanjaro region for climbing, safaris, and cultural tours.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
