import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { satoshi } from "../fonts/font";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScreenCastly",
  description:
    "ScreenCastly is a modern full-stack platform that makes capturing and sharing your screen effortless. Whether you’re creating tutorials, product demos, lectures, or just sharing ideas, ScreenCastly lets you record high-quality videos directly from your browser and instantly share them with your audience. With secure cloud storage, customizable privacy settings, and smooth playback on any device, ScreenCastly helps your content reach the right people—fast.",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistKarla.variable} ${satoshi.variable} font-karla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
