import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("This Week");
  const tabs = ["This Week", "Last Week", "All Time"];

  return (
    <div className="flex mt-6 bg-gray-200 rounded-full p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300 ${
            activeTab === tab
              ? "bg-gray-900 text-white shadow"
              : "bg-transparent text-gray-500 hover:bg-gray-300/60"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
