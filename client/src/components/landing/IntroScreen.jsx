import { useState, useEffect } from "react";
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
  className="flex flex-col items-center justify-center h-full text-center cursor-pointer"
>

      <div className="text-8xl mb-6">
        🌱
      </div>

      <h2 className="text-3xl font-bold text-white">
        Your Future Garden
      </h2>

      <p className="text-gray-400 mt-4">
        Your garden is waiting to grow...
      </p>
{showHint && (
  <p className="mt-8 text-violet-400 animate-pulse cursor-pointer">
    Click here to explore →
  </p>
)}
    </div>
  );
}

export default IntroScreen;