import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhilash Maurya — Backend & AI Systems Developer",
  description:
    "Portfolio of Abhilash Maurya, a backend and AI systems developer building dependable products with Python, cloud infrastructure, and agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { const t = localStorage.getItem("theme"); const dark = t ? t === "dark" : true; document.documentElement.classList.toggle("dark", dark); })()`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
