import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Abhilash Maurya — README hub docs",
  description:
    "Backend and AI systems portfolio — glass aurora theme (port 5076). APIs, agents, and cloud infrastructure.",
  metadataBase: new URL("https://abhilash-neofolio.vercel.app"),
  openGraph: {
    title: "Abhilash Maurya — AI systems, forged for production",
    description: "Backend, AI systems, and cloud infrastructure from Delhi NCR.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${syne.variable} ${plexMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
