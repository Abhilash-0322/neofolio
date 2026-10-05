import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya: backend services, practical AI systems, and cloud deployments.",
  metadataBase: new URL("https://github.com/Abhilash-0322")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
