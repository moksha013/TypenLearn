import { useEffect, useState } from "react";
import PlantIllustration from "./PlantIllustration";

function IntroScreen({ setScreen }) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={() => setScreen("animation")}
      className="
        flex
        flex-col
        items-center
        justify-center
        h-full
        text-center
        cursor-pointer
        relative
      "
    >

      {/* Plant */}
      <div
        className="
          mb-7
          p-5
          rounded-full
          bg-white/60
          border
          border-white/80
          shadow-sm
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-md
        "
      >
        <PlantIllustration type="sprout" />
      </div>


      {/* Title */}
      <h2
        className="
          text-2xl
          font-bold
          text-[#493653]
        "
      >
        Your Future Garden
      </h2>


      {/* Description */}
      <p
        className="
          text-[#8A788D]
          mt-3
          text-sm
          leading-relaxed
        "
      >
        Your garden is waiting
        <br />
        to grow...
      </p>


      {/* Hint */}
      {showHint && (
        <p
          className="
            mt-8
            text-[#9A70A8]
            text-sm
            font-medium
            animate-pulse
          "
        >
          Click here to explore&nbsp; 
        </p>
      )}

    </div>
  );
}

export default IntroScreen;