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
    <aside className="w-80 border-l border-gray-800 p-6 text-white bg-gradient-to-b from-[#0F172A] to-[#111827] relative overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 h-56 bg-violet-500/20 blur-3xl rounded-full"></div>
      
      {screen === "intro" && <IntroScreen setScreen={setScreen} />}

      {screen === "animation" && <AnimationScreen />}

      {screen === "final" && <FinalScreen />}

    </aside>
  );
}

export default TypingGardenPreview;