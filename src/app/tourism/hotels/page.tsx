export default function TourismHotelsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Tourism Hotels</p>
          <h1 className="text-4xl font-semibold">Hotels and stays in Tanzania's top destinations</h1>
          <p className="max-w-3xl text-lg text-slate-700">
            Browse curated accommodations in Zanzibar, Arusha, Kilimanjaro, Dar es Salaam and more with trusted local partners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Luxury Resorts</h2>
            <p className="mt-3 text-slate-700">Private beachfront resorts, premium amenities, and unforgettable experiences.</p>
          </article>
          <article className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Boutique Hotels</h2>
            <p className="mt-3 text-slate-700">Charming small hotels with local design and personalized service.</p>
          </article>
          <article className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Budget Stays</h2>
            <p className="mt-3 text-slate-700">Affordable lodging options close to attractions and transportation.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
