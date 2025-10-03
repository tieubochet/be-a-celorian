export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 font-bold">base</span>
        <span className="text-gray-600">Builder Rewards</span>
      </div>
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">
        Start Earning
      </button>
    </div>
  );
}