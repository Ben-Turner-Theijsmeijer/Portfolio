// app/utils/assetPath.ts
export function assetPath(path: string): string {
  // Normalize incoming path (ensure leading slash)
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // If running in a browser, detect if the app is served under "/Portfolio"
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname || "";
    // If pathname begins with '/Portfolio' or contains it as root segment, use it as base
    // Adjust the '/Portfolio' literal if your repo name changes.
    const repoBase = "/Portfolio";
    if (pathname === repoBase || pathname.startsWith(`${repoBase}/`) || pathname.startsWith(`${repoBase}?`)) {
      return `${repoBase}${cleanPath}`;
    }

    // If site is hosted at root (dev or production), return root path
    return cleanPath;
  }

  // Server-side (fallback to NEXT_PUBLIC_BASE_PATH if available at build time)
  const envBase = (process.env.NEXT_PUBLIC_BASE_PATH && process.env.NEXT_PUBLIC_BASE_PATH !== "/")
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";
  return `${envBase}${cleanPath}`;
}
