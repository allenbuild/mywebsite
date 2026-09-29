import type { Metadata } from "next";
import "./globals.css";
import AdminViewCounter from "./AdminViewCounter";
import ViewTracker from "./ViewTracker";

export const metadata: Metadata = {
  title: "Allen Xu",
  description:
    "Allen Xu — physical AI, robotics, and first-year at Wharton. Z Fellow (W26), HF0 Fellow-in-Residence (S26).",
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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <ViewTracker />
        <AdminViewCounter />
        {children}
      </body>
    </html>
  );
}
