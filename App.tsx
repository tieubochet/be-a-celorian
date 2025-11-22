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
  Flame
} from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useTransactionCount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { sdk } from '@farcaster/miniapp-sdk';
import { Card } from './components/Card';
import { BadgeItem } from './components/BadgeItem';
import { MOCK_BADGES } from './constants';
import { Badge } from './types';

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
  
  const { data: balanceData } = useBalance({
    address,
  });

  const { data: txCount } = useTransactionCount({
    address,
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
                    : `Daily Streak: ${streakData ? streakData.toString() : '0'}`
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

            {/* Utility Pills */}
            <a href="#" className="p-2 rounded-[3px] transition-colors text-[var(--text-primary)] bg-[var(--pill-bg)] hover:bg-[var(--pill-hover)]">
              <Github size={18} />
            </a>
          </div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Wallet Status Card */}
          <Card className="sm:col-span-2 flex items-center justify-between relative overflow-hidden">
            <div className="z-10">
              <h2 className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">Wallet Balance</h2>
              {isConnected ? (
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-4xl font-bold text-[var(--text-primary)]">
                    {balanceData ? Number(formatUnits(balanceData.value, balanceData.decimals)).toFixed(3) : '0.000'}
                  </span>
                  <span className="text-xl font-medium text-[var(--text-secondary)]">
                    {balanceData?.symbol || 'CELO'}
                  </span>
                  <span className="text-lg font-medium text-[var(--text-secondary)] opacity-70 ml-1">
                    ({txCount ? txCount.toString() : '0'} txs)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-[var(--text-primary)] font-medium text-lg">Not connected</p>
                  <ConnectButton.Custom>
                    {({ openConnectModal }) => (
                      <button onClick={openConnectModal} className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1">
                        Connect to show status <ArrowUpRight size={14} />
                      </button>
                    )}
                  </ConnectButton.Custom>
                </div>
              )}
            </div>
            {/* Decorative Icon Background */}
            <Wallet className="absolute right-[-20px] bottom-[-20px] text-[var(--text-primary)] opacity-5 rotate-[-15deg]" size={140} />
          </Card>

          {/* Ecosystem Card */}
          <Card title="Ecosystem" className="flex flex-col justify-between">
            <p className="text-sm text-[var(--text-secondary)] mb-4 leading-snug">
               Explore core identity & impact apps in the Celo ecosystem.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Celo Names', 'CeloPG', 'Mento', 'Uniswap', 'GoodDollar'].map((item) => (
                <button key={item} className="px-3 py-1.5 bg-[var(--bg-secondary)] hover:bg-[var(--border-highlight)] rounded-[3px] text-sm font-medium text-[var(--text-primary)] transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
               <a href="#" className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-1 hover:gap-2 transition-all">
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
                 <button className="flex-1 py-2 bg-[var(--btn-primary)] text-[var(--btn-text)] rounded-[3px] text-xs font-bold hover:opacity-90 transition-opacity">
                   Passport
                 </button>
                 <button className="flex-1 py-2 border border-[var(--border-highlight)] text-[var(--text-secondary)] rounded-[3px] text-xs font-bold hover:bg-[var(--bg-secondary)] transition-colors">
                   Verify
                 </button>
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
               <button className="w-full py-2 border border-[var(--text-primary)] text-[var(--text-primary)] rounded-[3px] text-xs font-bold hover:bg-[var(--btn-primary)] hover:text-[var(--btn-text)] transition-colors">
                 View Proposals
               </button>
            </Card>
          </div>
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
              {MOCK_BADGES.map((badge) => (
                <BadgeItem 
                  key={badge.id} 
                  badge={badge} 
                  onDetailsClick={handleOpenDetails}
                />
              ))}
            </div>
          </Card>
        </div>

        {/* FOOTER */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 mt-4 border-t border-[var(--pill-bg)]">
           <div className="flex items-center gap-4 text-[var(--text-secondary)]">
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-[var(--text-primary)] transition-colors"><Github size={20} /></a>
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