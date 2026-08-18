import { motion } from "framer-motion";

function FinalScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-8xl"
      >
        🌳
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-3xl font-bold"
      >
        Typing Garden
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-3 text-gray-400"
      >
        Grow with every keystroke.
      </motion.p>

    </div>
  );
}

export default FinalScreen;