import { useNavigate } from "react-router-dom";

function ResultsCard({ wpm, accuracy, onRestart }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-[#493653]/30
        backdrop-blur-sm
        flex
        items-center
        justify-center
        px-6
      "
    >

      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          bg-[#FBF8FC]
          border
          border-[#E2D6E4]
          p-8
          shadow-2xl
        "
      >

        <p
          className="
            text-center
            text-xs
            uppercase
            tracking-[0.25em]
            text-[#9A70A8]
            font-medium
          "
        >
          Practice Complete
        </p>

        <h1
          className="
            text-3xl
            font-bold
            text-center
            text-[#493653]
            mt-3
          "
        >
          Session Completed
        </h1>

        <div className="mt-8 space-y-4">

          {/* WPM */}

          <div
            className="
              flex
              justify-between
              items-center
              rounded-2xl
              bg-[#F3EDF4]
              border
              border-[#E3D7E5]
              px-5
              py-4
            "
          >
            <span className="text-[#8A788D]">
              WPM
            </span>

            <span className="font-bold text-xl text-[#8E5BA5]">
              {wpm}
            </span>
          </div>

          {/* Accuracy */}

          <div
            className="
              flex
              justify-between
              items-center
              rounded-2xl
              bg-[#F1F6F2]
              border
              border-[#D8E5DA]
              px-5
              py-4
            "
          >
            <span className="text-[#7E9182]">
              Accuracy
            </span>

            <span className="font-bold text-xl text-[#6F9478]">
              {accuracy}%
            </span>
          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          {/* Practice Again */}

          <button
            onClick={onRestart}
            className="
              flex-1
              rounded-2xl
              bg-[#8E5BA5]
              py-3.5
              text-white
              font-semibold
              hover:bg-[#795087]
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
            "
          >
            Practice Again
          </button>

          {/* Dashboard */}

          <button
            onClick={() => navigate("/dashboard")}
            className="
              flex-1
              rounded-2xl
              bg-white
              border
              border-[#DCCFE0]
              py-3.5
              text-[#684A73]
              font-semibold
              hover:border-[#B58AC0]
              hover:bg-[#F8F3F8]
              transition-all
              duration-300
            "
          >
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResultsCard;