import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend, AI Systems & Cloud",
  description:
    "Clinical-precision portfolio: FastAPI services, multi-agent AI, RAG pipelines, and cloud deployments.",
  metadataBase: new URL("https://abhilash-neofolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen bg-hero-gradient dark:diagnostic-scanline">
            <div
              className="pointer-events-none fixed inset-0 -z-10 bg-grid-pattern bg-grid opacity-60"
              aria-hidden
            />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
