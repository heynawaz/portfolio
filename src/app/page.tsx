import { About, CTA, CTA2, Footer, NewHeader, NewHero, Showcase, Skills, Solutions, Testimonials } from '@/components';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NewHeader />
      {/* <Header /> */}
      <main className="w-full flex flex-col items-center">
        <NewHero />
        {/* <Hero /> */}
        <About />
        <Skills />
        <Solutions />
        <CTA2 />
        <Showcase />
        <Testimonials />
        <CTA />
        {/* <FooterNote /> */}
      </main>
      <Footer />
    </Suspense>
  );
}
