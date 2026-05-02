// Single source of truth for site-wide constants.
// Built from the Steve Kopshaw Business Reference doc — every section reflects
// the doc's positioning, vocabulary, ICP, services ladder, and proof points.
//
// Vocabulary policy (per doc Section 6):
//   "implement" → "install"
//   "strategy"  → "playbook"
//   "consultation" → "diagnostic"
//   "entrepreneur" → "operator" / "founder"
//   "income" → "revenue"
//   "coach" → "advisor / installer"
//   Banned: hack, secret, guru, transformation (noun), passive income, hustle harder

export const SITE = {
  url: 'https://metricmentorlabs.com',
  name: 'Metric Mentor Labs',
  tagline: 'revenue. by. design.',                       // primary tagline, always lowercase + periods
  identityLine: 'Warrior on the outside. Engineer on the inside.',
  description:
    'Metric Mentor Labs installs the Rev OS — the Revenue Playbooks Operating System — into businesses doing $500K to $25M. Documented playbooks, dashboards, and operating rhythms that make the founder less necessary, not more.',
  shortDescription:
    'We install the Rev OS into businesses doing $500K to $25M. Powered by the F.R.E.E.D.O.M. Framework.',
  oneLiner: 'I install revenue operating systems into businesses doing $500K to $25M.',
  founder: {
    name: 'Steve Kopshaw',
    handle: '@stevekopshaw',
    title: 'The Metric Mentor',
    jobTitle: 'Founder, Metric Mentor Labs · Creator of the Rev OS',
    email: 'hello@metricmentorlabs.com',
    pressEmail: 'press@metricmentorlabs.com',
    bio: 'Steve Kopshaw is a 20+ year operator who has built, run, scaled, and exited businesses across health and wellness, fitness, financial services, and digital media. He has operated 17 locations across 6 states, generated over $300M in revenue across operated and advised businesses, and was part of a $50M+ exit trajectory as COO and VP Growth at the Nutritional Coaching Institute (NCI). He is a ClickFunnels Two Comma Club winner and is mentored through the Acquisition.com network. Steve holds a computer engineering degree from Polytechnic University.',
    sameAs: [
      'https://www.instagram.com/stevekopshaw',
      'https://www.tiktok.com/@stevekopshaw',
      'https://www.youtube.com/@stevekopshaw',
      'https://twitter.com/stevekopshaw',
      'https://www.linkedin.com/in/stevekopshaw',
      'https://open.spotify.com/episode/2JBnx0FGduPrmlv65wdj7p',
    ],
    image: '/images/steve-kopshaw.jpg',
  },
  diagnosticUrl: 'https://preview--mmldiagnostic.lovable.app/',  // FREEDOM Diagnostic — current Lovable URL
  ogImage: '/og-default.png',
  twitterHandle: '@stevekopshaw',
} as const;

// Top-line proof points, used in hero stat strips and the about page.
export const STATS = [
  { number: '20+',     label: 'Years Operating' },
  { number: '17',      label: 'Locations Across 6 States' },
  { number: '$300M+',  label: 'Revenue Generated' },
  { number: '$50M+',   label: 'Exit Trajectory (NCI)' },
] as const;

// "As Featured In" press strip.
export const PRESS_OUTLETS = [
  'AP News', 'Bloomberg', 'FOX', 'NBC', 'CBS', 'ABC',
  'Yahoo', 'Google News', 'Muck Rack', 'Moody’s Analytics', 'Crunchbase',
] as const;

// Speaking — keynote stages and talk topics.
export const SPEAKING = {
  sharedStageWith: [
    'Alex Hormozi', 'Leila Hormozi', 'Bedros Keuilian',
    'Tom Bilyeu', 'Ed Mylett', 'Nick Santonastasso',
  ],
  topics: [
    'Installing the Rev OS — turning ambition into repeatable revenue',
    'The F.R.E.E.D.O.M. Framework for founder-led businesses',
    'Closing the strategy-to-execution gap',
    'Building leaders who deliver without you in every decision',
    'Profit per acquisition: removing emotion from growth decisions',
  ],
} as const;

// Site navigation — public-facing top nav.
export const NAV = [
  { label: 'About',      href: '/about' },
  { label: 'Framework',  href: '/framework' },
  { label: 'Services',   href: '/services' },
  { label: 'Clients',    href: '/clients' },
  { label: 'Resources',  href: '/resources' },
  { label: 'FAQ',        href: '/faq' },
  { label: 'Speaking',   href: '/speaking' },
  { label: 'Contact',    href: '/contact' },
] as const;

// Service ladder per doc Section 4. Order = ascending price/commitment.
// Slug = URL segment. Tier = used to style "featured" vs "available."
export const SERVICES = [
  {
    slug: 'freedom-diagnostic',
    title: 'FREEDOM Diagnostic',
    tier: 'free',
    price: 'Free',
    short: '24 questions. Score across 7 domains. Prioritized fix list.',
    description:
      'A 7-domain strategic audit of your business. Outputs a score per domain plus a prioritized fix list. This is where every Metric Mentor Labs engagement starts.',
    forWho: 'Operators at any revenue level. Required entry point for every MML engagement.',
    outcome: 'A clear, written assessment of which of the seven domains is currently the biggest constraint on revenue and freedom.',
    includes: [
      '10–15 minute self-administered diagnostic',
      'Scoring across all seven F.R.E.E.D.O.M. domains',
      'Domain-by-domain interpretation',
      'Prioritized list of what to fix first',
      'No sales call required to view results',
    ],
    cta: 'Take the diagnostic',
    ctaHref: 'https://preview--mmldiagnostic.lovable.app/',
    featured: true,
  },
  {
    slug: 'mml-toolbox',
    title: 'The MML Toolbox',
    tier: 'self-service',
    price: '$97/mo',
    short: 'The complete operating system for $500K–$25M operators, packaged for self-service.',
    description:
      'The same IP used in $2K/mo advisory engagements — frameworks, scorecards, templates, SOPs, and playbooks. No software bundled. Working documents you can install yourself, at your pace.',
    forWho: 'Self-directed operators who want to install the Rev OS themselves.',
    outcome: 'Working documents — not a course — that pay for themselves on the first revenue leak found.',
    includes: [
      'FREEDOM Diagnostic Deep-Dive Kit (workbook, rubric, 90-day priority map)',
      'Revenue Leak Finder Scorecard — 40-point margin diagnostic',
      'Offer Architecture Framework — offer stack and pricing build',
      '90-Day Revenue Sprint Planner — quarter-at-a-glance with KPIs',
      'Hiring & Team Accountability SOPs — role scorecards and onboarding',
      'Financial Foundations Tracker — gross margin, runway, operating leverage',
      'Lead System Build Playbook — predictable lead pipeline architecture',
      'Client Delivery & Fulfillment SOP Library — onboarding through offboarding',
      'Decision Filter Checklist — opportunity evaluation tool',
      'Metric Mentor Monthly Drop — new frameworks and worked case studies each month',
    ],
    cta: 'Get the Toolbox',
    ctaHref: '/contact?service=mml-toolbox',
  },
  {
    slug: 'rise-crm',
    title: 'RISE CRM',
    tier: 'self-service',
    price: '$97/mo',
    short: 'White-label CRM with pipelines, automations, and dashboards built for the Rev OS.',
    description:
      'Built on GoHighLevel infrastructure, configured for MML operators. Pipelines, automations, and reporting dashboards pre-built to match the FREEDOM domains and the Rev OS. A single source of truth for sales, marketing, and reporting without a 6-month implementation.',
    forWho: 'Operators who need their CRM and Rev OS dashboards to ship together as one stack.',
    outcome: 'A single source of truth for sales, marketing, and reporting — live in days, not months.',
    includes: [
      'Hosted CRM with pre-built pipelines',
      'Automation templates aligned to MML playbooks',
      'Reporting dashboards mapped to FREEDOM domains',
      'Integration scaffolding for marketing and fulfillment',
      '"powered by Metric Mentor Labs" attribution lockup',
    ],
    cta: 'Get RISE CRM',
    ctaHref: '/contact?service=rise-crm',
  },
  {
    slug: 'social-growth-bot',
    title: 'Social Growth Bot',
    tier: 'self-service',
    price: '$247/mo',
    short: 'White-label conversational growth platform tuned for operator-led acquisition.',
    description:
      'Built on FlowChat infrastructure. Inbound and outbound messaging automation across major platforms, with conversation flows aligned to MML lead-gen playbooks. Predictable inbound conversation flow without managing a daily DM operation by hand.',
    forWho: 'Operators running social-led acquisition who need top-of-funnel volume without hiring a team.',
    outcome: 'Predictable inbound conversation flow — automated, attributed, integrated with the Rev OS.',
    includes: [
      'DM and messaging automation across major platforms',
      'Pre-built conversation flows aligned to MML lead-gen playbooks',
      'Integration with RISE CRM for unified pipeline',
      'Reporting on top-of-funnel conversion',
      '"powered by Metric Mentor Labs" attribution lockup',
    ],
    cta: 'Get Social Growth Bot',
    ctaHref: '/contact?service=social-growth-bot',
  },
  {
    slug: 'quarterly-advisory',
    title: 'Quarterly Advisory',
    tier: 'advisory',
    price: '$2,000/mo',
    short: 'Application-gated quarterly deep-dive plus async access between quarters.',
    description:
      'For operators who need senior-level pattern recognition every 90 days, with continuous access between sessions. Quarterly clarity on the highest-ROI fix path, with async access for inflection-point decisions.',
    forWho: 'Operators at $1M–$10M who need senior-level oversight without a fractional executive on payroll.',
    outcome: 'Quarterly clarity on the highest-ROI fix path, with continuous access for inflection-point decisions.',
    includes: [
      'Quarterly strategic deep-dive (full-day intensive)',
      '90-day priority plan, written and tracked',
      'Async access between quarters for high-leverage decisions',
      'Reference library access (MML Toolbox)',
      'Optional RISE CRM and Social Growth Bot bundling',
    ],
    cta: 'Apply for advisory',
    ctaHref: '/contact?service=quarterly-advisory',
    application: true,
  },
  {
    slug: 'rev-os-installation',
    title: 'Rev OS Installation',
    tier: 'flagship',
    price: 'Custom — project-based',
    short: 'Full revenue operating system installed inside your business.',
    description:
      'Playbooks, dashboards, operating rhythms, accountability frameworks, and role scorecards installed inside your business. The objective is straightforward: a business that runs the same on Tuesday at 9am as it does when the founder is on vacation.',
    forWho: 'Operators at $1M–$25M committing to a full system install over a defined project window.',
    outcome: 'A business that runs on documented infrastructure rather than the founder’s daily attention.',
    includes: [
      'Discovery and full FREEDOM Diagnostic (paid tier)',
      'Custom playbooks across all 7 domains',
      'Role scorecards and SEAT score role-fit profiling',
      'Reporting dashboards (in RISE or your existing stack)',
      'Operating cadence: weekly, monthly, quarterly meeting structures',
      'Financial Foundations model and KPI tree',
      'Documented SOPs for sales, marketing, hiring, and delivery',
      'Embedded handoff and team training',
    ],
    cta: 'Start with a diagnostic',
    ctaHref: 'https://preview--mmldiagnostic.lovable.app/',
    featured: true,
  },
  {
    slug: 'fractional-growth-leadership',
    title: 'Fractional Growth Leadership',
    tier: 'embedded',
    price: '$2K–$15K+/mo',
    short: 'Embedded growth executive — fractional COO / VP Growth running the system after install.',
    description:
      'Steve operates as a fractional COO, VP Growth, or growth partner — running the system after it is installed, hiring against it, and owning quarterly outcomes. Senior-level execution capacity without a full-time hire — and a documented plan to replace the role with internal leadership when ready.',
    forWho: 'Operators at $3M–$25M who need a senior executive but cannot or should not hire one full-time yet.',
    outcome: 'Senior-level execution capacity without a full-time hire — and a documented plan to replace the role with internal leadership when ready.',
    includes: [
      'Embedded executive role with defined scope and outcomes',
      'Ownership of growth, ops, or full Rev OS execution',
      'Direct team management and hiring',
      'Quarterly board-level reporting',
      'Defined runway with hand-off plan to a full-time replacement',
    ],
    cta: 'Inquire about fractional leadership',
    ctaHref: '/contact?service=fractional-growth-leadership',
    application: true,
  },
] as const;

// F.R.E.E.D.O.M. — Part 2 (the 7-domain diagnostic). This is the public-facing version
// per doc; Part 1 (engagement methodology) lives as a brief sub-section.
export const FREEDOM_DOMAINS = [
  {
    letter: 'F',
    word: 'Financial Foundations',
    headline: 'Is the business profitable enough to fund its own growth?',
    factors: ['Margin health (gross and net)', 'Cash flow and runway', 'Revenue trajectory and trend', 'Pricing architecture', 'Customer concentration'],
    goodLooksLike: 'Monthly P&L by product/service line. Cash position visible in real time. No customer >15–20% of revenue. Pricing reviewed and documented annually.',
  },
  {
    letter: 'R',
    word: 'Revenue Systems',
    headline: 'Can the sales engine run without the founder pushing every deal?',
    factors: ['Sales process definition', 'Pipeline discipline', 'Lead generation infrastructure', 'Conversion systems', 'Scalable acquisition model'],
    goodLooksLike: 'A documented multi-stage sales process. Weekly pipeline reviews. At least one acquisition channel that produces leads without the founder posting personally.',
  },
  {
    letter: 'E',
    word: 'Execution Engine',
    headline: 'Does the team execute consistently — or do things fall through the cracks?',
    factors: ['Accountability rhythm', 'Weekly meeting cadence', '90-day Rocks alignment', 'Scorecard discipline'],
    goodLooksLike: 'Weekly meeting cadence with a written agenda and accountability for outcomes. 90-day Rocks for every team member. Scorecards reviewed weekly.',
  },
  {
    letter: 'E',
    word: 'Employee & Team Excellence',
    headline: 'Is the org structure built for growth — or built around the founder?',
    factors: ['Org structure clarity', 'Role definition', 'Owner extraction plan', 'Delegation maturity', 'Hiring & compensation alignment'],
    goodLooksLike: 'Every role has a scorecard. The founder’s calendar is <30% reactive. Compensation tied to outcomes. Hiring uses a documented scorecard.',
  },
  {
    letter: 'D',
    word: 'Data & Decisions',
    headline: 'Are decisions made from a single source of truth — or the inbox?',
    factors: ['Tech stack efficiency', 'CRM reliability', 'Reporting infrastructure', 'Data integration', 'Decision-making quality'],
    goodLooksLike: 'A single source of truth for sales, ops, and finance. Dashboards updated automatically. Decisions logged. Tech stack consolidated.',
  },
  {
    letter: 'O',
    word: 'Operations & Optimization',
    headline: 'Are processes documented, repeatable, and improvable?',
    factors: ['Systems documentation', 'Automation opportunities', 'Playbook maturity', 'Process consistency', 'Operational efficiency'],
    goodLooksLike: 'Documented playbooks per function, reviewed quarterly. Onboarding runs from documentation, not from the founder’s memory. Automation reviewed and prioritized.',
  },
  {
    letter: 'M',
    word: 'Marketing & Market Position',
    headline: 'Does the market know who you are and why you win?',
    factors: ['Brand clarity', 'Positioning strength', 'Content engine', 'Market awareness', 'Competitive differentiation'],
    goodLooksLike: 'Written positioning. Documented ICP. Content engine that runs without the founder writing every post. Sales team can articulate differentiation cleanly.',
  },
] as const;

// F.R.E.E.D.O.M. — Part 1 (engagement methodology). Shown as a smaller sub-section.
export const FREEDOM_METHODOLOGY = [
  { letter: 'F', word: 'Filter',   description: 'Qualify the operator and the opportunity. Not every business is a fit.' },
  { letter: 'R', word: 'Relate',   description: 'Establish operator-to-operator credibility. Find the language and the pain that match this specific business.' },
  { letter: 'E', word: 'Educate',  description: 'Teach the operating principles and the diagnostic results. The operator must understand the system to defend it later.' },
  { letter: 'E', word: 'Empower',  description: 'Hand over tools, scorecards, and language. The team starts speaking the same operating language.' },
  { letter: 'D', word: 'Define',   description: 'Write the playbooks. Document the SOPs. Lock in role scorecards and KPIs.' },
  { letter: 'O', word: 'Optimize', description: 'Run the system. Iterate weekly and monthly. Tighten where leak persists.' },
  { letter: 'M', word: 'Maximize', description: 'Compound the system. Layer growth, hiring, and acquisition on top of a stable operating base.' },
] as const;

// Anchor case studies. Public per doc Section 7 — disclosure level matches the brief.
export const CASE_STUDIES = [
  {
    slug: 'california-wealth-transitions',
    client: 'California Wealth Transitions (CWT)',
    industry: 'Registered Investment Advisor / Wealth Management',
    metric: '$1B+ AUM',
    engagement: 'Rev OS installation, advisor systemization, AUM growth playbook',
    target: '$250M+ in new AUM over a 36-month window',
    useCase: 'Anchor proof point for financial services and high-trust verticals',
  },
  {
    slug: 'impact-x-performance-san-diego',
    client: 'Impact X Performance San Diego (IXP SD)',
    industry: 'Performance training / fitness',
    operator: 'Todd Durkin (founder)',
    engagement: 'Growth transition playbook',
    useCase: 'Anchor proof point for franchise, gym, and performance verticals',
  },
  {
    slug: 'nutritional-coaching-institute',
    client: 'Nutritional Coaching Institute (NCI)',
    industry: 'Health, wellness, behavior-change coaching',
    role: 'Steve served as COO / VP Growth — $50M+ exit trajectory',
    engagement: 'Scaling beyond founder-led delivery',
    useCase: 'Anchor proof point for coaching, certification, and education brands',
  },
  {
    slug: 'this-naked-mind',
    client: 'This Naked Mind',
    industry: 'Health, wellness, behavior-change coaching',
    engagement: 'Scaling beyond founder-led delivery',
    useCase: 'Coaching and education brands at scale',
  },
] as const;

// ICP — used on /about and /services to make the audience explicit.
export const ICP = {
  primary: {
    label: '$500K–$25M Operators',
    description: 'Owner-operators and founders actively running their businesses, with proven product-market fit and a team that mostly works — but the founder is still the bottleneck.',
    subTiers: [
      { range: '$500K–$1M',  pain: 'Escaping founder-only execution' },
      { range: '$1M–$3M',    pain: 'Installing first real systems and team' },
      { range: '$3M–$10M',   pain: 'Scaling beyond founder-as-bottleneck' },
      { range: '$10M–$25M',  pain: 'Preparing for transition, exit, or institutional next step' },
    ],
  },
  verticals: [
    { name: 'Financial Planning & Wealth Management', anchor: 'California Wealth Transitions ($1B+ AUM)' },
    { name: 'Fitness & Gym Franchises',               anchor: 'Impact X Performance San Diego (Todd Durkin)' },
    { name: 'Health & Wellness Coaching',             anchor: 'Nutritional Coaching Institute · This Naked Mind' },
    { name: 'Service Businesses, Agencies, B2B',      anchor: 'Industry-agnostic — same diagnostics, different noun' },
  ],
} as const;

// 15 named operational pains per doc Section 3. Used in copy on home + services.
export const PAINS = [
  'Revenue rollercoaster — months oscillate up and down with no underlying explanation.',
  'Founder dependency — the business slows or stops the moment the owner steps away.',
  'No documented systems or SOPs — knowledge lives in the founder’s head and a few key people.',
  'Marketing spend without measurable ROI — running ads and content with no attribution model.',
  'Inconsistent team performance — same role, different humans, wildly different output.',
  'No financial visibility — decisions made on bank balance and gut, not margin and unit economics.',
  'Undefined sales process — every deal is a custom build, every quarter is a guess.',
  'No predictable lead generation — pipeline depends on referrals and personal effort.',
  'Hiring and firing without clarity — gut hires, slow firings, no scorecards.',
  'Stuck at a revenue ceiling — $1M, $3M, $10M plateaus that won’t break.',
  'Burned by coaches, courses, and masterminds that didn’t deliver infrastructure.',
  'Working in the business, not on it — every day is reactive.',
  'Can’t take a real vacation — 7 days unplugged means 30 days of cleanup.',
  'No clear KPIs — can name revenue, can’t name the 5 numbers that drive revenue.',
  'Operating chaos disguised as "hustle" — the team is busy; the business is leaking.',
] as const;

// Trigger events — the moments when an ICP operator is most likely to take action.
export const TRIGGERS = [
  'Hit a revenue ceiling and have plateaued for 2+ quarters',
  'Lost a key team member and exposed the dependency',
  'Just exited a coach, mastermind, or program that didn’t deliver',
  'Margin compression — revenue is up but profit is down',
  'Considering an exit or capital raise but realize the business isn’t ready',
  'Burnout — physical, emotional, or operational',
  'A failed product launch or campaign with no diagnostic on why',
  'A new partner, hire, or acquisition exposing how undocumented the business is',
] as const;

// Linktree-style page targets. Live URLs Steve uses across social bios.
export const LINKS = [
  { label: 'Take the FREEDOM Diagnostic',   href: 'https://preview--mmldiagnostic.lovable.app/', primary: true },
  { label: 'Book Steve to Speak',           href: '/speaking' },
  { label: 'Listen to The Metric Mentor Podcast', href: 'https://www.youtube.com/@stevekopshaw' },
  { label: 'The MML Toolbox — $97/mo',      href: '/services/mml-toolbox' },
  { label: 'Quarterly Advisory — Apply',    href: '/services/quarterly-advisory' },
  { label: 'Email steve@metricmentorlabs.com', href: 'mailto:steve@metricmentorlabs.com' },
  { label: 'Instagram',                     href: 'https://www.instagram.com/stevekopshaw' },
  { label: 'YouTube',                       href: 'https://www.youtube.com/@stevekopshaw' },
  { label: 'TikTok',                        href: 'https://www.tiktok.com/@stevekopshaw' },
  { label: 'LinkedIn',                      href: 'https://www.linkedin.com/in/stevekopshaw' },
  { label: 'X / Twitter',                   href: 'https://twitter.com/stevekopshaw' },
] as const;
