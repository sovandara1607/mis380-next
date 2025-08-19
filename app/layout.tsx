import type { Metadata } from "next";
import "./globals.css";
import Providers from "./_providers";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sovandara Rith Portfolio",
  description: "Portfolio site migrated to Next.js with tRPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        {/* Project CSS from public/css */}
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/home.css" />
        <link rel="stylesheet" href="/css/about.css" />
        <link rel="stylesheet" href="/css/casestudy.css" />
        <link rel="stylesheet" href="/css/contact.css" />
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
