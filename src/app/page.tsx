import { About, Footer, FooterNote, NewHeader, Skills, Solutions } from '@/components';
import NewHero from '@/components/NewHero';
import { Showcase } from '@/components/Showcase';

export default function Home() {
  return (
    <>
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
    </>
  );
}
