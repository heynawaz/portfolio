'use client';
import { Calendar } from '../Calendar';
import { Testimonials } from '../Testimonials';
import { Button } from '../ui/button';

export function NewHero() {
  return (
    <section className="flex items-center justify-center flex-col text-center pt-36 pb-10 w-full bg-[url('/assets/img/hero-bg-7.jpg')] bg-no-repeat bg-cover">
      {/* <section className="flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-gradient-to-b from-purple-200 from-20% to-white"> */}
      <div className="w-full flex flex-col justify-center items-center">
        <p className="border border-gray-300 bg-slate-100 w-fit px-4 py-1 rounded-full pt-[6px]">👋 Hey, I&apos;m Shah Nawaz</p>
        <h1 className="leading-snug text-[3.1vw] font-bold mt-6 tracking-tight bg-gradient-to-r from-purple-700 from-30% to-indigo-900 text-transparent bg-clip-text">
          I build pixel perfect, engaging and
          <br />
          accessible digital experiences.
        </h1>
        <p className="text-lg text-gray-800 mt-6 w-[50rem]">
          Transform your online presence into an engaging showcase that captivates visitors, turning interest into action and building your brand around the clock.
        </p>
      </div>
      <div className="flex gap-6 mt-10">
        <Calendar>
          <div className="flex items-center gap-3 bg-purple-800 text-white font-medium hover:bg-purple-900 px-7 py-3 tracking-wide rounded-lg">
            {/* <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full" alt="Shah Nawaz's Photo" width={30} height={40} /> */}
            <div className="flex items-center gap-4 pt-[4px]">Book a free call</div>
          </div>
        </Calendar>
        <Button
          size={'default'}
          variant={'outline'}
          className="bg-transparent hover:bg-purple-800 border border-purple-800 text-purple-800 font-medium hover:text-white px-9 py-[13px] h-full tracking-wide rounded-lg"
          onClick={() => window.open('/assets/pdf/Shah Nawaz - Resume.pdf', '_blank')}
        >
          <p className="pt-[3px]">Download CV</p>
        </Button>
      </div>
      <Testimonials />
      {/* <Image src={'/assets/img/circle-globe.png'} alt="globe" height={900} width={900} className="mix-blend-luminosity opacity-50" /> */}
    </section>
  );
}
