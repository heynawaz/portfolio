import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Loading from './loading';

const About = dynamic(() => import('@/components/About').then(module => ({ default: module.About })));
const Footer = dynamic(() => import('@/components/Footer').then(module => ({ default: module.Footer })));
const FooterNote = dynamic(() => import('@/components/FooterNote').then(module => ({ default: module.FooterNote })));
const NewHeader = dynamic(() => import('@/components/NewHeader').then(module => ({ default: module.NewHeader })));
const Header = dynamic(() => import('@/components/Header').then(module => ({ default: module.Header })));
const Skills = dynamic(() => import('@/components/Skills').then(module => ({ default: module.Skills })));
const Hero = dynamic(() => import('@/components/Hero').then(module => ({ default: module.Hero })));
const NewHero = dynamic(() => import('@/components/NewHero').then(module => ({ default: module.NewHero })));
const Showcase = dynamic(() => import('@/components/Showcase').then(module => ({ default: module.Showcase })));
const Solutions = dynamic(() => import('@/components/Solutions').then(module => ({ default: module.Solutions })));

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
        <Showcase />
        <Solutions />
        <FooterNote />
      </main>
      <Footer />
    </Suspense>
  );
}
