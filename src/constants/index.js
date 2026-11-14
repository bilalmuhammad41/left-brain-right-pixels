import { socials } from "./profile.js";

const projects = [
  {
    title: "BLANX",
    slug: "blanx",
    description: "Custom apparel shop with a generative art studio built in",
    link: "https://blanx.vercel.app/",
    year: "2024",
    thumbnail: {
      src: "/project-assets/blanx/hero.jpg",
      alt: "BLANX hero with a skater in a printed shirt and the line Fill in the Blanx",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/blanx/hero.jpg",
        alt: "BLANX hero with a skater in a printed shirt and the line Fill in the Blanx",
        ratio: "2000 / 1216",
      },
      {
        type: "text",
        label: "The storefront",
        paragraphs: [
          "Shirts, covers, and custom AI prints share one shop. The opening frame is a photograph, and the only action is Build Something New.",
          "The catalogue is the easy half. The other half is turning a picture into something a person can wear.",
        ],
        launch: true,
      },
      {
        type: "media",
        src: "/project-assets/blanx/ai-builder.png",
        alt: "Generative art studio with text to image selected and four results to choose from",
        ratio: "1897 / 902",
      },
      {
        type: "text",
        label: "Making the art",
        heading: "Making the art",
        paragraphs: [
          "Three ways in: a text prompt, a reference image, or a doodle. A style sets the look, Generate returns four pictures, and Select carries one into the product.",
        ],
      },
      {
        type: "media",
        src: "/project-assets/blanx/blogs.png",
        alt: "Stories and Ideas with topic filters and articles on print on demand",
        ratio: "1900 / 912",
      },
      {
        type: "text",
        label: "The club",
        heading: "The club",
        paragraphs: [
          "Generation is metered. Plans run from a five-dollar start to a monthly refill of image credits, and the account keeps the points that move a member from Basic toward Bronze.",
        ],
      },
      {
        type: "gallery",
        items: [
          {
            src: "/project-assets/blanx/pricing-mobile.png",
            alt: "Membership plans on a phone, from pay as you go to BLANX Premium",
            ratio: "tall",
            fit: "contain",
            caption: "Plans stack two-up on a phone, with Play marked most popular.",
          },
          {
            src: "/project-assets/blanx/credits-mobile.png",
            alt: "Blanx Club rewards on a phone, with a points gauge from Basic to Bronze",
            ratio: "tall",
            fit: "contain",
            caption: "Rewards, orders, and the membership card sit in one tab bar.",
          },
        ],
      },
      {
        type: "media",
        src: "/project-assets/blanx/signin.png",
        alt: "Sign in to BLANX Club beside a portrait, with Google and Facebook options",
        ratio: "1567 / 757",
      },
      {
        type: "media",
        src: "/project-assets/blanx/orders.png",
        alt: "Account orders table with pending, completed, on the way, cancelled, and waiting for payment",
        ratio: "1489 / 903",
      },
    ],
  },
  {
    title: "LINKLATER",
    slug: "linklater",
    description: "A one-page way to ask a friend out, built around Richard Linklater",
    link: "https://linklater.vercel.app/",
    year: "2024",
    thumbnail: {
      src: "/project-assets/linklater/hero.png",
      alt: "Linklater wordmark with a portrait in the lettering and a row of photos to choose from",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/linklater/hero.png",
        alt: "Linklater wordmark with a portrait in the lettering and the start of the photo picker",
        ratio: "1898 / 959",
      },
      {
        type: "text",
        label: "The invitation",
        paragraphs: [
          "The whole product is a pun. Pick a photograph of Richard Linklater, name the kind of link you want, and send it to a friend.",
          "Pink, blue, and a face inside the wordmark. The page is one joke told in three steps.",
        ],
        launch: true,
      },
      {
        type: "media",
        src: "/project-assets/linklater/steps-desktop.png",
        alt: "Step two link choices and step three phone number, ending in a sent confirmation",
        ratio: "1900 / 959",
      },
      {
        type: "gallery",
        items: [
          {
            src: "/project-assets/linklater/hero-mobile.png",
            alt: "Linklater on a phone, with five portraits in a grid under step one",
            ratio: "tall",
            fit: "contain",
            caption: "On a phone the portraits drop into a grid under the wordmark.",
          },
          {
            src: "/project-assets/linklater/steps-mobile.png",
            alt: "Link choices and phone field stacked on a phone, with the send button",
            ratio: "tall",
            fit: "contain",
            caption: "The link choices and the phone field stack into one column.",
          },
        ],
      },
      {
        type: "text",
        label: "The message",
        heading: "The message",
        paragraphs: [
          "Sending lands in a text. The friend gets the portrait and two lines: someone wants to link for a drink, and a nudge to link back.",
        ],
      },
      {
        type: "media",
        src: "/project-assets/linklater/footer.png",
        alt: "Phone showing a delivered text with a Linklater portrait and a hangout message",
        ratio: "1899 / 962",
      },
    ],
  },
  {
    title: "SMARTCHOICE",
    slug: "smartchoice",
    description: "Insurance comparison for car, bike, health, and travel cover in Pakistan",
    link: "https://smartchoice.pk/",
    year: "2024",
    thumbnail: {
      src: "/project-assets/smartchoice/hero.jpg",
      alt: "Smartchoice hero, Insurance made simple for you, with car, bike, health, and travel",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/smartchoice/hero.jpg",
        alt: "Smartchoice hero with category shortcuts for car, bike, health, and travel insurance",
        ratio: "1147 / 571",
      },
      {
        type: "text",
        label: "The comparison",
        paragraphs: [
          "Four products, one decision. Car, bike, health, and travel sit in the navigation and again as shortcuts under the headline.",
          "The page is built for someone comparing policies in Pakistan, then buying from the insurer that fits.",
        ],
        launch: true,
      },
      {
        type: "media",
        src: "/project-assets/smartchoice/promotions.jpg",
        alt: "Bank promotions for health and travel insurance from Bank Alfalah, JS Bank, and Faysal Bank",
        ratio: "1147 / 433",
      },
      {
        type: "text",
        label: "The covers",
        heading: "The covers",
        paragraphs: [
          "Under the offers, each line of cover gets its own story: a car under an umbrella, a trip, and a family plan. The number of comparisons sits above them as proof.",
        ],
      },
      {
        type: "media",
        src: "/project-assets/smartchoice/people-we-helped.jpg",
        alt: "Three insurance stories for car, travel, and family, under a comparisons count",
        ratio: "1147 / 1676",
      },
      {
        type: "media",
        src: "/project-assets/smartchoice/faqs.jpg",
        alt: "Press logos and a How It Works list of insurance questions",
        ratio: "1147 / 540",
      },
    ],
  },
  {
    title: "SEEDINOV",
    slug: "seedinov",
    description: "Studio site for custom software, AI products, and shipped case studies",
    link: "https://www.seedinov.com/",
    year: "2024",
    thumbnail: {
      src: "/project-assets/seedinov/hero.jpg",
      alt: "SeedInov hero, Innovation Cultivated, Seeds Grown, with a wireframe plant",
    },
    sections: [
      {
        type: "media",
        src: "/project-assets/seedinov/hero.jpg",
        alt: "SeedInov hero with a dark field, a wireframe seedling, and services across the navigation",
        ratio: "1147 / 645",
      },
      {
        type: "text",
        label: "The studio",
        paragraphs: [
          "A software studio introducing itself through the work. AI, app development, commerce, agriculture, digital health, and cloud sit in the bar above a single claim.",
          "The picture is a seedling drawn as a mesh. The line under it is the offer: ideas grown into ventures.",
        ],
        launch: true,
      },
      {
        type: "media",
        src: "/project-assets/seedinov/past-projects.jpg",
        alt: "Case study grid of software products from Podcut.Ai to EsperWise",
        ratio: "1147 / 1325",
      },
      {
        type: "text",
        label: "The proof",
        heading: "The proof",
        paragraphs: [
          "The case studies are the argument. Each card is a product already shipped, from a podcast editor to a clinic conversation recorder, with a link through to the write-up.",
        ],
      },
      {
        type: "media",
        src: "/project-assets/seedinov/upholding-commitments.jpg",
        alt: "Studio figures for clients and projects, plus AI use cases for billiards and object detection",
        ratio: "1147 / 953",
      },
    ],
  },
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
    hidden: true,
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
    hidden: true,
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
].filter((project) => !project.hidden);

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
