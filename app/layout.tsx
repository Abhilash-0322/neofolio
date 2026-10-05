import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Serif_4,
  UnifrakturMaguntia,
} from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const unifraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${unifraktur.variable}`}
    >
      <body className="font-body text-[15px] leading-relaxed md:text-base">
        {children}
      </body>
    </html>
  );
}
