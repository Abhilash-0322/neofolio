import type { Metadata } from "next";
import { Fredoka, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const display = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend, AI Systems & Cloud",
  description:
    "Candy-bright portfolio: FastAPI backends, multi-agent AI, RAG pipelines, and production deployments.",
  metadataBase: new URL("https://abhilash-neofolio-5041.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${display.variable} ${mono.variable} bg-bg text-text antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
