window.PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Shipping Rules Automation",
    subtitle: "Manage shipping rules, automate workflows, and monitor fulfillment settings from one centralized interface.",
    role: "UX/UI Designer",
    industry: "Logistics & E-commerce",
    duration: "3 months",
    thumb: "assets/project-1.png",
    heroImage: "assets/project-1.png",
    grid1: ["assets/detail-shipping-1.png", "assets/mockup-1-6710bb.png"],
    grid2: ["assets/mockup-2.png", "assets/detail-shipping-1.png"],
    fullImage: "assets/project-1.png",
    stage1: "Started by reviewing how warehouse managers and store owners set up shipping rules in the old system. Through user interviews and screen recordings, I noticed people got lost switching between carrier tabs, weight tiers, and regional tax settings. Many users made mistakes simply because they could not preview how a rule would behave before turning it live.",
    stage2: "Created a clear step by step rule builder where conditions and actions live on a single screen. I grouped common shipping triggers into simple cards and added a live order simulator on the side so teams can test any rule right away without risking real customer orders.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Sketched the core rule builder, carrier fallback flow, and bulk edit screens to cut down the number of clicks needed to create a new shipping condition."
      },
      {
        label: "UI Design & Components:",
        text: "Built a clean component library with clear status badges, condition pills, and readable tables so operations teams can scan dozens of active rules in seconds."
      },
      {
        label: "Interactive Prototype:",
        text: "Put together a clickable prototype to test edge cases like multi warehouse routing, free shipping thresholds, and express delivery overrides."
      }
    ],
    stage4: "Shared the prototype with six operations leads who handle daily fulfillment. Their feedback helped simplify the priority ordering system using simple drag handles and clearer warning messages when two shipping rules overlap.",
    stage5: "Worked closely with frontend engineers to make sure every rule state, hover feedback, and responsive table breakpoint matched the final design. Also documented edge case states like empty rule lists and failed carrier syncs.",
    outcomes: "Teams reduced the time spent configuring shipping rules by more than half and reported far fewer fulfillment routing errors during peak sale weeks. New team members were able to understand and update automation rules on their very first day."
  },
  {
    id: 2,
    title: "Procurement Operations Dashboard",
    subtitle: "Track purchase requests, supplier activity, approvals, and spending across procurement workflows.",
    role: "UX/UI Designer",
    industry: "B2B SaaS & Supply Chain",
    duration: "4 months",
    thumb: "assets/mockup-4.png",
    heroImage: "assets/mockup-4.png",
    grid1: ["assets/detail-procurement-1.png", "assets/mockup-3.png"],
    grid2: ["assets/mockup-4.png", "assets/detail-procurement-1.png"],
    fullImage: "assets/detail-procurement-1.png",
    stage1: "Talked with finance managers and procurement coordinators to see why purchase approvals were getting delayed. Most teams were chasing updates across emails and spreadsheets because the existing dashboard buried pending requests under too many nested menus.",
    stage2: "Designed a role focused home view that brings pending approvals, budget limits, and active vendor deliveries right to the top. The goal was to let approvers review context, check remaining department budget, and approve or request changes in under thirty seconds.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Mapped out the request to approval journey, splitting complex purchase forms into quick scannable sections with smart vendor defaults."
      },
      {
        label: "UI Design & Components:",
        text: "Created clean spend summary cards, supplier scorecards, and filterable ledger tables with clear visual hierarchy so numbers stay easy to read."
      },
      {
        label: "Interactive Prototype:",
        text: "Built a working prototype covering purchase request creation, multi step manager sign off, and real time budget variance alerts."
      }
    ],
    stage4: "Tested the redesigned flows with eight procurement specialists and finance reviewers. Based on their input, I added a quick comparison drawer so managers can view past vendor quotes side by side before approving a new order.",
    stage5: "Partnered with the engineering team during sprint handoff to refine data table sorting, keyboard navigation, and responsive layouts for tablet approvals on the go.",
    outcomes: "Average purchase approval time dropped from three days to just a few hours. Finance teams gained clear visibility into monthly department spend without needing manual spreadsheet exports."
  },
  {
    id: 3,
    title: "Customer Support Dashboard UI for SaaS",
    subtitle: "A collection of projects I've worked on, exploring ideas, solving problems, and creating thoughtful UX.",
    role: "UX/UI Designer",
    industry: "Customer Experience SaaS",
    duration: "3 months",
    thumb: "assets/project-3-5d01a6.png",
    heroImage: "assets/project-3-5d01a6.png",
    grid1: ["assets/detail-support-1.png", "assets/mockup-7-4a2d52.png"],
    grid2: ["assets/mockup-8-159c0c.png", "assets/detail-support-1.png"],
    fullImage: "assets/project-3-5d01a6.png",
    stage1: "Observed support agents during live shifts to understand what slowed down their ticket responses. Agents had to keep four browser tabs open just to check billing history, recent activity logs, and canned replies while talking to a customer.",
    stage2: "Restructured the workspace around a clean three column layout where the ticket queue, conversation thread, and customer profile sit side by side. Prioritized keyboard shortcuts and instant context cards so agents never lose focus.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Explored multiple split view layouts to balance reading comfort with quick access to customer order details and internal team notes."
      },
      {
        label: "UI Design & Components:",
        text: "Designed calm, low fatigue neutral surfaces with clear SLA countdown pills, priority tags, and distinct visual separation between public replies and internal notes."
      },
      {
        label: "Interactive Prototype:",
        text: "Simulated a real live queue with instant ticket filtering, slash command macro insertion, and seamless ticket handoff between teammates."
      }
    ],
    stage4: "Ran usability sessions with twelve support agents across tier one and tier two teams. They loved the unified customer sidebar and suggested pinning urgent billing flags at the top of the panel, which I added right away.",
    stage5: "Delivered pixel accurate specs, spacing tokens, and interactive states to the product engineering team, supporting QA reviews through final production rollout.",
    outcomes: "Support teams improved first response speed and handled daily ticket volume with noticeably less stress. New agents learned the workspace quickly without long onboarding sessions."
  },
  {
    id: 4,
    title: "CryptoPulse Asset Tracker",
    subtitle: "Follow portfolio performance, market movements, and digital asset activity through a focused mobile experience.",
    role: "UX/UI Designer",
    industry: "Fintech & Web3 Mobile",
    duration: "2.5 months",
    thumb: "assets/project-4.png",
    heroImage: "assets/project-4.png",
    grid1: ["assets/detail-crypto-1.png", "assets/mockup-5-61ff1e.png"],
    grid2: ["assets/mockup-6.png", "assets/detail-crypto-1.png"],
    fullImage: "assets/detail-crypto-1.png",
    stage1: "Reviewed feedback from everyday crypto investors who felt overwhelmed by cluttered trading apps full of noisy tickers and confusing charts. Users just wanted a calm, trustworthy place to check their total balance, daily gains, and coin news.",
    stage2: "Focused the experience on clarity and speed. I stripped away unnecessary trading clutter from the home screen and built a clean portfolio overview with interactive timeframe scrubbing and simple profit and loss breakdowns.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Mapped out the onboarding wallet sync, main portfolio feed, asset detail view, and custom price alert setup on mobile screens."
      },
      {
        label: "UI Design & Components:",
        text: "Crafted crisp number typography, gentle green and red trend indicators, and modular asset cards that stay readable even during fast market moves."
      },
      {
        label: "Interactive Prototype:",
        text: "Built smooth touch gestures for scrubbing price history charts, switching currencies, and pinning favorite tokens to the top watchlist."
      }
    ],
    stage4: "Tested the mobile prototype with ten casual and active investors. Users appreciated how easy it was to read their net allocation at a glance and asked for a quick privacy toggle to hide balances in public spaces.",
    stage5: "Collaborated with iOS and Android developers to fine tune chart touch targets, haptic feedback points, and smooth screen transitions.",
    outcomes: "Beta testers checked their portfolio more consistently and rated the app significantly easier to understand compared to traditional exchange apps."
  },
  {
    id: 5,
    title: "Smart Invoice Manager",
    subtitle: "Create invoices, track payments, and manage billing activity with a simple mobile workflow.",
    role: "UX/UI Designer",
    industry: "Freelance & Small Business Fintech",
    duration: "3 months",
    thumb: "assets/project-5.png",
    heroImage: "assets/project-5.png",
    grid1: ["assets/detail-invoice-1.png", "assets/mockup-3.png"],
    grid2: ["assets/mockup-2.png", "assets/detail-invoice-1.png"],
    fullImage: "assets/detail-invoice-1.png",
    stage1: "Interviewed freelancers, studio owners, and consultants about how they send invoices on the go. Many avoided mobile invoicing apps because typing client details, tax rates, and line items on a small screen felt slow and error prone.",
    stage2: "Designed a guided, tap friendly invoice builder that remembers past clients, saved hourly rates, and tax presets. Users can generate a polished PDF invoice and send a payment link in less than a minute.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Simplified the five step billing form into a clean single flow with smart auto fill suggestions and an instant live preview."
      },
      {
        label: "UI Design & Components:",
        text: "Created clear payment status tags for paid, pending, and overdue invoices along with clean monthly revenue summary cards."
      },
      {
        label: "Interactive Prototype:",
        text: "Prototyped the full cycle from adding billable hours to sending a friendly automated payment reminder with one tap."
      }
    ],
    stage4: "Walked nine independent freelancers through the prototype on their phones. Their feedback helped refine the overdue reminder wording and made switching between multiple client currencies effortless.",
    stage5: "Worked alongside mobile engineers to polish form validation, PDF preview rendering, and smooth micro interactions across iOS and Android.",
    outcomes: "Users created and sent invoices noticeably faster from their phones and saw quicker client payments thanks to clear payment links and gentle reminders."
  },
  {
    id: 6,
    title: "Personal Finance Manager",
    subtitle: "Review account balances, send transfers, and understand spending through clear mobile financial tools.",
    role: "UX/UI Designer",
    industry: "Personal Banking & Fintech",
    duration: "3.5 months",
    thumb: "assets/project-6.png",
    heroImage: "assets/project-6.png",
    grid1: ["assets/detail-finance-1.png", "assets/mockup-5-61ff1e.png"],
    grid2: ["assets/mockup-6.png", "assets/detail-finance-1.png"],
    fullImage: "assets/detail-finance-1.png",
    stage1: "Conducted user interviews with young professionals who struggled to keep track of subscriptions, shared bills, and monthly savings goals. Existing banking apps showed long lists of raw transaction codes without explaining where money actually went.",
    stage2: "Built a human friendly money overview that automatically groups expenses into clear everyday categories and highlights upcoming recurring bills before they hit the account.",
    stage3: [
      {
        label: "Wireframing:",
        text: "Designed clean home balances, quick peer to peer transfer sheets, and simple monthly budget progress bars."
      },
      {
        label: "UI Design & Components:",
        text: "Focused on calm spacing, readable transaction rows with merchant icons, and friendly visual breakdowns that make budgeting feel approachable."
      },
      {
        label: "Interactive Prototype:",
        text: "Created an interactive mobile flow for setting a monthly savings target, splitting a dinner bill, and reviewing weekly spending insights."
      }
    ],
    stage4: "Tested the prototype with eleven users across different age groups. Participants found the upcoming bills timeline especially helpful for avoiding surprise overdrafts and suggested adding quick category recategorization.",
    stage5: "Supported the engineering team with detailed interaction specs, empty state illustrations, and accessible contrast checks across every screen.",
    outcomes: "Test users felt much more confident about their monthly cash flow and could spot unwanted subscriptions within seconds of opening the app."
  }
];

