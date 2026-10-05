import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
  title: "Abhilash Maurya | Arctic Portfolio · design-5032",
  description:
    "Story-driven developer portfolio with Arctic frost and dark glacier themes: AI systems, platforms, and high-velocity execution.",
  metadataBase: new URL("https://abhilash-neofolio.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${display.variable} ${mono.variable} bg-bg text-text antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="neofolio-5032-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
