import React, { useState, useEffect } from 'react';
import { 
  Wallet, 
  Github, 
  Moon, 
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
import { Card } from './components/Card';
import { BadgeItem } from './components/BadgeItem';
import { MOCK_BADGES } from './constants';
import { Badge } from './types';
import { sdk } from '@farcaster/miniapp-sdk'

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

const App: React.FC = () => {
  const { address, isConnected, chain } = useAccount();
  
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
    <div className="min-h-screen bg-[#F6DF3A] p-4 sm:p-6 flex justify-center items-start overflow-y-auto">
      <div className="w-full max-w-[700px] flex flex-col gap-6">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/tieubochet/be-a-celorian/refs/heads/main/img/celo_logo.png" 
              alt="Celo Logo" 
              className="w-10 h-10 rounded-full shadow-lg bg-black p-1.5" 
            />
            <div>
              <h1 className="text-2xl font-bold text-black leading-none">Be a Celorian</h1>
              <p className="text-xs font-medium text-black/70 tracking-wide mt-1">
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
                            className="flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2 bg-white text-black border-black hover:bg-gray-50"
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
                          className="flex items-center gap-2 px-4 py-2 rounded-[3px] font-bold text-sm transition-all shadow-sm border-2 bg-black text-white border-black"
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
                    ? 'bg-green-500 text-white border-green-600' // Keep it clickable or styled as success
                    : 'bg-[#F6DF3A] text-black border-black hover:bg-[#eacf1f] active:translate-y-0.5'
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

            {/* Utility Pills */}
            <a href="#" className="p-2 bg-white/50 hover:bg-white rounded-[3px] transition-colors text-black">
              <Github size={18} />
            </a>
            <button className="p-2 bg-white/50 hover:bg-white rounded-[3px] transition-colors text-black">
              <Moon size={18} />
            </button>
          </div>
        </header>

        {/* DASHBOARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Wallet Status Card */}
          <Card className="sm:col-span-2 flex items-center justify-between relative overflow-hidden">
            <div className="z-10">
              <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Wallet Balance</h2>
              {isConnected ? (
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-4xl font-bold text-black">
                    {balanceData ? Number(formatUnits(balanceData.value, balanceData.decimals)).toFixed(3) : '0.000'}
                  </span>
                  <span className="text-xl font-medium text-gray-500">
                    {balanceData?.symbol || 'CELO'}
                  </span>
                  <span className="text-lg font-medium text-gray-400 ml-1">
                    ({txCount ? txCount.toString() : '0'} txs)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <p className="text-gray-900 font-medium text-lg">Not connected</p>
                  <ConnectButton.Custom>
                    {({ openConnectModal }) => (
                      <button onClick={openConnectModal} className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1">
                        Connect to show status <ArrowUpRight size={14} />
                      </button>
                    )}
                  </ConnectButton.Custom>
                </div>
              )}
            </div>
            {/* Decorative Icon Background */}
            <Wallet className="absolute right-[-20px] bottom-[-20px] text-gray-100 opacity-50 rotate-[-15deg]" size={140} />
          </Card>

          {/* Ecosystem Card */}
          <Card title="Ecosystem" className="flex flex-col justify-between">
            <p className="text-sm text-gray-600 mb-4 leading-snug">
               Explore core identity & impact apps in the Celo ecosystem.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Celo Names', 'CeloPG', 'Mento', 'Uniswap', 'GoodDollar'].map((item) => (
                <button key={item} className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-[3px] text-sm font-medium text-gray-700 transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
               <a href="#" className="text-sm font-bold text-black flex items-center gap-1 hover:gap-2 transition-all">
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
                  <h3 className="font-bold text-gray-900">Prosperity Passport</h3>
                  <p className="text-xs text-gray-500">Your on-chain identity</p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                 <button className="flex-1 py-2 bg-black text-white rounded-[3px] text-xs font-bold hover:bg-gray-800 transition-colors">
                   Passport
                 </button>
                 <button className="flex-1 py-2 border border-gray-200 text-gray-600 rounded-[3px] text-xs font-bold hover:bg-gray-50 transition-colors">
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
                    <span className="font-bold text-gray-900">Governance</span>
                  </div>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded-[3px]">Active</span>
               </div>
               <p className="text-xs text-gray-500 mb-3">Vote on proposals to shape the future of the Celo Platform.</p>
               <button className="w-full py-2 border border-black text-black rounded-[3px] text-xs font-bold hover:bg-black hover:text-white transition-colors">
                 View Proposals
               </button>
            </Card>
          </div>
        </div>

        {/* BADGES SECTION */}
        <div className="space-y-2">
          <Card className="!p-0 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 bg-white">
              <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Badges</h2>
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">
                Short, Celo-aligned explanations to earn badges with confidence.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
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
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 mt-4 border-t border-black/10">
           <div className="flex items-center gap-4 text-black/70">
              <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-black transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-black transition-colors"><Github size={20} /></a>
           </div>
           <div className="text-xs font-medium text-black/50">
             © {new Date().getFullYear()} Be a Celorian. Not affiliated with Celo Foundation.
           </div>
        </footer>

        {/* BADGE DETAILS MODAL */}
        {selectedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-[3px] shadow-2xl w-full max-w-md overflow-hidden relative animate-slide-up">
              
              <button 
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-[3px] transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center p-8 text-center">
                <img 
                  src={selectedBadge.image} 
                  alt={selectedBadge.name} 
                  className="w-24 h-24 rounded-[3px] shadow-md mb-6 ring-1 ring-black/5"
                />
                
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
                  {selectedBadge.name}
                </h3>
                
                <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1 rounded-[3px] border border-yellow-200 mb-6 uppercase tracking-wider">
                  {selectedBadge.tag}
                </span>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedBadge.description}
                </p>

                <div className="w-full space-y-3">
                  <button 
                    onClick={handleCloseDetails}
                    className="w-full py-3 bg-black text-white rounded-[3px] font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
                  >
                    Close
                  </button>
                  
                  {selectedBadge.links && selectedBadge.links.length > 0 && (
                    <div className="pt-6 border-t border-gray-100 w-full">
                       <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-4">Related Links</p>
                       <div className="flex flex-col gap-2">
                          {selectedBadge.links.map((link, i) => (
                            <a 
                              key={i}
                              href={link.url} 
                              target="_blank"
                              rel="noreferrer"
                              className="w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-900 text-sm font-semibold rounded-[3px] transition-colors flex items-center justify-between group"
                            >
                              {link.label} <ArrowUpRight size={16} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                            </a>
                          ))}
                       </div>
                    </div>
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
await sdk.actions.ready()
export default App;