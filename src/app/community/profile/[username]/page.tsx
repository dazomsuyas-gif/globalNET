import { Metadata } from 'next';

interface Props {
  params: { username: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.username} · Community Profile`,
    description: `View ${params.username}'s community profile, posts, and activity.`
  };
}

export default function CommunityProfilePage({ params }: Props) {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-900">
      <section className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primaryGold">Community Profile</p>
          <h1 className="text-4xl font-semibold">{params.username}</h1>
          <p className="max-w-3xl text-slate-700">Profile overview, posts, and recent activity for this community member.</p>
        </div>
      </section>
    </main>
  );
}
