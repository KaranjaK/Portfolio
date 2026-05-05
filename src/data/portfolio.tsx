export const profile = {
  name: "Kelvin Karanja",
  title: "Mid-Level Full-Stack Developer",
  tagline:
    "I design and build scalable, accessible web applications with React, Django and Node.js — turning ideas into reliable, human-centred software.",
  location: "Nairobi, Kenya",
  email: "karanjakelvin77@gmail.com",
  phone: "+254 726 292 159",
  linkedin: "https://www.linkedin.com/in/karanja-kelvin/",
  github: "https://github.com/KaranjaK",
  portfolio: "https://karanjakelvin.com",
  yearsExperience: 6,
  summary:
    "Mid-level Full-Stack Developer with 6+ years of experience designing, developing, and maintaining scalable web applications using React, Django, Node.js, and RESTful APIs. Strong background in frontend and backend development, UI/UX design, and accessibility-focused solutions. Proven ability to deliver high-quality software in fast-paced environments while mentoring teams and collaborating across stakeholders.",
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: { name: string; level: number; years: string }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages & Core",
    icon: "💻",
    items: [
      { name: "Python", level: 92, years: "6+ yrs" },
      { name: "JavaScript", level: 92, years: "6+ yrs" },
      { name: "TypeScript", level: 85, years: "3+ yrs" },
      { name: "HTML5 / CSS3", level: 95, years: "6+ yrs" },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", level: 90, years: "5+ yrs" },
      { name: "Tailwind CSS", level: 88, years: "3+ yrs" },
      { name: "SASS", level: 85, years: "4+ yrs" },
      { name: "Accessibility (a11y)", level: 90, years: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Django", level: 90, years: "5+ yrs" },
      { name: "Node.js", level: 78, years: "3+ yrs" },
      { name: "Express.js", level: 72, years: "2+ yrs" },
      { name: "RESTful APIs", level: 88, years: "4+ yrs" },
    ],
  },
  {
    category: "Databases & Tools",
    icon: "🗄️",
    items: [
      { name: "PostgreSQL", level: 78, years: "3+ yrs" },
      { name: "MySQL", level: 78, years: "3+ yrs" },
      { name: "MongoDB", level: 72, years: "2+ yrs" },
      { name: "Git & GitHub / Linux", level: 90, years: "5+ yrs" },
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer & Coding Instructor",
    company: "inABLE Africa",
    location: "Thika, Kenya",
    period: "Aug 2024 — Present",
    current: true,
    bullets: [
      "Designed and delivered web-based learning solutions using JavaScript and React to support inclusive education.",
      "Developed reusable frontend components and backend logic for curriculum delivery platforms.",
      "Improved learner computer literacy by 30% through technology-driven learning systems.",
      "Enhanced accessibility and usability for users with and without visual impairments.",
    ],
    tags: ["React", "JavaScript", "Accessibility", "Education"],
  },
  {
    role: "Full-Stack Developer & Technical Content Engineer",
    company: "Farmer Lifeline",
    location: "Nairobi, Kenya",
    period: "Feb 2023 — Aug 2024",
    bullets: [
      "Built and maintained full-stack web applications using React, Django, and REST APIs.",
      "Achieved 98.3% productivity in research and development of web-based learning platforms.",
      "Created simplified, scalable learning systems, improving beginner comprehension by 87%.",
      "Peer-reviewed code and technical documentation, improving code quality to 92.57% accuracy.",
    ],
    tags: ["React", "Django", "REST", "Documentation"],
  },
  {
    role: "Software Engineer & Volunteer Technical Mentor",
    company: "Moringa School & Memusi Foundation",
    location: "Nairobi & Kajiado, Kenya",
    period: "Aug 2022 — Feb 2023",
    bullets: [
      "Mentored developers through full-stack software development bootcamps.",
      "Supported deployment-ready projects using JavaScript, Python, and web technologies.",
      "Enabled a 97% transition rate between bootcamp phases through structured technical guidance.",
      "Improved learner confidence and technical proficiency with an average rating of 8.5/10.",
    ],
    tags: ["Mentorship", "Python", "JavaScript", "DevOps"],
  },
  {
    role: "ICT & Software Development Tutor",
    company: "Jokim Computer Technology College",
    location: "Kitengela, Kenya",
    period: "Feb 2021 — May 2021",
    bullets: [
      "Delivered training in web development, computer systems, and digital tools.",
      "Implemented technology-assisted learning methods that improved technical skills by 17.5%.",
      "Improved academic performance through structured problem-solving instruction.",
    ],
    tags: ["Teaching", "Web Dev", "ICT"],
  },
  {
    role: "ICT Intern (Software & Systems Support)",
    company: "TenSenses Africa EPZ Limited",
    location: "Kitengela, Kenya",
    period: "Jul 2020 — Sep 2020",
    bullets: [
      "Supported internal systems and software tools to enhance operational efficiency.",
      "Updated and maintained company databases, reducing data loss and resource wastage by 7%.",
      "Conducted technical research and analysis to improve productivity by 23%.",
    ],
    tags: ["Systems", "Databases", "Research"],
  },
  {
    role: "Technical Support Engineer",
    company: "Savannah Informatics Limited",
    location: "Nairobi, Kenya",
    period: "Mar 2018 — Nov 2018",
    bullets: [
      "Provided technical and customer support for enterprise software systems.",
      "Resolved an average of 15 technical issues per day, improving customer satisfaction by 31%.",
      "Produced technical documentation and reports to enhance internal communication by 19%.",
    ],
    tags: ["Support", "Enterprise", "Documentation"],
  },
  {
    role: "ICT Attaché",
    company: "National Hospital Insurance Fund (NHIF)",
    location: "Kitengela, Kenya",
    period: "Jul 2016 — Aug 2016",
    bullets: [
      "Processed and digitized hospital claims data, reducing turnaround from one month to seven days.",
      "Improved data accuracy and operational efficiency through system optimization.",
    ],
    tags: ["ICT", "Digitization"],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  accent: string;
  emoji: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Web-Based Learning Platform",
    description:
      "A full-stack learning platform with role-based access, accessibility-first UI, and curriculum delivery tooling for inclusive education.",
    highlights: [
      "Full-stack app built with React, Django and REST APIs",
      "Responsive UI with WCAG-aligned accessibility patterns",
      "Boosted user engagement and platform usability",
    ],
    tech: ["React", "Django", "PostgreSQL", "REST API"],
    accent: "from-brand-500 to-cyan-400",
    emoji: "🎓",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A performant, SEO-optimised portfolio built with React and Tailwind CSS — fully responsive with cross-browser support.",
    highlights: [
      "Built with React and Tailwind CSS",
      "Optimised for performance, SEO and Lighthouse scores",
      "Cross-browser & device-tested",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    accent: "from-purple-500 to-pink-500",
    emoji: "🌐",
    link: "https://github.com/KaranjaK",
  },
  {
    title: "Farmer Lifeline Learning System",
    description:
      "A scalable learning system serving thousands of learners with simplified curriculum delivery and analytics.",
    highlights: [
      "98.3% productivity in R&D",
      "Improved beginner comprehension by 87%",
      "Peer-reviewed pipeline reaching 92.57% code quality",
    ],
    tech: ["React", "Django", "REST API", "MySQL"],
    accent: "from-emerald-500 to-teal-500",
    emoji: "🌱",
  },
  {
    title: "Hospital Claims Digitisation",
    description:
      "Process automation that digitised paper-based hospital claim workflows, dramatically reducing turnaround times.",
    highlights: [
      "Reduced turnaround from 30 days → 7 days",
      "Improved data accuracy and reporting",
      "Streamlined operational pipelines",
    ],
    tech: ["Python", "MySQL", "Automation"],
    accent: "from-amber-500 to-rose-500",
    emoji: "🏥",
  },
];

export const education = [
  {
    title: "Certificate in Software Development & Web Development",
    org: "Moringa School — Nairobi, Kenya",
    period: "Oct 2021 — May 2022",
  },
  {
    title: "Certificate in Introduction to Artificial Intelligence",
    org: "Tech Mindset Africa — Nairobi, Kenya",
    period: "May 2021 — Jun 2021",
  },
  {
    title: "Bachelor of Business Information Technology (Second Class Upper)",
    org: "Meru University of Science and Technology — Meru, Kenya",
    period: "Sep 2013 — Jul 2017",
  },
];

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Happy Learners", value: "500+" },
  { label: "Code Quality", value: "92%" },
];
