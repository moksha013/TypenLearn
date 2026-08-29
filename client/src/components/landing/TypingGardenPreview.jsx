import { useState, useEffect } from "react";

import IntroScreen from "./IntroScreen";
import AnimationScreen from "./AnimationScreen";
import FinalScreen from "./FinalScreen";

function TypingGardenPreview() {
  const [screen, setScreen] = useState("intro");

  useEffect(() => {
    if (screen === "animation") {
      const timer = setTimeout(() => {
        setScreen("final");
      }, 7000);

      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <aside
      className="
        w-80
        min-h-[calc(100vh-80px)]
        p-6
        bg-[#F3EDF4]
        border-l
        border-[#DDD0DF]
        text-[#493653]
        relative
        overflow-hidden
      "
    >

      {/* Soft botanical glow */}
      <div
        className="
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-56
          h-56
          rounded-full
          bg-[#D8B4E2]/30
          blur-3xl
        "
      />

      {/* Bottom glow */}
      <div
        className="
          absolute
          -bottom-20
          -right-20
          w-48
          h-48
          rounded-full
          bg-[#C9A7D4]/20
          blur-3xl
        "
      />

      {/* Garden Content */}
      <div className="relative z-10 h-full">

        {screen === "intro" && (
          <IntroScreen setScreen={setScreen} />
        )}

        {screen === "animation" && (
          <AnimationScreen />
        )}

        {screen === "final" && (
          <FinalScreen />
        )}

      </div>

    </aside>
  );
}

export default TypingGardenPreview;