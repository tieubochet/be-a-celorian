import React, { useState, useEffect } from 'react';
import { 
  Wallet, 
  Github, 
  Moon, 
  Sun,
  Cloud,
  Zap, 
  ArrowUpRight, 
  UserCheck, 
  Twitter,
  MessageSquare,
  X,
  ExternalLink,
  CalendarCheck,
  Loader2,
  Flame,
  Send,
  Share
} from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useTransactionCount, useWriteContract, useWaitForTransactionReceipt, useReadContract, useReadContracts } from 'wagmi';
import { MOCK_BADGES, SUPPORTED_TOKENS, ERC20_ABI } from './constants';
import { formatUnits } from 'viem';
import { sdk } from '@farcaster/miniapp-sdk';
import { Card } from './components/Card';
import { BadgeItem } from './components/BadgeItem';
import { Badge } from './types';
import { GOVERNANCE_ADDRESS, GOVERNANCE_ABI, VAULT_ADDRESS, ERC20_ABI, SUPPORTED_TOKENS } from './constants';

const CHECK_IN_CONTRACT = '0xa6172aa54722d4f99d0996aa6a6138181b7ee792';
const CHECK_IN_ABI = [
  {
    "inputs": [],
    "name": "checkIn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getStreak",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

type Theme = 'light' | 'dark' | 'dim';

const THEMES = {
  light: {
    '--bg-app': '#F6DF3A',
    '--bg-card': '#ffffff',
    '--bg-secondary': '#f3f4f6', // gray-100
    '--text-primary': '#111827', // gray-900
    '--text-secondary': '#6b7280', // gray-500
    '--text-inverse': '#ffffff',
    '--border-color': '#f3f4f6', // gray-100
    '--border-highlight': '#e5e7eb', // gray-200
    '--hover-bg': '#fffdf5',
    '--btn-primary': '#000000',
    '--btn-text': '#ffffff',
    '--pill-bg': 'rgba(255, 255, 255, 0.5)',
    '--pill-hover': '#ffffff',
    '--ring-color': 'rgba(0, 0, 0, 0.05)',
  },
  dark: {
    '--bg-app': '#000000',
    '--bg-card': '#111827', // gray-900
    '--bg-secondary': '#1f2937', // gray-800
    '--text-primary': '#f9fafb', // gray-50
    '--text-secondary': '#9ca3af', // gray-400
    '--text-inverse': '#000000',
    '--border-color': '#1f2937', // gray-800
    '--border-highlight': '#374151', // gray-700
    '--hover-bg': '#1f2937', 
    '--btn-primary': '#ffffff',
    '--btn-text': '#000000',
    '--pill-bg': 'rgba(255, 255, 255, 0.1)',
    '--pill-hover': 'rgba(255, 255, 255, 0.2)',
    '--ring-color': 'rgba(255, 255, 255, 0.1)',
  },
  dim: {
    '--bg-app': '#1c1917', // stone-900
    '--bg-card': '#292524', // stone-800
    '--bg-secondary': '#44403c', // stone-700
    '--text-primary': '#f5f5f4', // stone-100
    '--text-secondary': '#a8a29e', // stone-400
    '--text-inverse': '#1c1917',
    '--border-color': '#44403c', // stone-700
    '--border-highlight': '#57534e', // stone-600
    '--hover-bg': '#44403c',
    '--btn-primary': '#f5f5f4',
    '--btn-text': '#1c1917',
    '--pill-bg': 'rgba(0, 0, 0, 0.2)',
    '--pill-hover': 'rgba(0, 0, 0, 0.4)',
    '--ring-color': 'rgba(255, 255, 255, 0.1)',
  }
};

const ECOSYSTEM_APPS = [
  { name: 'Celo Names', url: 'https://names.celo.org/' },
  { name: 'CeloPG Ecosystem', url: 'https://www.celopg.eco/ecosystem' },
  { name: 'Celo Ecosystem', url: 'https://celo.org/ecosystem' },
  { name: 'Celo Bridge', url: 'https://mondo.celo.org/bridge' },
  { name: 'Mento', url: 'https://www.mento.org/' },
  { name: 'GoodDollar', url: 'https://www.gooddollar.org/' },
];

const BUILDER_PROGRAMS = [
  { name: 'Proof Of Ship', url: 'https://www.celopg.eco/programs/proof-of-ship-s1' },
  { name: 'Proof Of Impact', url: 'https://www.celopg.eco/programs/proof-of-impact-s1' },
  { name: 'Support Streams', url: 'https://www.celopg.eco/programs/supportstreams1' },
  { name: 'Prezenti Peach Round', url: 'https://www.celopg.eco/programs/prezenti-peach-round' },
  { name: 'Mini Apps Monday', url: 'https://www.celopg.eco/programs/mini-app-mondays' },
  { name: 'Celo Builder Fund', url: 'https://www.celopg.eco/programs/celo-builder-fund' },
  { name: 'Gitcoin Grants_24', url: 'https://www.celopg.eco/programs/gitcoin-grants-24' },
];


const useBadgeVerifier = (
  address: string | undefined, 
  tokenBalances: any[] | undefined 
) => {
  const { data: txCount } = useTransactionCount({ address: address as `0x${string}` });

  const { data: isVoting } = useReadContract({
    address: GOVERNANCE_ADDRESS,
    abi: GOVERNANCE_ABI,
    functionName: 'isVoting',
    args: address ? [address as `0x${string}`] : undefined,
    query: { enabled: !!address }
  });

  const { data: vaultBalance } = useReadContract({
    address: VAULT_ADDRESS as `0x${string}`,
    abi: ERC20_ABI, 
    functionName: 'balanceOf',
    args: address ? [address as `0x${string}`] : undefined,
    query: { enabled: !!address }
  });

  const checkBadgeStatus = (badgeId: string): boolean => {
    if (!address) return false;

    switch (badgeId) {
      case 'cel2-tx':
      case 's1-tx':
        return txCount ? Number(txCount) >= 10 : false;

      case 'glo-dollar': {
        const gloIndex = SUPPORTED_TOKENS.findIndex(t => t.symbol === 'USDGLO');
        if (gloIndex === -1 || !tokenBalances) return false;
        
        const rawBalance = tokenBalances[gloIndex]?.result;
        return rawBalance ? (rawBalance as unknown as bigint) > 1000000000000000000n : false;
      }
      case 'celo-voter':
        return !!isVoting; 

      case 'vault':
        return vaultBalance ? (vaultBalance as unknown as bigint) > 0n : false;

      default:
        return false;
    }
  };

  return { checkBadgeStatus };
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const { address, isConnected, chain } = useAccount();
  
  // Initialize Farcaster MiniApp SDK
  useEffect(() => {
    const initSdk = async () => {
      try {
        await sdk.actions.ready();
      } catch (error) {
        console.debug('Farcaster SDK ready call failed:', error);
      }
    };
    initSdk();
  }, []);

  // Load theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('celorian-theme') as Theme;
    if (savedTheme && ['light', 'dark', 'dim'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'dim' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('celorian-theme', nextTheme);
  };

  const handleShare = () => {
    // Create a Warpcast compose URL to share the app
    const text = "I'm exploring the Celo ecosystem and building my on-chain identity with Be a Celorian 🟡🌱 ";
    const embedUrl = "https://farcaster.xyz/miniapps/69c0bTbNR97F/be-a-celorian";
    const shareUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(embedUrl)}`;
    
    // Use the Farcaster SDK to open the URL
    sdk.actions.openUrl(shareUrl);
  };
  
  const { data: balanceData } = useBalance({
    address,
  });

  const { data: txCount } = useTransactionCount({
    address,
  });

  const { data: tokenBalances } = useReadContracts({
    contracts: SUPPORTED_TOKENS.map((token) => ({
      address: token.address as `0x${string}`,
      abi: ERC20_ABI,
      functionName: 'balanceOf',
      args: [address as `0x${string}`],
    })),
    query: {
      enabled: !!address,
      refetchInterval: 10000, 
    }
  });

  // Read Contract: Get Streak
  const { data: streakData, refetch: refetchStreak } = useReadContract({
    address: CHECK_IN_CONTRACT,
    abi: CHECK_IN_ABI,
    functionName: 'getStreak',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    }
  });

  // Write Contract: Check In
  const { data: hash, isPending: isWritePending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });
  
  // Refetch streak when transaction is confirmed
  useEffect(() => {
    if (isConfirmed) {
      refetchStreak();
    }
  }, [isConfirmed, refetchStreak]);

  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  const handleCheckIn = () => {
    if (!address || !chain) return;
    writeContract({
      address: CHECK_IN_CONTRACT,
      abi: CHECK_IN_ABI,
      functionName: 'checkIn',
      account: address,
      chain,
    });
  };

  const handleOpenDetails = (badge: Badge) => {
    setSelectedBadge(badge);
  };

  const handleCloseDetails = () => {
    setSelectedBadge(null);
  };

  const { checkBadgeStatus } = useBadgeVerifier(address, tokenBalances);

  return (
    <div 
      className="min-h-screen p-4 sm:p-6 flex justify-center items-start overflow-y-auto transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-app)',
        ...(THEMES[theme] as React.CSSProperties)
      }}
    >
      <div className="w-full max-w-[700px] flex flex-col gap-6 pb-20 sm:pb-0">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/img/logo-64px.png" 
              alt="Celo Logo" 
              className="w-10 h-10 rounded-full shadow-lg bg-black p-1.5" 
            />
            <div>
              <h1 className="text-2xl font-bold text-[var(--text-primary)] leading-none">Be a Celorian</h1>
              <p className="text-xs font-medium text-[var(--text-secondary)] tracking-wide mt-1">
                Ecosystem · Staking · Governance
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* RainbowKit Connect Button */}
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={openConnectModal}
                            className="flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2 border-[var(--btn-primary)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:opacity-80"
                          >
                            <Wallet size={16} />
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            className="flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2 bg-red-500 text-white border-red-600 hover:bg-red-600"
                          >
                            Wrong network
                          </button>
                        );
                      }

                      return (
                        <button
                          onClick={openAccountModal}
                          className="flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2 bg-[var(--btn-primary)] text-[var(--btn-text)] border-[var(--btn-primary)]"
                        >
                          <Wallet size={16} />
                          {account.displayName}
                        </button>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>

            {/* Daily Streak Button */}
            {isConnected && (
              <button
                onClick={handleCheckIn}
                disabled={isWritePending || isConfirming}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2
                  ${isConfirmed 
                    ? 'bg-green-500 text-white border-green-600' 
                    : 'bg-[var(--bg-app)] text-[var(--text-primary)] border-[var(--text-primary)] hover:opacity-80 active:translate-y-0.5'
                  }
                  ${(isWritePending || isConfirming) ? 'opacity-80 cursor-wait' : ''}
                `}
              >
                {(isWritePending || isConfirming) ? (
                   <Loader2 size={16} className="animate-spin" />
                ) : (
                   <Flame size={16} className={streakData && Number(streakData) > 0 ? "fill-orange-500 text-orange-600" : ""} />
                )}
                {isWritePending 
                  ? 'Signing...' 
                  : isConfirming 
                    ? 'Confirming...' 
                    : `Streak: ${streakData ? streakData.toString() : '0'}`
                }
              </button>
            )}

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-[3px] transition-colors text-[var(--text-primary)] bg-[var(--pill-bg)] hover:bg-[var(--pill-hover)]"
              title={`Switch to ${theme === 'light' ? 'Dark' : theme === 'dark' ? 'Dim' : 'Light'} mode`}
            >
              {theme === 'light' && <Sun size={18} />}
              {theme === 'dark' && <Moon size={18} />}
              {theme === 'dim' && <Cloud size={18} />}
            </button>

            {/* Share Button */}
            <button 
              onClick={handleShare}
              className="p-2 rounded-[3px] transition-colors text-[var(--text-primary)] bg-[var(--pill-bg)] hover:bg-[var(--pill-hover)]"
              title="Share App on Farcaster"
            >
              <Share size={18} />
            </button>

            {/* Utility Pills */}
           
          </div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Wallet Status Card */}
          <Card className="sm:col-span-2 relative overflow-hidden">
            <div className="flex flex-col gap-4 z-10 relative">
              
              {/* Header & Main Asset (CELO) */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">
                    My Portfolio
                  </h2>
                  {isConnected ? (
                     <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-[var(--text-primary)]">
                          {balanceData ? Number(formatUnits(balanceData.value, balanceData.decimals)).toFixed(2) : '0.00'}
                        </span>
                        <span className="text-lg font-bold text-[var(--text-secondary)]">CELO</span>
                     </div>
                  ) : (
                    <p className="text-[var(--text-primary)] font-medium text-lg">Connect wallet to view</p>
                  )}
                </div>

                {/* Nút Swap nhanh */}
                <a 
                  href="https://app.uniswap.org/swap?chain=celo" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[var(--text-primary)] text-[var(--bg-app)] rounded-full text-xs font-bold hover:opacity-80 transition-opacity flex items-center gap-1"
                >
                  Swap <ArrowUpRight size={12} />
                </a>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[var(--border-color)]"></div>

              {/* Token List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {isConnected ? (
                  SUPPORTED_TOKENS.map((token, index) => {
                    // Lấy số dư từ kết quả useReadContracts
                    const rawBalance = tokenBalances?.[index]?.result;
                    const formattedBalance = rawBalance 
                    ? Number(formatUnits(rawBalance as unknown as bigint, token.decimals)).toFixed(2) 
                    : '0.00';

                    return (
                      <div key={token.symbol} className="flex items-center gap-2 p-2 rounded-[8px] bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                        <img src={token.image} alt={token.symbol} className="w-8 h-8 rounded-full bg-white p-0.5" />
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-[var(--text-secondary)]">{token.symbol}</span>
                          <span className="text-sm font-bold text-[var(--text-primary)]">{formattedBalance}</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Skeleton / Placeholder khi chưa kết nối
                  [1, 2, 3].map((i) => (
                    <div key={i} className="h-12 rounded-[8px] bg-[var(--bg-secondary)] opacity-50 animate-pulse"></div>
                  ))
                )}
              </div>
            </div>
            
            {/* Background Decor */}
            <Wallet className="absolute right-[-10px] bottom-[-20px] text-[var(--text-primary)] opacity-5 rotate-[-15deg]" size={120} />
          </Card>

          {/* Ecosystem Card */}
          <Card title="Ecosystem" className="flex flex-col justify-between">
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-snug">
               Explore core identity & impact apps in the Celo ecosystem.
            </p>
            <div className="flex flex-wrap gap-2">
              {ECOSYSTEM_APPS.map((app) => (
                <a 
                  key={app.name} 
                  href={app.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--border-highlight)] rounded-[3px] text-sm font-medium text-[var(--text-primary)] transition-colors block sm:inline-block text-center"
                >
                  {app.name}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
               <a href="https://celo.org/ecosystem" className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1 hover:gap-2 transition-all">
                 Explore All Apps <ArrowUpRight size={14} />
               </a>
            </div>
          </Card>

          {/* Governance & Passport Card */}
          <div className="flex flex-col gap-4">
            <Card className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-[3px] text-green-700">
                   <UserCheck size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">Prosperity Passport</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Your on-chain identity</p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                 <a 
                   href="https://pass.celopg.eco/" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 py-2 bg-[var(--btn-primary)] text-[var(--btn-text)] rounded-[3px] text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center text-center"
                 >
                   Prosperity Passport
                 </a>
                 <a 
                   href="https://referral.self.xyz/referral/0x01B37Edd07Ea71Eaf552b6ef1B8DcFBb328e1F39" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 py-2 border border-[var(--border-highlight)] text-[var(--text-secondary)] rounded-[3px] text-xs font-bold hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center text-center"
                 >
                   Self Verification
                 </a>
              </div>
            </Card>

            <Card className="flex-1">
               <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-yellow-100 rounded-[3px] text-yellow-700">
                      <Zap size={20} />
                    </div>
                    <span className="font-bold text-[var(--text-primary)]">Governance</span>
                  </div>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded-[3px]">Active</span>
               </div>
               <p className="text-xs text-[var(--text-secondary)] mb-3">Vote on proposals to shape the future of the Celo Platform.</p>
               <div className="flex gap-2 mt-2">
                 <a 
                   href="https://mondo.celo.org/" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex-1 py-2 border border-[var(--text-primary)] text-[var(--text-primary)] rounded-[3px] text-xs font-bold hover:bg-[var(--btn-primary)] hover:text-[var(--btn-text)] transition-colors flex items-center justify-center text-center"
                 >
                   Staking on Mondo
                 </a>
                 <a 
                   href="https://mondo.celo.org/governance" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex-1 py-2 border border-[var(--border-highlight)] text-[var(--text-secondary)] rounded-[3px] text-xs font-bold hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center text-center"
                 >
                   Governance on Mondo
                 </a>
               </div>
            </Card>
          </div>
        </div>

        {/* Routines Section */}
        <div className="space-y-2">
          <Card className="!p-0 overflow-hidden">
             <div className="px-6 py-5 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
              <h2 className="text-xl font-extrabold text-center text-[var(--text-primary)] tracking-tight">Routines</h2>
              <p className="text-[var(--text-secondary)] text-center text-sm mt-1.5 leading-relaxed">
                Keep a healthy onchain cadence: learn, earn, and keep reputation active.
              </p>
              <div className="flex gap-2 mt-3">
                 <a 
                   href="https://app.layer3.xyz/search?chainIds=42220" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 py-2 bg-[var(--btn-primary)] text-[var(--btn-text)] rounded-[3px] text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center text-center"
                 >
                   Layer3 Quests
                 </a>
                 <a 
                   href="https://gooddapp.org/#/claim" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 py-2 border border-[var(--border-highlight)] text-[var(--text-secondary)] rounded-[3px] text-xs font-bold hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center text-center"
                 >
                   Claim $G daily
                 </a>
                 <a 
                   href="https://app.aave.com/markets/?marketName=proto_celo_v3" 
                   target="_blank"
                   rel="noreferrer"
                   className="flex-1 py-2 border border-[var(--border-highlight)] text-[var(--text-secondary)] rounded-[3px] text-xs font-bold hover:bg-[var(--bg-secondary)] transition-colors flex items-center justify-center text-center"
                 >
                   Lend on Aave
                 </a>
              </div>
            </div>
          </Card>
        </div>

        {/* BADGES SECTION */}
        <div className="space-y-2">
          <Card className="!p-0 overflow-hidden">
            <div className="px-6 py-5 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
              <h2 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight">Badges</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-1.5 leading-relaxed">
                Short, Celo-aligned explanations to earn badges with confidence.
              </p>
            </div>

            <div className="divide-y divide-[var(--border-color)]">
              {MOCK_BADGES.map((badge) => {
                const isCompleted = checkBadgeStatus(badge.id);
                
                return (
                  <BadgeItem 
                    key={badge.id} 
                    badge={badge} 
                    isCompleted={isCompleted} 
                    onDetailsClick={handleOpenDetails}
                  />
                );
              })}
            </div>
          </Card>
        </div>

        {/* BUILDERS PROGRAMS SECTION */}
        <div className="space-y-2">
          <Card className="flex flex-col items-center text-center bg-[var(--bg-card)]">
             <h2 className="text-xl font-extrabold text-[var(--text-primary)] tracking-tight mb-1">Builders Programs</h2>
             <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 max-w-md">
               Programs that fund and accelerate public-good builders on Celo.
             </p>
             <div className="flex flex-wrap justify-center gap-2">
                {BUILDER_PROGRAMS.map((program) => (
                  <a
                    key={program.name}
                    href={program.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[var(--btn-primary)] text-[var(--btn-text)] rounded-[3px] text-sm font-bold hover:opacity-80 transition-all shadow-sm"
                  >
                    {program.name}
                  </a>
                ))}
             </div>
          </Card>
        </div>

        {/* FOOTER */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 mt-4 border-t border-[var(--pill-bg)]">
           <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <a href="https://twitter.com/Celo" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors"><Twitter size={20} /></a>
              <a href="https://discord.com/invite/celo" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M18.894 4.344a16.027 16.027 0 0 0-3.973-1.212.08.08 0 0 0-.078.037c-.26.46-.548.997-.75 1.474-1.437-.214-2.87-.214-4.28 0-.202-.477-.49-.987-.75-1.474a.09.09 0 0 0-.086-.037 16.027 16.027 0 0 0-3.973 1.212.07.07 0 0 0-.037.028C2.52 8.635 1.71 12.776 2.81 16.85a.07.07 0 0 0 .029.052 16.074 16.074 0 0 0 4.892 2.463.08.08 0 0 0 .086-.029c.365-.495.694-1.02 1-1.57a.08.08 0 0 0-.044-.108 10.6 10.6 0 0 1-1.527-.725.08.08 0 0 1 .003-.133c.103-.077.206-.156.305-.237a.08.08 0 0 1 .086-.012c3.058 1.396 6.363 1.396 9.376 0a.08.08 0 0 1 .086.012c.1.08.202.16.305.237a.08.08 0 0 1 .003.133 10.6 10.6 0 0 1-1.527.725.08.08 0 0 0-.044.108c.306.55.635 1.075 1 1.57a.08.08 0 0 0 .086.029 16.074 16.074 0 0 0 4.892-2.463.07.07 0 0 0 .029-.052c1.15-4.25-.65-8.408-1.738-12.478a.07.07 0 0 0-.037-.028ZM8.697 13.79c-1.085 0-1.964-.996-1.964-2.215 0-1.22.855-2.215 1.964-2.215 1.117 0 1.987.996 1.964 2.215 0 1.22-.847 2.215-1.964 2.215Zm6.606 0c-1.085 0-1.964-.996-1.964-2.215 0-1.22.855-2.215 1.964-2.215 1.117 0 1.987.996 1.964 2.215 0 1.22-.847 2.215-1.964 2.215Z" />
                </svg>
              </a>
              <a href="https://t.me/celoplatform" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors"><Send size={20} /></a>
           </div>
           <div className="text-xs font-medium text-[var(--text-secondary)] opacity-70">
             © {new Date().getFullYear()} Be a Celorian. Inspired by wenaltszn.eth. Not affiliated with Celo Foundation.
           </div>
        </footer>

        {/* BADGE DETAILS MODAL (BOTTOM SHEET ON MOBILE) */}
        {selectedBadge && (
          <div 
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={handleCloseDetails}
          >
            <div 
              className="w-full sm:max-w-lg bg-[var(--bg-card)] rounded-t-2xl sm:rounded-[12px] shadow-2xl max-h-[90vh] sm:max-h-[80vh] overflow-y-auto animate-slide-up-mobile sm:animate-zoom-in relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drag Handle */}
              <div className="w-full flex justify-center pt-3 pb-1 sm:hidden">
                 <div className="w-12 h-1.5 bg-[var(--border-color)] rounded-full opacity-50"></div>
              </div>

              {/* Close Button */}
              <button 
                onClick={handleCloseDetails}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-full sm:rounded-[3px] transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col p-6 sm:p-8 text-left">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                   <img 
                     src={selectedBadge.image} 
                     alt={selectedBadge.name} 
                     className="w-16 h-16 rounded-[3px] shadow-md ring-1 ring-[var(--ring-color)]"
                   />
                   <div>
                      <h3 className="text-2xl font-extrabold text-[var(--text-primary)] tracking-tight leading-none mb-1">
                        {selectedBadge.name}
                      </h3>
                      <span className="text-xs font-medium text-[var(--text-secondary)]">Chain: Celo</span>
                   </div>
                </div>

                {/* Why it matters */}
                {selectedBadge.whyItMatters ? (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Why it matters</h4>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {selectedBadge.whyItMatters}
                    </p>
                  </div>
                ) : (
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6 text-sm">
                    {selectedBadge.description}
                  </p>
                )}

                {/* How to progress */}
                {selectedBadge.howToProgress && (
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">How to progress</h4>
                    <ul className="list-disc pl-4 space-y-1.5">
                      {selectedBadge.howToProgress.map((step, i) => (
                        <li key={i} className="text-[var(--text-secondary)] text-sm leading-snug">{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tiers */}
                {selectedBadge.tiers && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">Tiers</h4>
                    <ul className="list-disc pl-4 space-y-1.5">
                      {selectedBadge.tiers.map((tier, i) => (
                        <li key={i} className="text-[var(--text-secondary)] text-sm leading-snug">{tier}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links (Buttons) */}
                <div className="mt-auto">
                   {/* Use links if available, or default Close button if needed */}
                   {selectedBadge.links && selectedBadge.links.length > 0 ? (
                     <div className="w-full">
                        <div className="flex flex-col gap-3">
                           {selectedBadge.links.map((link, i) => (
                             <a 
                               key={i}
                               href={link.url} 
                               target="_blank"
                               rel="noreferrer"
                               className="w-full py-3 px-4 bg-black text-white hover:bg-gray-800 rounded-[8px] text-sm font-bold transition-colors flex items-center justify-between group shadow-md"
                             >
                               {link.label} <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                             </a>
                           ))}
                        </div>
                     </div>
                   ) : (
                    <button 
                      onClick={handleCloseDetails}
                      className="w-full py-3 bg-[var(--btn-primary)] text-[var(--btn-text)] rounded-[3px] font-bold hover:opacity-90 transition-colors shadow-lg"
                    >
                      Close
                    </button>
                   )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default App;