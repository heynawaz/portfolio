import { About, CTA, CTA2, Footer, NewHeader, NewHero, Showcase, Skills, Solutions, Testimonials } from '@/components';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NewHeader />
      <main className="container w-full flex flex-col items-center">
        <NewHero />
        <About />
        <Skills />
        <Solutions />
        <CTA2 />
        <Showcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </Suspense>
  );
}
