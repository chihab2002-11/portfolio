export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    items: ["PHP", "Python", "Java", "JavaScript", "SQL"],
  },
  {
    id: "web",
    title: "Web / Frameworks",
    items: ["Laravel", "Livewire", "Tailwind CSS"],
  },
  {
    id: "ai-data",
    title: "AI / Data",
    items: [
      "Ollama",
      "Local LLMs",
      "Qwen3",
      "Data Analysis",
      "Power BI",
      "Machine Learning",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Docker", "Git"],
  },
];
