import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppKitProvider } from '@reown/appkit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiConfig } from 'wagmi';

import App from './App';
import { appKit, wagmiAdapter } from './appkitConfig';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppKitProvider instance={appKit}>
      <WagmiConfig config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </WagmiConfig>
    </AppKitProvider>
  </React.StrictMode>
);
