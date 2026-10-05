import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building reliable products, agents, and cloud infrastructure.",
  keywords: ["Abhilash Maurya", "backend developer", "AI systems", "FastAPI", "Python"],
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems Developer",
    description: "Building the systems behind ambitious products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
