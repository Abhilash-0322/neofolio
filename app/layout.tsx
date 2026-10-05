import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemedBackdrop } from "@/components/ThemedBackdrop";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
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
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="neofolio-5049-theme"
        >
          <ThemedBackdrop />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
