import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/constants/blog.js";
import { projects, skills } from "../src/constants/index.js";
import {
  SITE_URL,
  absoluteUrl,
  blogIntro,
  contactIntro,
  faqs,
  markdownUrl,
  profile,
  projectsIntro,
  servicesIntro,
  sitePages,
  socials,
} from "../src/constants/profile.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const linkLine = (label, file, description) =>
  `- [${label}](${markdownUrl(file)}): ${description}`;

function llmsTxt() {
  const pages = [
    linkLine("Home", sitePages.home.markdown, sitePages.home.description),
    linkLine("Services", sitePages.services.markdown, sitePages.services.description),
    linkLine("Work", sitePages.projects.markdown, sitePages.projects.description),
    linkLine("Notes", sitePages.blog.markdown, sitePages.blog.description),
    linkLine("Contact", sitePages.contact.markdown, sitePages.contact.description),
  ];

  const work = projects.map((project) =>
    linkLine(
      project.title,
      `llm/projects/${project.slug}.md`,
      `${project.description} (${project.year})`
    )
  );

  const profiles = socials.map(
    (item) => `- [${item.name}](${item.link}): ${profile.name} on ${item.name}`
  );

  return `# ${profile.name}

> ${profile.summary}

${profile.name} is a ${profile.jobTitle.toLowerCase()} with a design practice. He specializes in travel and aviation software and in UI/UX workflow design. He currently works at ${profile.worksFor.name}.

## Pages

${pages.join("\n")}

## Work

${work.join("\n")}

## Profiles

${profiles.join("\n")}
`;
}

function homeMarkdown() {
  const facts = [
    `- Role: Software engineer with a design practice`,
    `- Domain: Travel and aviation software`,
    `- Workflow: UI/UX workflow design and design thinking`,
    `- Currently: [${profile.worksFor.name}](${profile.worksFor.url})`,
    `- Based in: ${profile.location}`,
  ];

  const questions = faqs
    .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
    .join("\n\n");

  const profiles = socials
    .map((item) => `- [${item.name}](${item.link})`)
    .join("\n");

  return `# ${profile.name}

Canonical page: ${absoluteUrl("/")}

${profile.summary}

## Practice

${facts.join("\n")}

## Common questions

${questions}

## Profiles

${profiles}
`;
}

function servicesMarkdown() {
  const skillBlocks = skills
    .map((skill) => `### ${skill.title}\n\n${skill.description}`)
    .join("\n\n");

  return `# Services

Canonical page: ${absoluteUrl("/services")}

${servicesIntro}

${skillBlocks}
`;
}

function projectsMarkdown() {
  const list = projects
    .map(
      (project) =>
        `- [${project.title}](${markdownUrl(`llm/projects/${project.slug}.md`)}): ${project.description} (${project.year})`
    )
    .join("\n");

  return `# Work

Canonical page: ${absoluteUrl("/projects")}

${projectsIntro}

${list}
`;
}

function projectMarkdown(project) {
  const live = project.link ? `\nLive site: ${project.link}\n` : "\n";

  return `# ${project.title}

Canonical page: ${absoluteUrl(`/projects/${project.slug}`)}

${project.description}

- Year: ${project.year}
- Role: Design and development
- Author: ${profile.name}
${live}`;
}

function blogMarkdown() {
  const posts = blogPosts
    .map(
      (post) =>
        `### ${post.title}\n\n${post.tag} · ${post.date}\n\n${post.excerpt}`
    )
    .join("\n\n");

  return `# Notes

Canonical page: ${absoluteUrl("/blog")}

${blogIntro}

${posts}
`;
}

function contactMarkdown() {
  const profiles = socials
    .map((item) => `- [${item.name}](${item.link})`)
    .join("\n");

  return `# Contact

Canonical page: ${absoluteUrl("/contact")}

${contactIntro}

## Profiles

${profiles}
`;
}

async function write(relativePath, contents) {
  const file = path.join(publicDir, relativePath);
  try {
    if ((await readFile(file, "utf8")) === contents) return;
  } catch {
    // File is not there yet.
  }
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, contents, "utf8");
}

await write("llms.txt", llmsTxt());
await write(sitePages.home.markdown, homeMarkdown());
await write(sitePages.services.markdown, servicesMarkdown());
await write(sitePages.projects.markdown, projectsMarkdown());
await write(sitePages.blog.markdown, blogMarkdown());
await write(sitePages.contact.markdown, contactMarkdown());

for (const project of projects) {
  await write(`llm/projects/${project.slug}.md`, projectMarkdown(project));
}

console.log(`Wrote discovery files for ${SITE_URL}`);
