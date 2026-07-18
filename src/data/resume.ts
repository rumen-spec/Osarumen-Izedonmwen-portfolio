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
  url?: string;
  urlType?: "github" | "site";
};

export const experience: Experience[] = [
  {
    company: "Solink",
    role: "Software Engineer Intern",
    location: "Ottawa, ON",
    start: "May 2026",
    end: "Present",
    bullets: [
      "Built an end-to-end remote DNS configuration feature across a cloud management platform, embedded NAS devices, and Linux-based recording devices — enabling operators to manage upstream DNS servers across customer deployments without on-site access.",
      "Engineered GitHub Actions CI/CD pipelines to automate build testing, package deployment to a Nexus artifact repository, and application bundling, reducing manual steps in the release process.",
    ],
  },
  {
    company: "RUMII",
    role: "Founder & Lead Developer",
    location: "Toronto, ON",
    start: "Jun 2025",
    end: "Present",
    url: "https://rumiapp.ca",
    urlType: "site",
    bullets: [
      "Developed and launched a React Native iOS application as the sole developer, growing to 1,000+ users and winning the $1,000 “Best Real World Impact” award at the Canadian Tech Summit.",
      "Reduced profile load times from 1.4s to 100ms using indexed JPQL queries, AWS S3 presigned URLs, and automated WebP image compression.",
      "Deployed containerized services with Docker, implementing real-time WebSocket messaging (STOMP, Redis pub/sub) with push-notification fallback, AES-GCM encryption, and async non-blocking processing.",
    ],
  },
  {
    company: "Teesas Education",
    role: "Software Development Engineer Intern",
    location: "Remote",
    start: "May 2024",
    end: "Aug 2024",
    bullets: [
      "Reduced API response latency by 45% for 10,000+ active users through Redis caching, endpoint refactoring, and PostgreSQL query optimization with proper indexing strategies.",
      "Accelerated developer onboarding by 20% by authoring comprehensive Swagger/OpenAPI documentation and interactive Postman collections for 30+ RESTful endpoints.",
      "Architected and implemented 8 new backend features in NestJS following SOLID principles, dependency injection, and test-driven development.",
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
};

export const education: Education[] = [
  {
    school: "Western University",
    degree: "Honours B.Sc. Computer Science, Minor in Software Engineering",
    detail: "3.7 / 4.0 GPA",
    location: "London, ON",
    start: "Sep 2023",
    end: "May 2028",
    awards: ["Dean’s Honour List (2x)"],
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
    name: "PalendrAI",
    description:
      "AI event-planning web app built in 36 hours — placed Top 6 at the Western AI Dataquest Hackathon. Uses the OpenAI API with custom prompt engineering to generate intelligent schedules.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI"],
    github: "https://github.com/rumen-spec/PalendrAI",
  },
  {
    name: "Real-Time Multiplayer Chess",
    description:
      "Full-stack chess platform with WebSocket-based real-time sync enabling sub-100ms move propagation, plus an AI opponent using minimax with alpha-beta pruning.",
    tech: ["Node.js", "React", "WebSockets"],
    github: "https://github.com/rumen-spec/chess",
  },
  {
    name: "FitPro",
    description:
      "Personalized fitness SaaS with AI-powered coaching, Stripe subscription billing, and real-time Firestore sync — co-developed and acquired for $7,000. Built the Stripe webhook lifecycle and onboarding flow.",
    tech: ["Next.js", "Firebase", "Stripe", "OpenAI"],
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
      "Express",
      "React",
      "React Native",
      "Spring Boot",
      "NestJS",
      "FastAPI",
      "Flask",
      "Expo",
      "JPA",
      "Hibernate",
    ],
  },
  {
    label: "Tools & Databases",
    items: [
      "AWS",
      "Docker",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Git",
      "GitHub Actions",
      "Postman",
      "Swagger",
      "Firebase",
    ],
  },
];
