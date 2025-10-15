// app/utils/assetPath.ts

/**
 * Returns a fully qualified image or asset path
 * that works in both local dev and GitHub Pages builds.
 *
 * Example:
 *   assetPath("/images/example.png")
 *   → "http://localhost:3000/images/example.png"  (dev)
 *   → "/Portfolio/images/example.png"             (on GitHub Pages)
 */

export function assetPath(path: string): string {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // Use basePath only when not running locally
  const base =
    !isLocal &&
    process.env.NEXT_PUBLIC_BASE_PATH &&
    process.env.NEXT_PUBLIC_BASE_PATH !== "/"
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "";

  // Ensure a leading slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return `${base}${cleanPath}`;
}
