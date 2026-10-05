import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer shipping useful software beyond the demo.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
