import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/content";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
