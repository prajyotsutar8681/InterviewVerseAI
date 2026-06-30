import { motion } from "framer-motion";

interface Props {
  label: string;
  value: number;
}

const ProgressBar = ({
  label,
  value,
}: Props) => {
  return (
    <div className="space-y-2">

      <div className="flex items-center justify-between">

        <span className="text-sm font-medium text-zinc-300">
          {label}
        </span>

        <span className="text-sm font-bold text-white">
          {value}%
        </span>

      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600"
        />

      </div>

    </div>
  );
};

export default ProgressBar;