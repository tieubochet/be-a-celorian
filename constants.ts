import { Badge } from './types';


export const MOCK_BADGES: Badge[] = [
  {
    id: 'celo-voter',
    image: 'https://placehold.co/64/111827/FFFFFF?text=CV',
    name: 'Celo Voter',
    tag: 'Celo',
    description: 'Vote on on-chain governance proposals via Mondo.',
    whyItMatters: 'Voting steers protocol parameters and treasury. Casting votes with locked/staked CELO builds a credible on-chain civic footprint and helps align the network with its community.',
    howToProgress: [
      'Open the governance portal (Mondo) and connect your wallet on Celo Mainnet.',
      'Ensure you have voting power (lock/stake CELO on a validator via Mondo).',
      'Pick an active proposal, review details, choose For / Against / Abstain.',
      'Submit the vote and sign the transaction. Your vote will appear on the proposal page/explorer.'
    ],
    tiers: [
      'Vote on 1 Celo Proposal',
      'Vote on 5 Celo Proposal',
      'Vote on 15 Celo Proposal',
      'Vote on 30 Celo Proposal'
    ],
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
    whyItMatters: 'Governance Guardians provide an additional safeguard for the protocol and help maintain process integrity. This badge is granted to approved guardians; it’s not a general application track.',
    howToProgress: [
      'Be selected/approved as a Governance Guardian through the program’s governance process.',
      'Your address is added to the official guardian list.',
      'Once listed, the badge is reflected automatically in your Passport.'
    ],
    tiers: [
      'Be a Celo Guardian'
    ],
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
    whyItMatters: 'Recognizes wallets that participated in governance during Season 0 tracked by CeloPG Passport. Historical badge; not an ongoing application.',
    howToProgress: [
      'Connect your wallet; eligible Season 0 governance contributions are detected automatically.',
      'No new action required if your S0 votes/interactions were counted.'
    ],
    tiers: [
      'Contributed to Celo Governance in Season 0',
      'Contributed to Celo Governance in Season 0'
    ],
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
    whyItMatters: 'CEL2 is Celo’s L2. Regular usage decentralizes activity and builds your on-chain footprint. With the free Daily check-in you can interact at zero gas once per day — steady progress, no friction.',
    howToProgress: [
      'Connect your wallet on Celo Mainnet (CEL2).',
      'Use the Daily check-in button in Celo Lite (1 free tx/day).',
      'Do organic actions on CEL2 (governance, apps, transfers) to climb tiers.'
    ],
    tiers: [
      '10 transactions on CEL2',
      '50 transactions on CEL2',
      '100 transactions on CEL2',
      '250 transactions on CEL2',
      '500 transactions on CEL2'
    ],
    links: [
      { label: 'Layer3', url: 'https://be-a-celorian.vercel.app/' }
    ]
  },
  {
    id: 's1-tx',
    image: 'https://placehold.co/64/2563EB/FFFFFF?text=S1',
    name: 'S1 Transactions',
    tag: 'Celo',
    description: 'Number of transactions on Celo in Season 1 (since 23 Aug 2025).',
    whyItMatters: 'Season 1 highlights consistent on-chain activity in a defined window. Tracking S1 transactions helps you pace your engagement and unlock tiers during the season.',
    howToProgress: [
      'Connect your wallet in Celo Lite to display your S1 transaction counter.',
      'Use Daily check-in (free tx/day) and interact organically across the ecosystem.',
      'Keep an eye on your S1 total in the Wallet card (CEL1/CEL2/S1).'
    ],
    tiers: [
      '10 transactions on Celo in Season 1',
      '50 transactions on Celo in Season 1',
      '100 transactions on Celo in Season 1',
      '250 transactions on Celo in Season 1',
      '500 transactions on Celo in Season 1'
    ],
    links: []
  },
  {
    id: 'cel1-tx',
    image: 'https://placehold.co/64/DC2626/FFFFFF?text=C1',
    name: 'CEL1 Transactions',
    tag: 'Celo',
    description: 'Number of transactions on the former Celo L1 network (historical activity prior to CEL2).',
    whyItMatters: 'Recognizes early adopters and long-term users who transacted on the original Celo L1 chain.',
    howToProgress: [
      'This is a historical metric. No new CEL1 transactions can be generated as the network has migrated.',
      'Connect your wallet to view your historical count.'
    ],
    tiers: [],
    links: []
  },
  {
    id: 'self-verif',
    image: 'https://placehold.co/64/EC4899/FFFFFF?text=SV',
    name: 'Self verification',
    tag: 'Celo',
    description: 'Verify your uniqueness with the Self Protocol (privacy-preserving).',
    whyItMatters: 'Self uses zero-knowledge proofs to attest your uniqueness (and optionally your country) without exposing private data. This helps the ecosystem limit spam and strengthen on-chain reputation.',
    howToProgress: [
      'Install the Self app on your phone (Android/iOS).',
      'In Celo Lite → Prosperity Passport, scan the QR to link your wallet.',
      'Follow the flow in Self (liveness + optional country attestation).',
      'Once validated, use “Self.xyz Verification” in Celo Lite.'
    ],
    tiers: [
      'Verify your Country via Self'
    ],
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
    whyItMatters: 'Connecting Farcaster ties your social identity to your onchain reputation, helping programs discover real builders while keeping control in your hands.',
    howToProgress: [
      'Open CeloPG Passport.',
      'Click the Farcaster Connection badge.',
      'Scan the QR code from Warpcast to authorize linking.',
      'Account linked — the badge turns complete.'
    ],
    tiers: [
      'Link your Farcaster account'
    ],
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
    whyItMatters: 'Guild roles reflect real community engagement (helping others, sharing updates, joining calls). Earning roles builds reputation and connects you with builders and programs across the Celo ecosystem.',
    howToProgress: [
      'Open the Celo Communities Guild and connect your Discord account.',
      'Join the Celo Discord and participate organically (help, updates, events).',
      'Complete the role requirements listed in Guild to level up.',
      'Claim your role in Guild once criteria are met.'
    ],
    tiers: [
      'Beginner Celorian',
      'Adventurer Celorian',
      'Vanguard Celorian',
      'Pioneer Celorian',
      'Champion Celorian'
    ],
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
    whyItMatters: 'Reserved for approved moderators/leads who coordinate community efforts. It recognizes trusted stewards rather than being an open application badge.',
    howToProgress: [
      'Be an active moderator or community organizer within the Celo ecosystem.',
      'Get nominated/approved by Community Guild admins/moderators.',
      'Once your wallet is added to the official leads list, the badge appears automatically.'
    ],
    tiers: [
      'Be a Community Guild Lead'
    ],
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
    whyItMatters: 'Regional DAO Leads coordinate local communities, events, and programs. This badge recognizes approved stewards; it’s not a general-access application.',
    howToProgress: [
      'Be active in your local Celo community (events, education, coordination).',
      'If your region runs a steward process, you may be nominated/approved by program admins.',
      'Once approved, your wallet/address is added to the steward list and reflected as a badge.'
    ],
    tiers: [
      'Become a Celo Regional DAO Lead'
    ],
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
    whyItMatters: 'CeloPG Stewards support the Prosperity Guild’s programs and community ops. This badge recognizes approved stewards; it’s not a general-access sign-up.',
    howToProgress: [
      'Contribute actively to CeloPG programs and community operations.',
      'Be nominated/approved by CeloPG program admins as a Steward.',
      'Once approved and listed, the badge appears in your Passport.'
    ],
    tiers: [
      'Become a CeloPG Steward'
    ],
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
    whyItMatters: 'This badge highlights prior or existing participation in ReFi DAO’s contributor program. If you’re already on the list, it helps surface your ReFi involvement in the Celo ecosystem.',
    howToProgress: [
      'If you were previously registered, connect your wallet to have it recognized.',
      'New registrations currently show an error on the sign-up page; follow ReFi DAO channels for future openings.'
    ],
    tiers: [
      'ReFi DAO Contributor Level 1',
      'ReFi DAO Contributor Level 2',
      'ReFi DAO Contributor Level 3',
      'ReFi DAO Contributor Level 4',
      'ReFi DAO Contributor Level 5'
    ],
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
    whyItMatters: 'GreenPill connects regen-minded builders and doers. Membership signals alignment with public goods and coordination-first values across the Celo ecosystem.',
    howToProgress: [
      'Visit GreenPill Network and explore participation paths (chapters, events, contributions).',
      'Follow the participation flow to become a member (varies by chapter/track).',
      'Once listed/recognized, your membership tier will reflect in Passport.'
    ],
    tiers: [
      'Tier 1 member',
      'Tier 2 member',
      'Tier 3 member'
    ],
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
    whyItMatters: 'Traditional Dream Factory (TDF) is a web3-enabled regenerative village/DAO in Portugal. This badge recognizes wallets that participated in the TDF land project or were added by program admins.',
    howToProgress: [
      'If sign-ups are open, follow the TDF flow and connect your wallet.',
      'Otherwise, participation is recognized when program admins add your address.',
      'Once your wallet is listed, the badge will appear automatically.'
    ],
    tiers: [
      'TDF Contributor — Level 1',
      'TDF Contributor — Level 2',
      'TDF Contributor — Level 3',
      'TDF Contributor — Level 4',
      'TDF Contributor — Level 5'
    ],
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
    whyItMatters: 'Let’s Grow DAO (LGD) coordinates regen contributors. Signing the Manifesto and joining as a member lets you earn amiGROW badges for meaningful contributions.',
    howToProgress: [
      'Open Let’s Grow and read the Manifesto.',
      'Sign the Manifesto and connect your wallet on Optimism.',
      'Mint the Let’s Grow Member NFT (when available).',
      'Contribute to earn amiGROW badges and level up tiers.'
    ],
    tiers: [
      'Get Let\'s Grow DAO merit-based amiGROW badge tier 1',
      'Get Let\'s Grow DAO merit-based amiGROW badge tier 2',
      'Get Let\'s Grow DAO merit-based amiGROW badge tier 3',
      'Get Let\'s Grow DAO merit-based amiGROW badge tier 4',
      'Get Let\'s Grow DAO merit-based amiGROW badge tier 5'
    ],
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
    whyItMatters: 'Proof of Ship rewards builders for shipping public work aligned with Celo. Earnings are paid in cUSD and reflect consistent delivery, helping you build a verifiable on-chain track record.',
    howToProgress: [
      'Read how the integration works.',
      'Open the Celo Proof of Ship program page.',
      'Ship publicly (code, product, tutorial, integration) and submit according to the program instructions.',
      'Connect your wallet and claim eligible rewards in cUSD when your ship is approved.'
    ],
    tiers: [
      'Earn 100 cUSD or more',
      'Earn 250 cUSD or more',
      'Earn 500 cUSD or more',
      'Earn 750 cUSD or more',
      'Earn 1000 cUSD or more'
    ],
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
    whyItMatters: 'The Builder Score reflects sustained, verifiable builder activity (profile completeness, contributions, participation). A higher score helps showcase credibility and unlock opportunities.',
    howToProgress: [
      'Create or sign in to your Talent Protocol profile.',
      'Connect your wallet and complete your builder profile.',
      'Link your work and contributions (projects, repos, posts).',
      'Stay active: ship, document, and keep your profile updated to grow your score.'
    ],
    tiers: [
      'Have a Builder score above 20',
      'Have a Builder score above 40',
      'Have a Builder score above 60',
      'Have a Builder score above 80'
    ],
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
    whyItMatters: 'Retiring Eco Credits funds verified climate action and permanently burns those credits. ⚠️ This is irreversible: you buy credits with money and retire them to offset impact; they cannot be ‘un-retired’.',
    howToProgress: [
      'Open a supported Eco Credit pool on Regen Atlas.',
      'Connect your EVM wallet on Celo.',
      'Choose the quantity to retire and confirm the transaction.',
      'Wait for confirmation; your retirement receipt will be visible in-app/explorer.'
    ],
    tiers: [
      'Retire 1 Eco Credits',
      'Retire 10 Eco Credits',
      'Retire 50 Eco Credits',
      'Retire 250 Eco Credits',
      'Retire 1000 Eco Credits'
    ],
    links: [
      { label: 'Pool A', url: 'https://www.regenatlas.xyz/assets/91efab48-decc-46ac-bc7b-c2ec7c272548' },
      { label: 'Pool B', url: 'https://www.regenatlas.xyz/assets/d4a3e607-7bd5-49b0-a4ef-4715c2fe65d4' }
    ]
  },
  {
    id: 'gitcoin',
    image: 'https://placehold.co/64/F43F5E/FFFFFF?text=GD',
    name: 'Gitcoin Donor',
    tag: 'Celo',
    description: 'Donate on Gitcoin using Celo to support public goods.',
    whyItMatters: 'Gitcoin funding supports builders and public goods across the ecosystem. ⚠ Donations use real funds and are generally non-refundable.',
    howToProgress: [
      'Open Gitcoin Grants and connect your wallet.',
      'Choose a grantee and select Celo if available (or bridge if needed).',
      'Confirm the donation transaction.',
      'Keep records for your own accounting if required.'
    ],
    tiers: [
      'Donate $25 more on Gitcoin',
      'Donate $100 more on Gitcoin',
      'Donate $250 more on Gitcoin',
      'Donate $1000 more on Gitcoin'
    ],
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
    whyItMatters: 'Giveth channels donations directly to projects. ⚠ Donations use real funds and are generally non-refundable.',
    howToProgress: [
      'Open Giveth projects filtered for Celo.',
      'Pick a project, connect your wallet, and select Celo if needed.',
      'Confirm the donation transaction.',
      'Optionally keep your receipt/tx hash for your records.'
    ],
    tiers: [
      'Donate $25 more on Giveth',
      'Donate $100 more on Giveth',
      'Donate $250 more on Giveth',
      'Donate $1000 more on Giveth'
    ],
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
    whyItMatters: 'Celo Citizen Retro 2024 rewarded impactful contributors with CELO. This badge records amounts received; the program is closed and serves as proof of past participation.',
    howToProgress: [
      'If you received Retro 2024 rewards, connect your wallet to have them detected automatically.',
      'Your total rewards determine the tier shown; no additional action is required.'
    ],
    tiers: [
      'Receive 100 CELO from Celo Citizen Retro 2024',
      'Receive 1000 CELO from Celo Citizen Retro 2024',
      'Receive 2500 CELO from Celo Citizen Retro 2024',
      'Receive 5000 CELO from Celo Citizen Retro 2024',
      'Receive 10000 CELO from Celo Citizen Retro 2024'
    ],
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
    whyItMatters: 'Tracks historical attendance at Celo events that issued POAPs. Recent activity seems limited; treat this as a past-participation badge.',
    howToProgress: [
      'If your wallet has Celo event POAPs, connect to have them counted.',
      'Tiers reflect cumulative POAPs across eligible Celo events.'
    ],
    tiers: [
      'Claimed 1 Celo POAPs',
      'Claimed 10 Celo POAPs',
      'Claimed 25 Celo POAPs',
      'Claimed 100 Celo POAPs',
      'Claimed 200 Celo POAPs'
    ],
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
    whyItMatters: 'Genesis reflects when you first joined the Celo network. Earlier creation dates signal long-term participation; newer dates welcome fresh builders to the ecosystem.',
    howToProgress: [
      'Connect your wallet in Prosperity Passport.',
      'Your wallet’s creation/first-activity year is detected automatically.',
      'The corresponding tier is shown; claim your badge.'
    ],
    tiers: [
      'Wallet created in the year 2024',
      'Wallet created in the year 2023',
      'Wallet created in the year 2022',
      'Wallet created in the year 2021',
      'Wallet created in the year 2020'
    ],
    links: []
  },
  {
    id: 'vault',
    image: 'https://placehold.co/64/F59E0B/FFFFFF?text=CV',
    name: 'Celo Vault Deposit',
    tag: 'Celo',
    description: 'Deposit assets into the Celo Vault and have your position recognized in Prosperity Passport.',
    whyItMatters: 'Depositing into the Vault signals commitment to the Celo ecosystem and creates a simple, non-speculative onchain action that builds your Passport footprint.',
    howToProgress: [
      'Open Prosperity Passport and go to the Vault section.',
      'Connect your wallet on Celo (CEL2).',
      'Choose an asset and amount (e.g., cUSD/USDC.e) and confirm the deposit transaction.',
      'Your deposit is detected and reflected as a badge tier in Passport.'
    ],
    tiers: [
      'Deposit ≥ $10 equivalent for 7 days',
      'Deposit ≥ $100 equivalent for 7 days',
      'Deposit ≥ $500 equivalent for 7 days',
      'Deposit ≥ $1,000 equivalent for 7 days',
      'Deposit ≥ $5,000 equivalent for 30 days'
    ],
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
    whyItMatters: 'Glo Dollar links stable value with real-world impact. Holding a small amount on Celo helps users experience a mission-aligned stable asset while building a basic onchain footprint.',
    howToProgress: [
      'Get USDGLO on Celo (from a supported venue).',
      'Hold the token in your wallet—no need to stake or lock.',
      'Tiers unlock automatically after the required time windows.'
    ],
    tiers: [
      'Held > $1 USDGLO for more than 1 day',
      'Held > $10 USDGLO for more than 7 days',
      'Held > $100 USDGLO for more than 28 days',
      'Held > $1000 USDGLO for more than 28 days',
      'Held > $5000 USDGLO for more than 28 days'
    ],
    links: [
      { label: 'Glo Dollar', url: 'https://www.glodollar.org/' },
      { label: 'CeloPG', url: 'https://celopg.eco' }
    ]
  }
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', url: 'https://x.com/Celo' },
  { name: 'Discord', url: 'https://discord.gg/celo' },
  { name: 'Telegram', url: 'https://t.me/+3uD9NKPbStYwY2Nk' },
];

export const ERC20_ABI = [
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'decimals',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'uint8' }],
  },
  {
    type: 'function',
    name: 'symbol',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ type: 'string' }],
  },
] as const;


export const SUPPORTED_TOKENS = [
  {
    symbol: 'cUSD',
    name: 'Celo Dollar',
    address: '0x765DE816845861e75A25fCA122bb6898B8B1282a', // Celo Mainnet
    decimals: 18,
    image: 'https://raw.githubusercontent.com/valora-inc/address-metadata/main/assets/tokens/cUSD.png'
  },
  {
    symbol: 'USDC',
    name: 'USDC',
    address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C', // USDC on Celo
    decimals: 6,
    image: 'https://raw.githubusercontent.com/valora-inc/address-metadata/main/assets/tokens/USDC.png'
  },
  {
    symbol: 'USDGLO',
    name: 'Glo Dollar',
    address: '0x4f6047a7c34d36f1b875fa721995cdd3a098835b', // Glo on Celo
    decimals: 18,
    image: 'https://raw.githubusercontent.com/valora-inc/address-metadata/main/assets/tokens/GLO.png'
  }
] as const;

export const GOVERNANCE_ADDRESS = '0xD533Ca259b330c7A88f74E000a3Fa1a2a227FcCa'; 
export const VAULT_ADDRESS = '0x57332c214E647063bB4c5A73e5A8b7bbA79Be1E4'; 

export const GOVERNANCE_ABI = [
  {
    type: 'function',
    name: 'isVoting',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'bool' }],
  }
] as const;