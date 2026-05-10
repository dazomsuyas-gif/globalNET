export default function ConsentBanner() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-3xl bg-slate-950 px-6 py-4 text-white shadow-xl md:left-auto md:right-8 md:w-[420px]">
      <p className="text-sm">This website uses cookies and analytics to improve your experience. By continuing, you agree to our privacy terms.</p>
      <button className="mt-4 inline-flex rounded-full bg-primaryGold px-4 py-2 text-sm font-semibold text-slate-900">Accept</button>
    </div>
  );
}
