export default function Banner() {
  return (
    <div className="mt-4 relative bg-gray-900 rounded-2xl p-6 text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(34, 197, 94, 0.2), transparent 40%)",
        }}
      ></div>
      <h1 className="text-2xl font-bold">Builder Rewards</h1>
      <p className="text-gray-300 mt-1">Total Prize Pool</p>
      <p className="text-4xl font-extrabold mt-2">20 ETH</p>
      <button className="mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-lg text-md hover:bg-green-600 transition-colors">
        Start Earning
      </button>
    </div>
  );
}
