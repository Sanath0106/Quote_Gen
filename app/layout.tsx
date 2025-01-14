import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Cinzel, Cormorant } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: 'swap',
  weight: ['700', '800'],
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Soul Whispers",
  description: "Find your daily dose of inspiration with beautiful quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${cormorant.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
