'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedGradientText from '../ui/animated-gradient-text';
import { HeroHighlight, Highlight } from '../ui/hero-highlight';
import { WordRotate } from '../magicui/word-rotate';
import { ButtonColorful } from '../ui/button-colorful';
import { dm_serif, ls } from '@/styles/fonts';

export function NewHero() {
  return (
    // <section className="container min-w-full pt-36 sm:pt-36 pb-14 sm:pb-0 bg-[linear-gradient(to_top,rgba(255,255,255,1),rgba(255,255,255,0)),url('/assets/img/hero-bg-6.jpg')] bg-no-repeat bg-center bg-cover">
    <section className="container flex items-center justify-center flex-col text-center pt-40 pb-20 w-full bg-gradient-t-b from-purple-200 from-20% to-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#c1c1c111_1px,transparent_1px),linear-gradient(to_bottom,#c1c1c111_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <HeroHighlight className="w-[90%]">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [20, -5, 0] }} transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}>
          <div className="w-full flex flex-col justify-center items-center text-center sm:text-left sm:justify-start sm:items-start">
            <AnimatedGradientText>
              👋&nbsp;
              <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>
                Hey, I&apos;m Shah Nawaz
              </span>
            </AnimatedGradientText>
            <div className={`relative sm:leading-snug lg:leading-tight text-[4rem] lg:text-[3rem] sm:!text-[2rem] text-zinc-800 font-bold mt-6 tracking-tight`}>
              {/* <h1 className="text-purple-950 mx-auto flex items-center justify-center sm:justify-start sm:items-center">
                Engineer for&nbsp;
                <WordRotate words={['Startups', 'Products', 'Ventures', 'Dreamers']} className="text-left" />
              </h1>
              <p className={`${dm_serif.className}`}>Code That Scales, UX That Converts</p> */}
              I build{' '}
              <Highlight className={`${ls.className} text-purple-900 font-bold`}>
                pixel-perfect, engaging,
                <br />
                and accessible digital experiences.
              </Highlight>
            </div>
            <p className="text-lg font-light sm:text-sm xs:!text-[.7rem] text-gray-600 mt-3 w-[50rem] lg:w-[90%]">
              {/* From TypeScript to Terraform, I bring full stack expertise to ship beautiful UIs and resilient backends. */}
              Transform your online presence into an engaging showcase that captivates visitors, turning interest into action and building your brand around the clock.
            </p>
          </div>
          <div className="flex gap-5 mt-11 sm:mt-8 items-center justify-center sm:justify-start sm:items-start sm:gap-2">
            <Link href={'https://cal.com/shah-nawaz/15min'} target="_blank">
              {/* <div className="flex items-center gap-3 bg-gradient-to-r from-purple-800 from-50% to-purple-900 text-white shadow-lg font-medium hover:opacity-90 px-4 py-3 sm:px32 tracking-wide rounded-full">
                <CalendarFoldIcon />
                <div className="flex items-center gap-4 pt-[3px] sm:text-sm">
                  Schedule a Free Consultation
                  <BiChevronRight />
                </div>
              </div> */}
              {/* <InteractiveHoverButton>
                <AuroraText>Schedule a Free Consultation</AuroraText>
              </InteractiveHoverButton> */}
              <ButtonColorful label="Schedule a Free Consultation" />
            </Link>
            {/* <Link
              href={'/assets/pdf/Shah Nawaz - Resume.pdf'}
              download={'nawaz_4+_fullstack'}
              target="_blank"
              className="xs:min-w-[9.5rem] flex gap-2 items-center text-sm sm:text-xs bg-transparent hover:bg-white text-purple-800 font-medium hover:text-purple-900 px-9 py-[14px] h-full tracking-wide rounded-lg"
            >
              <ArrowDownToLine className="size-4" />
              <p className="pt-[3px]">Download CV</p>
            </Link> */}
          </div>
        </motion.h1>
      </HeroHighlight>
      <div className="flex justify-between lg:justify-center lg:h-80 sm:!h-42 w-full overflow-hidden">
        <Image src={'/assets/svg/bg-side-3.svg'} alt="arrow" draggable={false} height={400} width={500} className="lg:hidden ml-[-260px] opacity-20" />
        <Image src={'/assets/svg/arrow-leaf.svg'} alt="arrow" draggable={false} height={400} width={200} className="sm:w-28 mt-32 sm:mt-2 opacity-70 rotate-[270deg] scale-x-[-1]" />
        <Image src={'/assets/svg/bg-side-6.svg'} alt="arrow" draggable={false} height={400} width={500} className="lg:hidden mr-[-250px] opacity-20" />
      </div>
    </section>
  );
}
