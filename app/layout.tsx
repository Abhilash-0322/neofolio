import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building production-ready APIs, agents, and cloud infrastructure.",
  metadataBase: new URL("https://abhilash-maurya.dev"),
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems Developer",
    description:
      "Building reliable backend systems and useful AI products from Delhi NCR.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
