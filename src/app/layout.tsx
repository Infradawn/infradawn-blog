import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "infradawn",
    template: "%s | infradawn",
  },
  description: "Tech explorations and personal projects by Guilherme Lopes.",
  metadataBase: new URL("https://infradawn.xyz"),
  openGraph: {
    title: "infradawn",
    description: "Tech explorations and personal projects.",
    url: "https://infradawn.xyz",
    siteName: "infradawn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "infradawn",
    description: "Tech explorations and personal projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <Sidebar />
        <main className="flex-1 ml-56 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
