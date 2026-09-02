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

      <div
        className="
          min-h-screen
          bg-[#F8F3F8]
          text-[#493653]
          flex
          items-center
          justify-center
          p-6
          md:p-8
          relative
          overflow-hidden
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            -top-32
            -left-32
            w-80
            h-80
            rounded-full
            bg-[#D8B4E2]/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-40
            -right-32
            w-96
            h-96
            rounded-full
            bg-[#BFD4C3]/30
            blur-3xl
          "
        />

        {/* Main Container */}

        <div className="relative z-10 w-full max-w-5xl">

          {/* Heading */}

          <div className="text-center">

            <p
              className="
                text-xs
                md:text-sm
                uppercase
                tracking-[0.3em]
                text-[#9A70A8]
                font-medium
              "
            >
              Practice Session
            </p>

            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                mt-3
                text-[#493653]
              "
            >
              Typing Practice
            </h1>

            <p
              className="
                text-[#8A788D]
                mt-3
                text-sm
                md:text-base
              "
            >
              Improve your speed and accuracy.
            </p>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

            {/* Time */}

            <div
              className="
                rounded-3xl
                bg-white/70
                backdrop-blur-md
                border
                border-[#E2D6E4]
                p-6
                text-center
                shadow-sm
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <p className="text-sm text-[#8A788D]">
                Time
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-[#493653]
                "
              >
                {timeLeft}s
              </h2>

            </div>

            {/* WPM */}

            <div
              className="
                rounded-3xl
                bg-white/70
                backdrop-blur-md
                border
                border-[#E2D6E4]
                p-6
                text-center
                shadow-sm
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <p className="text-sm text-[#8A788D]">
                WPM
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-[#8E5BA5]
                "
              >
                {wpm}
              </h2>

            </div>

            {/* Accuracy */}

            <div
              className="
                rounded-3xl
                bg-white/70
                backdrop-blur-md
                border
                border-[#E2D6E4]
                p-6
                text-center
                shadow-sm
                hover:-translate-y-1
                hover:shadow-md
                transition-all
                duration-300
              "
            >
              <p className="text-sm text-[#8A788D]">
                Accuracy
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  mt-2
                  text-[#6F9478]
                "
              >
                {accuracy}%
              </h2>

            </div>

          </div>

          {/* Paragraph */}

          <div
            className="
              mt-8
              rounded-3xl
              bg-white/75
              backdrop-blur-md
              border
              border-[#E2D6E4]
              p-7
              md:p-9
              leading-10
              text-xl
              md:text-2xl
              tracking-wide
              shadow-sm
            "
          >

            {paragraph.split("").map((char, index) => {

              let color = "text-[#B7AAB9]";

              if (index < text.length) {
                color =
                  text[index] === char
                    ? "text-[#6F9478]"
                    : "text-[#C47787]";
              }

              return (
                <span
                  key={index}
                  className={`
                    relative
                    ${color}
                    ${
                      index === text.length
                        ? "after:absolute after:left-0 after:top-0 after:w-[2px] after:h-full after:bg-[#9A70A8] after:animate-pulse"
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
              mt-6
              w-full
              h-40
              rounded-3xl
              bg-white/80
              backdrop-blur-md
              border
              border-[#E2D6E4]
              p-6
              text-lg
              text-[#493653]
              placeholder:text-[#B4A6B6]
              outline-none
              resize-none
              shadow-sm
              focus:border-[#B58AC0]
              focus:ring-4
              focus:ring-[#D8B4E2]/20
              transition-all
              duration-300
            "
          />

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">

            {/* Restart */}

            <button
              onClick={restartTest}
              className="
                px-8
                py-3.5
                rounded-2xl
                bg-[#8E5BA5]
                hover:bg-[#795087]
                text-white
                font-semibold
                shadow-sm
                hover:shadow-md
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              Restart
            </button>

            {/* New Paragraph */}

            <button
              onClick={newParagraph}
              className="
                px-8
                py-3.5
                rounded-2xl
                bg-white/70
                border
                border-[#DCCFE0]
                text-[#684A73]
                font-semibold
                hover:bg-white
                hover:border-[#B58AC0]
                hover:-translate-y-0.5
                transition-all
                duration-300
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