import { useEffect, useState } from 'react';
import { useAppKit } from '@reown/appkit/react';

export function useAccountInfo() {
  const { isConnected, account } = useAppKit();
  const [shortAddress, setShortAddress] = useState<string | null>(null);

  useEffect(() => {
    if (!isConnected || !account) return setShortAddress(null);

    const addr = account.address || account;
    setShortAddress(`${addr.slice(0, 6)}...${addr.slice(-4)}`);
  }, [isConnected, account]);

  return { isConnected, account, shortAddress };
}
