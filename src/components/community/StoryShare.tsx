type StoryShareProps = {
  title: string;
  url: string;
};

export default function StoryShare({ title, url }: StoryShareProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Share this story</h3>
      <p className="mt-3 text-slate-600">Send a link to friends or share it on social media.</p>
      <a href={url} className="mt-4 inline-flex rounded-full bg-primaryGold px-4 py-2 text-sm font-semibold text-slate-900">Copy link</a>
    </div>
  );
}
