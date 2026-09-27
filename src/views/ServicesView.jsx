import { skills } from "@/constants";
import { servicesIntro } from "@/constants/profile";
import JsonLd from "@/components/JsonLd/JsonLd";
import PageTitle from "@/components/PageTransition/PageTitle";
import TransitionLink from "@/components/PageTransition/TransitionLink";
import { servicesJsonLd } from "@/lib/seo";
import "@/sections/Skills/Skills.css";
import "./views.css";

export default function ServicesView() {
  return (
    <div className="view-page">
      <JsonLd data={servicesJsonLd()} />
      <section className="skills section-container">
        <div className="page-header">
          <PageTitle title="SERIOUS" />
          <PageTitle title="SKILLS ONLY" />
        </div>

        <div className="page-enter-fade">
        <p className="skills-subtitle">{servicesIntro}</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article key={index} className="skill-card">
              <h3 className="skill-card-title">{skill.title}</h3>
              <p className="skill-card-desc">{skill.description}</p>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <TransitionLink href="/projects" className="link-arrow">
            View all projects
          </TransitionLink>
        </div>
        </div>
      </section>
    </div>
  );
}
