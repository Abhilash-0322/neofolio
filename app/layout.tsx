import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { ForestBackdrop } from "@/components/effects/ForestBackdrop";
import { SiteNav } from "@/components/layout/SiteNav";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { profile } from "@/data/content";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className="min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <ForestBackdrop />
          <SiteNav />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
