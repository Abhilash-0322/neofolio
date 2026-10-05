import type { Metadata } from "next";
import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display"
});

const accent = Fraunces({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["500", "600"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend, AI & Cloud Engineer",
  description:
    "Neon Tokyo portfolio — FastAPI systems, AI agents, RAG pipelines, and cloud deployments from Delhi NCR.",
  metadataBase: new URL("https://abhilash-neofolio-5061.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${display.variable} ${accent.variable} ${mono.variable} bg-bg text-text antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
