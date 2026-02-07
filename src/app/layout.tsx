import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgentationClient from "@/components/AgentationClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrick McKowen · Portfolio",
  description: "A digital product designer based in Oakland, CA with 10 years of experience working to uplift people with humane technology.",
  openGraph: {
    title: "Patrick McKowen · Portfolio",
    description: "A digital product designer based in Oakland, CA with 10 years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AgentationClient />
      </body>
    </html>
  );
}
