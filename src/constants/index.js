import { socials } from "./profile.js";

const projects = [
  {
    title: "THIS IS DIGITAL",
    slug: "this-is-digital",
    description: "A digital agency landing page recreation",
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
    thumbnail: {
      src: "/project-assets/hoo-bank/thumbnail.png",
      alt: "HooBank landing page hero with layered card render",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/hoo-bank/thumbnail.png",
        alt: "HooBank landing page hero with layered card render",
        ratio: "1425 / 883",
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
        src: "/project-assets/hoo-bank/features.png",
        alt: "Billing and invoicing and card comparison feature sections",
        ratio: "1221 / 963",
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
            src: "/project-assets/hoo-bank/hro-mobile.png",
            alt: "Mobile hero with headline and card render",
            ratio: "tall",
            fit: "contain",
            caption: "The hero on mobile stacks the headline above the card render.",
          },
          {
            src: "/project-assets/hoo-bank/features-mobile.png",
            alt: "Billing and invoicing feature on mobile",
            ratio: "tall",
            fit: "contain",
            caption: "Billing and invoicing fit a single column, store links included.",
          },
          {
            src: "/project-assets/hoo-bank/footer.png",
            alt: "Mobile footer with link groups",
            ratio: "tall",
            fit: "contain",
            caption: "The footer collapses into short groups of links.",
          },
        ],
      },
      {
        type: "media",
        src: "/project-assets/hoo-bank/testimonial.png",
        alt: "Customer testimonials and partner logos",
        ratio: "1128 / 721",
      },
    ],
  },
  {
    title: "NIKE",
    slug: "nike",
    description: "Bold product landing page with dynamic layout",
    link: "https://bilalmuhammad41.github.io/Nike-LandingPage/",
    year: "2022",
    thumbnail: {
      src: "/project-assets/nike/thumbnail.png",
      alt: "Nike landing page hero with featured shoe",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/nike/thumbnail.png",
        alt: "Nike landing page hero with featured shoe",
        ratio: "1440 / 964",
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
        src: "/project-assets/nike/sub-hero.png",
        alt: "Quality shoes introduction with three service cards",
        ratio: "1234 / 908",
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
            src: "/project-assets/nike/hero-mobile.png",
            alt: "Mobile hero with headline, call to action and stats",
            ratio: "tall",
            fit: "contain",
            caption: "The hero on mobile stacks the headline, call to action and stats.",
          },
          {
            src: "/project-assets/nike/shoes-selector-feature.png",
            alt: "Shoe selector on mobile",
            ratio: "tall",
            fit: "contain",
            caption: "The shoe selector keeps the product and its variants in one view.",
          },
        ],
      },
      {
        type: "media",
        src: "/project-assets/nike/features.png",
        alt: "Special offer section with product photography",
        ratio: "1216 / 656",
      },
      {
        type: "media",
        src: "/project-assets/nike/testimonials.png",
        alt: "Customer testimonials with ratings",
        ratio: "1424 / 590",
      },
      {
        type: "media",
        src: "/project-assets/nike/footer.png",
        alt: "Newsletter sign-up and footer",
        ratio: "1684 / 726",
      },
    ],
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
