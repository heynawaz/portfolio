import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import './globals.css';

const ls = League_Spartan({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shah Nawaz',
  description: 'Full Stack Developer',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ls.className} flex justify-center items-center flex-col bg-gradient-radial from-purple-50 to-indigo-50`}>{children}</body>
    </html>
  );
}
