import { useNavigate } from "react-router-dom";

function ResultsCard({ wpm, accuracy, onRestart }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

      <div className="w-full max-w-md rounded-3xl bg-[#111827] border border-gray-800 p-8 shadow-2xl">

        <h1 className="text-3xl font-bold text-center text-white">
          Session Completed
        </h1>

        <div className="mt-8 space-y-5">

          <div className="flex justify-between text-lg">
            <span className="text-gray-400">
              WPM
            </span>

            <span className="font-bold text-violet-400">
              {wpm}
            </span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="text-gray-400">
              Accuracy
            </span>

            <span className="font-bold text-cyan-400">
              {accuracy}%
            </span>
          </div>

        </div>

        <div className="flex gap-4 mt-10">

          <button
            onClick={onRestart}
            className="
              flex-1
              rounded-xl
              bg-violet-600
              py-3
              hover:bg-violet-500
              transition
            "
          >
            Practice Again
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="
              flex-1
              rounded-xl
              border
              border-gray-700
              py-3
              hover:border-violet-500
              transition
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