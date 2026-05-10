type TrendingTopicsProps = {
  topics: string[];
};

export default function TrendingTopics({ topics }: TrendingTopicsProps) {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Trending Topics</h3>
      <ul className="mt-4 space-y-2 text-slate-600">
        {topics.map(topic => (
          <li key={topic}>• {topic}</li>
        ))}
      </ul>
    </aside>
  );
}
