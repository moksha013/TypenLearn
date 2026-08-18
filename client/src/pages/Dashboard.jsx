import { useEffect, useState } from "react";
import { Zap, Target, BarChart3, Trophy, Play } from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedResults =
      JSON.parse(localStorage.getItem("typingResults")) || [];
    setResults(savedResults);
  }, []);

  const bestWpm =
    results.length > 0
      ? Math.max(...results.map((result) => result.wpm))
      : 0;

  const bestAccuracy =
    results.length > 0
      ? Math.max(...results.map((result) => result.accuracy))
      : 0;

  const averageWpm =
    results.length > 0
      ? Math.round(
          results.reduce((sum, result) => sum + result.wpm, 0) /
            results.length
        )
      : 0;

  const latestResult =
    results.length > 0 ? results[results.length - 1] : null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-600/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">

        {/* Header */}
        <h1 className="text-6xl font-black tracking-tight">
          Dashboard
        </h1>

        <div className="mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl leading-8">
          Track your typing journey, improve your speed and accuracy,
          and beat your personal records every day.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-7 mt-12">

          {/* Best WPM */}
          <div className="bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-7 transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] hover:-translate-y-1">

            <div className="flex items-center gap-3">
              <Zap className="text-violet-400" size={24} />

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold">
                Best WPM
              </p>
            </div>

            <h2 className="mt-6 text-6xl font-black">
              {bestWpm}
            </h2>

          </div>

          {/* Accuracy */}
          <div className="bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-7 transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)] hover:-translate-y-1">

            <div className="flex items-center gap-3">
              <Target className="text-cyan-400" size={24} />

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold">
                Best Accuracy
              </p>
            </div>

            <h2 className="mt-6 text-6xl font-black">
              {bestAccuracy}%
            </h2>

          </div>

          {/* Average */}
          <div className="bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-7 transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.18)] hover:-translate-y-1">

            <div className="flex items-center gap-3">
              <BarChart3 className="text-green-400" size={24} />

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold">
                Average WPM
              </p>
            </div>

            <h2 className="mt-6 text-6xl font-black">
              {averageWpm}
            </h2>

          </div>

          {/* Tests */}
          <div className="bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-7 transition-all duration-300 hover:border-yellow-500 hover:shadow-[0_0_40px_rgba(250,204,21,0.18)] hover:-translate-y-1">

            <div className="flex items-center gap-3">
              <Trophy className="text-yellow-400" size={24} />

              <p className="uppercase tracking-[0.2em] text-xs text-gray-500 font-semibold">
                Tests Completed
              </p>
            </div>

            <h2 className="mt-6 text-6xl font-black">
              {results.length}
            </h2>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-7 mt-10">

          {/* Recent Test */}
          <div className="bg-[#111827]/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-7">

            <h3 className="text-2xl font-bold">
              Recent Test
            </h3>

            {latestResult ? (
              <div className="mt-5 space-y-3 text-lg">

                <p>
                  WPM :
                  <span className="text-violet-400 font-bold ml-2">
                    {latestResult.wpm}
                  </span>
                </p>

                <p>
                  Accuracy :
                  <span className="text-cyan-400 font-bold ml-2">
                    {latestResult.accuracy}%
                  </span>
                </p>

              </div>
            ) : (
              <p className="mt-5 text-gray-400">
                No tests completed yet.
              </p>
            )}

          </div>

          {/* Continue Practice */}
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-3xl p-7 flex flex-col justify-between">

            <div>

              <h3 className="text-3xl font-bold">
                Continue Practice
              </h3>

              <p className="mt-4 text-violet-100">
                Ready to beat your personal best?
              </p>

            </div>

            <Link
              to="/practice"
              className="mt-8 bg-white text-black rounded-xl py-4 flex items-center justify-center gap-3 font-bold hover:scale-105 transition"
            >
              <Play size={20} />
              Start Typing
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;