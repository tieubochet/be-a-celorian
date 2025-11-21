import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { celoAlfajores, celoMainnet } from '@reown/appkit/networks';

const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;
if (!projectId) throw new Error('VITE_REOWN_PROJECT_ID is missing');

const metadata = {
  name: 'Be a Celorian',
  description: 'Mini-app Celo demo',
  url: window?.location.origin,
  icons: [window?.location.origin + '/favicon.ico'],
};

const networks = [celoAlfajores, celoMainnet];

const wagmiAdapter = new WagmiAdapter({ projectId, networks, ssr: false });

const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: { analytics: false },
});

export { appKit, wagmiAdapter };
