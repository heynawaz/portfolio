import { About, CTA, CTA2, Footer, NewHeader, NewHero, Skills, Testimonials } from '@/components';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from './loading';

const heroBg = 'bg-palette-cream bg-[radial-gradient(100%_50%_at_50%_0%,rgba(18,52,88,0.08)_0,rgba(18,52,88,0)_50%,rgba(18,52,88,0)_100%)]';

export const metadata: Metadata = {
  title: 'Shah Nawaz | Lead Full-Stack Engineer | React, Next.js, Node.js',
  description: 'Lead Full-Stack Engineer specializing in React, Next.js, Node.js, and TypeScript. Build scalable web apps, AI solutions, and SaaS platforms. Available for hire—freelance and full-time. Book a free call.',
  openGraph: {
    title: 'Shah Nawaz | Lead Full-Stack Engineer | React, Next.js, Node.js',
    description: 'Lead Full-Stack Engineer specializing in React, Next.js, Node.js, and TypeScript. Build scalable web apps, AI solutions, and SaaS platforms. Available for hire.',
    url: 'https://www.msnawaz.com',
    images: [
      {
        url: 'https://www.msnawaz.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shah Nawaz - Lead Full-Stack Engineer',
      },
    ],
  },
};

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={`w-full overflow-x-hidden flex flex-col min-h-[100dvh] sm:min-h-[100svh] ${heroBg}`}>
        <NewHeader />
        <NewHero />
      </div>
      <main className="w-full flex flex-col items-center bg-palette-cream overflow-x-hidden">
        <About />
        <Testimonials />
        <Skills />
        <CTA2 />
        <CTA />
      </main>
      <Footer />
    </Suspense>
  );
}