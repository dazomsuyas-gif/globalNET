type PostCardProps = {
  title: string;
  author: string;
  excerpt: string;
  date: string;
};

export default function PostCard({ title, author, excerpt, date }: PostCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500">by {author}</p>
        </div>
        <span className="text-sm text-slate-400">{date}</span>
      </div>
      <p className="mt-4 text-slate-600">{excerpt}</p>
    </article>
  );
}
