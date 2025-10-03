import { leaderboard, LeaderboardEntry } from "../data/leaderboard";
import type { FC } from "react";

// FIX: Explicitly type LeaderboardItem as a FunctionComponent to allow React-specific props like `key`.
const LeaderboardItem: FC<{ entry: LeaderboardEntry }> = ({ entry }) => {
  const rankColor =
    entry.rank === 1
      ? "bg-yellow-400 text-yellow-900"
      : entry.rank === 2
      ? "bg-gray-300 text-gray-800"
      : entry.rank === 3
      ? "bg-amber-500 text-amber-900"
      : "bg-gray-200 text-gray-700";

  return (
    <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${rankColor}`}
        >
          {entry.rank}
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
            {entry.initials}
          </div>
          <span className="font-semibold text-gray-800">{entry.name}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="font-bold text-green-600">{entry.earnings}</span>
      </div>
    </div>
  );
};

export default function Leaderboard() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Leaderboard</h2>
        <a href="#" className="text-sm font-semibold text-green-600">
          View All
        </a>
      </div>
      <div className="space-y-3">
        {leaderboard.map((entry) => (
          <LeaderboardItem key={entry.rank} entry={entry} />
        ))}
      </div>
    </div>
  );
}
