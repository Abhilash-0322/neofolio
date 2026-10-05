import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya: backend services, cloud infrastructure, AI agents, and RAG systems.",
  metadataBase: new URL("https://abhilash-0322.github.io")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
