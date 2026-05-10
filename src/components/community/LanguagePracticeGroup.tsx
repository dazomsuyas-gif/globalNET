type LanguagePracticeGroupProps = {
  language: string;
  level: string;
  topics: string[];
};

export default function LanguagePracticeGroup({ language, level, topics }: LanguagePracticeGroupProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{language} Practice - {level}</h3>
      <p className="mt-3 text-slate-600">Topics include: {topics.join(', ')}.</p>
    </section>
  );
}
