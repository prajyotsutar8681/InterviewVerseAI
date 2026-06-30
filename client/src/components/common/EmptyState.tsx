interface Props {
  title: string;
  description: string;
}

const EmptyState = ({
  title,
  description,
}: Props) => {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;