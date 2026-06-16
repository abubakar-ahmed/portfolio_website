export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  tags: string[];
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string;
}

export const profile = {
  firstName: "Abubakar",
  lastName: "Ahmed",
  roles: "SOFTWARE ENGINEER • AI SPECIALIST",
  email: "aabubakaru06@gmail.com",
  phone: "+234 813 350 4259",
  github: "https://github.com/abubakar-ahmed",
  linkedin: "https://linkedin.com/in/abubakar-ahmed",
  summary:
    "Software engineering undergraduate specializing in machine learning and robotics, with a strong foundation in software development, AI systems, and automation. Experienced in shipping production mobile apps and leading technical training programs. Motorsport-obsessed: applies data-driven race-strategy thinking to engineering problems.",
};

export const experience: Experience[] = [
  {
    company: "Alpha Rides",
    role: "SOFTWARE DEVELOPER",
    period: "11/2023 - Present",
    location: "Kigali, Rwanda",
    bullets: [
      "Partnered with team to build Alpha Rides, a Flutter ride-hailing app with real-time driver tracking and ride management",
      "Implemented Riverpod for reactive state management and integrated GPS tracking for live location updates",
      "Configured WebSocket backend for real-time event processing and driver-passenger communication",
    ],
  },
  {
    company: "CodeFactory",
    role: "FACILITATOR",
    period: "02/2023 - 11/2023",
    location: "Ibadan, Nigeria",
    bullets: [
      "Facilitated hands-on Python programming classes for beginner and intermediate learners",
      "Provided mentorship and coding labs to help students build practical programming skills",
    ],
  },
  {
    company: "Coderina EdTech",
    role: "ROBOTICS TRAINER",
    period: "2022 - 2023",
    location: "Abuja, Nigeria",
    bullets: [
      "Taught LEGO Spike and Arduino robotics to students in after-school programs",
      "Co-hosted FIRST LEGO League regional qualifier, guiding teams through competition prep",
    ],
  },
  {
    company: "Ikra Foundation",
    role: "IT SPECIALIST (VOLUNTEER)",
    period: "2020 - 2021",
    location: "Ibadan, Nigeria",
    bullets: [
      "Provided hardware/software support and digital literacy training for community members",
      "Advocated for sexual and gender-based violence survivors through community outreach",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "ECODRIVE SIMULATOR",
    tags: ["REINFORCEMENT LEARNING", "PPO/SAC", "FASTAPI"],
    description:
      "Web simulator optimizing eco-driving behavior on Formula 1 tracks.",
  },
  {
    title: "TIRE-WEAR PREDICTION APP",
    tags: ["SCIKIT-LEARN", "FASTAPI", "FLUTTER"],
    description:
      "ML app predicting tire wear percentage from driving conditions.",
  },
  {
    title: "RACE STRATEGY OPTIMIZER",
    tags: ["LOGISTIC REGRESSION", "NEURAL NETWORKS"],
    description:
      "F1 tire-selection model trained on 100,000+ data points.",
  },
];

export const skills: SkillGroup[] = [
  { category: "LANGUAGES", items: "Python, JavaScript, Dart (Flutter)" },
  {
    category: "ML & AI",
    items: "Scikit-Learn, TensorFlow, Neural Networks, Reinforcement Learning",
  },
  { category: "WEB & MOBILE", items: "HTML5, CSS, Flutter" },
  { category: "DATA", items: "MySQL, Firebase" },
  {
    category: "CLOUD & TOOLS",
    items: "FastAPI, Git/GitHub, AWS, Google Colab",
  },
  {
    category: "SOFT SKILLS",
    items:
      "Leadership, Project Management, Public Speaking, Teamwork, Critical Thinking",
  },
];

export const education = {
  degree: "B.SC. SOFTWARE ENGINEERING",
  school: "African Leadership University",
  period: "2023 - 2026",
};

export const certificates = [
  "Neural Networks and Deep Learning — DeepLearning.AI",
  "Machine Learning with Python — IBM",
  "Python for Everybody — University of Michigan",
  "Introduction to TensorFlow — DeepLearning.AI",
  "Programming for Everybody — Coursera",
];
