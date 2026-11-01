import { socials } from "./profile.js";

const projects = [
  {
    title: "THIS IS DIGITAL",
    slug: "this-is-digital",
    description: "A cinematic digital agency landing page replica",
    link: "https://bilalmuhammad41.github.io/this-is-digital-replica/",
    year: "2022",
    thumbnail: {
      src: "/project-assets/this-is-digital/thumbnail.png",
      alt: "This Is Digital landing page hero",
    },
    // Detail page layout. Add, remove or reorder entries to show/hide sections.
    // Section types:
    //   media   { src, alt, ratio?, fit?: "cover" | "contain", mark? }
    //   text    { label, heading?, paragraphs, launch? }
    //   gallery { items: [{ src, alt, caption, ratio?: "square" | "tall" | "wide", fit? }] }
    // Omit `sections` entirely to use the generic placeholder layout.
    sections: [
      {
        type: "media",
        src: "/project-assets/this-is-digital/thumbnail.png",
        alt: "This Is Digital landing page hero",
        ratio: "1901 / 964",
      },
      {
        type: "text",
        label: "The challenge",
        paragraphs: [
          "Crafting a premium digital presence with a focus on kinetics and typography.",
          "The work is told in short blocks. Each one stays out of view until the scroll reaches it, so the page reads as a sequence.",
        ],
        launch: true,
      },
      {
        type: "media",
        src: "/project-assets/this-is-digital/sub-hero-section.png",
        alt: "Collage of office photography beside the services introduction",
        ratio: "1913 / 942",
      },
      {
        type: "text",
        label: "The approach",
        heading: "The approach",
        paragraphs: [
          "By prioritizing high-contrast typography and smooth GSAP animations, the layout stays direct while the scroll carries the story from the opening line through the frames.",
        ],
      },
      {
        type: "gallery",
        items: [
          {
            src: "/project-assets/this-is-digital/hero-mobile.png",
            alt: "Mobile hero with headline and call to action",
            ratio: "tall",
            fit: "contain",
            caption: "The hero on mobile keeps the headline and one clear action.",
          },
          {
            src: "/project-assets/this-is-digital/brand-mobile.png",
            alt: "Grid of partner brand logos on mobile",
            ratio: "tall",
            fit: "contain",
            caption: "Partner brands stack into a two-column grid.",
          },
        ],
      },
      {
        type: "media",
        src: "/project-assets/this-is-digital/case-studies.png",
        alt: "Two case study cards with results",
        ratio: "5 / 2",
      },
      {
        type: "media",
        src: "/project-assets/this-is-digital/footer.png",
        alt: "Contact call-out and footer",
        ratio: "1914 / 903",
      },
    ],
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
