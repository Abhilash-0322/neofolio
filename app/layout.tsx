import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building dependable products with Python, cloud infrastructure, and intelligent workflows.",
  keywords: ["Abhilash Maurya", "backend developer", "AI systems", "Python", "FastAPI"],
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems Developer",
    description: "I build dependable systems and intelligent products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
