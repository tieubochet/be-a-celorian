export default function Tabs() {
  return (
    <div className="flex mt-6 border-b">
      <button className="px-4 py-2 border-b-2 border-blue-600 font-semibold text-blue-600">
        This Week
      </button>
      <button className="px-4 py-2 text-gray-500">Last Week</button>
      <button className="px-4 py-2 text-gray-500">All Time</button>
    </div>
  );
}