// app/utils/assetPath.ts

/**
 * Returns a correct image or asset path that works in both:
 * - Local dev (http://localhost:3000)
 * - GitHub Pages (https://username.github.io/Portfolio)
 * - Nested routes like /experience/[slug]
 *
 * Example:
 *   assetPath("images/example.png")
 *   → "/images/example.png" (dev)
 *   → "/Portfolio/images/example.png" (production)
 */

export function assetPath(path: string): string {
  // Handle relative paths gracefully (e.g., "images/foo.png" → "/images/foo.png")
  let cleanPath = path.startsWith("/") ? path : `/${path}`;

  // Detect if running locally (Next.js dev mode)
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  // Add basePath prefix only in production
  const base =
    !isLocal &&
    process.env.NEXT_PUBLIC_BASE_PATH &&
    process.env.NEXT_PUBLIC_BASE_PATH !== "/"
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : "";

  // Always return an absolute path from root (avoids nesting issues)
  return `${base}${cleanPath}`;
}
