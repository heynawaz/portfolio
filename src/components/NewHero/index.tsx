'use client';
import { motion } from 'framer-motion';
import { Calendar } from '../Calendar';
import { Testimonials } from '../Testimonials';
import { Button } from '../ui/button';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

export function NewHero() {
  return (
    <section className="flex items-center justify-center flex-col text-center pt-36 pb-10 w-full bg-[url('/assets/img/hero-bg-9.jpg')] bg-no-repeat bg-cover">
      {/* <section className="flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-gradient-to-b from-purple-200 from-20% to-white"> */}
      <HeroHighlight>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          // className="text-3xl md:text-5xl lg:text-[2rem] xl:text-[3.3rem] font-bold text-gray-700 max-w-4xl leading-relaxed lg:leading-snug mx-auto"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <p className="border border-gray-300 bg-slate-100 w-fit px-4 py-1 rounded-full pt-[6px]">👋 Hey, I&apos;m Shah Nawaz</p>
            <h1 className="leading-snug text-[3.1vw] font-bold mt-6 tracking-tight bg-gradient-to-r from-purple-900 from-30% to-violet-950 text-transparent bg-clip-text">
              <span className="">I build</span>{' '}
              <Highlight className="text-black">
                pixel-perfect, engaging,
                <br />
                and accessible digital experiences.
              </Highlight>
            </h1>
            <p className="text-lg text-gray-800 mt-6 w-[50rem]">
              Transform your online presence into an engaging showcase that captivates visitors, turning interest into action and building your brand around the clock.
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center mt-10 ">
            <Calendar>
              <div className="flex items-center gap-3 bg-gradient-to-br from-purple-500 from-20% to-violet-700 text-white font-medium hover:opacity-90 px-7 py-3 tracking-wide rounded-lg">
                {/* <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full" alt="Shah Nawaz's Photo" width={30} height={40} /> */}
                <div className="flex items-center gap-4 pt-[4px]">Book a free call</div>
              </div>
            </Calendar>
            <Button
              size={'default'}
              variant={'outline'}
              className="bg-transparent hover:bg-violet-100/50 border border-slate-900/10 text-slate-700 font-medium hover:text-purple-900 px-9 py-[14px] h-full tracking-wide rounded-lg"
              onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
            >
              <p className="pt-[3px]">Download CV</p>
            </Button>
          </div>
          <Testimonials />
        </motion.h1>
      </HeroHighlight>
      {/* <Image src={'/assets/img/circle-globe.png'} alt="globe" height={900} width={900} className="mix-blend-luminosity opacity-50" /> */}
    </section>
  );
}
