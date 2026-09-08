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
    <div className="min-h-screen bg-[#F8F3F8] text-[#493653] flex items-center justify-center px-6 py-10 relative overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#D8B4E2]/25 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#C9DCCB]/30 blur-3xl" />

      <div className="relative z-10 w-full max-w-6xl">

        {/* Header Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Score + Combo */}
          <div className="flex items-center gap-6">

            <div className="bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl px-7 py-5 shadow-sm">
              <p className="text-xs tracking-[0.2em] text-[#9A70A8] font-medium">
                SCORE
              </p>

              <p className="text-3xl font-bold text-[#8E5BA5] mt-1">
                {score}
              </p>
            </div>

            <div className="bg-white/75 backdrop-blur-md border border-[#D8E5DA] rounded-3xl px-7 py-5 shadow-sm">
              <p className="text-xs tracking-[0.2em] text-[#7E9182] font-medium">
                COMBO
              </p>

              <p className="text-2xl font-bold text-[#6F9478] mt-1">
                 {combo}x
              </p>
            </div>

          </div>

          {/* Level */}
          <div className="bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl px-8 py-5 text-center shadow-sm">
            <p className="text-xs tracking-[0.2em] text-[#9A70A8] font-medium">
              LEVEL
            </p>

            <p className="text-3xl font-bold text-[#493653] mt-1">
              {level}
            </p>
          </div>

          {/* Lives */}
          <div className="bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl px-8 py-5 text-center shadow-sm">
            <p className="text-xs tracking-[0.2em] text-[#9A70A8] font-medium">
              LIVES
            </p>

            <p className="text-3xl mt-1 tracking-wide">
              {"💜".repeat(lives)}
            </p>
          </div>

        </div>

        {/* Arcade Arena */}
        <div className="mt-10 h-[500px] rounded-[2rem] bg-gradient-to-b from-[#FDFBFD] via-[#F5EEF6] to-[#EDE4F0] border border-[#DED0E1] relative overflow-hidden shadow-xl">

          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#D8B4E2]/15 blur-3xl" />

          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#C9DCCB]/20 blur-2xl" />

          <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-[#D8B4E2]/20 blur-2xl" />

          {/* Stars */}
          <div className="absolute inset-0 opacity-50 text-[#B58AC0]">
            <div className="absolute top-10 left-[15%] text-xs">✦</div>
            <div className="absolute top-24 left-[70%] text-sm">✦</div>
            <div className="absolute top-40 left-[35%] text-xs">·</div>
            <div className="absolute top-16 left-[85%] text-xs">✦</div>
            <div className="absolute top-72 left-[60%] text-xs">·</div>
            <div className="absolute top-80 left-[20%] text-sm">✦</div>
            <div className="absolute top-96 left-[75%] text-xs">·</div>
          </div>

          {/* Falling Word */}
          <div
            className="absolute px-5 py-2 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#DCCFE0] shadow-md text-lg font-semibold text-[#795087] transition-all"
            style={{
              top: `${wordPosition}%`,
              left: `${wordLeft}%`,
              transform: "translateX(-50%)",
            }}
          >
            {currentWord}
          </div>

         
        </div>

        {/* Input */}
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
            bg-white/80
            backdrop-blur-md
            border
            border-[#DED0E1]
            px-6
            py-4
            text-center
            text-xl
            text-[#493653]
            placeholder:text-[#A99BAE]
            outline-none
            shadow-sm
            focus:border-[#B58AC0]
            focus:ring-4
            focus:ring-[#D8B4E2]/20
            transition-all
          "
        />

      </div>
    </div>
  );
}

export default Arcade;