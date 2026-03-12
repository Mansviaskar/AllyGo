import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", matches: 2 },
  { day: "Tue", matches: 4 },
  { day: "Wed", matches: 3 },
  { day: "Thu", matches: 6 },
  { day: "Fri", matches: 5 },
];

export default function MatchesChart() {
  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold text-white mb-4">
        Weekly Matches
      </h2>

      <ResponsiveContainer width="100%" height={250}>

        <LineChart data={data}>

          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="matches"
            stroke="#f97316"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}