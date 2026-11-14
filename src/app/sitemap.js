import { projects } from "@/constants";
import { PROFILE_UPDATED, absoluteUrl, sitePages } from "@/constants/profile";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = Object.values(sitePages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: PROFILE_UPDATED,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectRoutes = projects.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified: PROFILE_UPDATED,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
