import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems Engineer",
  description:
    "Portfolio of Abhilash Maurya — backend services, AI systems, cloud infrastructure, and production-minded engineering.",
  metadataBase: new URL("https://abhilash-neofolio.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body className={`${display.variable} ${mono.variable} bg-bg text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
