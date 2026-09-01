type ProjectModalProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function ProjectModal({ title, description, children }: ProjectModalProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6 text-white shadow-2xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{description}</p>
      {children}
    </div>
  );
}
