export const profile = {
  name: "Amy Xiong",
  email: "amyxiongg@gmail.com",
  // Replace these placeholder URLs with your real profiles.
  github: "https://github.com/amyxiong04",
  linkedin: "https://www.linkedin.com/in/amy-xiong-038140211/",
  resume: "/resume.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    company: "Wärtsilä Voyage",
    role: "Software Engineer Co-op",
    date: "Aug 2025 - May 2026",
    description: [
      "Worked on production software in the maritime industry, building features across frontend and backend systems.",
      "My work involved Angular, TypeScript, C#, .NET, SQL, APIs, debugging, and learning how a large enterprise application fit together.",
      "I worked on backend logic, query performance improvements, production issues, and feature development as part of an Agile engineering team.",
    ],
    technologies: ["Angular", "TypeScript", "C#", ".NET", "SQL"],
  },
  {
    company: "BC Cancer Research Center",
    role: "Software Developer Co-op",
    date: "Jan 2024 - Apr 2024",
    description: [
      "Built software tools in Python and C# to support microscopy imaging and cancer research workflows.",
      "I worked on automating preprocessing pipelines, improving performance, and supporting machine learning experiments involving image classification.",
      "This role gave me hands-on experience building technical tools in a research environment.",
    ],
    technologies: ["Python", "C#", "TensorFlow", "Machine Learning"],
  },
];

export const projects = [
  {
    title: "CareerHighMatch.ai",
    description:
      "AI career-matching platform that processes GitHub profile and repository data to support career/environment matching.",
    technologies: ["Next.js", "React", "TypeScript", "Python", "PostgreSQL"],
    // Replace with your real GitHub/demo links.
    github: "https://github.com/amyxiong04",
    demo: "#",
  },
  {
    title: "Accelera",
    description:
      "Startup ecosystem platform with dynamic filtering, analytics, SQL queries, and a Supabase/PostgreSQL backend.",
    technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "SQL"],
    github: "https://github.com/amyxiong04",
    demo: "#",
  },
  {
    title: "TimeOff Portal",
    description:
      "Leave-management app with authentication, role-based access, approval workflows, and full-stack CRUD features.",
    technologies: ["JavaScript", "SQL", "REST APIs", "Auth"],
    github: "https://github.com/amyxiong04",
    demo: "#",
  },
  {
    title: "Wordle Game",
    description:
      "Java Wordle-style game using object-oriented programming, design patterns, JSON persistence, and JUnit tests.",
    technologies: ["Java", "OOP", "JUnit", "JSON"],
    github: "https://github.com/amyxiong04",
    demo: "#",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["C#", ".NET", "Python", "Java", "REST APIs"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "Supabase", "SQL"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "Postman", "Jira"],
  },
  {
    label: "Foundations",
    skills: ["Data Structures", "Algorithms", "Object-Oriented Design"],
  },
];
