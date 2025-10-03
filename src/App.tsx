// src/App.tsx

import { useAccount } from '@reown/appkit';

function App() {
  // Sử dụng hook useAccount để lấy trạng thái kết nối và địa chỉ ví
  const { address, isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">Be a Celorian</h1>
        <p className="text-xl text-gray-400 mb-8">
          Your gateway to the Celo ecosystem.
        </p>
      </header>

      <main>
        {/*
          Sử dụng `isConnected` để hiển thị nội dung phù hợp:
          - Nếu đã kết nối, hiển thị địa chỉ ví.
          - Nếu chưa, hiển thị nút kết nối.
        */}
        {isConnected ? (
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
            <p className="text-green-400 mb-2">Wallet Connected!</p>
            <p className="text-lg font-mono break-all">{address}</p>
          </div>
        ) : (
          <div>
            {/* Đây là component nút bấm từ Reown Appkit */}
            <appkit-button />
          </div>
        )}
      </main>
    </div>
  )
}

export default App