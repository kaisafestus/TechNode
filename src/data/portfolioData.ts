export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  description: string;
  previewUrl?: string;
  previewImage?: string;
  githubUrl: string;
  featured: boolean;
  roleRelevance?: string[];
  architectureDetails: {
    overview: string;
    keyFeatures: string[];
    technicalHighlights: string[];
    securityReliabilityInvariants: string[];
  };
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
}

export const PROFILE = {
  name: "Festus Kaisa",
  displayName: "Festus Kaisa",
  title: "Mobile App Developer | Full-Stack Software Engineer",
  email: "kaisafestus11@gmail.com",
  phone: "+254 742 173 126",
  phoneDisplay: "+254 742 173 126",
  phoneRaw: "254742173126",
  location: "Nairobi, Kenya",
  githubUrl: "https://github.com/kaisafestus",
  linkedinUrl: "https://www.linkedin.com/in/festus-kaisa",
  whatsappUrl: "https://wa.me/254742173126?text=Hi%20Festus,%20I'm%20interested%20in%20working%20with%20you!",
  resumePdfUrl: "/assets/profile/Festus_Kaisa_Resume.pdf",
  photos: {
    hero: "/kaisa.jpeg",
    about: "/full2.jpeg",
    avatar: "/kaisa.jpeg"
  },
  summary: "Mobile App Developer and Full-Stack Software Engineer with experience designing, testing, and maintaining production Flutter mobile applications and full-stack web platforms using Dart, TypeScript, Next.js, and JavaScript. At Yohpal International Limited, responsibilities span software development, software testing, maintenance, technical documentation, and SQL-based data management across shipped applications. Independently delivered production-grade systems spanning fintech tools, booking platforms, encrypted messaging apps, and security tooling."
};

export const PROJECTS: Project[] = [
  {
    id: "yohpal-connect",
    title: "Yohpal Connect — Mobile Studio",
    previewImage: "/connect.png",
    subtitle: "Production Flutter Mobile Application",
    category: "Mobile Apps",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs", "SQL"],
    description: "Production mobile photo studio application enabling dynamic image processing, user verification, and professional profile creation, connecting global creators and businesses within the Yohpal ecosystem.",
    githubUrl: "https://github.com/Yohpal-International-Limited/ai_photo_studio",
    featured: true,
    roleRelevance: ["all", "mobile", "fullstack"],
    architectureDetails: {
      overview: "Architected cross-platform Flutter mobile client integrated with scalable REST microservices and Firebase real-time data sync for high-concurrency photo transformations and user profile indexing.",
      keyFeatures: [
        "Dynamic profile onboarding with asynchronous verification checks",
        "Reactive photo studio workflows with localized memory caching",
        "Bidirectional user-to-business messaging channel integrations",
        "Robust offline state handling with persistent local storage"
      ],
      technicalHighlights: [
        "Flutter Provider/Bloc architecture ensuring clean separation of UI and business logic",
        "Optimized image payload serialization to reduce network egress by over 40%",
        "Direct SQL relational mapping for high-integrity catalog and user indexing"
      ],
      securityReliabilityInvariants: [
        "Cryptographic token validation on every authenticated REST call",
        "Client-side image sanitization preventing buffer overflows and corrupted frames",
        "Strict database constraints enforcing referential integrity"
      ]
    }
  },
  {
    id: "vaultchat",
    title: "VaultChat",
    previewImage: "/vault.png",
    subtitle: "End-to-End Encrypted P2P Communications",
    category: "Security & OSINT",
    tags: ["TypeScript", "WebRTC", "React", "Cryptography", "Tailwind"],
    description: "Secure one-on-one encrypted chat platform enabling direct peer-to-peer data channels with ephemeral AES-GCM session keys and offline out-of-band verification pins to guarantee zero metadata leakage.",
    githubUrl: "https://github.com/kaisafestus/VaultChat",
    featured: true,
    roleRelevance: ["all", "security", "fullstack"],
    architectureDetails: {
      overview: "Designed a zero-knowledge WebRTC communication layer utilizing Web Crypto API for client-side ephemeral key derivation without intermediary server message persistence.",
      keyFeatures: [
        "Peer-to-peer WebRTC DataChannels bypassing centralized server storage",
        "Ephemeral AES-GCM 256-bit symmetric session key negotiation",
        "Out-of-band cryptographic fingerprint comparison to thwart MITM attacks",
        "Zero-log ephemeral memory lifecycle with automatic local wipe on session disconnect"
      ],
      technicalHighlights: [
        "Pure browser Web Crypto API (SubtleCrypto) implementation for hardware-accelerated encryption",
        "Signaling server acts purely as an ephemeral STUN/TURN exchange without reading payloads",
        "Reconnection heartbeat and graceful ICE candidate failover"
      ],
      securityReliabilityInvariants: [
        "Zero server-side plaintext persistence: keys reside exclusively in volatile memory",
        "Forward secrecy: unique session keys generated per conversation cycle",
        "Strict Content Security Policy preventing unauthorized script execution"
      ]
    }
  },
  {
    id: "yohpal-video",
    title: "Yohpal Live Stream Video App",
    previewImage: "/studio.png",
    subtitle: "Real-Time Mobile Broadcasting Platform",
    category: "Mobile Apps",
    tags: ["Flutter", "Dart", "Live Video", "WebSockets", "Firebase"],
    description: "Mobile live-streaming application built to integrate with the Yohpal ecosystem for low-latency real-time video broadcasting, live engagement channels, and community streaming.",
    githubUrl: "https://github.com/Yohpal-International-Limited/yohpal-video-app",
    featured: true,
    roleRelevance: ["all", "mobile"],
    architectureDetails: {
      overview: "Low-latency streaming architecture engineered for mobile devices with adaptive bitrate management, synchronized real-time comments, and high-throughput broadcast distribution.",
      keyFeatures: [
        "Real-time video ingest and broadcast playback using native platform decoders",
        "Interactive live chat channels with WebSocket subprotocols and rate-limiting",
        "Audience analytics and engagement metrics synchronized to Firebase Firestore",
        "Hardware-accelerated rendering on both Android and iOS devices"
      ],
      technicalHighlights: [
        "Custom Flutter platform channels interfacing with native video pipeline",
        "Stateful WebSocket subscriber multiplexing for sub-second comment distribution",
        "Graceful stream degradation on high packet loss or network jitter"
      ],
      securityReliabilityInvariants: [
        "Signed stream tokens preventing unauthorized broadcast hijacking",
        "Client rate limiting on interaction pulses to mitigate spam floods",
        "Automatic reconnection loop with exponential backoff and jitter"
      ]
    }
  },
  {
    id: "serene-homes",
    title: "SereneHomes & ZangemBNBs",
    previewImage: "/serene.png",
    subtitle: "Short-Term Rental & Apartment Booking Platform",
    category: "Full-Stack Web",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp API", "SQL"],
    description: "High-conversion property booking platforms featuring serviced apartments, short-term rentals, dynamic photo galleries, customer review feeds, and direct WhatsApp concierge reservations.",
    githubUrl: "https://github.com/kaisafestus/SereneHomes",
    featured: true,
    roleRelevance: ["all", "fullstack"],
    architectureDetails: {
      overview: "Engineered high-performance real estate portal with Server-Side Rendering (SSR) for instantaneous page loads, rich OpenGraph cards, and seamless reservation dispatch.",
      keyFeatures: [
        "Dynamic unit availability calendar with instant conflict resolution",
        "Direct-to-WhatsApp booking concierge pre-filling property details and reservation dates",
        "High-definition lazy-loaded photo galleries with optimized WebP compression",
        "Admin dashboard for updating rental rates, seasonal discounts, and occupancy statuses"
      ],
      technicalHighlights: [
        "Next.js App Router with incremental static regeneration (ISR) for speed and SEO",
        "SQL database schema modeling multi-property inventories and lease histories",
        "Fully responsive mobile-first UI tailored for swift guest booking"
      ],
      securityReliabilityInvariants: [
        "Server-side validation on booking inquiries to eliminate invalid date ranges",
        "SQL parameterization to prevent injection vulnerabilities",
        "Strict sanitize-html sanitization on user testimonials"
      ]
    }
  },
  {
    id: "property-management",
    title: "Property Management System",
    previewImage: "/property.png",
    subtitle: "Tenancy & Automated Billing Enterprise Portal",
    category: "Full-Stack Web",
    tags: ["TypeScript", "Node.js", "SQL Database", "Express", "RBAC"],
    description: "Full-stack system for commercial and residential rental management, tracking unit occupancy, tenant lease renewals, maintenance schedules, and automated SQL-backed billing records.",
    githubUrl: "https://github.com/kaisafestus/PropertyManagementSystem",
    featured: true,
    roleRelevance: ["all", "fullstack"],
    architectureDetails: {
      overview: "Enterprise portal providing role-based tenancy tracking, maintenance dispatch tickets, and automated invoice calculation across distributed apartment complexes.",
      keyFeatures: [
        "Multi-unit tenancy registry with automated lease expiration triggers",
        "Digital rent ledger tracking monthly payments, arrears, and security deposits",
        "Maintenance request tracker with technician task assignment and status updates",
        "Role-based access controls distinguishing property owners, caretakers, and tenants"
      ],
      technicalHighlights: [
        "Relational SQL database with strict foreign keys and automated payment calculation triggers",
        "Express REST APIs structured with layered repository patterns and input validation",
        "Audit logging capturing every financial ledger modification"
      ],
      securityReliabilityInvariants: [
        "Double-entry bookkeeping validation: total debits must equal total credits",
        "JWT-based authentication with cryptographically signed role claims",
        "Immutable billing records: corrections posted as adjustments rather than deletions"
      ]
    }
  },
  {
    id: "ghost-recon",
    title: "GhostRecon OSINT Toolkit",
    previewImage: "/ghost.png",
    subtitle: "Threat Intelligence & Identity Reconnaissance",
    category: "Security & OSINT",
    tags: ["Python", "HTML", "OSINT", "Forensics", "Security"],
    description: "Open-source intelligence suite that scans target handles and queries multiple network nodes to compile digital identity footprints for educational security assessments.",
    githubUrl: "https://github.com/kaisafestus/GhostRecon",
    featured: true,
    roleRelevance: ["all", "security"],
    architectureDetails: {
      overview: "Security auditing and open-source intelligence aggregation utility designed to verify username exposure, domain configuration vectors, and metadata leakages.",
      keyFeatures: [
        "Concurrent HTTP inspection across hundreds of public online endpoints",
        "EXIF metadata parser and GPS coordinate extractor from image artifacts",
        "DNS zone and WHOIS record interrogator",
        "Formatted HTML and JSON vulnerability audit report generator"
      ],
      technicalHighlights: [
        "Asynchronous network requests leveraging Python's asyncio and aiohttp",
        "Configurable proxy rotation support for non-intrusive security research",
        "Strict rate-limiting and user-agent customization headers"
      ],
      securityReliabilityInvariants: [
        "Defensive programming: sandbox execution without writing executable binaries",
        "Sanitized inputs preventing shell escape and directory traversal attacks",
        "Strict adherence to ethical security testing principles"
      ]
    }
  },
  {
    id: "institutional-liquidity",
    title: "Institutional Liquidity EA",
    previewImage: "/liquidity.png",
    subtitle: "Automated Quantitative Market Execution",
    category: "FinTech & Quant",
    tags: ["MQL5", "MetaTrader 5", "Algorithmic Trading", "Tick Engine"],
    description: "Automated trading Expert Advisor engineered in MQL5 for MetaTrader 5 that executes quantitative liquidity sweep strategies with deterministic fractional risk management.",
    githubUrl: "https://github.com/kaisafestus/institutional-liquidity-ea",
    featured: true,
    roleRelevance: ["all", "quant", "fintech"],
    architectureDetails: {
      overview: "High-frequency algorithmic tick-execution model deployed on MetaTrader 5 that mathematically tracks institutional order flow imbalances and liquidity sweeps.",
      keyFeatures: [
        "Deterministic order execution based on fair value gaps (FVG) and high-volume nodes",
        "Dynamically calculated fractional lot sizing based on real-time account equity",
        "Automated trailing stop-loss and multi-target partial profit taking",
        "Spread and slippage filters preventing execution during market anomalies"
      ],
      technicalHighlights: [
        "Object-Oriented MQL5 compiled directly to native x86 machine code for ultra-low latency",
        "Event-driven architecture listening to OnTick, OnTimer, and OnTradeTransaction",
        "Backtested over 5 years of historical tick data with strict walk-forward optimization"
      ],
      securityReliabilityInvariants: [
        "Hard-coded max daily drawdown circuit breaker preventing account liquidation",
        "Strict stop-loss attached atomically at the time of order placement",
        "Memory leak checks using MT5 diagnostic profiler"
      ]
    }
  }
];

export const FEATURED_PROJECTS = PROJECTS;

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Full-Stack Engineer (Mobile Development Focus)",
    company: "Yohpal International Limited",
    period: "May 2026 – Present",
    location: "Nairobi, Kenya",
    highlights: [
      "Built Yohpal Connect, a mobile photo studio Flutter application enabling photo editing and job-seeker/business profile creation, connecting professionals worldwide.",
      "Developed Yohpal Chat, a secure real-time messaging application integrated across the Yohpal ecosystem for user-to-user and user-to-business communication.",
      "Contributed to Yohpal Live Stream, a mobile live-streaming platform supporting real-time video broadcasting for the Yohpal community.",
      "Conducted software testing and debugging across all three Flutter applications to verify functionality, performance, and release readiness prior to deployment.",
      "Performed software maintenance, including bug fixes and iterative updates, to keep production applications stable and reliable as user features expanded.",
      "Wrote and maintained technical documentation, including setup guides, API integration notes, and README files, to support team onboarding and knowledge transfer.",
      "Used SQL and Firebase/Firestore queries to manage and retrieve user, chat, and profile data supporting core app features.",
      "Applied DevOps practices, including Git-based version control, branching, and peer code review, delivering three production mobile applications within the first four months."
    ]
  },
  {
    role: "Industrial Attachment – Software Engineering Trainee",
    company: "Yohpal International Limited",
    period: "May 2026 – Present",
    location: "Nairobi, Kenya",
    highlights: [
      "Completed a structured industrial attachment in practical software engineering, gaining hands-on experience across mobile and full-stack development workflows.",
      "Supported development tasks, testing, and technical documentation that led directly to a full-time engineering offer at Yohpal International Limited."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Diploma in Software Engineering",
    institution: "Kenya Institute of Software Engineering and Professional Studies (KISE)",
    period: "Completed March 2026",
    location: "Nairobi, Kenya",
    details: "Comprehensive coursework in Cross-Platform Mobile Architecture (Flutter/Dart), Object-Oriented Programming (Java/TypeScript), Database Normalization & SQL, Operating Systems, Computer Networks, and Software Testing Lifecycles."
  }
];

export const TECHNICAL_SKILLS = [
  { 
    category: "Mobile Development", 
    items: ["Flutter", "Dart", "Cross-Platform App Development", "Firebase", "REST API Integration", "Mobile UI/UX"] 
  },
  { 
    category: "Full-Stack & Web", 
    items: ["TypeScript", "JavaScript (ES6+)", "Next.js", "React", "Node.js", "HTML5", "CSS3 / Tailwind"] 
  },
  { 
    category: "Data & Backend", 
    items: ["SQL", "Firebase / Firestore", "RESTful APIs", "Database Queries & Management"] 
  },
  { 
    category: "Quality & Delivery", 
    items: ["Software Testing", "Debugging", "Software Maintenance", "Technical Documentation", "Git-based CI Workflows", "Code Review"] 
  },
  { 
    category: "Other Languages", 
    items: ["Java", "MQL5 (Algorithmic Trading / Expert Advisors)"] 
  }
];
