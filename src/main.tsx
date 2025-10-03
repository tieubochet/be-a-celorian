import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppKitProvider } from '@reown/appkit/react';
import { appKit } from './wallet';

const config = {
  appName: "Be a Celorian",
  appDescription: "Be a Celorian - Miniapp for explore Celo Eco",
  appUrl: "https://celo.org",
  appIcon: "https://celo.org/favicon.ico",
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppKitProvider appKit={appKit}>
      <App />
    </AppKitProvider>
  </React.StrictMode>
);