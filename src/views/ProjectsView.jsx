import { projects } from "@/constants";
import { projectsIntro } from "@/constants/profile";
import JsonLd from "@/components/JsonLd/JsonLd";
import PageTitle from "@/components/PageTransition/PageTitle";
import TransitionLink from "@/components/PageTransition/TransitionLink";
import { getProjectDetailSlug } from "@/lib/projects";
import { projectsJsonLd } from "@/lib/seo";
import "@/sections/Projects/Projects.css";
import "./views.css";

export default function ProjectsView() {
  return (
    <div className="view-page">
      <JsonLd data={projectsJsonLd()} />
      <section className="projects section-container">
        <div className="page-header">
          <PageTitle title="MY" />
          <PageTitle title="GAME" />
        </div>

        <div className="page-enter-fade">
          <p className="page-lead">{projectsIntro}</p>
          <div className="projects-list">
            {projects.map((project, index) => (
              <TransitionLink
                key={project.slug}
                href={getProjectDetailSlug(project)}
                className="project-card"
              >
                <div className="project-card-visual">
                  <div className="project-card-placeholder">
                    <span className="project-card-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="project-card-info">
                  <h3 className="project-card-title">
                    <strong>{project.title}</strong>
                    <span className="project-card-dash"> – </span>
                    {project.description}
                  </h3>
                  <span className="project-card-year">{project.year}</span>
                </div>
              </TransitionLink>
            ))}
          </div>

          <div className="projects-footer">
            <TransitionLink href="/contact" className="link-arrow">
              Get in touch
            </TransitionLink>
          </div>
        </div>
      </section>
    </div>
  );
}
