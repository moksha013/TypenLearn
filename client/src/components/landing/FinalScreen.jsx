import { motion } from "framer-motion";
import PlantIllustration from "./PlantIllustration";

function FinalScreen() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        h-full
        text-center
        px-4
      "
    >

      {/* Blooming Plant */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          p-5
          rounded-full
          bg-white/60
          border
          border-white/80
          shadow-md
        "
      >
        <PlantIllustration type="bloom" />
      </motion.div>


      {/* Title */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="
          mt-8
          text-2xl
          font-bold
          text-[#493653]
        "
      >
        Typing Garden
      </motion.h2>


      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 0.5,
        }}
        className="
          mt-3
          text-sm
          text-[#8A788D]
          leading-relaxed
        "
      >
        Grow with every keystroke.
      </motion.p>


      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="
          mt-6
          text-[#B58AC0]
          text-sm
        "
      >
        ✦ ✿ ✦
      </motion.div>

    </div>
  );
}

export default FinalScreen;