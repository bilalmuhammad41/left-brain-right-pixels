import { projects, skills } from "@/constants";
import {
  PROFILE_UPDATED,
  SITE_URL,
  absoluteUrl,
  faqs,
  markdownUrl,
  profile,
  servicesIntro,
  sitePages,
  socials,
} from "@/constants/profile";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function pageMetadata(page) {
  const canonical = absoluteUrl(page.path);
  const title = page.absoluteTitle ? { absolute: page.title } : page.title;
  const fullTitle = page.absoluteTitle
    ? page.title
    : `${page.title} — ${profile.name}`;

  return {
    title,
    description: page.description,
    alternates: {
      canonical,
      types: {
        "text/markdown": markdownUrl(page.markdown),
      },
    },
    openGraph: {
      title: fullTitle,
      description: page.description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: page.description,
    },
  };
}

export function projectMetadata(project) {
  const path = `/projects/${project.slug}`;
  const description = `${project.description}. Interface design and development by Muhammad Bilal.`;

  return pageMetadata({
    path,
    markdown: `llm/projects/${project.slug}.md`,
    title: project.title,
    description,
  });
}

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    alternateName: profile.alternateName,
    jobTitle: profile.jobTitle,
    description: profile.summary,
    url: absoluteUrl("/"),
    homeLocation: {
      "@type": "Place",
      name: profile.location,
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: profile.worksFor.name,
      url: profile.worksFor.url,
    },
    knowsAbout: profile.knowsAbout,
    sameAs: socials.map((item) => item.link),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: profile.name,
    url: absoluteUrl("/"),
    description: profile.summary,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

function graph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

function webPageNode({ path, title, description, type = "WebPage" }) {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    dateModified: PROFILE_UPDATED,
    inLanguage: "en",
  };
}

export function homeJsonLd() {
  const page = sitePages.home;

  return graph([
    websiteNode(),
    personNode(),
    {
      "@type": "ProfilePage",
      "@id": `${absoluteUrl("/")}#profile`,
      url: absoluteUrl("/"),
      name: profile.name,
      description: profile.summary,
      dateModified: PROFILE_UPDATED,
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": WEBSITE_ID },
    },
    webPageNode({
      path: page.path,
      title: page.title,
      description: page.description,
    }),
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl("/")}#faq`,
      url: absoluteUrl("/"),
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ]);
}

export function servicesJsonLd() {
  const page = sitePages.services;

  return graph([
    websiteNode(),
    personNode(),
    webPageNode({
      path: page.path,
      title: page.title,
      description: page.description,
    }),
    {
      "@type": "ProfessionalService",
      "@id": `${absoluteUrl("/services")}#service`,
      name: `${profile.name} — software engineering and UI/UX`,
      description: servicesIntro,
      url: absoluteUrl("/services"),
      provider: { "@id": PERSON_ID },
      serviceType: skills.map((skill) => skill.title),
    },
  ]);
}

export function projectsJsonLd() {
  const page = sitePages.projects;

  return graph([
    websiteNode(),
    personNode(),
    webPageNode({
      path: page.path,
      title: page.title,
      description: page.description,
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl("/projects")}#work`,
      name: "Selected work",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: absoluteUrl(`/projects/${project.slug}`),
      })),
    },
  ]);
}

export function projectJsonLd(project) {
  const path = `/projects/${project.slug}`;
  const description = `${project.description}. Interface design and development by Muhammad Bilal.`;

  return graph([
    websiteNode(),
    personNode(),
    webPageNode({
      path,
      title: project.title,
      description,
    }),
    {
      "@type": "CreativeWork",
      "@id": `${absoluteUrl(path)}#work`,
      name: project.title,
      description: project.description,
      dateCreated: project.year,
      url: absoluteUrl(path),
      author: { "@id": PERSON_ID },
      ...(project.link ? { sameAs: project.link } : {}),
    },
  ]);
}

export function blogJsonLd() {
  const page = sitePages.blog;

  return graph([
    websiteNode(),
    personNode(),
    webPageNode({
      path: page.path,
      title: page.title,
      description: page.description,
    }),
  ]);
}

export function contactJsonLd() {
  const page = sitePages.contact;

  return graph([
    websiteNode(),
    personNode(),
    webPageNode({
      path: page.path,
      title: page.title,
      description: page.description,
      type: "ContactPage",
    }),
  ]);
}
