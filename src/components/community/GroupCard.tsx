type GroupCardProps = {
  title: string;
  description: string;
  members: number;
};

export default function GroupCard({ title, description, members }: GroupCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
      <p className="mt-4 text-sm text-slate-500">{members} members</p>
    </article>
  );
}
