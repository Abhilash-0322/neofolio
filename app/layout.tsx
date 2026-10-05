import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building dependable APIs, cloud infrastructure, and production AI features.",
  metadataBase: new URL("https://abhilash.dev"),
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems Developer",
    description:
      "Backend, cloud, and AI systems built for the real world.",
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
