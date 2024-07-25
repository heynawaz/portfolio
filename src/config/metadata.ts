import { Metadata } from 'next';

export const metadataDetails: Metadata = {
  title: 'Shah Nawaz',
  description: 'Developer | Designer | Researcher',
  metadataBase: new URL('https://msnawaz.com'),
  keywords: ['Shah Nawaz', 'msnawaz', 'Web developer', 'Software Engineer', 'Hire Software Engineer', 'Hire Developer', 'Next.js', 'React.js', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Shah Nawaz', url: 'https://www.msnawaz.com' }],
  creator: 'Shah Nawaz',
  icons: ['/assets/Shah Nawaz.jpg', 'favicon.ico'],
  publisher: 'Shah Nawaz',
  category: 'technology',
  openGraph: {
    title: 'Shah Nawaz | Software Engineer',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    images: ['/assets/Shah Nawaz.jpg'],
    url: 'https://www.msnawaz.com',
    siteName: 'Shah Nawaz',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shah Nawaz | Software Engineer',
    description: 'A trusted software engineer having expertise in providing complex solutions for all formats of web applications.',
    creator: '@heynawaz',
    site: 'https://x.com/heynawaz',
    images: ['/assets/Shah Nawaz.jpg'],
  },
};
