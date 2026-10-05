import { Header } from "@/components/Header";
import { MemphisDecor } from "@/components/MemphisDecor";
import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems",
  description:
    "Backend and AI systems developer — FastAPI, cloud deployments, multi-agent workflows, and RAG pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="min-h-screen font-sans">
        <MemphisDecor />
        <Header />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
