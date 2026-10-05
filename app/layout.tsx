import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer shipping useful software beyond the demo.",
  metadataBase: new URL("https://abhilash-maurya.dev"),
  openGraph: {
    title: "Abhilash Maurya — Backend & AI Systems",
    description:
      "Backend, cloud infrastructure, and AI systems built for the real world.",
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
