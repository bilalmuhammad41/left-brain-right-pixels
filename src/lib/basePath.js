/** Base path for GitHub Pages project sites (e.g. /left-brain-right-pixels). Empty for local dev. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the configured base path. */
export function withBasePath(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

/** Public href for an internal route, including base path and trailing slash. */
export function publicHref(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const withSlash = href !== "/" && !href.endsWith("/") ? `${href}/` : href;
  return withBasePath(withSlash);
}
