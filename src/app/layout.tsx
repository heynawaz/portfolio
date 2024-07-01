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
  category: 'technology',
  openGraph: {
    title: 'Shah Nawaz - Developer | Designer | Problem Solver',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    images: ['/assets/Shah Nawaz.jpg'],
    url: 'https://www.msnawaz.com',
    siteName: 'Shah Nawaz',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'app',
    title: 'Shah Nawaz - Developer | Designer | Problem Solver',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    creator: '@heynawaz',
    site: '@heynawaz',
    images: {
      url: 'https://x.com/heynawaz/photo',
      alt: '/assets/Shah Nawaz.jpg',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
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
