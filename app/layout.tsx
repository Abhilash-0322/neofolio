import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems Developer",
  description:
    "Backend and AI systems developer — FastAPI, cloud deployments, multi-agent workflows, and RAG pipelines.",
  openGraph: {
    title: "Abhilash Maurya | Backend & AI Systems Developer",
    description:
      "Professional portfolio — shipped systems, cloud, and production AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="font-display min-h-screen">{children}</body>
    </html>
  );
}
