export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fullOverview: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };
  technologies: string[];
  challenges: {
    challenge: string;
    resolution: string;
  }[];
  myContribution: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  accentColor: string;
  accentGlow: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "trade-advisory",
    slug: "trade-advisory",
    number: "01",
    title: "Verified Trade Advisory Platform",
    tagline: "Multi-tenant stock market advisory & live trading platform connecting SEBI-compliant advisors with investors.",
    category: "Full Stack • Fintech • Real-time Web",
    description:
      "A high-throughput, multi-tenant advisory ecosystem with real-time trade signals, WebSocket-driven live execution feeds, subscription billing, and automated omnichannel notifications.",
    fullOverview:
      "Verified Trade Advisory Platform is an enterprise-grade multi-tenant platform designed to bring institutional-grade transparency and speed to retail stock market advisory. It enables verified financial advisors to broadcast verified trade calls (entry, target, stop-loss) instantaneously to thousands of paid subscribers with sub-second WebSocket delivery, complete with audit logs, performance tracking, and payment gateways.",
    problem:
      "Financial advisory communities on unregulated messaging apps suffer from fraudulent performance claims, delayed broadcast latency, lack of subscriber access control, and manual compliance reporting. Investors miss critical entry/exit windows due to unsorted notification queues.",
    solution:
      "Engineered an end-to-end multi-tenant platform that enforces advisory verification, provides real-time signal broadcasting via WebSockets and Redis Pub/Sub, automates subscription billing with razorpay/stripe integration, and pushes instant trade alerts directly to WhatsApp and Telegram via async task queues.",
    features: [
      "Advisor Dashboard for one-click trade publishing with auto-calculated risk/reward ratios",
      "Investor Web Dashboard with instant live ticker feeds and portfolio tracking",
      "Sub-second Trade Publishing via Redis Pub/Sub and WebSocket push servers",
      "Automated WhatsApp & Telegram trade alert broadcasting through Celery/Redis queues",
      "Tiered Subscription & Payment Engine with automated invoice generation and access gating",
      "Granular Admin Compliance & Audit Dashboard monitoring all published calls and logs",
      "RESTful API ecosystem with JWT authentication, role-based permissions, and rate-limiting",
      "Tenant isolation ensuring strict data partition between distinct advisory firms",
    ],
    architecture: {
      frontend: "React (TypeScript), Vite/Next.js, Tailwind CSS, Recharts for financial sparklines",
      backend: "Python, Django, Django REST Framework, Django Channels (WebSockets), Celery async workers",
      database: "PostgreSQL with connection pooling, Redis for caching and Pub/Sub channel layers",
      infrastructure: "Docker containerization, NGINX reverse proxy, Redis broker, AWS ECS/EC2",
    },
    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "REST APIs",
      "WebSockets",
      "Redis",
      "Celery",
      "Docker",
    ],
    challenges: [
      {
        challenge: "Spike loads during market opening bell (9:15 AM) causing database query bottlenecks.",
        resolution: "Implemented Redis multi-tier caching for active calls, connection pooling with PgBouncer, and indexed compound queries on PostgreSQL.",
      },
      {
        challenge: "Sub-second delivery of trade alerts across heterogeneous channels (WebSockets, WhatsApp, Telegram).",
        resolution: "Decoupled alert distribution into asynchronous Celery worker pools with Redis Pub/Sub priority queues and exponential backoff retry mechanisms.",
      },
    ],
    myContribution: [
      "Architected the multi-tenant database schemas and tenant context middleware in Django.",
      "Engineered RESTful API endpoints for subscription management, trade lifecycle, and user authentication.",
      "Developed the interactive React dashboard with WebSocket subscriptions for real-time trade signals.",
      "Built the background worker pipelines for instant Telegram and WhatsApp notification dispatches.",
    ],
    accentColor: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.15)",
  },
  {
    id: "ai-support",
    slug: "ai-support",
    number: "02",
    title: "AI Customer Support Platform",
    tagline: "Conversational AI support engine with automated RAG pipeline, knowledge base indexing, and ticket escalation.",
    category: "AI Engineering • SaaS • Full Stack",
    description:
      "An intelligent support automation platform unifying conversational LLM agents, dynamic vector retrieval over domain docs, multi-channel chat widgets, and ticket routing for human support teams.",
    fullOverview:
      "AI Customer Support Platform is a production-focused SaaS tool built to eliminate repetitive tier-1 customer inquiries while preserving human warmth for complex edge cases. Powered by a custom Retrieval-Augmented Generation (RAG) architecture, it ingests company documentation, FAQs, and product manuals, generates semantic vector embeddings, and delivers hallucination-resistant answers with exact source citations and automated ticket creation.",
    problem:
      "Customer support teams are overwhelmed by high volumes of repetitive questions, resulting in long response times and high agent burnout. Standard rule-based chatbots fail on nuanced queries, while naive LLM integrations hallucinate inaccurate policies.",
    solution:
      "Created a robust RAG architecture that performs semantic chunking, vector indexing in PostgreSQL with pgvector, and grounded synthesis with strict system prompts. When sentiment analysis detects frustration or confidence falls below threshold, the conversation automatically escalates to a human support ticket with full context summaries.",
    features: [
      "Embeddable lightweight React chat widget with streaming LLM responses and markdown rendering",
      "Dynamic Knowledge Base ingestion engine supporting PDF, DOCX, Markdown, and URL scraping",
      "Vector search pipeline utilizing chunking strategies, pgvector, and cosine similarity ranking",
      "Context-aware fallback and automated ticket creation with sentiment scoring and priority tagging",
      "Admin Conversation Intelligence dashboard with query analytics, agent override, and accuracy review",
      "Role-Based Access Control (RBAC) for agents, team leads, and system administrators",
      "Session-based memory management preserving multi-turn dialogue context efficiently",
    ],
    architecture: {
      frontend: "React, Next.js, Tailwind CSS, Lucide icons, Framer Motion for conversational animations",
      backend: "Python, Django, Django REST Framework, LangChain/LlamaIndex integration, Celery for doc processing",
      database: "PostgreSQL with pgvector extension, Redis for conversational session cache",
      infrastructure: "OpenAI / Claude LLM APIs, HuggingFace embeddings, Dockerized deployment",
    },
    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "LLM APIs",
      "RAG",
      "pgvector",
      "Redis",
      "REST APIs",
    ],
    challenges: [
      {
        challenge: "Minimizing LLM hallucination and ensuring responses strictly cite company knowledge base articles.",
        resolution: "Designed strict prompt grounding constraints with top-k vector chunk retrieval, metadata filtering, and relevance threshold gating.",
      },
      {
        challenge: "Handling large document uploads without blocking the web request cycle.",
        resolution: "Implemented asynchronous document chunking and vector embedding generation via Celery workers with real-time status polling.",
      },
    ],
    myContribution: [
      "Designed the RAG ingestion pipeline and PostgreSQL pgvector schema for semantic document retrieval.",
      "Developed the backend REST APIs for chat sessions, ticket management, and document processing.",
      "Built the full React management console and embeddable live chat widget with streaming text.",
      "Implemented security guardrails to sanitize user prompts and prevent prompt injection vulnerabilities.",
    ],
    accentColor: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "spice-classification",
    slug: "spice-classification",
    number: "03",
    title: "Indian Spice Classification",
    tagline: "Computer vision machine learning platform for automated identification and grading of native Indian spices.",
    category: "Machine Learning • Computer Vision • Web Application",
    description:
      "A deep learning web application utilizing convolutional neural networks to classify Indian spices (Green Cardamom, Cinnamon, Coriander, Clove, Black Pepper) from high-resolution imagery with instant visual diagnostics.",
    fullOverview:
      "Indian Spice Classification bridges computer vision research with practical agricultural commerce. Built to assist quality inspectors, spice traders, and culinary businesses, the application accepts raw photographs or live camera captures, preprocesses images, passes them through a fine-tuned CNN model, and outputs detailed botanical identification, confidence scores, and visual characteristics.",
    problem:
      "Manual spice grading and identification is labor-intensive, subjective, and prone to human error, particularly when sorting visually similar whole spices or detecting adulterated batches in wholesale supply chains.",
    solution:
      "Developed a complete machine learning pipeline: from image data collection and augmentation to transfer learning model training, integrated with a clean Django REST backend and an intuitive React interface that visualizes class confidence probabilities in real-time.",
    features: [
      "Deep Learning classification for 5 major spices: Green Cardamom, Cinnamon, Coriander, Clove, Black Pepper",
      "Real-time image upload, drag-and-drop, and camera capture interface with instant client-side preview",
      "Dynamic confidence probability distribution visualization with top-3 candidate analysis",
      "Detailed spice profile cards containing botanical names, origin regions, and culinary profiles",
      "REST API endpoint for third-party mobile or edge IoT device integration",
      "Model inference telemetry logging for classification verification and continuous dataset retraining",
    ],
    architecture: {
      frontend: "React, Tailwind CSS, Canvas API, Chart.js for confidence metrics",
      backend: "Python, Django, Django REST Framework, PyTorch / TensorFlow, OpenCV for image preprocessing",
      database: "PostgreSQL for audit logging and inference history, local media storage with S3 support",
      infrastructure: "ONNX Runtime optimized CPU/GPU inference engine, Gunicorn & NGINX",
    },
    technologies: [
      "Python",
      "Django",
      "Machine Learning",
      "Computer Vision",
      "PyTorch",
      "OpenCV",
      "React",
      "REST APIs",
    ],
    challenges: [
      {
        challenge: "Distinguishing between fragmented spices under varying lighting conditions and uneven backgrounds.",
        resolution: "Applied robust image augmentation (rotations, color jittering, histogram equalization) and trained with transfer learning backbones.",
      },
      {
        challenge: "Fast model inference latency on standard server hardware without requiring expensive dedicated GPUs.",
        resolution: "Exported model weights to ONNX format and leveraged optimized ONNX Runtime execution for sub-100ms inference times.",
      },
    ],
    myContribution: [
      "Curated, cleaned, and augmented the multiclass dataset across 5 spice categories.",
      "Trained and evaluated CNN classification models, tuning hyperparameters for optimal generalization.",
      "Built the Django REST inference backend handling image validation, preprocessing, and response payloads.",
      "Engineered the responsive React UI with visual confidence meters and inspection breakdowns.",
    ],
    accentColor: "#10b981",
    accentGlow: "rgba(168, 85, 247, 0.15)",
  },
  {
    id: "repo-analytics",
    slug: "repo-analytics",
    number: "04",
    title: "Repository Analytics Platform",
    tagline: "Developer intelligence platform analyzing Git repositories, commit velocity, code churn, and contributor dynamics.",
    category: "DevOps • Analytics • AI-Assisted Tooling",
    description:
      "A developer metrics engine that parses Git repositories to deliver deep insights into code churn, pull request cycle times, lines of code distribution, team activity heatmaps, and AI-assisted code health diagnostics.",
    fullOverview:
      "Repository Analytics Platform is an engineering telemetry suite built for tech leads and developers seeking actionable visibility into their codebases. By interfacing directly with Git protocols and GitHub REST/GraphQL APIs, it analyzes commit trajectories, branch lifetimes, author distribution, and technical debt indicators, delivering interactive visual heatmaps and automated project health summaries.",
    problem:
      "Engineering managers and solo developers struggle to quantify technical velocity, locate code churn hotspots, and assess project maintenance health without invasive tracking tools or costly enterprise dashboards.",
    solution:
      "Architected a privacy-conscious analytics platform that extracts metadata directly from Git repositories without storing proprietary source code. The engine aggregates commit histories, computes complexity metrics, generates velocity charts, and leverages LLM summarization to synthesize pull request trends into concise release insights.",
    features: [
      "Repository ingestion via public/private Git URLs or GitHub OAuth token integration",
      "Commit velocity charts, lines-of-code breakdowns, and language distribution metrics",
      "Interactive 52-week contributor activity heatmaps and punch-card time-of-day analytics",
      "Pull request lifecycle tracking: review turnaround time, discussion volume, and merge duration",
      "AI-assisted engineering health evaluation generating automated code maintainability summaries",
      "Exportable engineering reports in PDF and JSON format for team sprint retrospectives",
      "Secure background ingestion pipeline with Redis task queues preventing UI latency",
    ],
    architecture: {
      frontend: "React, Next.js, Tailwind CSS, SVG visualization components, Framer Motion",
      backend: "Python, GitPython, Django REST Framework, Celery worker cluster, PyDriller",
      database: "PostgreSQL for indexed repository metrics, Redis for task orchestration and caching",
      infrastructure: "GitHub REST & GraphQL APIs, Dockerized worker containers",
    },
    technologies: [
      "Python",
      "Git",
      "Django REST Framework",
      "React",
      "PostgreSQL",
      "APIs",
      "AI-assisted Analysis",
      "Celery",
    ],
    challenges: [
      {
        challenge: "Efficiently parsing repositories with tens of thousands of commits without running out of memory.",
        resolution: "Employed streaming Git log readers with GitPython, paginating commit streams and batch-inserting summary metrics into PostgreSQL.",
      },
      {
        challenge: "Accurately attributing author commits across inconsistent email aliases and multiple Git identities.",
        resolution: "Built a contributor deduplication algorithm using email normalization, Levenshtein name distance, and configurable team mapping.",
      },
    ],
    myContribution: [
      "Architected the Git analysis engine using Python to parse commits, diffs, and branch trees efficiently.",
      "Designed the normalized PostgreSQL schema for storing time-series repository metrics.",
      "Developed the interactive React dashboard with custom interactive SVG heatmaps and velocity charts.",
      "Integrated AI prompt workflows to generate natural language sprint and codebase health evaluations.",
    ],
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.15)",
  },
];
