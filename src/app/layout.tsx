import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Initify | Modern Freelancing Solutions",
  description:
    "Initify provides expert freelancing services in web development, design, and AI solutions. Transform your digital presence with our team of skilled professionals.",
  keywords:
    "freelancing, web development, NextJS, design, AI solutions, digital transformation",
  openGraph: {
    title: "Initify | Modern Freelancing Solutions",
    description:
      "Transforming ideas into digital reality. Expert freelancing services for modern businesses.",
    images: [{ url: "/og-image.jpg" }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
