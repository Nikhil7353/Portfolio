export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status: "current" | "previous";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "rsl-solution",
    role: "Software Developer",
    company: "RSL Solution Pvt. Ltd.",
    period: "2025 — Present",
    location: "India",
    status: "current",
    summary:
      "Building production-grade web applications, backend services, REST APIs and SaaS platforms using modern Python, Django, React and PostgreSQL technologies.",
    responsibilities: [
      "Architect and implement scalable RESTful APIs and backend services using Python and Django REST Framework.",
      "Design normalized relational database schemas in PostgreSQL with index optimization and connection pooling.",
      "Develop responsive, high-performance web frontends in React with clean component modularity and modern state patterns.",
      "Incorporate AI-assisted development workflows (Cursor, Claude, Copilot) to accelerate debugging, rapid prototyping, and test coverage.",
      "Collaborate with cross-functional teams to translate business requirements into resilient software architecture and production deployments.",
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Docker",
    ],
  },
  {
    id: "software-engineering-foundations",
    role: "Full Stack & Systems Development",
    company: "Engineering Foundations & Advanced Project Work",
    period: "2023 — 2024",
    location: "India",
    status: "previous",
    summary:
      "Rigorous hands-on engineering focused on core computer science foundations, backend systems, database internals, and modern full-stack application development.",
    responsibilities: [
      "Implemented enterprise web services, relational database integrations, and client-server architectures across Python, Java, and JavaScript.",
      "Engineered machine learning prototypes with computer vision classification pipelines using Python, PyTorch, and OpenCV.",
      "Constructed multi-tenant SaaS architectures, WebSocket-driven real-time pipelines, and microservices proof-of-concepts.",
      "Mastered data structures, algorithms, object-oriented design patterns, and Git collaborative version control.",
    ],
    technologies: [
      "Python",
      "Java",
      "JavaScript",
      "PostgreSQL",
      "MySQL",
      "Machine Learning",
      "REST APIs",
    ],
  },
];
