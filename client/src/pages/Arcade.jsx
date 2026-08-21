import { useEffect, useState } from "react";
import arcadeWords from "../utils/arcadeWords";

function getRandomWord() {
  return arcadeWords[
    Math.floor(Math.random() * arcadeWords.length)
  ];
}

function getRandomPosition() {
  return Math.floor(Math.random() * 70) + 15;
}

function Arcade() {
    const [score, setScore] = useState(0);
const [lives, setLives] = useState(3);
const [level, setLevel] = useState(1);
const [currentWord, setCurrentWord] = useState(getRandomWord());
const [input, setInput] = useState("");
const [wordPosition, setWordPosition] = useState(10);
const [gameOver, setGameOver] = useState(false);
const [collision, setCollision] = useState(false);
const [combo, setCombo] = useState(0);
const [wordLeft, setWordLeft] = useState(50);

useEffect(() => {
  if (gameOver) return;

  const speed = Math.max(40, 100 - (level - 1) * 15);

  const interval = setInterval(() => {
    setWordPosition((prev) => prev + 1);
  }, speed);

  return () => clearInterval(interval);
}, [gameOver, level]);

useEffect(() => {
  if (wordPosition >= 85 && !collision) {
    setCollision(true);
    setLives((prev) => prev - 1);
    setCombo(0);
    setWordPosition(10);
  }
}, [wordPosition, collision]);

useEffect(() => {
  if (wordPosition === 10) {
    setCollision(false);
  }
}, [wordPosition]);

useEffect(() => {
  if (lives <= 0) {
    setGameOver(true);
  }
}, [lives]);

const handleTyping = (e) => {
  const value = e.target.value;

  setInput(value);

  if (value === currentWord) {
    setScore((prev) => prev + 100);
    setCombo((prev) => prev + 1);

    if ((score + 100) % 500 === 0) {
  setLevel((prev) => prev + 1);
}

    setInput("");
    setWordPosition(10);
    setCurrentWord(getRandomWord());
    setWordLeft(getRandomPosition());
  }
};


  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center">
      <div className="w-full max-w-6xl px-8">

  <div className="flex justify-between items-center">
   <div>
  <p className="text-gray-400 text-sm">SCORE</p>

  <p className="text-3xl font-bold text-violet-400">
    {score}
  </p>

  <p className="text-gray-400 text-sm mt-4">COMBO</p>

  <p className="text-2xl font-bold text-orange-400">
    🔥 {combo}x
  </p>
</div>

    <div>
      <p className="text-gray-400 text-sm">LEVEL</p>
      <p className="text-3xl font-bold">
        {level}
      </p>
    </div>

    <div>
      <p className="text-gray-400 text-sm">LIVES</p>
      <p className="text-3xl">
        {"❤️".repeat(lives)}
      </p>
    </div>
  </div>

 <div className="mt-12 h-[500px] rounded-3xl bg-gradient-to-b from-[#111827] via-[#0B1120] to-[#050816] border border-gray-800 relative overflow-hidden">

<div className="absolute inset-0 opacity-40">
  <div className="absolute top-10 left-[15%] text-xs">✦</div>
  <div className="absolute top-24 left-[70%] text-sm">✦</div>
  <div className="absolute top-40 left-[35%] text-xs">·</div>
  <div className="absolute top-16 left-[85%] text-xs">✦</div>
  <div className="absolute top-72 left-[60%] text-xs">·</div>
  <div className="absolute top-80 left-[20%] text-sm">✦</div>
  <div className="absolute top-96 left-[75%] text-xs">·</div>
</div>
    <div
  className="absolute text-xl font-semibold text-cyan-300 transition-all"
  style={{
    top: `${wordPosition}%`,
    left: `${wordLeft}%`,
    transform: "translateX(-50%)",
  }}
>
  {currentWord}
</div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-5xl">
      🚀
    </div>

  </div>

</div>

<input
  type="text"
  value={input}
  onChange={handleTyping}
  placeholder="Type the word..."
  autoFocus
  className="
    mt-8
    w-full
    max-w-md
    mx-auto
    block
    rounded-2xl
    bg-[#111827]
    border
    border-gray-800
    px-6
    py-4
    text-center
    text-white
    text-xl
    outline-none
    focus:border-violet-500
  "
/>
    </div>
  );
}

export default Arcade;