/** Canonical origin for the deployed portfolio. Discovery URLs always use this. */
export const SITE_URL = "https://bilalmuhammad41.github.io/left-brain-right-pixels";

/** Date the public profile copy was last updated. */
export const PROFILE_UPDATED = "2026-09-27";

export const socials = [
  { name: "Behance", link: "https://www.behance.net/bilalmohammad41" },
  { name: "Dribbble", link: "https://dribbble.com/bilalmohammad41" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/bilalmohammad41/" },
  { name: "GitHub", link: "https://github.com/bilalmuhammad41" },
];

export const profile = {
  name: "Muhammad Bilal",
  alternateName: "M Bilal",
  jobTitle: "Software Engineer",
  location: "Pakistan",
  worksFor: {
    name: "Aeroglobe",
    url: "https://aeroglobe.io/",
  },
  knowsAbout: [
    "Software engineering",
    "Design thinking",
    "UI/UX workflow design",
    "Travel software",
    "Aviation software",
    "Interface design",
  ],
  summary:
    "Muhammad Bilal is a software engineer with a design practice, based in Pakistan. He builds reliable product interfaces and designs the workflows behind them. His domain is travel and aviation software, and he currently works at Aeroglobe.",
};

export const faqs = [
  {
    question: "Who is Muhammad Bilal?",
    answer:
      "Muhammad Bilal is a software engineer with a design practice, based in Pakistan. He designs and builds product interfaces, and he treats design thinking as part of the engineering work rather than a separate step.",
  },
  {
    question: "Does Muhammad Bilal build travel and aviation software?",
    answer:
      "Yes. Muhammad Bilal works on travel and aviation software, currently at Aeroglobe. That practice covers the product interfaces and operational workflows used in travel, not only marketing sites.",
  },
  {
    question: "What is his UI/UX workflow design work?",
    answer:
      "UI/UX workflow design is how he shapes the steps a person takes through a product. He uses design thinking to frame the problem, then designs and builds the interface so the workflow is clear in use and reliable in code.",
  },
  {
    question: "What makes him a reliable engineer to hire?",
    answer:
      "He stays with the work from the workflow through the implementation. Teams hire him when they need a software engineer who can make interface decisions, not only assemble a layout, and when the product has to keep working after launch.",
  },
  {
    question: "How do you hire Muhammad Bilal?",
    answer:
      "Send a note through the contact page with the product, the workflow, and the timeline. He takes on software engineering, UI/UX workflow design, and interface work, including travel and aviation products.",
  },
];

export const sitePages = {
  home: {
    path: "/",
    markdown: "llm/index.md",
    title: "Muhammad Bilal — Software Engineer",
    absoluteTitle: true,
    description:
      "Software engineer with a design practice. Muhammad Bilal builds reliable interfaces and UI/UX workflows, including travel and aviation software at Aeroglobe.",
    changeFrequency: "monthly",
    priority: 1,
  },
  services: {
    path: "/services",
    markdown: "llm/services.md",
    title: "Services",
    description:
      "Software engineering, design thinking, and UI/UX workflow design for product teams, including travel and aviation software.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  projects: {
    path: "/projects",
    markdown: "llm/projects.md",
    title: "Work",
    description:
      "Selected interface work by Muhammad Bilal, a software engineer who designs and builds the product.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  blog: {
    path: "/blog",
    markdown: "llm/blog.md",
    title: "Notes",
    description:
      "Notes from Muhammad Bilal on interface craft, motion, and frontend engineering.",
    changeFrequency: "monthly",
    priority: 0.5,
  },
  contact: {
    path: "/contact",
    markdown: "llm/contact.md",
    title: "Contact",
    description:
      "Hire Muhammad Bilal for software engineering, UI/UX workflow design, and travel or aviation product work.",
    changeFrequency: "yearly",
    priority: 0.7,
  },
};

export const servicesIntro =
  "Muhammad Bilal specializes in software engineering for travel and aviation products, and in UI/UX workflow design. He is a software engineer with a design practice: design thinking up front, then a reliable interface in code.";

export const projectsIntro =
  "Selected interface work. Each piece is designed and built by Muhammad Bilal, a software engineer with a design practice.";

export const blogIntro =
  "Notes on interface craft, motion, and frontend engineering from Muhammad Bilal.";

export const contactIntro =
  "For software engineering, UI/UX workflow design, and travel or aviation product work, send the brief below.";

/** Absolute URL for an HTML route. Always includes a trailing slash. */
export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `${SITE_URL}/`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}

/** Absolute URL for a markdown twin, with no trailing slash. */
export function markdownUrl(file) {
  const clean = String(file).replace(/^\//, "");
  return `${SITE_URL}/${clean}`;
}
