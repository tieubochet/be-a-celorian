import { leaderboard } from "../data/leaderboard";

export default function Leaderboard() {
  return (
    <div className="mt-6 space-y-3">
      {leaderboard.map((name, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center p-3 border rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <span>{name}</span>
          </div>
          <span className="text-gray-500">{">0,500 ETH"}</span>
        </div>
      ))}
    </div>
  );
}