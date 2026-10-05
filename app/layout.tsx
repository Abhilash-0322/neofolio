import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems",
  description: "Portfolio of Abhilash Maurya: production-minded backend, cloud, and AI systems engineering.",
  metadataBase: new URL("https://abhilash-neofolio-5060.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth" suppressHydrationWarning><body className={`${sans.variable} ${display.variable} ${mono.variable}`}><ThemeProvider>{children}</ThemeProvider></body></html>;
}
