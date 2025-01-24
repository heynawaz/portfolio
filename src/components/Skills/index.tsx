import { dm_serif } from '@/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export function Skills() {
  return (
    <>
      <section className="w-full mt-28 flex justify-center">
        <div className="flex xl:flex-col xl:items-start items-center justify-center xl:gap-12 gap-48 shadow-sm w-full xl:py-28 py-48 xl:px-10 px-20 bg-zinc-50">
          <div className="max-w-[45rem] flex flex-col order-1 xl:order-2">
            <h1 className={`${dm_serif.className} text-6xl xl:text-[3.4rem] sm:!text-[2.4rem] tracking-tight sm:leading-normal leading-[5rem] text-zinc-800`}>
              <span className={`${dm_serif.className} text-purple-800`}>Transforming </span>Ideas into Rich Web Experiences
            </h1>
            <p className="mt-5 mb-16 text-[1.1rem] leading-relaxed font-light text-muted-foreground">
              Crafting sophisticated small to medium-scale web applications, developing dynamic features, creating captivating animations, and designing interactive layouts using advanced coding
              techniques.
            </p>
            <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className="text-lg flex underline decoration-1 underline-offset-4 hover:text-purple-800">
              Visit my Linkedin&nbsp;
              <BsArrowRight className="pt-[8px] text-lg" />
            </Link>
          </div>
          <div className="flex order-2 xl:order-1">
            <Image src={'/assets/svg/bg-side-4.svg'} alt="svg" draggable={false} height={0} width={0} className="min-w-96 xl:min-w-40" />
          </div>
        </div>
      </section>
    </>
  );
}
