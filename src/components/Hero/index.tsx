'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
type Props = {};

export default function Hero(props: Props) {
  const getCurrentMonth = new Date().toLocaleDateString('en-US', { month: 'short' });
  const getCurrentDate = new Date().toLocaleDateString('en-US', { day: '2-digit' });
  const getCurrentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    // <div className="relative h-screen">
    <div className="flex justify-between items-center pb-40 h-screen">
      {/* <Image src={'/svg/hero.svg'} className="ml-[-140px] mt-[-20px] " fill={true} alt="Hero background" priority={true} /> */}
      {/* <h1 className="absolute ml-24 mt-12 text-3xl text-black font-bold tracking-tight">nawaz.</h1> */}

      {/* <div className="absolute top-[25vh] left-24"> */}
      <div className="">
        {/* <h1 className="relative top-3 text-black text-[4vw] font-extrabold leading-tight"> */}
        {/* <h1 className="text-black text-[80px] font-extrabold leading-tight">
          I build pixel-perfect,
          <br />
          engaging, and accessible
          <br />
          digital experiences.
        </h1> */}
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto "
          >
            <p className="mb-6 text-black text-[20px] font-light">
              Hey, <span className="font-medium">I&apos;m Shah Nawaz</span>
              {/* <span className="text-2xl">👋</span> */}
            </p>
            I build{' '}
            <Highlight className="text-black dark:text-white">
              pixel-perfect,
              <br />
              engaging, and accessible
              <br />
              digital experiences.
            </Highlight>
            <br />
            {/* <Link href={'#'} className="relative top-14 text-black transition-all ease-in duration-100 font-normal text-[14px] tracking-wide underline underline-offset-8 decoration-1"> */}
            <Link href={'#'} className="text-black transition-all ease-in duration-100 font-normal text-[16px] tracking-wide underline underline-offset-8 decoration-1">
              Download <span className="font-extralight">CV</span>
            </Link>
          </motion.h1>
        </HeroHighlight>
      </div>
      {/* <div className="absolute flex flex-col justify-center h-screen w-[20%] items-center right-20"> */}
      <div className="flex flex-col justify-center w-[20%] items-center">
        <div className="w-[220px] h-[70px] rounded-[4px] shadow-[0px_3px_4px_0px_rgb(0,0,0,0.2)] flex items-center bg-neutral-100 cursor-pointer hover:shadow-[0px_2px_2px_0px_rgb(0,0,0,0.2)] transition-all ease-out duration-100">
          <div className="flex justify-center items-center flex-col leading-none bg-white h-[45px] w-[52px] ml-5 rounded-[4px] shadow-[inset_1px_1px_2px_2px_rgba(0,0,0,0.1)]">
            <p className="text-center text-[13px] font-light pt-[2px] mb-[2px]">{getCurrentMonth}</p>
            <h4 className="text-center font-bold text-gray-700 text-[15px]">{getCurrentDate}</h4>
          </div>
          <h1 className="font-semibold text-gray-700 ml-5 pt-1 text-[16px]">{getCurrentDay}</h1>
        </div>
        <Link href={'#'} className="mt-7 underline underline-offset-4 text-gray-800 text-sm font-medium">
          Schedule a free call
        </Link>
      </div>
    </div>
  );
}
