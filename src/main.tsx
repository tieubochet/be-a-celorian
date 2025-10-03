import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ReownAppKitProvider } from "@reown/appkit";

const config = {
  appName: "Be a Celorian",
  appDescription: "Be a Celorian - Miniapp for explore Celo Eco",
  appUrl: "https://celo.org",
  appIcon: "https://celo.org/favicon.ico",
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReownAppKitProvider config={config}>
      <App />
    </ReownAppKitProvider>
  </React.StrictMode>
);