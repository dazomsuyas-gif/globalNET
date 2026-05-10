export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <section className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Admin Dashboard</p>
          <h1 className="text-4xl font-semibold">Admin Workspace</h1>
          <p className="max-w-3xl text-slate-300">
            Manage articles, stories, marketplace products, users, and site content from a single admin view.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-slate-300">Quick status of published content, active users, and recent changes.</p>
          </article>
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Content</h2>
            <p className="mt-3 text-slate-300">Manage articles and stories using the admin menus.</p>
          </article>
          <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Products</h2>
            <p className="mt-3 text-slate-300">Review marketplace listings, stock, and orders.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
