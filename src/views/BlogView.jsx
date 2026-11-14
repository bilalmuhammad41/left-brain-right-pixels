import { blogPosts } from "@/constants/blog";
import { blogIntro } from "@/constants/profile";
import JsonLd from "@/components/JsonLd/JsonLd";
import PageTitle from "@/components/PageTransition/PageTitle";
import TransitionLink from "@/components/PageTransition/TransitionLink";
import { blogJsonLd } from "@/lib/seo";
import "./views.css";

export default function BlogView() {
  return (
    <div className="view-page">
      <JsonLd data={blogJsonLd()} />
      <section className="blog section-container">
        <div className="page-header">
          <PageTitle noEndSpace title="99 WAYS" />
          <PageTitle noEndSpace title="TO BE" />
          <PageTitle title="INSPIRED" />
        </div>

        <div className="page-enter-fade">
        <p className="page-lead">{blogIntro}</p>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-meta">
                <span className="blog-card-tag">{post.tag}</span>
                <span className="blog-card-date">{post.date}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <TransitionLink href="/contact" className="link-arrow blog-footer-link">
          Get in touch
        </TransitionLink>
        </div>
      </section>
    </div>
  );
}
