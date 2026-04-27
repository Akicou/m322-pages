/** Resolves a path under /public for the configured Vite base (e.g. GitHub Pages subpath). */
export function publicUrl(path) {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}
