import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya | Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya — FastAPI, cloud deployments, multi-agent workflows, and RAG pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="fixed inset-0 scanlines z-[100] opacity-30" aria-hidden />
        {children}
      </body>
    </html>
  );
}
