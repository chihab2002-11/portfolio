export type ProjectFeature = {
  id: string;
  label: string;
};

export type LuminaProject = {
  id: "lumina-academy";
  title: string;
  subtitle: string;
  technologies: string[];
  features: ProjectFeature[];
  problem: string;
  solution: string;
  engineering: string[];
};

export type SecondaryProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  pipeline: string[];
  variant: "compact" | "editorial";
};

export const luminaProject: LuminaProject = {
  id: "lumina-academy",
  title: "Lumina Academy",
  subtitle:
    "A comprehensive school management platform with integrated AI-powered learning functionality.",
  technologies: [
    "Laravel 12",
    "PHP",
    "MySQL",
    "Livewire",
    "Tailwind CSS",
    "Docker",
    "Ollama",
    "Qwen3",
  ],
  features: [
    { id: "students", label: "Student management" },
    { id: "teachers", label: "Teacher management" },
    { id: "parents", label: "Parent management" },
    { id: "secretary", label: "Secretary workflows" },
    { id: "admin", label: "Administration" },
    { id: "courses", label: "Course management" },
    { id: "classes", label: "Class management" },
    { id: "timetables", label: "Timetables" },
    { id: "attendance", label: "Attendance" },
    { id: "messaging", label: "Messaging" },
    { id: "notifications", label: "Notifications" },
    { id: "financial", label: "Financial management" },
    { id: "scholarships", label: "Scholarships" },
    { id: "resources", label: "Educational resources" },
    { id: "ai-learning", label: "AI-powered learning functionality" },
  ],
  problem:
    "Educational institutions can rely on fragmented systems for academic, administrative, financial, and communication workflows.",
  solution:
    "Lumina Academy unifies these workflows into one platform.",
  engineering: [
    "Role-based workflows across students, teachers, parents, and staff",
    "Backend-driven application structure with Laravel and MySQL",
    "Interactive interfaces built with Livewire and Tailwind CSS",
    "Containerized development environment with Docker",
    "Integrated local LLM functionality through Ollama and Qwen3",
  ],
};

export const aiExplainer = {
  title: "Local AI, directly inside the classroom.",
  description:
    "Within Lumina Academy, a student can select an uploaded learning material and request an explanation — processed through a local inference pipeline rather than a generic external chat interface.",
  pipeline: [
    "Student",
    "Permission Check",
    "Material Extraction",
    "Prompt Construction",
    "Local Ollama Model",
    "Qwen3",
    "Streaming Response",
    "Student Interface",
  ],
  details: [
    "Ollama for local LLM inference",
    "Qwen3 as the inference model",
    "PDF extraction with smalot/pdfparser",
    "Streaming responses to the student interface",
    "Privacy-conscious, local processing architecture",
  ],
  disclaimer:
    "Qwen3 is used as an inference model — not created or trained as part of this project. Local processing supports a privacy-conscious approach without implying absolute privacy guarantees.",
};

export const expertSystemProject: SecondaryProject = {
  id: "expert-system-minimal",
  title: "Expert System Minimal",
  description:
    "Knowledge-based expert system implementing forward and backward chaining.",
  technologies: ["Python", "Tkinter", "Flask", "Streamlit"],
  pipeline: [
    "Knowledge Base",
    "Inference Engine",
    "Forward / Backward Chaining",
    "Result",
  ],
  variant: "compact",
};
