import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";

// Read projectId from Vite env (set VITE_REOWN_PROJECT_ID in Vercel env variables)
export const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || "YOUR_REOWN_PROJECT_ID";

// Only Celo Mainnet
const networks = [
  {
    id: 42220,
    name: "Celo Mainnet",
    rpcUrls: {
      default: { http: ["https://forno.celo.org"] }
    },
    nativeCurrency: {
      name: "Celo",
      symbol: "CELO",
      decimals: 18
    }
  }
];

export const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata: {
    name: "Be a Celorian",
    description: "DApp demo with Reown AppKit (Celo only)",
    url: "https://be-a-celorian.vercel.app",
    icons: ["https://avatars.githubusercontent.com/u/179229932?s=200&v=4"]
  },
  projectId
});
