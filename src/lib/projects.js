import { projects } from "@/constants";

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectDetailSlug(project) {
  return `/projects/${project.slug}`;
}

export function getNextProject(project) {
  const index = projects.findIndex((item) => item.slug === project?.slug);
  if (index === -1) return projects[0] ?? null;
  return projects[(index + 1) % projects.length];
}

/**
 * Generic detail page used when a project has no `sections` array of its own.
 * Every image is a placeholder (no `src`), so the frames render a text mark.
 */
function defaultSections(project) {
  const year = project.year || "2023 – 2024";

  return [
    { type: "media", mark: project.title },
    {
      type: "text",
      label: "The challenge",
      paragraphs: [
        "Crafting a premium digital presence with a focus on kinetics and typography.",
        "The work is told in short blocks. Each one stays out of view until the scroll reaches it, so the page reads as a sequence.",
      ],
      launch: true,
    },
    { type: "media", mark: year },
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
          ratio: "square",
          mark: "01",
          caption: "The page is a sequence of frames that arrive with the scroll.",
        },
        {
          ratio: "tall",
          mark: "02",
          caption: "Short blocks keep each idea easy to take in.",
        },
        {
          ratio: "tall",
          mark: "03",
          caption: `${project.title} — design and development, ${year}.`,
        },
      ],
    },
    {
      type: "text",
      label: "Notes",
      heading: "Notes",
      paragraphs: [
        `Designed and developed in ${year}. The role covered the interface and the front-end build, with the live site as the reference for pacing and type.`,
      ],
    },
  ];
}

/**
 * Ordered detail-page sections for a project (the hero title/description and
 * the "next project" reel are always rendered by the view).
 *
 * A project controls its own page through `project.sections` in
 * `src/constants/index.js`: add, remove or reorder entries to show or hide
 * content. Projects without `sections` get the generic placeholder layout.
 */
export function getProjectSections(project) {
  if (Array.isArray(project?.sections)) return project.sections;
  return project ? defaultSections(project) : [];
}
