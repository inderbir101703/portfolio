export const personal = {
  name: 'Inderbir Singh Bhinder',
  role: 'Full Stack Engineer',
  tagline: '5+ years building scalable web apps with React, Next.js , Java , NodeJs & TypeScript',
  location: 'Gurugram, India',
  email: 'ibsbhinder54@gmail.com',
  phone: '9592615544',
  links: {
    github:    'https://github.com/inderbir101703',
    linkedin:  'https://www.linkedin.com/in/inderbir-bhinder-b4a54a159/',
    leetcode:  'https://leetcode.com/u/ibsbhinder54/',
    aiProject: 'https://ai-agent-frontend-ten-rose.vercel.app/',
  },
};

export const stats = [
  { number: '5+',  label: 'Years Experience' },
  { number: '30%', label: 'Avg. Perf Gain'   },
  { number: '<1s', label: 'LCP Achieved'      },
];

export const skills = [
  {
    icon: '⚡',
    title: 'Languages',
    tags: ['JavaScript ES6+', 'TypeScript', 'Java', 'SQL'],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'Redux', 'React Query', 'Tailwind', 'SCSS'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'Spring Boot', 'Microservices', 'REST APIs'],
  },
  {
    icon: '☁️',
    title: 'Tools & Infra',
    tags: ['Docker', 'Kubernetes', 'GCP', 'NX Monorepo', 'Fastly CDN'],
  },
  {
    icon: '🤖',
    title: 'AI & Systems',
    tags: ['LLM / RAG', 'LangChain', 'System Design', 'Micro-frontends', 'Perf Optimization'],
  },
];

export const experience = [
  {
    company: 'Deloitte',
    role: 'Software Engineer II',
    period: '2025 – Present',
    bullets: [
      'Owned end-to-end development of a scalable patient scheduling platform using Next.js & Java, improving performance by **25%**',
      'Designed & integrated a **24/7 AI-powered chatbot**, reducing manual support effort and improving response time',
      'Architected frontend with **NX monorepo**, improving modularity, scalability, and developer productivity',
      'Implemented virtualization for large datasets, boosting rendering performance by **30%**',
      'Optimized global delivery via **Fastly CDN**: load times ↓15%, localization ↑20%',
      'Contributed to **Java Spring Boot** backend, designing REST APIs and improving system integration',
    ],
  },
  {
    company: 'Publicis Sapient',
    role: 'Associate Engineer L2',
    period: '2023 – 2024',
    bullets: [
      'Led migration of microservices to **TypeScript**, reducing production errors by **30%**',
      'Designed and scaled backend services, improving performance by **25%**',
      'Implemented **micro-frontend architecture**, enabling independent deployments and faster releases',
      'Improved Core Web Vitals — CLS ↓ 0.15s, LCP **2.5s → <1s**',
      'Reduced code duplication by **35%** through reusable component architecture',
    ],
  },
  {
    company: 'Publicis Sapient',
    role: 'Associate Engineer L1',
    period: '2021-2023',
    bullets: [
      'Improved transactional workflows, boosting page load speed by **50%** and reducing complaints by 20%',
      'Delivered accessible UI aligned with **WCAG standards**',
      'Reduced production bugs by **40%** using robust testing strategies',
    ],
  },
];

export const projects = [
  {
    title: 'AI Agent Platform',
    badge: '⭐ Production-Ready',
    featured: true,
    bullets: [
      'Production-ready AI agent system with real-time streaming, tool-based execution, and scalable Node.js & React architecture',
      'Agentic workflows with dynamic tool selection — summarization, email generation, code analysis',
      'Streaming APIs (chunked HTTP) for token-by-token responses delivering ChatGPT-like real-time UX',
      'Context-aware multi-turn conversations with per-user memory and rolling context windows',
      'Modular backend with JWT auth, rate limiting, and caching for scalability and cost efficiency',
    ],
    tech: ['React', 'Node.js', 'LLM', 'Streaming', 'JWT', 'TypeScript'],
    link: 'https://ai-agent-frontend-ten-rose.vercel.app/',
    linkLabel: 'Live Demo →',
  },
  {
    title: 'RAG-based AI System',
    badge: null,
    featured: false,
    desc: 'Built a Retrieval-Augmented Generation system for contextual query handling using LangChain and Node.js. Reduced response time from **5 min → 2 min** and improved debugging efficiency by **30%** through a clean TypeScript architecture.',
    tech: ['LangChain', 'Node.js', 'TypeScript', 'RAG', 'Vector DB'],
    link: null,
  },
];

export const highlights = [
  {
    icon: '🚀',
    title: 'Performance Engineering',
    desc: 'Deep expertise in Core Web Vitals, CDN caching, rendering optimization, and load time reduction across large-scale apps.',
  },
  {
    icon: '🏗️',
    title: 'Scalable Architecture',
    desc: 'Experience with micro-frontends, NX monorepo, distributed systems, and microservices built for team scalability.',
  },
  {
    icon: '🤖',
    title: 'AI & LLM Systems',
    desc: 'Hands-on with real-time AI agents, RAG pipelines, LangChain, and streaming APIs for next-gen user experiences.',
  },
  {
    icon: '🔗',
    title: 'Full Stack Depth',
    desc: 'Comfortable across the full stack — React frontends, Node.js APIs, Java Spring Boot services, and cloud infra.',
  },
];

export const education = {
  degree: 'B.E. in Computer Science',
  school: 'Thapar Institute of Engineering & Technology',
};
