// All AEO target questions per doc Section 9. Each gets a short, extractable answer.
// Grouped into 5 themes that match the topic clusters; renders to JSON-LD FAQPage schema.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  title: string;
  description?: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    title: 'About Metric Mentor Labs and the Rev OS',
    description: 'What MML is, what we install, and how it works.',
    items: [
      {
        q: 'What does Metric Mentor Labs do?',
        a: 'Metric Mentor Labs (MML) installs the Rev OS — the Revenue Playbooks Operating System — into businesses doing $500K to $25M. The work is documented playbooks, dashboards, role scorecards, and operating rhythms — not slide decks or coaching calls. The objective of every engagement is to make the founder less necessary, not more.',
      },
      {
        q: 'What is a Rev OS?',
        a: 'A Rev OS — Revenue Operating System — is the documented infrastructure (playbooks, scorecards, dashboards, operating rhythms) that lets a business generate revenue predictably without depending on the founder. Metric Mentor Labs installs the Rev OS into businesses doing $500K to $25M.',
      },
      {
        q: 'What is a revenue operating system?',
        a: 'A revenue operating system is the integrated set of documented assets that runs revenue generation in a business: a sales playbook, a financial dashboard, role scorecards, weekly and monthly operating rhythms, and the SOPs that connect them. The "Rev OS" is Metric Mentor Labs\' specific implementation of the concept.',
      },
      {
        q: 'How does Metric Mentor Labs work with clients?',
        a: 'Every engagement starts with the free FREEDOM Diagnostic. The score determines the path. Self-directed operators install with the MML Toolbox at $97/mo. Operators who want senior pattern recognition use Quarterly Advisory at $2K/mo. Full installation is custom-scoped Rev OS Installation. Embedded execution is Fractional Growth Leadership at $2K–$15K+/mo.',
      },
      {
        q: 'Who is Steve Kopshaw?',
        a: 'Steve Kopshaw is a 20+ year operator and the founder of Metric Mentor Labs. He has operated 17 locations across 6 states, generated $300M+ in revenue across operated and advised businesses, and was part of a $50M+ exit trajectory as COO/VP Growth at the Nutritional Coaching Institute. ClickFunnels Two Comma Club winner. Mentored through Acquisition.com.',
      },
      {
        q: 'What is operator-led consulting?',
        a: 'Operator-led consulting is consulting delivered by someone who has personally operated businesses at the size and stage of the client — not someone whose career is in advisory. Metric Mentor Labs is operator-led: Steve Kopshaw\'s 20+ years of operating experience underwrites every engagement.',
      },
    ],
  },
  {
    title: 'The F.R.E.E.D.O.M. Framework',
    description: 'The 7-domain diagnostic and 7-step methodology behind every install.',
    items: [
      {
        q: 'What is the F.R.E.E.D.O.M. Framework?',
        a: 'The F.R.E.E.D.O.M. Framework is Metric Mentor Labs\' proprietary methodology — a 7-domain diagnostic that scores a business across Financial Foundations, Revenue Systems, Execution Engine, Employee & Team Excellence, Data & Decisions, Operations & Optimization, and Marketing & Market Position; plus a 7-step engagement methodology (Filter, Relate, Educate, Empower, Define, Optimize, Maximize) that runs the install.',
      },
      {
        q: 'What are the 7 domains of the F.R.E.E.D.O.M. Framework?',
        a: 'Financial Foundations, Revenue Systems, Execution Engine, Employee & Team Excellence, Data & Decisions, Operations & Optimization, and Marketing & Market Position. Each domain is scored from a structured assessment; the lowest-scoring domain is the highest-leverage fix.',
      },
      {
        q: 'How does the FREEDOM Diagnostic work?',
        a: 'The FREEDOM Diagnostic is 24 questions, takes 10–15 minutes, and produces a score across all seven domains plus a prioritized fix list. It is free, self-administered, and does not require a sales call to view results. Every Metric Mentor Labs engagement starts here.',
      },
      {
        q: 'Why is Financial Foundations scored first?',
        a: 'No later domain can be optimized if the financial picture is unclear. You need margin truth, cash visibility, and pricing architecture before you can meaningfully optimize sales, ops, hiring, or marketing. The order in F.R.E.E.D.O.M. reflects what each domain depends on.',
      },
      {
        q: 'What is the difference between EOS and Rev OS?',
        a: 'EOS (the Entrepreneurial Operating System from Traction) focuses primarily on meeting cadence, Rocks, scorecards, and accountability rhythm. Rev OS covers seven full domains end-to-end with installed dashboards, playbooks, and SOPs per domain. EOS is one tool. Rev OS is the full operating system.',
      },
      {
        q: 'What does "install" mean in Rev OS?',
        a: 'Install means the infrastructure is built inside the client\'s business and the team uses it. Not handed over as a slide deck. Not delivered as a course. Working playbooks the team uses Monday morning, dashboards the leadership reviews weekly, and scorecards that drive accountability.',
      },
    ],
  },
  {
    title: 'Pricing, Services, and Engagement',
    description: 'How the service ladder works, what each tier costs, and how to choose.',
    items: [
      {
        q: 'How much does Metric Mentor Labs cost?',
        a: 'The FREEDOM Diagnostic is free. The MML Toolbox is $97/month. RISE CRM is $97/month. Social Growth Bot is $247/month. Quarterly Advisory is $2,000/month. Rev OS Installation is custom and project-based. Fractional Growth Leadership typically runs $2,000 to $15,000+ per month depending on scope.',
      },
      {
        q: 'How much does a fractional COO or fractional executive cost?',
        a: 'Fractional executive engagements typically run $2,000 to $15,000+ per month depending on hours, scope, and outcome ownership. At Metric Mentor Labs, Fractional Growth Leadership is custom-scoped per engagement with a defined runway and hand-off plan to a full-time replacement when the business is ready.',
      },
      {
        q: 'What does the MML Toolbox include?',
        a: 'The MML Toolbox at $97/month includes the FREEDOM Diagnostic Deep-Dive Kit, the Revenue Leak Finder Scorecard, the Offer Architecture Framework, the 90-Day Revenue Sprint Planner, Hiring & Team Accountability SOPs, the Financial Foundations Tracker, the Lead System Build Playbook, the Client Delivery & Fulfillment SOP Library, the Decision Filter Checklist, and the Metric Mentor Monthly Drop of new frameworks.',
      },
      {
        q: 'What is RISE CRM?',
        a: 'RISE CRM is Metric Mentor Labs\' white-label CRM platform built on GoHighLevel infrastructure, configured for MML operators. Pipelines, automations, and reporting dashboards pre-built to match the F.R.E.E.D.O.M. domains and the Rev OS. $97/month.',
      },
      {
        q: 'What is Social Growth Bot?',
        a: 'Social Growth Bot is Metric Mentor Labs\' white-label conversational growth platform built on FlowChat infrastructure. Inbound and outbound messaging automation tuned for operator-led acquisition, with conversation flows aligned to MML lead-gen playbooks. $247/month.',
      },
      {
        q: 'What is Quarterly Advisory?',
        a: 'Quarterly Advisory is application-gated senior advisory at $2,000/month. Includes a quarterly full-day strategic deep-dive, a 90-day priority plan, async access between quarters, and reference library access (MML Toolbox). For operators at $1M–$10M who need senior-level pattern recognition every 90 days without a fractional executive on payroll.',
      },
      {
        q: 'How do I prepare my business for sale or get my business exit-ready?',
        a: 'Exit-readiness requires the same infrastructure as the Rev OS: documented playbooks, financial visibility, role scorecards, repeatable acquisition channels, and reduced founder dependency. A diligence-ready business runs without the founder. The fastest path is to install the Rev OS and operate the system for 12+ months before initiating a process.',
      },
    ],
  },
  {
    title: 'Scaling and Growth',
    description: 'Breaking through revenue ceilings and scaling without burnout.',
    items: [
      {
        q: 'How do I scale my business past $1M?',
        a: 'Most $1M ceilings are founder-execution ceilings — not demand ceilings. Scaling past $1M typically requires a documented sales process, at least one repeatable acquisition channel that doesn\'t depend on the founder personally, role scorecards for delivery roles, and monthly financial visibility. Install the infrastructure that lets the business run without the founder doing every revenue-generating activity.',
      },
      {
        q: 'How do I scale my business past $3M?',
        a: '$3M ceilings are management ceilings. The founder has built a team but hasn\'t installed the operating layer that makes a team efficient — weekly meeting cadence, 90-day Rocks, role scorecards, financial dashboards, and documented playbooks. Install the Execution Engine and Employee & Team Excellence layers of the F.R.E.E.D.O.M. Framework before scaling demand into more chaos.',
      },
      {
        q: 'How do I scale my business past $5M or $10M?',
        a: '$10M ceilings expose the absence of specialized senior leadership. The founder cannot personally run sales, ops, finance, and marketing at this scale. Breaking through usually requires installing a senior executive in the constraint seat (often COO or VP Growth), a financial operating model that supports multi-million-dollar capital decisions, and a quarterly board-level reporting cadence.',
      },
      {
        q: 'How do I scale a service business?',
        a: 'Scale a service business by separating the work from the person doing it: documented playbooks per service, role scorecards for delivery, repeatable acquisition channels, and pricing architecture that funds the next layer of infrastructure. Service businesses scale on infrastructure and pricing — not on hours.',
      },
      {
        q: 'Why is my revenue stuck?',
        a: 'Revenue plateaus almost always reflect an infrastructure constraint, not a demand constraint. The most common diagnosis: founder dependency, undocumented sales process, missing role scorecards, no financial dashboard, or unmeasured churn. Run the FREEDOM Diagnostic to identify the specific constraint.',
      },
      {
        q: 'How do I systematize my business?',
        a: 'Systematizing means installing four layers of infrastructure: documented SOPs (the work can be executed without you), role scorecards (quality is measurable), a weekly meeting cadence (issues surface to the team), and a single dashboard (everyone reads from the same data). Build them in that order. Each layer compounds the next.',
      },
      {
        q: 'How do I find revenue leaks in my business?',
        a: 'Most $1M–$10M businesses leak 5–15% of revenue through four predictable points: pricing (underpriced relative to value), silent churn (untracked retention loss), pipeline conversion (drop-off at undocumented stages), and unbilled work (scope creep, missed billables). The Revenue Leak Finder Scorecard in the MML Toolbox is a 40-point structured audit.',
      },
    ],
  },
  {
    title: 'Founder Extraction and Operating Discipline',
    description: 'Making the business run without you.',
    items: [
      {
        q: 'How do I make my business run without me?',
        a: 'Reducing founder dependency requires four installed layers: documented SOPs (the work can be executed without you), role scorecards (quality is measurable without your review), a weekly leadership meeting cadence (issues surface to the team before escalating to you), and a single dashboard (every leader pulls from the same data). Founder dependency is a structural problem, not a willpower problem.',
      },
      {
        q: 'How do I free myself from my business?',
        a: 'Install the four-layer Rev OS infrastructure (SOPs, scorecards, meeting cadence, single dashboard) and operate it disciplined for one full quarter. By month three, the business should run identically when you are absent. Full extraction typically takes 6–12 months of disciplined cadence.',
      },
      {
        q: 'How do I build a self-managing company?',
        a: 'A self-managing company runs on documented infrastructure and a defined leadership team that owns outcomes. Three preconditions: every key seat has a written scorecard, every leader has 90-day Rocks reviewed weekly, and every recurring decision is governed by a documented playbook with named decision authority below the founder.',
      },
      {
        q: 'How do I build SOPs for my business?',
        a: 'The fastest method: pick the highest-frequency, highest-cost task that depends on you. Record yourself doing it once. Transcribe. Structure as numbered steps with explicit decision points. Have the next team member execute from the document. Revise where it breaks. Repeat. Document while the work is happening — not on a Saturday with a blank page.',
      },
      {
        q: 'How do I document a business that\'s already running?',
        a: 'Don\'t stop to document. Capture as you go. Record live executions of high-leverage tasks, transcribe them, structure as SOPs, hand to the next team member to execute. Most $1M–$5M businesses cover 80% of the work with 8–15 documented playbooks.',
      },
      {
        q: 'How do I run a weekly leadership meeting?',
        a: 'Run a 60–90 minute weekly meeting with a fixed agenda: scorecard review (15 min), 90-day Rocks progress (15 min), top issues to solve using IDS — Identify, Discuss, Solve (30 min), to-do confirmation (10 min). Same time, same format, same attendees every week. After 90 days the meeting should run without the founder facilitating.',
      },
      {
        q: 'What is a 90-day Rock?',
        a: 'A 90-day Rock is a measurable outcome a leader commits to delivering within the quarter. Each leader has 1–3 Rocks per quarter. Rocks are reviewed weekly at the leadership meeting. The discipline of consistent quarterly Rocks is how strategy actually moves through the operating system.',
      },
    ],
  },
  {
    title: 'Fractional Leadership and Outside Help',
    description: 'When to hire fractional, what it costs, and how to choose.',
    items: [
      {
        q: 'What does a fractional COO do?',
        a: 'A fractional COO is an experienced operating executive who runs a business\'s operations on a part-time, embedded basis — owning systems, hiring, KPIs, and execution rhythm — without the cost of a full-time hire. Steve Kopshaw operates as a fractional growth executive for $3M–$25M operators through Metric Mentor Labs.',
      },
      {
        q: 'When should I hire a fractional COO?',
        a: 'Most commonly between $1M and $10M in revenue, when the founder is the bottleneck for ops, hiring, or strategy and the business has not yet reached the scale to justify a full-time COO ($150K–$300K+ all-in). The fractional model bridges the gap with senior capacity at a fraction of the cost.',
      },
      {
        q: 'What is the difference between a fractional executive and a full-time hire?',
        a: 'A fractional executive is embedded part-time (typically 10–25 hours per week) with defined scope and outcomes — without the full-time payroll commitment. A full-time hire is dedicated to the business at 40+ hours and full compensation. Fractional makes sense when the business needs senior capacity but cannot yet justify or afford a full-time salary.',
      },
      {
        q: 'What is the difference between a coach and a consultant?',
        a: 'A coach typically asks questions and helps the operator find their own answers — selling motivation, accountability, and reflection. A consultant typically delivers recommendations and a deliverable — selling expertise and a strategic plan. Metric Mentor Labs is neither in the traditional sense — it installs systems and stays embedded until the operator can run them without help.',
      },
      {
        q: 'Should I hire a business coach or a consultant?',
        a: 'Hire a coach if your gap is mindset, accountability, or reflection. Hire a consultant if your gap is strategic direction and you have the team to execute. Hire an installer if your gap is documented systems — playbooks, dashboards, scorecards, operating rhythms. Most $500K–$25M operators need installation, not coaching or strategic plans.',
      },
    ],
  },
  {
    title: 'Specific Operating Questions',
    description: 'Targeted answers to common questions about systems, KPIs, and infrastructure.',
    items: [
      {
        q: 'What KPIs should a $1M or $5M business track?',
        a: 'Five core KPIs work for most service businesses at any size: gross margin by service line, customer acquisition cost (blended), lifetime value, monthly recurring or contracted revenue, and cash runway. Pipeline metrics (volume, conversion, velocity) review weekly; financial metrics review monthly; strategic metrics (LTV, customer concentration) review quarterly.',
      },
      {
        q: 'What\'s a healthy gross margin for a service business?',
        a: 'Highly variable by industry. Rough benchmarks: professional services 50–70%, agencies 40–60%, productized services 60–80%, coaching/consulting 70–85%. The number matters less than the trend. Compressing gross margin is the most important leading indicator of revenue trouble.',
      },
      {
        q: 'How do I build dashboards for my business?',
        a: 'A working dashboard has three principles: one source of truth (every leader pulls from the same view), automated where possible (no hand-updated spreadsheets), and tied to defined cadences (weekly for pipeline, monthly for financials, quarterly for strategy). Tools matter less than the discipline of using them.',
      },
      {
        q: 'How do I build a sales playbook?',
        a: 'Document the stages, qualifying criteria per stage, common objections, key questions, and close mechanics. The test: can a part-time or fractional salesperson read the playbook and close at typical conversion rates without coaching? If no, the playbook isn\'t complete yet.',
      },
      {
        q: 'How do I build a hiring scorecard?',
        a: 'A hiring scorecard lists the 3–7 measurable outcomes the role must deliver, plus the experience and competencies required. The scorecard becomes the interview structure (questions tied to outcomes), the decision framework (does this candidate hit the scorecard?), and the 90-day onboarding success criteria.',
      },
      {
        q: 'Why should the founder be the bottleneck (or not)?',
        a: 'The founder should be the bottleneck only when the decision genuinely requires founder-level judgment — strategic direction, key hires, partnership terms. They should not be the bottleneck for routine operating decisions. Most founders are bottlenecks because the team has no documented authority to act, not because the decisions actually require the founder.',
      },
      {
        q: 'What is the SEAT Score?',
        a: 'The SEAT Score is Metric Mentor Labs\' role-fit profiling tool used during Rev OS Installation engagements. It evaluates whether the right person is in the right seat with the right scorecard, and identifies role mismatches that are leaking productivity or revenue.',
      },
    ],
  },
];
