import type { Metadata } from "next";

import { fontVariables } from "@/lib/fonts";
import { rootMetadata, rootViewport } from "@/lib/metadata";

import "@/styles/globals.css";

export const metadata: Metadata = rootMetadata;
export const viewport = rootViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} dark h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
