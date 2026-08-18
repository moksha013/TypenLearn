import { useState, useEffect } from "react";
import generateParagraph from "../utils/generateParagraph";
import ResultsCard from "../components/practice/ResultsCard";
import saveResult from "../utils/saveResult";

function Practice() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [resultSaved, setResultSaved] = useState(false);

  const [paragraph, setParagraph] = useState(
    generateParagraph(50)
  );

  // ---------------- WPM ----------------

  const wordsTyped = text.trim().length / 5;
  const timeElapsed = 60 - timeLeft;

  const wpm =
    timeElapsed > 0
      ? Math.round(wordsTyped / (timeElapsed / 60))
      : 0;

  // ---------------- Accuracy ----------------

  const correctCharacters = text
    .split("")
    .filter(
      (char, index) => char === paragraph[index]
    ).length;

  const accuracy =
    text.length > 0
      ? Math.round(
          (correctCharacters / text.length) * 100
        )
      : 100;

  // ---------------- Timer ----------------

  useEffect(() => {
    if (!started || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  // ---------------- Save Result ----------------

  useEffect(() => {
    if (timeLeft === 0 && !resultSaved) {
      saveResult({
        wpm,
        accuracy,
        date: new Date().toLocaleString(),
      });

      setResultSaved(true);
    }
  }, [timeLeft, resultSaved, wpm, accuracy]);

  // ---------------- Restart ----------------

  const restartTest = () => {
    setText("");
    setTimeLeft(60);
    setStarted(false);
    setResultSaved(false);
  };

  // ---------------- New Paragraph ----------------

  const newParagraph = () => {
    setParagraph(generateParagraph(50));
    setText("");
    setTimeLeft(60);
    setStarted(false);
    setResultSaved(false);
  };

  return (
    <>
      {/* Results */}

      {timeLeft === 0 && (
        <ResultsCard
  wpm={wpm}
  accuracy={accuracy}
  onRestart={restartTest}
/>
      )}

      {/* Main Practice */}

      <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center p-8">

        <div className="w-full max-w-5xl">

          {/* Heading */}

          <h1 className="text-4xl font-bold text-center">
            Typing Practice
          </h1>

          <p className="text-center text-gray-400 mt-2">
            Improve your speed and accuracy.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-6 mt-10">

            {/* Time */}

            <div className="rounded-2xl bg-[#111827] border border-gray-800 p-6 text-center">

              <p className="text-gray-400 text-sm">
                Time
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {timeLeft}s
              </h2>

            </div>

            {/* WPM */}

            <div className="rounded-2xl bg-[#111827] border border-gray-800 p-6 text-center">

              <p className="text-gray-400 text-sm">
                WPM
              </p>

              <h2 className="text-3xl font-bold mt-2 text-violet-400">
                {wpm}
              </h2>

            </div>

            {/* Accuracy */}

            <div className="rounded-2xl bg-[#111827] border border-gray-800 p-6 text-center">

              <p className="text-gray-400 text-sm">
                Accuracy
              </p>

              <h2 className="text-3xl font-bold mt-2 text-cyan-400">
                {accuracy}%
              </h2>

            </div>

          </div>

          {/* Paragraph */}

          <div className="mt-10 rounded-2xl bg-[#111827] border border-gray-800 p-8 leading-10 text-2xl">

            {paragraph.split("").map((char, index) => {

              let color = "text-gray-500";

              if (index < text.length) {
                color =
                  text[index] === char
                    ? "text-green-400"
                    : "text-red-400";
              }

              return (
                <span
                  key={index}
                  className={`
                    relative
                    ${color}
                    ${
                      index === text.length
                        ? "after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full after:bg-violet-400 after:animate-pulse"
                        : ""
                    }
                  `}
                >
                  {char}
                </span>
              );
            })}

          </div>

          {/* Input */}

          <textarea
            value={text}
            disabled={timeLeft === 0}
            onChange={(e) => {

              if (!started) {
                setStarted(true);
                setTimeLeft(59);
              }

              setText(e.target.value);
            }}
            placeholder={
              timeLeft === 0
                ? "Time's up!"
                : "Start typing here..."
            }
            className="
              mt-8
              w-full
              h-40
              rounded-2xl
              bg-[#111827]
              border
              border-gray-800
              p-6
              text-xl
              outline-none
              resize-none
              focus:border-violet-500
              transition
            "
          />

          {/* Buttons */}

          <div className="flex justify-center gap-5 mt-8">

            {/* Restart */}

            <button
              onClick={restartTest}
              className="
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-fuchsia-600
                hover:from-violet-500
                hover:to-fuchsia-500
                transition
              "
            >
              Restart
            </button>

            {/* New Paragraph */}

            <button
              onClick={newParagraph}
              className="
                px-8
                py-4
                rounded-xl
                border
                border-gray-700
                hover:border-violet-500
                transition
              "
            >
              New Paragraph
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Practice;