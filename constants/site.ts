export const siteConfig = {
  name: "Chess",
  description:
    "A technical assessment showcasing production-grade Next.js architecture, performance, and accessibility.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  locale: "en",
} as const;
