'use client';

export default function GlobalError({ error }: { error: Error }) {
  console.error(error);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-700 bg-slate-900 p-10 shadow-xl">
        <h1 className="text-4xl font-semibold">Something went wrong</h1>
        <p className="mt-4 text-slate-300">We encountered an error while loading this page. Please refresh, or contact support if the issue persists.</p>
      </div>
    </main>
  );
}
