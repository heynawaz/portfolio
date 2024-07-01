import { ls } from '@/styles/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shah Nawaz',
  description: 'Developer | Designer | Researcher',
  metadataBase: new URL('https://msnawaz.com'),
  keywords: ['Shah Nawaz', 'msnawaz', 'Web developer', 'Software Engineer', 'Hire Software Engineer', 'Hire Developer', 'Next.js', 'React.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Shah Nawaz', url: 'https://www.msnawaz.com' }],
  creator: 'Shah Nawaz',
  publisher: 'Shah Nawaz',
  openGraph: {
    title: 'Shah Nawaz - Developer | Designer | Problem Solver',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    images: ['/assets/Shah Nawaz.jpg'],
    url: 'https://www.msnawaz.com',
    siteName: 'Nawaz',
    authors: ['Shah Nawaz'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`container flex flex-col items-center p-0 m-0 box-border ${ls.className}`}>{children}</body>
    </html>
  );
}
