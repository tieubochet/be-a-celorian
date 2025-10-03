export default function Header() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
          B
        </div>
        <span className="font-bold text-xl text-gray-800">Rewards</span>
      </div>
      {/* AppKit web component - no import needed */}
      <appkit-button />
    </div>
  );
}
