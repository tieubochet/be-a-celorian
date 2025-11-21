import {
  AppKitConnectButton,
  AppKitAccountButton,
  useAppKit,
} from '@reown/appkit/react';

export function ConnectWalletButton() {
  return <AppKitConnectButton />;
}

export function WalletStatus() {
  const { isConnected, disconnect } = useAppKit();

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {isConnected ? (
        <>
          <AppKitAccountButton />
          <button
            onClick={disconnect}
            style={{ padding: '6px 10px', borderRadius: 6 }}
          >
            Disconnect
          </button>
        </>
      ) : (
        <ConnectWalletButton />
      )}
    </div>
  );
}

export default WalletStatus;
