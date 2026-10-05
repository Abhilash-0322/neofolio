import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems",
  description:
    "Premium AI research lab portfolio — FastAPI, cloud, multi-agent workflows, and RAG pipelines.",
  openGraph: {
    title: "Abhilash Maurya | Backend & AI Systems Developer",
    description:
      "Shipped systems, cloud deployment, and production AI beyond demos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="font-display min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
