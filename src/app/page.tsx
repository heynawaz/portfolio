import React, { Suspense } from 'react';

const About = React.lazy(() => import('@/components/About').then(module => ({ default: module.About })));
const Footer = React.lazy(() => import('@/components/Footer').then(module => ({ default: module.Footer })));
const FooterNote = React.lazy(() => import('@/components/FooterNote').then(module => ({ default: module.FooterNote })));
const NewHeader = React.lazy(() => import('@/components/NewHeader').then(module => ({ default: module.NewHeader })));
const Header = React.lazy(() => import('@/components/Header').then(module => ({ default: module.Header })));
const Skills = React.lazy(() => import('@/components/Skills').then(module => ({ default: module.Skills })));
const Hero = React.lazy(() => import('@/components/Hero').then(module => ({ default: module.Hero })));
const NewHero = React.lazy(() => import('@/components/NewHero').then(module => ({ default: module.NewHero })));
const Showcase = React.lazy(() => import('@/components/Showcase').then(module => ({ default: module.Showcase })));
const Solutions = React.lazy(() => import('@/components/Solutions').then(module => ({ default: module.Solutions })));
const Testimonials = React.lazy(() => import('@/components/Testimonials').then(module => ({ default: module.Testimonials })));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewHeader />
      {/* <Header /> */}
      <NewHero />
      {/* <Hero /> */}
      {/* <Testimonials /> */}
      <About />
      <Skills />
      <Showcase />
      <Solutions />
      <FooterNote />
      <Footer />
    </Suspense>
  );
}
