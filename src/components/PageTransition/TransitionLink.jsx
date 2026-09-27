"use client";

import { publicHref } from "@/lib/basePath";
import { isInternalPath } from "@/lib/slug";
import { usePageTransition } from "./PageTransitionContext";

const TransitionLink = ({
  href,
  children,
  className = "",
  onClick,
  ...props
}) => {
  const { navigate, isTransitioning } = usePageTransition();

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (!isInternalPath(href)) return;

    event.preventDefault();
    if (!isTransitioning) {
      navigate(href);
    }
  };

  return (
    <a
      data-cursor-blend="difference"
      data-cursor-scale="2.8"
      href={publicHref(href)}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default TransitionLink;
