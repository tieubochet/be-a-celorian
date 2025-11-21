import WalletStatus from './components/ConnectWallet';
import { AppKit } from '@reown/appkit/react';

export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Be a Celorian</h1>
        <WalletStatus />
      </header>

      <main style={{ marginTop: 24 }}>
        <p>Use the Connect button to connect your Celo wallet.</p>
      </main>

      <AppKit />
    </div>
  );
}
