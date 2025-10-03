const InfoCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-4">
    <div className="bg-slate-100 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

export default function InfoRow() {
  const clockIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const trophyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19V6l2-2 2 2v13M9 19c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2M9 19H5.828c-.53 0-1.039-.21-1.414-.586L2.293 16.293a1 1 0 010-1.414l2.121-2.121c.375-.375.884-.586 1.414-.586H9m7 0h3.172c.53 0 1.039.21 1.414.586l2.121 2.121a1 1 0 010 1.414l-2.121 2.121c-.375.375-.884.586-1.414-.586H16m-7 0h2"
      />
    </svg>
  );

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <InfoCard icon={clockIcon} label="Round Ends" value="3d 4h" />
      <InfoCard icon={trophyIcon} label="Total Rewards" value="2 ETH" />
    </div>
  );
}
