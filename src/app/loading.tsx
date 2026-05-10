export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-primaryGold border-slate-700"></div>
        <p className="text-lg font-medium">Loading globalNET...</p>
      </div>
    </div>
  );
}
