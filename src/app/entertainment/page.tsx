import Image from 'next/image';
import Link from 'next/link';

const entertainmentCategories = [
  {
    title: 'Movies',
    description: 'Latest blockbuster movies and classics',
    image: 'https://images.unsplash.com/photo-1489599735734-79b4d4c4b5b8?auto=format&fit=crop&w=400&q=90',
    count: '500+ Movies'
  },
  {
    title: 'TV Shows',
    description: 'Popular series and documentaries',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=90',
    count: '200+ Shows'
  },
  {
    title: 'Music',
    description: 'Albums, singles, and playlists',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=90',
    count: '1000+ Tracks'
  }
];

export default function EntertainmentPage() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-[var(--font-hero)] font-bold text-white sm:text-5xl">
          Entertainment Hub
        </h1>
        <p className="mt-4 text-lg text-white/75">
          Movies, TV shows, music, and more entertainment content
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entertainmentCategories.map((category) => (
          <Link
            key={category.title}
            href={`/entertainment/${category.title.toLowerCase().replace(' ', '-')}`}
            className="glass-card group rounded-3xl border border-white/10 p-6 card-hover"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <p className="mt-2 text-sm text-white/70">{category.description}</p>
              <p className="mt-2 text-xs text-primaryGold">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}