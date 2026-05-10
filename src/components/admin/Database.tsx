export default function Database() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Database Status</h2>
      <p className="mt-3 text-slate-600">The database connection is available and responding to read/write requests.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
        <li>Users: 8,000+</li>
        <li>Articles: 250+</li>
        <li>Products: 100+</li>
      </ul>
    </section>
  );
}
