export const siteConfig = {
  name: "Chihab Hamdane",
  title: "Chihab Hamdane — Computer Science Student | AI & Software Engineering",
  description:
    "Portfolio of Chihab Hamdane, Computer Science student specializing in Information Systems, building software systems and exploring AI and Data Science.",
  url: "https://chihabhamdane.dev",
  locale: "en_US",
  cvPath: "/assets/cv.pdf",
  availability: "OPEN TO MASTER'S OPPORTUNITIES — 2027",
  tagline: "Building software systems and exploring intelligent applications.",
  label: "COMPUTER SCIENCE · INFORMATION SYSTEMS",
  footerTagline: "Computer Science · AI · Software Engineering",
} as const;

export type SocialLink = {
  id: "github" | "linkedin" | "email" | "phone";
  label: string;
  href: string;
  display?: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/chihab2002-11",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chihab-hamdane-5662aa326/",
  },
  {
    id: "email",
    label: "Email",
    href: "chihabhamdane30@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+213561649574",
    display: "+213 561 649 574",
  },
];

export const navigation = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export type NavItem = (typeof navigation)[number];
