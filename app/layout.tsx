import type { Metadata } from "next";
import {
  Geist_Mono,
  Inter,
  Libre_Baskerville,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-italic",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Allen Xu",
  description: "Personal website for Allen Xu.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    apple: "/apple-icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfairDisplay.variable} ${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
