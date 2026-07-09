export const profile = {
  firstName: "Abubakar",
  lastName: "Ahmed",
  tagline: "SOFTWARE ENGINEER · AI SPECIALIST",
  email: "aabubakaru06@gmail.com",
  phone: "+234 813 350 4259",
  linkedin: "https://www.linkedin.com/in/abubakar-ahmed-8919b2284/",
  github: "https://github.com/abubakar-ahmed",
  bio: "Software Engineering graduate specializing in machine learning, artificial intelligence, and robotics. Experienced in building production-ready applications, developing AI-driven solutions, and leading technical training programs. Passionate about using data-driven decision-making to solve complex engineering challenges, with a strong interest in motorsport analytics, autonomous systems, and intelligent automation.",
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Alpha Rides",
    role: "Software Developer",
    period: "12/2025 — Present",
    location: "Remote",
    bullets: [
      "Designed and built a scalable Flutter ride-hailing driver app with modular architecture, Riverpod state management, and GoRouter navigation.",
      "Shipped real-time ride management: GPS tracking, Google Maps integration, WebSocket live updates, and push notifications.",
      "Hardened backend communication with Dio, token-refresh flows, encrypted storage, and multi-environment Android/iOS deployment.",
    ],
  },
  {
    company: "CodeFactory",
    role: "Facilitator",
    period: "02/2025 — 11/2025",
    location: "Kigali, Rwanda",
    bullets: [
      "Facilitated Python classes for beginner and intermediate learners using interactive, project-based methods.",
      "Provided one-on-one mentorship and technical support, fostering a collaborative and engaging learning environment.",
    ],
  },
  {
    company: "Coderina EdTech",
    role: "Robotics Trainer",
    period: "2023 — 2024",
    location: "Kigali, Rwanda",
    bullets: [
      "Taught students to build, program, and operate robots on LEGO Spike and Arduino platforms.",
      "Trained students for and co-hosted the annual FIRST LEGO League program, collaborating with educators and industry professionals.",
    ],
  },
  {
    company: "Ikra Foundation for Women and Youth Development",
    role: "IT Specialist (Volunteer)",
    period: "2020 — 2022",
    location: "Bauchi, Nigeria",
    bullets: [
      "Provided IT support across hardware, software, and device setup for staff and programs.",
      "Supported advocacy for SGBV survivors, including publication and dissemination of the VAPP Law across all 20 LGAs of Bauchi State.",
    ],
  },
];

export interface Project {
  title: string;
  stack: string;
  description: string;
  href: string;
}

export const projects: Project[] = [
  {
    title: "EcoDrive Simulator",
    stack: "Reinforcement Learning · PPO/SAC · FastAPI",
    description:
      "Interactive web simulator using reinforcement learning to optimize eco-driving strategies on Formula 1 tracks — built end-to-end with real-time telemetry and model explainability.",
    href: "https://github.com/abubakar-ahmed/EcoDrive-Simulator",
  },
  {
    title: "Tire-Wear Prediction App",
    stack: "Scikit-Learn · FastAPI · Flutter",
    description:
      "ML app predicting tire-wear percentage from driving conditions at 85% accuracy, deployed via FastAPI inside a Flutter mobile application.",
    href: "https://github.com/abubakar-ahmed/Tire-Wear-Prediction-App",
  },
  {
    title: "Race Strategy Optimizer",
    stack: "Logistic Regression · Neural Networks",
    description:
      "F1 tire-selection model trained on 100,000+ data points covering track conditions, weather, and driving style; improved prediction accuracy by 15%.",
    href: "https://github.com/abubakar-ahmed/Race_Staregy_Optimizer_MLOP",
  },
];

export interface SkillGroup {
  category: string;
  items: string;
}

export const skills: SkillGroup[] = [
  { category: "Languages", items: "Python · JavaScript · Dart (Flutter)" },
  { category: "ML & AI", items: "Scikit-Learn · TensorFlow · Neural Networks" },
  { category: "Web & Mobile", items: "HTML5 · CSS · JavaScript · Flutter" },
  { category: "Data", items: "MySQL · Firebase" },
  { category: "Cloud & Tools", items: "FastAPI · Git/GitHub · AWS · Google Colab" },
  {
    category: "Soft Skills",
    items:
      "Leadership · Project Management · Public Speaking · Teamwork · Time Management · Effective Communication · Critical Thinking",
  },
];

export const education = {
  degree: "B.Sc. Software Engineering",
  school: "African Leadership University",
  period: "2023 — 2026",
};

/** Shared Drive folder holding all certificate PDFs. */
export const certificatesUrl =
  "https://drive.google.com/drive/folders/13JMDq1MkZ1nDHdTXYs9WoMiH0QEDfF3W";

export const certificates = [
  "Neural Networks and Deep Learning — DeepLearning.AI",
  "Improving Deep Neural Networks — DeepLearning.AI",
  "Structuring Machine Learning Projects — DeepLearning.AI",
  "Exploratory Data Analysis for ML — IBM",
  "Python for Everybody · Python Data Structures — Univ. of Michigan",
  "Getting Started with R — Coursera",
];
