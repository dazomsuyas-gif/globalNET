type StatsCardProps = {
  label: string;
  value: string | number;
  change?: string;
};

export default function StatsCard({ label, value, change }: StatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{label}</p>
      <p className="mt-4 text-4xl font-semibold text-slate-900">{value}</p>
      {change ? <p className="mt-2 text-sm text-green-600">{change}</p> : null}
    </div>
  );
}
