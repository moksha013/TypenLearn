import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedResults =
      JSON.parse(localStorage.getItem("typingResults")) || [];

    setResults(savedResults);
  }, []);

  const bestWPM =
    results.length > 0
      ? Math.max(...results.map((result) => result.wpm))
      : 0;

  const averageWPM =
    results.length > 0
      ? Math.round(
          results.reduce((sum, result) => sum + result.wpm, 0) /
            results.length
        )
      : 0;

  const totalTests = results.length;

  return (
    <div className="min-h-screen bg-[#F8F3F8] text-[#493653] p-6 md:p-10 relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#D8B4E2]/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#C9DCCB]/30 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#9A70A8] font-medium">
            Performance
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#493653] mt-2">
            Analytics
          </h1>

          <p className="text-[#8A788D] mt-3">
            Track your typing progress and see how you're improving.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Best WPM */}
          <div className="bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-sm text-[#8A788D]">
              Best WPM
            </p>

            <h2 className="text-4xl font-bold text-[#8E5BA5] mt-2">
              {bestWPM}
            </h2>

            <p className="text-xs text-[#A99BAE] mt-2">
              Your highest recorded speed
            </p>
          </div>

          {/* Average WPM */}
          <div className="bg-white/75 backdrop-blur-md border border-[#D8E5DA] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-sm text-[#7E9182]">
              Average WPM
            </p>

            <h2 className="text-4xl font-bold text-[#6F9478] mt-2">
              {averageWPM}
            </h2>

            <p className="text-xs text-[#9AAA9E] mt-2">
              Your average typing speed
            </p>
          </div>

          {/* Tests Taken */}
          <div className="bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <p className="text-sm text-[#8A788D]">
              Tests Taken
            </p>

            <h2 className="text-4xl font-bold text-[#493653] mt-2">
              {totalTests}
            </h2>

            <p className="text-xs text-[#A99BAE] mt-2">
              Total practice sessions
            </p>
          </div>

        </div>

        {/* WPM Progress */}
        <div className="mt-10 bg-white/75 backdrop-blur-md border border-[#E2D6E4] rounded-3xl p-6 md:p-8 shadow-sm">

          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#9A70A8] font-medium">
              Progress
            </p>

            <h2 className="text-2xl font-bold text-[#493653] mt-1">
              WPM Progress
            </h2>

            <p className="text-sm text-[#8A788D] mt-1">
              Your typing speed across practice sessions.
            </p>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={results}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#E6DCE8"
                />

                <XAxis
                  dataKey="date"
                  tickFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  tick={{
                    fill: "#8A788D",
                    fontSize: 12,
                  }}
                  axisLine={{
                    stroke: "#DDD0DF",
                  }}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#8A788D",
                    fontSize: 12,
                  }}
                  axisLine={{
                    stroke: "#DDD0DF",
                  }}
                  tickLine={false}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FBF8FC",
                    border: "1px solid #E2D6E4",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(73, 54, 83, 0.10)",
                  }}
                  labelStyle={{
                    color: "#684A73",
                    fontWeight: "600",
                  }}
                  itemStyle={{
                    color: "#8E5BA5",
                    fontWeight: "600",
                  }}
                  labelFormatter={(date) =>
                    new Date(date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />

                <Line
                  type="monotone"
                  dataKey="wpm"
                  stroke="#8E5BA5"
                  strokeWidth={3}
                  dot={{
                    fill: "#8E5BA5",
                    strokeWidth: 0,
                    r: 4,
                  }}
                  activeDot={{
                    r: 6,
                  }}
                />

              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Analytics;