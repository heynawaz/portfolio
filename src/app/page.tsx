import { About, Footer, FooterNote, Header, Hero, Skills, Solutions } from '@/components';
import { Showcase } from '@/components/Showcase';

export default function Home() {
  return (
    <>
      <Header />
      {/* <NewHero /> */}
      <Hero />
      <About />
      <Skills />
      <Showcase />
      <Solutions />
      <FooterNote />
      <Footer />
    </>
  );
}
