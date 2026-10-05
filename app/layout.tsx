import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building dependable products beyond the demo.",
  metadataBase: new URL("https://abhilash-maurya.dev"),
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems",
    description:
      "Backend, cloud, and AI systems that turn ambitious ideas into shipped products.",
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
