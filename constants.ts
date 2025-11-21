import { Badge } from './types';

export const MOCK_BADGES: Badge[] = [
  {
    id: 'celo-voter',
    image: 'https://placehold.co/64/111827/FFFFFF?text=CV',
    name: 'Celo Voter',
    tag: 'Celo',
    description: 'Vote on on-chain governance proposals via Mondo.',
    links: [
      { label: 'Mondo Governance', url: 'https://mondo.celo.org/governance' }
    ]
  },
  {
    id: 'governance-guardian',
    image: 'https://placehold.co/64/059669/FFFFFF?text=GG',
    name: 'Governance Guardian',
    tag: 'Celo',
    description: 'Issued to recognized Celo Governance Guardians.',
    links: [
      { label: 'Mondo Governance', url: 'https://mondo.celo.org/governance' }
    ]
  },
  {
    id: 's0-gov',
    image: 'https://placehold.co/64/D97706/FFFFFF?text=S0',
    name: 'S0 Gov Contributor',
    tag: 'Celo',
    description: 'Contributed to Celo Governance in Season 0 (counted via CeloPG Passport).',
    links: [
      { label: 'CeloPG', url: 'https://celopg.eco' },
      { label: 'CeloPG Passport', url: 'https://pass.celopg.eco' }
    ]
  },
  {
    id: 'cel2-tx',
    image: 'https://placehold.co/64/7C3AED/FFFFFF?text=C2',
    name: 'CEL2 Transactions',
    tag: 'Celo',
    description: 'Make transactions on CEL2. The Daily check-in gives you one free tx per day.',
    links: [
      { label: 'Layer3', url: 'https://app.layer3.xyz/search?chainIds=42220' }
    ]
  },
  {
    id: 's1-tx',
    image: 'https://placehold.co/64/2563EB/FFFFFF?text=S1',
    name: 'S1 Transactions',
    tag: 'Celo',
    description: 'Number of transactions on Celo in Season 1 (since 23 Aug 2025).',
    links: []
  },
  {
    id: 'cel1-tx',
    image: 'https://placehold.co/64/DC2626/FFFFFF?text=C1',
    name: 'CEL1 Transactions',
    tag: 'Celo',
    description: 'Number of transactions on the former Celo L1 network (historical activity prior to CEL2).',
    links: []
  },
  {
    id: 'self-verif',
    image: 'https://placehold.co/64/EC4899/FFFFFF?text=SV',
    name: 'Self verification',
    tag: 'Celo',
    description: 'Verify your uniqueness with the Self Protocol (privacy-preserving).',
    links: [
      { label: 'Join Self', url: 'https://referral.self.xyz/' },
      { label: 'Self on Android', url: 'https://play.google.com/store/apps/details?id=com.proofofpassportapp' },
      { label: 'Self on iOS', url: 'https://apps.apple.com/fr/app/self-zk-passport-identity/id6478563710' }
    ]
  },
  {
    id: 'farcaster',
    image: 'https://placehold.co/64/8B5CF6/FFFFFF?text=FC',
    name: 'Farcaster Connection',
    tag: 'Optimism',
    description: 'Link your Farcaster account to your Prosperity Passport.',
    links: [
      { label: 'Join Farcaster', url: 'https://farcaster.xyz/' },
      { label: 'Open CeloPG Passport', url: 'https://pass.celopg.eco/' }
    ]
  },
  {
    id: 'guild-member',
    image: 'https://placehold.co/64/10B981/FFFFFF?text=GM',
    name: 'Community Guild Member',
    tag: 'Celo',
    description: 'Earn Discord roles in the Celo Communities Guild through organic participation.',
    links: [
      { label: 'Celo Communities Guild', url: 'https://era.guild.xyz/celo/' }
    ]
  },
  {
    id: 'guild-lead',
    image: 'https://placehold.co/64/F59E0B/FFFFFF?text=GL',
    name: 'Community Guild Lead',
    tag: 'Celo',
    description: 'Issued to Celo Community Guild Leads.',
    links: [
      { label: 'Celo Communities Guild', url: 'https://era.guild.xyz/celo/' },
      { label: 'Celo Discord', url: 'https://discord.gg/celo' }
    ]
  },
  {
    id: 'regional-dao',
    image: 'https://placehold.co/64/6366F1/FFFFFF?text=RL',
    name: 'Regional DAO Lead',
    tag: 'Celo',
    description: 'Part of the Celo Regional DAO Steward list (by nomination/selection).',
    links: [
      { label: 'Celo Discord', url: 'https://discord.gg/celo' },
      { label: 'Guild', url: 'https://era.guild.xyz/celo/' }
    ]
  },
  {
    id: 'celopg-steward',
    image: 'https://placehold.co/64/14B8A6/FFFFFF?text=CS',
    name: 'CeloPG Steward',
    tag: 'Celo',
    description: 'Part of the CeloPG Steward list (community steward role).',
    links: [
      { label: 'Celo Discord', url: 'https://discord.gg/celo' },
      { label: 'CeloPG', url: 'https://celopg.eco' }
    ]
  },
  {
    id: 'refi-dao',
    image: 'https://placehold.co/64/84CC16/FFFFFF?text=RD',
    name: 'ReFi DAO Contributor',
    tag: 'Celo',
    description: 'Recognition for contributors listed in ReFi DAO’s contributor registry.',
    links: [
      { label: 'ReFi DAO', url: 'https://www.refidao.com/' }
    ]
  },
  {
    id: 'greenpill',
    image: 'https://placehold.co/64/22C55E/FFFFFF?text=GP',
    name: 'GreenPill Member',
    tag: 'Celo',
    description: 'Part of GreenPill Member List.',
    links: [
      { label: 'Participate', url: 'https://greenpill.network/' },
      { label: 'About', url: 'https://www.superchain.eco/projects/green-pill' }
    ]
  },
  {
    id: 'tdf',
    image: 'https://placehold.co/64/A855F7/FFFFFF?text=TD',
    name: 'TDF Contributor',
    tag: 'Celo',
    description: 'Participated in The Dream Factory land project (eligibility may be limited).',
    links: [
      { label: 'TDF Signup', url: 'https://www.traditionaldreamfactory.com/' },
      { label: 'Whitepaper', url: 'https://oasa.earth/' }
    ]
  },
  {
    id: 'lets-grow',
    image: 'https://placehold.co/64/EC4899/FFFFFF?text=LG',
    name: 'Let’s Grow Contributor',
    tag: 'Optimism',
    description: 'LGD merit-based amiGROW badges. Sign the Manifesto, mint the Member NFT on Optimism.',
    links: [
      { label: 'Let’s Grow Home', url: 'https://www.letsgrow.network/' },
      { label: 'Manifesto', url: 'https://www.letsgrow.network/manifesto' }
    ]
  },
  {
    id: 'proof-ship',
    image: 'https://placehold.co/64/06B6D4/FFFFFF?text=PS',
    name: 'Proof of Ship',
    tag: 'Celo',
    description: 'Earn cUSD by shipping public work and logging it through the Proof of Ship flow.',
    links: [
      { label: 'How it works', url: 'https://docs.gap.karmahq.xyz/' },
      { label: 'Program page', url: 'https://www.celopg.eco/programs/proof-of-ship-s1' }
    ]
  },
  {
    id: 'builder-score',
    image: 'https://placehold.co/64/3B82F6/FFFFFF?text=BS',
    name: 'Builder Score',
    tag: 'Celo',
    description: 'Increase your Talent Protocol Builder Score to signal reputation across the ecosystem.',
    links: [
      { label: 'Talent Protocol', url: 'https://app.talentprotocol.com/' }
    ]
  },
  {
    id: 'eco-credit',
    image: 'https://placehold.co/64/15803D/FFFFFF?text=ER',
    name: 'Eco Credit Retirement',
    tag: 'Celo',
    description: 'Retire Eco Credits on Celo via Regen Atlas. Purchases are retired (burned) permanently.',
    links: [
      { label: 'Pool A', url: 'https://www.regenatlas.xyz/' },
      { label: 'Pool B', url: 'https://www.regenatlas.xyz/' }
    ]
  },
  {
    id: 'gitcoin',
    image: 'https://placehold.co/64/F43F5E/FFFFFF?text=GD',
    name: 'Gitcoin Donor',
    tag: 'Celo',
    description: 'Donate on Gitcoin using Celo to support public goods.',
    links: [
      { label: 'Gitcoin Grants', url: 'https://grants.gitcoin.co/' }
    ]
  },
  {
    id: 'giveth',
    image: 'https://placehold.co/64/D946EF/FFFFFF?text=Gi',
    name: 'Giveth Donor',
    tag: 'Celo',
    description: 'Donate on Giveth using Celo to support public goods & communities.',
    links: [
      { label: 'Giveth Projects', url: 'https://giveth.io/' }
    ]
  },
  {
    id: 'celo-citizen',
    image: 'https://placehold.co/64/64748B/FFFFFF?text=CC',
    name: 'Celo Citizen',
    tag: 'Celo',
    description: 'Receive rewards from Celo Citizen Retro 2024 (historical program).',
    links: [
      { label: 'About', url: 'https://www.celopg.eco/' }
    ]
  },
  {
    id: 'poaps',
    image: 'https://placehold.co/64/8B5CF6/FFFFFF?text=CP',
    name: 'Celo Event POAPs',
    tag: 'Celo',
    description: 'Total number of Celo Event POAPs via Lemonade Social.',
    links: [
      { label: 'Lemonade Social', url: 'https://lemonade.social/s/celo' }
    ]
  },
  {
    id: 'genesis',
    image: 'https://placehold.co/64/000000/FFFFFF?text=CG',
    name: 'Celo Genesis',
    tag: 'Celo',
    description: 'Recognition based on the year your Celo wallet was created.',
    links: []
  },
  {
    id: 'vault',
    image: 'https://placehold.co/64/F59E0B/FFFFFF?text=CV',
    name: 'Celo Vault Deposit',
    tag: 'Celo',
    description: 'Deposit assets into the Celo Vault and have your position recognized in Prosperity Passport.',
    links: [
      { label: 'Prosperity Passport', url: 'https://pass.celopg.eco/' }
    ]
  },
  {
    id: 'glo-dollar',
    image: 'https://placehold.co/64/22C55E/FFFFFF?text=GD',
    name: 'USD Glo Dollar',
    tag: 'Celo',
    description: 'Hold USDGLO on Celo to progress through simple time-based tiers.',
    links: [
      { label: 'Glo Dollar', url: 'https://www.glodollar.org/' },
      { label: 'CeloPG', url: 'https://celopg.eco' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', url: '#' },
  { name: 'Discord', url: '#' },
  { name: 'Telegram', url: '#' },
];