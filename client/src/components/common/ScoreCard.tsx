import { motion } from "framer-motion";

interface Props {
  score: number;
}

const ScoreCard = ({ score }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border-[14px] border-violet-600 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-2xl"
    >
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-6xl font-bold text-white"
        >
          {score}%
        </motion.h1>

        <p className="mt-2 text-zinc-400">
          Overall Score
        </p>

      </div>
    </motion.div>
  );
};

export default ScoreCard;