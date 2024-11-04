import type { Metadata } from "next";
import { Roboto, Source_Serif_4 } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const sourceSerif = Source_Serif_4({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "Kitty Allen",
  description: "Portfolio website for Kitty Allen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} ${sourceSerif} antialiased`}>{children}</body>
    </html>
  );
}
