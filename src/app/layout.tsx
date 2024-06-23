import { ls } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shah Nawaz',
  description: 'Developer | Designer | Researcher',
  metadataBase: new URL('https://www.msnawaz.com'),
  keywords: ['Shah Nawaz', 'Nawaz', 'Next.js', 'React.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Shah Nawaz', url: 'https://www.msnawaz.com' }],
  creator: 'Shah Nawaz',
  publisher: 'Shah Nawaz',
  openGraph: {
    title: 'Shah Nawaz',
    description: 'Developer | Designer | Researcher',
    url: 'https://www.msnawaz.com',
    siteName: 'Nawaz',
    authors: ['Shah Nawaz'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`container flex flex-col items-center p-0 m-0 box-border ${ls.className}`}>{children}</body>
    </html>
  );
}
