export default function Header() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
          B
        </div>
        <span className="font-bold text-xl text-gray-800">Rewards</span>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
    </div>
  );
}
