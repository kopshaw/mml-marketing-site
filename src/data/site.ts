// Single source of truth for site-wide constants used in SEO metadata and JSON-LD.
// Edit here once → propagates to every page's <head>, sitemap, and structured data.

export const SITE = {
  url: 'https://metricmentorlabs.com',
  name: 'Metric Mentor Labs',
  tagline: 'Revenue Playbooks Operating System',
  description:
    'Metric Mentor Labs installs the Rev OS — the Revenue Playbooks Operating System — into entrepreneur-led businesses, powered by the F.R.E.E.D.O.M. Framework. Scale revenue with structure, accountability, and proven playbooks.',
  shortDescription:
    'We install the Rev OS into your business so you can scale with clarity. Powered by the F.R.E.E.D.O.M. Framework.',
  founder: {
    name: 'Steve Kopshaw',
    jobTitle: 'Founder, Business Mentor & Speaker',
    email: 'steve@metricmentorlabs.com',
    sameAs: [
      // Add social profile URLs as available
      'https://open.spotify.com/episode/2JBnx0FGduPrmlv65wdj7p',
    ],
    image: '/images/steve-kopshaw.jpg',
  },
  ogImage: '/og-default.png', // Replace once a real OG image is uploaded
  twitterHandle: '@metricmentorlabs',
} as const;

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Framework', href: '/framework' },
  { label: 'Services', href: '/services' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SERVICES = [
  {
    slug: 'rev-os-installation',
    title: 'Rev OS Installation',
    short: 'The Revenue Playbooks Operating System — installed into your business.',
    description:
      'A complete growth engine: playbooks, dashboards, and accountability baked in. Designed for founder-led businesses ready to systemize revenue.',
  },
  {
    slug: 'leadership-development',
    title: 'Leadership Development',
    short: 'Inspire, motivate, and guide teams using the F.R.E.E.D.O.M. Framework.',
    description:
      'Enhance leadership capabilities so your team executes with autonomy. Move from being the bottleneck to building leaders who deliver results without you in every decision.',
  },
  {
    slug: 'revenue-growth-consulting',
    title: 'Revenue Growth Consulting',
    short: 'Data-driven playbooks designed to maximize your business potential.',
    description:
      'Identify and leverage revenue opportunities at every stage of your business. We bring the playbooks, dashboards, and decision frameworks that turn growth from luck into a system.',
  },
  {
    slug: 'strategic-execution-coaching',
    title: 'Strategic Execution Coaching',
    short: 'Close the gap between strategy and execution.',
    description:
      'Move from ideas to results with clear accountability and systems. We help leaders translate strategy into weekly execution rhythms that compound.',
  },
] as const;

export const FREEDOM_STEPS = [
  { letter: 'F', word: 'Filter', icon: 'Filter', description: 'Establishing a foundation and focus. We leverage the profit per acquisition formula to reduce emotion and drive active decision-making.' },
  { letter: 'R', word: 'Relate', icon: 'Link', description: 'Associate a person or system with each priority. Integrate it into your schedule to ensure it gets the attention it deserves.' },
  { letter: 'E', word: 'Educate', icon: 'BookOpen', description: 'As leaders, it’s our responsibility to educate our team or provide them with educational opportunities for continuous learning.' },
  { letter: 'E', word: 'Empower', icon: 'Zap', description: 'Empower your team to execute. Stop being the bottleneck — let your people take ownership and deliver results.' },
  { letter: 'D', word: 'Define', icon: 'Target', description: 'Precisely define success criteria for every project or outcome so leaders can measure progress without micromanaging.' },
  { letter: 'O', word: 'Optimize', icon: 'Settings', description: 'With current resources, can we increase efficiency and output? Optimization is the first step in our ‘MORE’ strategy.' },
  { letter: 'M', word: 'Maximize', icon: 'Maximize', description: 'Evaluate whether additional resources increase output enough to justify the investment. This is where maximum growth happens.' },
] as const;

export const STATS = [
  { number: '20+', label: 'Years Experience' },
  { number: '100+', label: 'Rev OS Installs' },
  { number: '$300M+', label: 'Revenue Generated' },
] as const;
