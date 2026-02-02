import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shah Nawaz | Lead Full-Stack Engineer',
    short_name: 'Shah Nawaz',
    description: 'Lead Full-Stack Engineer specializing in React, Next.js, Node.js, and TypeScript. Building scalable web applications, AI-powered solutions, and SaaS platforms.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F1EFEC',
    theme_color: '#123458',
    orientation: 'portrait-primary',
    categories: ['developer', 'portfolio', 'technology'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/Shah Nawaz.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'maskable',
      },
    ],
  };
}
