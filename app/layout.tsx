import type { Metadata } from "next";
import { Bebas_Neue, Permanent_Marker, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AlleyBackdrop } from "@/components/AlleyBackdrop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/content";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space.variable} ${bebas.variable} ${marker.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <AlleyBackdrop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
