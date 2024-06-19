'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from '../Calendar';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { Button } from '../ui/button';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

export function NewHero() {
  return (
    <section className="min-w-full grid place-items-center pt-36 pb-14 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0)),url('/assets/img/hero-bg-7.jpg')] bg-no-repeat bg-center bg-cover">
      {/* <section className="flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-gradient-t-b from-purple-200 from-20% to-white"> */}
      <HeroHighlight className="w-[90%]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [20, -5, 0] }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          // className="text-3xl md:text-5xl lg:text-[2rem] xl:text-[3.3rem] font-bold text-gray-700 max-w-4xl leading-relaxed lg:leading-snug mx-auto"
        >
          <div className="w-full flex flex-col justify-center items-center text-center">
            {/* <p className="border border-gray-300 bg-slate-100 w-fit px-4 py-1 rounded-full pt-[6px]">👋 Hey, I&apos;m Shah Nawaz</p> */}
            <AnimatedGradientText>
              👋&nbsp;
              {/* <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '} */}
              <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>
                Hey, I&apos;m Shah Nawaz
              </span>
              {/* <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
            </AnimatedGradientText>
            <h1 className="relative leading-snug text-[4rem] text-purple-900 font-bold mt-6 tracking-tight">
              I build{' '}
              <Highlight className="text-black">
                pixel-perfect, engaging,
                <br />
                and accessible digital experiences.
              </Highlight>
              {/* <Image src={'/assets/svg/scribble.svg'} alt="scribble" draggable={false} height={400} width={3000} className="absolute right-0 opacity-[0.03] rotate-[40deg]" /> */}
            </h1>
            <p className="text-lg text-gray-800 mt-2 w-[50rem]">
              Transform your online presence into an engaging showcase that captivates visitors, turning interest into action and building your brand around the clock.
            </p>
          </div>
          <div className="flex gap-6 mt-10 items-center justify-center">
            <Calendar>
              <div className="flex items-center gap-3 bg-purple-900 text-white font-medium hover:opacity-90 px-7 py-3 tracking-wide rounded-lg">
                {/* <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full" alt="Shah Nawaz's Photo" width={30} height={40} /> */}
                <div className="flex items-center gap-4 pt-[4px]">Book a free call</div>
              </div>
            </Calendar>
            <Button
              size={'default'}
              variant={'outline'}
              className="bg-transparent hover:bg-white border border-purple-900/20 text-purple-950 font-medium hover:text-purple-900 px-9 py-[14px] h-full tracking-wide rounded-lg"
              onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
            >
              <p className="pt-[3px]">Download CV</p>
            </Button>
          </div>
          {/* <Testimonials /> */}
        </motion.h1>
      </HeroHighlight>
      <div className="flex justify-center">
        {/* <Image src={'/assets/svg/bg-side-3.svg'} alt="arrow" draggable={false} height={400} width={500} className="ml-[-230px] opacity-30" /> */}
        <Image src={'/assets/svg/arrow-leaf.svg'} alt="arrow" draggable={false} height={400} width={200} className="mt-32 opacity-70 rotate-[270deg] scale-x-[-1]" />
        {/* <Image src={'/assets/svg/bg-side-4.svg'} alt="arrow" draggable={false} height={400} width={500} className="mr-[-170px] opacity-30" /> */}
      </div>
    </section>
  );
}
