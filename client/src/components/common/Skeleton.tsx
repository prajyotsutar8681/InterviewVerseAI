const Skeleton = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`animate-pulse rounded-xl bg-zinc-800 ${className}`}
    />
  );
};

export default Skeleton;