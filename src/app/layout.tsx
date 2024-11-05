"use client";
import { Roboto, Source_Serif_4 } from "next/font/google";
import { useState } from "react";
import Toggle from "../components/Toggle";

import "./globals.css";
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const sourceSerif = Source_Serif_4({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-source-serif-4",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body
        className={`${roboto} ${sourceSerif} antialiased bg-[#FFD6E3] dark:bg-[#26211E] dark:text-[#FFD6E3] :text-[#26211E] relative`}
      >
        <Toggle onClick={handleThemeChange} checked={darkMode} />

        {children}
      </body>
    </html>
  );
}
