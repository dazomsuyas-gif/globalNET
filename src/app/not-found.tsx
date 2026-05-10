export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy">
      <div className="text-center">
        <h1 className="text-6xl font-[var(--font-hero)] font-bold text-white mb-4">
          404
        </h1>
        <p className="text-xl text-white/75 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primaryGold px-8 py-4 text-lg font-semibold text-navy hover:bg-goldBright transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}