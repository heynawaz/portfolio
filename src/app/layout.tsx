import { ls } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shah Nawaz',
  description: 'Full Stack Developer',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ls.className} flex justify-center items-center flex-col`}>{children}</body>
    </html>
  );
}
