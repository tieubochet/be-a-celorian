// src/wallet.tsx
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';

export const projectId = "YOUR_REOWN_PROJECT_ID"; // thay bằng Project ID từ Reown

// chỉ dùng Celo chain
const networks = [
  {
    id: 42220,
    name: 'Celo Mainnet',
    rpcUrls: { 
      default: { http: ['https://forno.celo.org'] } 
    },
    nativeCurrency: {
      name: 'Celo',
      symbol: 'CELO',
      decimals: 18
    }
  }
];

export const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata: {
    name: "Be a Celorian",
    description: "Be a Celorian - Miniapp for explore Celo Eco",
    url: "https://be-a-celorian.vercel.app",
    icons: ["https://avatars.githubusercontent.com/u/179229932?s=200&v=4"]
  },
  projectId
});
