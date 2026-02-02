import { Metadata } from 'next';

const siteUrl = 'https://www.msnawaz.com';
const siteName = 'Shah Nawaz';
const title = 'Shah Nawaz | Lead Full-Stack Engineer | React, Next.js, Node.js';
const description = 'Shah Nawaz is a Lead Full-Stack Engineer specializing in React, Next.js, Node.js, and TypeScript. Build scalable web apps, AI solutions, and SaaS platforms. Available for hire—freelance and full-time. Book a free call.';

export const metadataDetails: Metadata = {
  title: {
    default: title,
    template: '%s | Shah Nawaz',
  },
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Shah Nawaz',
    'Shah Nawaz Developer',
    'Shah Nawaz Engineer',
    'Shah Nawaz Full Stack',
    'msnawaz',
    'heynawaz',
    'Hire Full Stack Developer',
    'Hire React Developer',
    'Hire Node.js Developer',
    'Hire TypeScript Developer',
    'Full Stack Engineer for Hire',
    'Freelance Full Stack Developer',
    'Senior Software Engineer',
    'Lead Developer',
    'Lead Full Stack Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Frontend Engineer',
    'Backend Engineer',
    'Remote Developer',
    'Software Engineer India',
    'Freelance Developer India',
    'SaaS Developer',
    'Web Application Developer',
    'AI Application Developer',
    'Startup Developer',
    'Cloud Analogy',
    'Portfolio Full Stack Engineer',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shah Nawaz - Lead Full-Stack Engineer',
      },
    ],
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@heynawaz',
    site: '@heynawaz',
    images: ['/og-image.png'],
  },
  verification: {
    // Add verification codes from Search Console / Bing Webmaster
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'msapplication-TileColor': '#123458',
    'theme-color': '#123458',
    'geo.region': 'IN',
    'rating': 'general',
  },
};
