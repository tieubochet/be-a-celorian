import React from 'react';
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiConfig } from 'wagmi';
import { mainnet } from '@reown/appkit/networks';

// Project ID should be provided as a Vite env var for Vercel deployments.
const projectId = (import.meta.env.VITE_REOWN_PROJECT_ID as string) || '';

// Example metadata — update if you have a hosted domain and icon.
const metadata = {
  name: 'Celo Lite',
  description: 'Lightweight Celo badges demo',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
};

// Networks: include `mainnet` as a default. To add Celo, see Custom Networks docs.
const networks = [mainnet];

// Create Wagmi adapter for AppKit. `ssr: true` is recommended for server-rendered environments.
const wagmiAdapter = new WagmiAdapter({ networks, projectId, ssr: true });

// Initialize the AppKit instance (creates modal, hooks, etc.)
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true,
  },
});

const queryClient = new QueryClient();

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiConfig>
  );
}

export { wagmiAdapter, networks };
