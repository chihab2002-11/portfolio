export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "wekode-intern",
    role: "Backend Developer Intern",
    company: "WeKode",
    duration: "1 month",
    description:
      "Backend development and exposure to real-world software development workflows, applying programming and software engineering knowledge in a professional environment.",
  },
];

export type EducationItem = {
  id: string;
  degree: string;
  specialization: string;
  foundations: string[];
  directions: string[];
};

export const education: EducationItem = {
  id: "licence-cs",
  degree: "Licence in Computer Science",
  specialization: "Information Systems",
  foundations: ["Software engineering", "Cryptography"],
  directions: [
    "Artificial Intelligence",
    "Data Science",
    "Advanced Computer Science",
    "Intelligent Systems",
  ],
};

export const learningAreas = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Local LLMs",
  "Software Engineering",
  "Data Analysis",
  "SQL",
  "Python",
  "Power BI",
] as const;
