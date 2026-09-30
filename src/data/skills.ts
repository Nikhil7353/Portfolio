export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Core Expertise", "Production Ready", "Proficient"
    highlight?: boolean;
    tag?: string;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    category: "LANGUAGES",
    description: "Core programming languages utilized for backend services, algorithms, and web applications.",
    skills: [
      { name: "Python", level: "Core Expertise", highlight: true, tag: "Primary" },
      { name: "Java", level: "Proficient", tag: "Enterprise" },
      { name: "JavaScript", level: "Production Ready", highlight: true, tag: "Web" },
      { name: "C", level: "Foundational", tag: "Systems" },
      { name: "C++", level: "Foundational", tag: "Systems" },
      { name: "SQL", level: "Core Expertise", highlight: true, tag: "Queries & DDL" },
    ],
  },
  {
    id: "frameworks",
    category: "FRAMEWORKS & LIBRARIES",
    description: "Battle-tested backend and frontend frameworks powering scalable digital applications.",
    skills: [
      { name: "Django", level: "Core Expertise", highlight: true, tag: "Backend" },
      { name: "Django REST Framework", level: "Core Expertise", highlight: true, tag: "APIs" },
      { name: "React", level: "Core Expertise", highlight: true, tag: "Frontend" },
      { name: "Next.js", level: "Production Ready", highlight: true, tag: "Full Stack" },
      { name: "Spring Boot", level: "Proficient", tag: "Java Backend" },
      { name: "Spring MVC", level: "Proficient", tag: "Enterprise" },
      { name: "Hibernate", level: "Proficient", tag: "ORM" },
    ],
  },
  {
    id: "databases",
    category: "DATABASES & STORAGE",
    description: "Relational and in-memory databases with schema design, indexing, and query optimization.",
    skills: [
      { name: "PostgreSQL", level: "Core Expertise", highlight: true, tag: "Relational & pgvector" },
      { name: "MySQL", level: "Production Ready", tag: "Relational" },
      { name: "Oracle", level: "Proficient", tag: "Enterprise RDBMS" },
    ],
  },
  {
    id: "tools",
    category: "DEVELOPMENT & SYSTEM TOOLS",
    description: "Modern developer environment, version control, IDEs, and workflow acceleration tooling.",
    skills: [
      { name: "Git", level: "Core Expertise", highlight: true, tag: "Version Control" },
      { name: "GitHub", level: "Core Expertise", highlight: true, tag: "CI/CD & Collaboration" },
      { name: "VS Code", level: "Core Expertise", tag: "IDE" },
      { name: "IntelliJ IDEA", level: "Proficient", tag: "IDE" },
      { name: "Cursor", level: "Core Workflow", highlight: true, tag: "AI Editor" },
      { name: "Claude", level: "Core Workflow", highlight: true, tag: "AI Reasoning" },
      { name: "GitHub Copilot", level: "Core Workflow", highlight: true, tag: "Pair Programming" },
    ],
  },
  {
    id: "ai",
    category: "AI & INTELLIGENT SYSTEMS",
    description: "Modern AI application architectures, embeddings, vector search, and AI-assisted engineering.",
    skills: [
      { name: "LLM APIs", level: "Production Ready", highlight: true, tag: "OpenAI / Anthropic" },
      { name: "RAG", level: "Production Ready", highlight: true, tag: "Retrieval Architecture" },
      { name: "AI-assisted development", level: "Core Workflow", highlight: true, tag: "Engineering Velocity" },
      { name: "AI application workflows", level: "Production Ready", highlight: true, tag: "Agentic Systems" },
    ],
  },
];
