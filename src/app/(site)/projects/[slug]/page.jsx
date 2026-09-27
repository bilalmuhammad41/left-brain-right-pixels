import { projects } from "@/constants";
import { projectMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return projectMetadata(project);
}

export default function ProjectDetailPage() {
  return null;
}
