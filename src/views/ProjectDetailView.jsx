"use client";

import { useEffect, useRef } from "react";
import JsonLd from "@/components/JsonLd/JsonLd";
import Footer from "@/components/Footer/Footer";
import PageTitle from "@/components/PageTransition/PageTitle";
import TransitionLink from "@/components/PageTransition/TransitionLink";
import { usePageTransition } from "@/components/PageTransition/PageTransitionContext";
import { projectJsonLd } from "@/lib/seo";
import { gsap, ScrollTrigger, refreshScroll } from "@/lib/gsap";
import { withBasePath } from "@/lib/basePath";
import {
  getNextProject,
  getProjectDetailSlug,
  getProjectSections,
} from "@/lib/projects";
import "./ProjectDetailView.css";
import "./views.css";

// Subtle drift (% of the media layer). Must stay inside the overscan set by
// `.project-detail-frame-media { inset }` in ProjectDetailView.css.
const PARALLAX_RANGE = 5;

function RevealWords({ text }) {
  const words = text.trim().split(/\s+/);

  return words.map((word, index) => (
    <span key={`${word}-${index}`} className="project-detail-word">
      <span className="project-detail-word-inner">{word}</span>
      {index < words.length - 1 ? " " : null}
    </span>
  ));
}

function RevealBlock({ as: Tag = "p", className = "", text }) {
  return (
    <Tag className={className}>
      <RevealWords text={text} />
    </Tag>
  );
}

function NextReel({ hidden = false }) {
  return (
    <div className="project-detail-next-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: 3 }, (_, index) => (
        <span key={index} className="project-detail-next-item">
          Next project
        </span>
      ))}
    </div>
  );
}

function FrameMedia({ item }) {
  return (
    <div className="project-detail-frame-media">
      {item.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={`project-detail-image${
            item.fit === "contain" ? " project-detail-image--contain" : ""
          }`}
          src={withBasePath(item.src)}
          alt={item.alt ?? ""}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ) : (
        <span className="project-detail-mark">{item.mark}</span>
      )}
    </div>
  );
}

function MediaSection({ section, first }) {
  return (
    <div
      className={`project-detail-preview${first ? " page-enter-fade" : ""}`}
    >
      <div
        className="project-detail-frame"
        style={section.ratio ? { aspectRatio: section.ratio } : undefined}
      >
        <FrameMedia item={section} />
      </div>
    </div>
  );
}

function TextSection({ section, project }) {
  const paragraphs = section.paragraphs ?? [];

  return (
    <section className="project-detail-block" data-reveal>
      {section.heading && (
        <div className="project-detail-intro">
          <RevealBlock
            as="h2"
            className="project-detail-display"
            text={section.heading}
          />
          <div className="project-detail-rule" aria-hidden="true">
            <div className="project-detail-rule-line" />
          </div>
        </div>
      )}
      <div className="project-detail-grid">
        <RevealBlock
          as={section.heading ? "h3" : "h2"}
          className="project-detail-label"
          text={section.label}
        />
        <div className="project-detail-copy">
          {paragraphs.map((paragraph) => (
            <RevealBlock key={paragraph} text={paragraph} />
          ))}
          {section.launch && project.link && (
            <div className="project-detail-launch-mask">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-launch link-arrow"
                data-cursor-blend="difference"
                data-cursor-scale="2.6"
              >
                Launch project
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function GalleryColumn({ items, offset = false }) {
  return (
    <div
      className={`project-detail-gallery-col${
        offset ? " project-detail-gallery-col--offset" : ""
      }`}
    >
      {items.map((item, index) => (
        <figure
          key={item.src ?? item.mark ?? index}
          className={`project-detail-shot project-detail-shot--${
            item.ratio ?? "tall"
          }`}
        >
          <div className="project-detail-frame">
            <FrameMedia item={item} />
          </div>
          {item.caption && (
            <figcaption className="project-detail-caption" data-reveal>
              <RevealWords text={item.caption} />
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function GallerySection({ section }) {
  const items = section.items ?? [];
  if (!items.length) return null;
  const split = Math.ceil(items.length / 2);

  return (
    <section className="project-detail-gallery" aria-label="Project frames">
      <GalleryColumn items={items.slice(0, split)} />
      {items.length > split && (
        <GalleryColumn items={items.slice(split)} offset />
      )}
    </section>
  );
}

export default function ProjectDetailView({ project }) {
  const rootRef = useRef(null);
  const { activeSlug } = usePageTransition();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !project || activeSlug !== `/projects/${project.slug}`) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let onScroll;
    let onResize;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set(root.querySelectorAll(".project-detail-word-inner, .project-detail-launch"), {
          y: "0%",
        });
        gsap.set(root.querySelectorAll(".project-detail-rule-line"), { scaleX: 1 });
        return;
      }

      root.querySelectorAll("[data-reveal]").forEach((block) => {
        const words = block.querySelectorAll(".project-detail-word-inner");
        const launch = block.querySelector(".project-detail-launch");
        const rules = block.querySelectorAll(".project-detail-rule-line");
        const targets = launch ? [...words, launch] : [...words];
        if (!targets.length && !rules.length) return;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            once: true,
          },
        });

        if (targets.length) {
          timeline.to(
            targets,
            {
              y: "0%",
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.028,
            },
            0,
          );
        }

        if (rules.length) {
          timeline.to(
            rules,
            {
              scaleX: 1,
              duration: 1,
              ease: "power3.out",
            },
            0,
          );
        }
      });

      root.querySelectorAll(".project-detail-frame").forEach((frame) => {
        const media = frame.querySelector(".project-detail-frame-media");
        if (!media) return;

        gsap.fromTo(
          media,
          { yPercent: -PARALLAX_RANGE },
          {
            yPercent: PARALLAX_RANGE,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      const track = root.querySelector(".project-detail-next-track");
      const group = track?.querySelector(".project-detail-next-group");
      if (!track || !group) return;

      const tween = gsap.to(track, {
        x: () => -group.offsetWidth,
        duration: () => Math.max(group.offsetWidth / 90, 1),
        ease: "none",
        repeat: -1,
      });

      let scale = 1;
      onScroll = () => {
        const nextScale = ScrollTrigger.direction < 0 ? -1 : 1;
        if (nextScale === scale) return;
        scale = nextScale;
        tween.timeScale(scale);
      };
      onResize = () => tween.invalidate();

      ScrollTrigger.addEventListener("scroll", onScroll);
      window.addEventListener("resize", onResize);
    }, root);

    const refreshId = requestAnimationFrame(() => refreshScroll());

    return () => {
      cancelAnimationFrame(refreshId);
      if (onScroll) ScrollTrigger.removeEventListener("scroll", onScroll);
      if (onResize) window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [activeSlug, project]);

  if (!project) return null;

  const sections = getProjectSections(project);
  const next = getNextProject(project);

  return (
    <div className="view-page" ref={rootRef}>
      <JsonLd data={projectJsonLd(project)} />

      <header className="project-detail-hero">
        <PageTitle title={project.title} className="project-detail-kicker" />
        <PageTitle
          as="p"
          title={project.description}
          className="project-detail-headline"
        />
      </header>

      {sections.map((section, index) => {
        const key = `${section.type}-${index}`;
        switch (section.type) {
          case "media":
            return <MediaSection key={key} section={section} first={index === 0} />;
          case "text":
            return <TextSection key={key} section={section} project={project} />;
          case "gallery":
            return <GallerySection key={key} section={section} />;
          default:
            return null;
        }
      })}

      {next && (
        <TransitionLink
          href={getProjectDetailSlug(next)}
          className="project-detail-next"
          aria-label={`Next project: ${next.title}`}
        >
          <div className="project-detail-next-track">
            <NextReel />
            <NextReel hidden />
          </div>
        </TransitionLink>
      )}

      <Footer />
    </div>
  );
}
