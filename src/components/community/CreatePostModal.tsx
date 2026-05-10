type CreatePostModalProps = {
  onClose: () => void;
};

export default function CreatePostModal({ onClose }: CreatePostModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Create a Post</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900">Close</button>
        </div>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-slate-300 p-4" placeholder="Post title" />
          <textarea className="w-full rounded-2xl border border-slate-300 p-4" rows={6} placeholder="Write your story, question, or update..." />
          <button className="rounded-full bg-primaryGold px-5 py-3 text-sm font-semibold text-slate-900">Publish</button>
        </div>
      </div>
    </div>
  );
}
