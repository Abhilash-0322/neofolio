import { AuroraBackground } from "@/components/AuroraBackground";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Cloud & AI Systems",
  description:
    "Backend and AI systems developer — FastAPI, cloud deployments, multi-agent workflows, and RAG pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <AuroraBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
