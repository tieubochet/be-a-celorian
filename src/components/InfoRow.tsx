export default function InfoRow() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <p className="text-sm text-gray-500">Round Ends</p>
        <p className="text-lg font-bold">3d 4h</p>
      </div>
      <div className="p-4 border rounded-lg">
        <p className="text-sm text-gray-500">Total Rewards</p>
        <p className="text-lg font-bold">2 ETH</p>
      </div>
    </div>
  );
}