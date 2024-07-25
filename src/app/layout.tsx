import { CustomHead } from '@/components';
import { metadataDetails } from '@/config';
import { ls } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = metadataDetails;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <CustomHead />
      <body className={`container flex flex-col items-center p-0 m-0 box-border ${ls.className}`}>{children}</body>
    </html>
  );
}
