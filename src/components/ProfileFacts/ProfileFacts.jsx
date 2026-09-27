import TransitionLink from "@/components/PageTransition/TransitionLink";
import { faqs, profile, socials } from "@/constants/profile";
import "./ProfileFacts.css";

export default function ProfileFacts() {
  return (
    <section className="section-container profile-facts page-enter-fade">
      <p className="section-label">Practice</p>
      <h2 className="profile-facts-heading">
        A software engineer with a design practice
      </h2>
      <p className="profile-facts-summary">{profile.summary}</p>

      <dl className="profile-facts-list">
        <div>
          <dt>Role</dt>
          <dd>Software engineer with a design practice</dd>
        </div>
        <div>
          <dt>Domain</dt>
          <dd>Travel and aviation software</dd>
        </div>
        <div>
          <dt>Workflow</dt>
          <dd>UI/UX workflow design and design thinking</dd>
        </div>
        <div>
          <dt>Currently</dt>
          <dd>
            <a
              href={profile.worksFor.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.worksFor.name}
            </a>
          </dd>
        </div>
        <div>
          <dt>Based in</dt>
          <dd>{profile.location}</dd>
        </div>
      </dl>

      <ul className="profile-facts-socials">
        {socials.map((item) => (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="me noopener noreferrer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="profile-facts-faq">
        <h2>Common questions</h2>
        {faqs.map((faq) => (
          <article key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>

      <div className="profile-facts-links">
        <TransitionLink href="/services" className="link-arrow">
          Services
        </TransitionLink>
        <TransitionLink href="/projects" className="link-arrow">
          Work
        </TransitionLink>
        <TransitionLink href="/contact" className="link-arrow">
          Contact
        </TransitionLink>
      </div>
    </section>
  );
}
