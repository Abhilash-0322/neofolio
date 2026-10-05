import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building reliable software beyond demos.",
  keywords: ["Abhilash Maurya", "backend developer", "AI systems", "FastAPI", "Next.js"],
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems",
    description: "Cloud infrastructure, backend APIs, and AI systems that ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
