"use client";

import Logo from "@/components/Logo/Logo";
import TransitionLink from "@/components/PageTransition/TransitionLink";
import { NavItems } from "@/constants";
import { SITE_URL, profile, socials } from "@/constants/profile";
import { scrollToTop } from "@/lib/gsap";
import "./Footer.css";

const siteLabel = SITE_URL.replace(/^https?:\/\//, "");

export default function Footer() {
  return (
    <footer className="site-footer">
      <Logo className="site-footer-mark" />

      <div className="section-container site-footer-inner">
        <p className="site-footer-kicker">
          <span className="site-footer-dot" aria-hidden="true" />
          Not sure what your product needs?
        </p>

        <h2 className="site-footer-title">
          Let&apos;s figure it out <span className="site-footer-title-accent">together.</span>
        </h2>

        <TransitionLink href="/contact" className="site-footer-contact">
          Book a free discovery call
        </TransitionLink>

        <div className="site-footer-lower">
          <div>
            <p className="site-footer-label">Sitemap</p>
            <ul className="site-footer-list">
              {NavItems.map((item) => (
                <li key={item.link}>
                  <TransitionLink href={item.link}>{item.title}</TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer-label">Elsewhere</p>
            <ul className="site-footer-list">
              {socials.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="me noopener noreferrer"
                    data-cursor-blend="difference"
                    data-cursor-scale="2.8"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="site-footer-top"
            aria-label="Back to top"
            data-cursor-scale="2.4"
            onClick={() => scrollToTop(false)}
          >
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M8 12.5V3.5M8 3.5L3.5 8M8 3.5L12.5 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="site-footer-bar">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{siteLabel}</span>
          <span>With taste</span>
        </div>
      </div>
    </footer>
  );
}
