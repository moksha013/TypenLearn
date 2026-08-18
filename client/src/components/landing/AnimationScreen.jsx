import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function AnimationScreen() {
  const stages = [
    { emoji: "🌰", text: "Planting Seed..." },
    { emoji: "🌱", text: "Sprouting..." },
    { emoji: "🌿", text: "Growing..." },
    { emoji: "🌳", text: "Blooming..." },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < stages.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center h-full">

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl"
        >
          {stages[index].emoji}
        </motion.div>

      </AnimatePresence>

      <motion.p
        key={stages[index].text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-gray-300"
      >
        {stages[index].text}
      </motion.p>

    </div>
  );
}

export default AnimationScreen;