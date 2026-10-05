import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { AuroraBackdrop } from "@/components/effects/AuroraBackdrop";
import { SiteNav } from "@/components/layout/SiteNav";
import { profile } from "@/data/content";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body min-h-screen overflow-x-hidden">
        <AuroraBackdrop />
        <SiteNav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
