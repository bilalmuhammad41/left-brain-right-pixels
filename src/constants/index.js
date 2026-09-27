import { socials } from "./profile.js";

const projects = [
  {
    title: "THIS IS DIGITAL",
    slug: "this-is-digital",
    description: "A cinematic digital agency landing page replica",
    link: "https://bilalmuhammad41.github.io/this-is-digital-replica/",
    year: "2022",
  },
  {
    title: "HOO BANK",
    slug: "hoo-bank",
    description: "Modern fintech landing page with clean UI patterns",
    link: "https://bilalmuhammad41.github.io/fintech_website/",
    year: "2022",
  },
  {
    title: "NIKE",
    slug: "nike",
    description: "Bold product landing page with dynamic layout",
    link: "https://bilalmuhammad41.github.io/Nike-LandingPage/",
    year: "2022",
  },
  {
    title: "MY TODO",
    slug: "my-todo",
    description: "Minimal task manager built with vanilla JavaScript",
    link: "https://bilalmuhammad41.github.io/todo_List/",
    year: "2023",
  },
];

const NavItems = [
  { title: "Work", link: "/projects" },
  { title: "Services", link: "/services" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const MobileNavItems = [
  { title: "Home", link: "/" },
  { title: "Work", link: "/projects" },
  { title: "Services", link: "/services" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
  ...socials.map((item) => ({ title: item.name, link: item.link })),
];

const skills = [
  {
    title: "Software Engineering",
    description:
      "Reliable product engineering in React and Next.js. Interfaces built to stay clear and maintainable after launch.",
  },
  {
    title: "UI/UX Workflow Design",
    description:
      "Design thinking applied to real workflows. He maps the steps a person takes, then designs the interface around that path.",
  },
  {
    title: "Travel and Aviation",
    description:
      "Software for travel and aviation products, from the booking flow to the operational interface. Currently at Aeroglobe.",
  },
];

export { projects, NavItems, MobileNavItems, skills, socials };
