export default function PDFGenerator() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Download PDF</h3>
      <p className="mt-3 text-slate-600">Generate a printable version of this page for offline use.</p>
      <button className="mt-4 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">Download PDF</button>
    </div>
  );
}
