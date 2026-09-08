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
    <div className="relative min-h-screen overflow-hidden bg-[#F8F3F8] text-[#493653]">

      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-[#D8B4E2]/25 blur-[180px] rounded-full" />

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] bg-[#C9DCCB]/30 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-12">

        {/* Header */}
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-[#9A70A8] font-medium">
            Your Progress
          </p>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#493653] mt-2">
            Dashboard
          </h1>

          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#9A70A8] to-[#C4A9C8]" />

          <p className="mt-6 text-lg text-[#8A788D] max-w-2xl leading-8">
            Track your typing journey, improve your speed and accuracy,
            and beat your personal records every day.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mt-12">

          {/* Best WPM */}
          <div className="group bg-white/75 backdrop-blur-xl border border-[#E2D6E4] rounded-3xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#B58AC0] hover:shadow-md transition-all duration-300">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#E9DCEE] flex items-center justify-center group-hover:bg-[#E1CEE5] transition">
                <Zap className="text-[#8E5BA5]" size={22} />
              </div>

              <p className="uppercase tracking-[0.2em] text-xs text-[#8A788D] font-semibold">
                Best WPM
              </p>
            </div>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#493653]">
              {bestWpm}
            </h2>

            <p className="mt-2 text-sm text-[#A99BAE]">
              Your highest recorded speed
            </p>

          </div>

          {/* Accuracy */}
          <div className="group bg-white/75 backdrop-blur-xl border border-[#D8E5DA] rounded-3xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#AFC7B3] hover:shadow-md transition-all duration-300">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#E6F0E8] flex items-center justify-center group-hover:bg-[#DDEADF] transition">
                <Target className="text-[#6F9478]" size={22} />
              </div>

              <p className="uppercase tracking-[0.2em] text-xs text-[#7E9182] font-semibold">
                Best Accuracy
              </p>
            </div>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#493653]">
              {bestAccuracy}%
            </h2>

            <p className="mt-2 text-sm text-[#9AAA9E]">
              Your highest accuracy
            </p>

          </div>

          {/* Average */}
          <div className="group bg-white/75 backdrop-blur-xl border border-[#E2D6E4] rounded-3xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#B58AC0] hover:shadow-md transition-all duration-300">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#E9DCEE] flex items-center justify-center group-hover:bg-[#E1CEE5] transition">
                <BarChart3 className="text-[#8E5BA5]" size={22} />
              </div>

              <p className="uppercase tracking-[0.2em] text-xs text-[#8A788D] font-semibold">
                Average WPM
              </p>
            </div>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#493653]">
              {averageWpm}
            </h2>

            <p className="mt-2 text-sm text-[#A99BAE]">
              Your average typing speed
            </p>

          </div>

          {/* Tests */}
          <div className="group bg-white/75 backdrop-blur-xl border border-[#E2D6E4] rounded-3xl p-7 shadow-sm hover:-translate-y-1 hover:border-[#D3B47A] hover:shadow-md transition-all duration-300">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#F4EEDC] flex items-center justify-center group-hover:bg-[#EFE6CC] transition">
                <Trophy className="text-[#B18A45]" size={22} />
              </div>

              <p className="uppercase tracking-[0.2em] text-xs text-[#8A788D] font-semibold">
                Tests Completed
              </p>
            </div>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#493653]">
              {results.length}
            </h2>

            <p className="mt-2 text-sm text-[#A99BAE]">
              Total practice sessions
            </p>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mt-10">

          {/* Recent Test */}
          <div className="bg-white/75 backdrop-blur-xl border border-[#E2D6E4] rounded-3xl p-7 shadow-sm">

            <p className="text-xs uppercase tracking-[0.2em] text-[#9A70A8] font-medium">
              Latest Activity
            </p>

            <h3 className="text-2xl font-bold text-[#493653] mt-2">
              Recent Test
            </h3>

            {latestResult ? (
              <div className="mt-6 space-y-4">

                <div className="flex justify-between items-center rounded-2xl bg-[#F3EDF4] border border-[#E3D7E5] px-5 py-4">
                  <span className="text-[#8A788D]">
                    WPM
                  </span>

                  <span className="text-xl text-[#8E5BA5] font-bold">
                    {latestResult.wpm}
                  </span>
                </div>

                <div className="flex justify-between items-center rounded-2xl bg-[#F1F6F2] border border-[#D8E5DA] px-5 py-4">
                  <span className="text-[#7E9182]">
                    Accuracy
                  </span>

                  <span className="text-xl text-[#6F9478] font-bold">
                    {latestResult.accuracy}%
                  </span>
                </div>

              </div>
            ) : (
              <p className="mt-6 text-[#8A788D]">
                No tests completed yet.
              </p>
            )}

          </div>

          {/* Continue Practice */}
          <div className="bg-gradient-to-br from-[#8E5BA5] via-[#9D70AD] to-[#789B82] rounded-3xl p-7 flex flex-col justify-between shadow-md">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-medium">
                Keep Growing
              </p>

              <h3 className="text-3xl font-bold text-white mt-2">
                Continue Practice
              </h3>

              <p className="mt-4 text-white/80 leading-7">
                Ready to beat your personal best?
              </p>

            </div>

            <Link
              to="/practice"
              className="mt-8 bg-white text-[#684A73] rounded-2xl py-4 flex items-center justify-center gap-3 font-bold hover:bg-[#FBF8FC] hover:scale-[1.02] transition-all duration-300 shadow-sm"
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