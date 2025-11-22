# Be a Celorian

**Be a Celorian** is a Web3 dApp and Farcaster Mini App designed to help users explore the Celo ecosystem, track their on-chain identity, and maintain a daily interaction streak.

Built with React, Vite, RainbowKit, and Wagmi, it provides a seamless mobile-first experience for interacting with the Celo blockchain.

![Be a Celorian](https://raw.githubusercontent.com/tieubochet/be-a-celorian/refs/heads/main/public/img/screenshot.png)

## 🌟 Features

-   **Wallet Connection**: Seamlessly connect using RainbowKit (supports Celo Mainnet & Alfajores Testnet).
-   **Wallet Stats**: View real-time CELO balance and total transaction count.
-   **Daily Streak**: Interact with an on-chain smart contract to check in daily and build your streak (`0xa617...792`).
-   **Badges Gallery**: Explore various Celo ecosystem badges and achievements.
-   **Ecosystem Explorer**: Quick links to key Celo apps like Mento, Uniswap, and CeloPG.
-   **Farcaster Integration**: Fully optimized as a Farcaster Mini App using `@farcaster/miniapp-sdk`.

## 🛠️ Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Web3**: [Wagmi](https://wagmi.sh/) + [Viem](https://viem.sh/)
-   **Wallet UI**: [RainbowKit](https://www.rainbowkit.com/)
-   **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
-   **Mini App**: [Farcaster MiniApp SDK](https://docs.farcaster.xyz/learn/frames/miniapps)

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd tieubochet-be-a-celorian
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### ⚙️ Configuration

To enable WalletConnect features (essential for mobile wallet connections), you need a Project ID.

1.  Go to [WalletConnect Cloud](https://cloud.walletconnect.com/) and sign up.
2.  Create a new project and copy the **Project ID**.
3.  Open `index.tsx` and replace `'YOUR_PROJECT_ID'` with your actual ID:

```typescript
// index.tsx
const config = getDefaultConfig({
  appName: 'Be a Celorian',
  projectId: 'YOUR_PASTED_PROJECT_ID', // <--- Update this
  chains: [celo, celoAlfajores],
});
```

### 🏃‍♂️ Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or the port shown in your terminal).

## 📱 Farcaster Mini App Usage

This app is designed to run inside a Farcaster client (like Warpcast).

1.  **SDK Initialization**: The app initializes the Farcaster SDK and calls `sdk.actions.ready()` in `App.tsx` to remove the splash screen.
2.  **Testing**: You can test the Mini App flow using the [Farcaster Developer Playground](https://warpcast.com/~/developers/frames) or by enabling Developer Mode in Warpcast settings.

## ⛓️ Smart Contract

The "Daily Streak" feature interacts with the following contract on Celo Mainnet:

-   **Address**: `0xa6172aa54722d4f99d0996aa6a6138181b7ee792`
-   **Functions**:
    -   `checkIn()`: Records a daily interaction.
    -   `getStreak(address)`: Returns the current streak count for a user.

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate static files in the `dist` directory, which can be deployed to Vercel, Netlify, or any static host.

## 📄 License

This project is for educational and community purposes. Inspired by wenaltszn.eth.
**Not affiliated with Celo Foundation.**
