export type LeaderboardEntry = {
  rank: number;
  name: string;
  earnings: string;
  initials: string;
};

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Gabriel Temtsen", earnings: "1.25 ETH", initials: "GT" },
  { rank: 2, name: "Mark Carey", earnings: "0.98 ETH", initials: "MC" },
  { rank: 3, name: "GMonchain", earnings: "0.76 ETH", initials: "GM" },
  { rank: 4, name: "halaprix", earnings: "0.51 ETH", initials: "H" },
  { rank: 5, name: "masaun", earnings: "0.45 ETH", initials: "M" },
  { rank: 6, name: "oxdev.base.eth", earnings: "0.32 ETH", initials: "OX" },
  { rank: 7, name: "Matthew Fox", earnings: "0.29 ETH", initials: "MF" },
];
