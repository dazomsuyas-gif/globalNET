type ScriptCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ScriptCard({ title, description, tags }: ScriptCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">{tag}</span>
        ))}
      </div>
    </div>
  );
}
