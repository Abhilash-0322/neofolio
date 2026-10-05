import type { Metadata } from "next";
import { IBM_Plex_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { ForgeBackdrop } from "@/components/effects/ForgeBackdrop";
import { SiteNav } from "@/components/layout/SiteNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/data/content";

const display = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${profile.name} · Backend & AI Systems`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="font-body min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <ForgeBackdrop />
          <SiteNav />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
