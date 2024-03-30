import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const ls_font = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Nawaz",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ls_font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
