export interface PhilosophyItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export const philosophyData: PhilosophyItem[] = [
  {
    number: "01",
    title: "BUILD FOR REAL USERS",
    tagline: "Software exists to solve genuine operational needs, not to display unnecessary complexity.",
    description:
      "Every architecture decision starts with user latency, clarity, and reliability. Beautiful interfaces and clean APIs fail if they do not solve the visitor's or business's core bottleneck.",
    points: [
      "Sub-second response targets for critical endpoints",
      "Defensive UI states (loading, error boundaries, empty states)",
      "Accessible and keyboard-navigable experiences",
    ],
  },
  {
    number: "02",
    title: "KEEP SYSTEMS SIMPLE",
    tagline: "The most reliable line of code is the one that didn't need to be written.",
    description:
      "I prioritize maintainable, readable patterns over clever abstractions. A clean Django or Next.js architecture with clear boundaries is easier to debug, scale, and hand off than an unneeded microservice labyrinth.",
    points: [
      "Normalized relational schemas before distributed caches",
      "Explicit contracts and typed interfaces",
      "Predictable state management without over-nested abstractions",
    ],
  },
  {
    number: "03",
    title: "DESIGN BEFORE OVER-ENGINEERING",
    tagline: "Measure twice, architect once, avoid premature optimization.",
    description:
      "Thorough API specification, database modeling, and domain boundary definition before writing implementation code saves weeks of painful refactoring and tech debt.",
    points: [
      "Schema-first and contract-driven API development",
      "Data partitioning and index planning upfront",
      "Clear separation of concerns between I/O and business logic",
    ],
  },
  {
    number: "04",
    title: "SHIP, MEASURE, IMPROVE",
    tagline: "Velocity with verification: build, deploy, monitor, and iterate.",
    description:
      "Using modern AI-assisted engineering and rigorous CI/CD, I ship working software rapidly, collect real-world telemetry, and refine performance based on empirical bottlenecks.",
    points: [
      "Automated test coverage on core business logic",
      "Structured telemetry, logging, and error tracking",
      "Rapid AI-accelerated feedback loops with human oversight",
    ],
  },
];
