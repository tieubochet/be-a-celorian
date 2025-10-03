import React from "react";
import { ConnectButton } from "@reown/appkit/react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-lg font-bold">Be a Celorian</h1>
      <ConnectButton />
    </header>
  );
};

export default Header;
