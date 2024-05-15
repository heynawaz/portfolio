'use client';
import { Calendar } from '@/components/Calendar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';

export function Hero() {
  const getCurrentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });
  const getCurrentDate = new Date().toLocaleDateString('en-US', { day: '2-digit' });
  const getCurrentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const fileName = 'Shah Nawaz - Resume.pdf';

  // Download resume on key press
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'd') {
        const link = document.createElement('a');
        link.href = '/assets/pdf/Shah Nawaz - Resume.pdf';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section className="flex justify-between items-center h-[100dvh] w-[70%]">
      <div>
        <HeroHighlight>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-3xl md:text-5xl lg:text-[2rem] xl:text-[3.3rem] font-bold text-gray-700 max-w-4xl leading-relaxed lg:leading-snug mx-auto"
          >
            <p className="text-gray-700 text-[16px] font-normal border border-gray-300 bg-gray-100 w-fit px-3 py-1 mb-6 pt-[7px] rounded-full">👋 Hey, I&apos;m Shah Nawaz</p>
            {/* <p className="h-12 text-black text-[20px] font-light">
              Hey, <span>I&apos;m Shah Nawaz</span>
            </p> */}
            I build{' '}
            <Highlight className="text-black">
              pixel-perfect,
              <br />
              engaging, and accessible
              <br />
              digital experiences.
            </Highlight>
            <br />
            <Link
              href={'/assets/pdf/Shah Nawaz - Resume.pdf'}
              download={fileName}
              target="_blank"
              className="text-black transition-all ease-in duration-100 font-normal text-[17px] tracking-wide hover:underline hover:underline-offset-8"
            >
              Press <span className=" bg-gray-100 border border-gray-300 rounded-[3px] px-[4px] pt-[3px]">D</span> to Download CV
            </Link>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className="flex flex-col justify-center w-[30%] items-end">
        <div className="flex flex-col gap-8">
          <Link href={'https://cal.com/shah-nawaz/15min'} target="_blank">
            <div className="w-[220px] h-[70px] rounded-[4px] shadow-[0px_3px_4px_0px_rgb(0,0,0,0.2)] flex items-center bg-neutral-100/90 cursor-pointer hover:shadow-[0px_2px_2px_0px_rgb(0,0,0,0.2)] transition-all ease-out duration-100">
              <div className="flex justify-center items-center flex-col leading-none bg-white h-[45px] w-[52px] ml-4 rounded-[4px] shadow-[inset_1px_1px_2px_2px_rgba(0,0,0,0.1)]">
                <p className="text-center text-[13px] font-light pt-[2px] mb-[2px]">{getCurrentMonth}</p>
                <h4 className="text-center font-bold text-gray-700 text-[15px]">{getCurrentDate}</h4>
              </div>
              <h1 className="font-semibold text-gray-700 ml-5 pt-1 text-[16px]">{getCurrentDay}</h1>
            </div>
          </Link>
          <Calendar className="underline underline-offset-4 text-gray-800 text-center text-sm font-medium">Schedule a free call</Calendar>
        </div>
      </div>
    </section>
  );
}
