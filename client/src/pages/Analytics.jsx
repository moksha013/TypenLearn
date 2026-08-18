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
    <div className="min-h-screen bg-[#0B1120] text-white p-10">
      <h1 className="text-5xl font-bold">
        Analytics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

  <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">
    <p className="text-gray-400 text-sm">Best WPM</p>
    <h2 className="text-4xl font-bold text-violet-400 mt-2">
      {bestWPM}
    </h2>
  </div>

  <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">
    <p className="text-gray-400 text-sm">Average WPM</p>
    <h2 className="text-4xl font-bold text-cyan-400 mt-2">
      {averageWPM}
    </h2>
  </div>

  <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6">
    <p className="text-gray-400 text-sm">Tests Taken</p>
    <h2 className="text-4xl font-bold text-white mt-2">
      {totalTests}
    </h2>
  </div>

</div>
      <div className="mt-10 bg-[#111827] border border-gray-800 rounded-3xl p-6">
  <h2 className="text-2xl font-bold mb-6">
    WPM Progress
  </h2>

  <div className="h-80">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={results}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
  dataKey="date"
  tickFormatter={(date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }
/>
        <YAxis />
       <Tooltip
  contentStyle={{
    backgroundColor: "#111827",
    border: "1px solid #374151",
    borderRadius: "12px",
    color: "#ffffff",
  }}
  labelStyle={{
    color: "#9ca3af",
  }}
  itemStyle={{
    color: "#a78bfa",
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
          stroke="#8b5cf6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>
    </div>
  );
}

export default Analytics;