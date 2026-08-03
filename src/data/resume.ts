export const profile = {
  name: "Osarumen Izedonmwen",
  location: "Toronto, ON",
  email: "osarumenized@gmail.com",
  phone: "+1 (437) 971-7321",
  tagline:
    "I am a Computer Science student at Western University, minoring in Software Engineering, focused on building performant full-stack systems, backend infrastructure, and products that ship to real users.",
  resumeUrl: "/osarumen-izedonmwen-resume.pdf",
  socials: {
    linkedin: "https://linkedin.com/in/rumenized",
    github: "https://github.com/rumen-spec",
  },
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  companyUrl?: string;
  logo?: string;
  logoColor?: string;
};

export const experience: Experience[] = [
  {
    company: "Solink",
    role: "Software Engineer Intern",
    location: "Ottawa, ON",
    start: "May 2026",
    end: "Present",
    companyUrl: "https://solink.com",
    logo: "/logos/solink.png",
    bullets: [
      "Architected the configuration and safety logic for a cloud-managed DNS platform across 6 services, designing a fail-safe precedence model that guarantees a device’s network settings are never corrupted by an incomplete or ambiguous config.",
      "Built the device-side integration layer connecting two platforms (QNAP NAS appliances and Ubuntu hosts) to the platform, with automatic retry and rollback so a failed update can never leave a device without working DNS.",
      "Engineered GitHub Actions CI/CD pipelines automating build testing and Nexus artifact deployment, eliminating manual steps from the release process.",
    ],
  },
  {
    company: "RUMII",
    role: "Founder",
    location: "Toronto, ON",
    start: "Jun 2025",
    end: "Present",
    companyUrl: "https://rumiapp.ca",
    logo: "/logos/rumiapp.png",
    bullets: [
      "Developed and launched a React Native iOS application as the sole developer, growing to 1,000+ users and winning the $1,000 “Best Real World Impact” award at the Canadian Tech Summit.",
      "Optimized backend latency and performance, reducing profile load times from 1.4s to 100ms by implementing indexed JPQL queries, AWS S3 presigned URLs, and automated WebP image compression.",
      "Deployed containerized services with Docker, implementing real-time WebSocket messaging (STOMP, Redis pub/sub) with push-notification fallback, AES-GCM encryption, and async processing for non-blocking operations.",
    ],
  },
  {
    company: "Teesas Education",
    role: "Software Development Engineer Intern",
    location: "Remote",
    start: "May 2024",
    end: "Aug 2024",
    companyUrl: "https://teesas.com",
    logo: "/logos/teesas.jpg",
    bullets: [
      "Reduced API response latency by 45% for 100,000+ active students through Redis caching, endpoint refactoring, and PostgreSQL query optimization with proper indexing.",
      "Accelerated developer onboarding by 20% by authoring comprehensive Swagger/OpenAPI documentation and interactive Postman collections for 30+ RESTful endpoints.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  detail: string;
  location: string;
  start: string;
  end: string;
  awards: string[];
  logo?: string;
  logoColor?: string;
};

export const education: Education[] = [
  {
    school: "Western University",
    degree: "Honours B.Sc. Computer Science, Minor in Software Engineering",
    detail: "3.70 / 4.00 GPA",
    location: "London, ON",
    start: "Sep 2023",
    end: "May 2028",
    awards: ["Dean’s Honour List"],
    logo: "/logos/western.png",
    logoColor: "#4F2683",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Distributed Task Queue",
    description:
      "Distributed task queue in Rust with Raft consensus for leader election, a write-ahead log for durability, and at-least-once delivery across a multi-node broker cluster. Adds visibility timeouts, exponential-backoff retry, and automatic dead-letter routing, exposing Prometheus metrics on queue depth and consumer lag via a gRPC API.",
    tech: ["Rust", "gRPC", "Raft", "Tokio", "Prometheus"],
    github: "https://github.com/rumen-spec/Ferroqueue",
  },
  {
    name: "PalendrAI",
    description:
      "AI event-planning web app built in 36 hours — placed Top 6 at the Western AI Dataquest Hackathon. Uses the OpenAI API with custom prompt engineering to generate intelligent schedules.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI"],
    github: "https://github.com/rumen-spec/PalendrAI",
  },
  {
    name: "FitPro",
    description:
      "Personalized fitness SaaS with AI-powered coaching, Stripe subscription billing, and real-time Firestore sync — co-developed and acquired for $7,000. Built the Stripe webhook lifecycle and onboarding flow.",
    tech: ["Next.js", "Firebase", "Stripe"],
  },
  {
    name: "Real-Time Multiplayer Chess",
    description:
      "Full-stack chess platform with WebSocket-based real-time sync enabling sub-100ms move propagation, plus an AI opponent using minimax with alpha-beta pruning.",
    tech: ["Node.js", "React", "WebSockets"],
    github: "https://github.com/rumen-spec/chess",
  },
  {
    name: "Graph Algorithm Visualizer",
    description:
      "Interactive visualizer for graph traversal and pathfinding — Dijkstra, A*, DFS, and BFS — with adjustable animation speed and an editable graph for adding or removing nodes and edges in real time.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/rumen-spec/graph-algo-visualizer",
    live: "https://rumen-spec.github.io/graph-algo-visualizer/",
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "Rust", "C++", "C", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "Node.js",
      "React",
      "React Native",
      "Spring Boot",
      "NestJS",
      "FastAPI",
      "Flask",
      "Expo",
      "Kubernetes",
    ],
  },
  {
    label: "Tools & Databases",
    items: [
      "AWS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "GitHub Actions",
      "Postman",
      "Firebase",
    ],
  },
];
