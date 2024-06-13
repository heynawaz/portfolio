import { dm_serif } from '@/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export function Skills() {
  return (
    <>
      <section className="w-full my-32 flex justify-center">
        <div className="flex items-center justify-center gap-48 shadow-sm w-full h-[50rem] px-20 bg-zinc-50">
          <div className="flex flex-col">
            <h1 className={`${dm_serif.className} text-[4.2rem] tracking-tight leading-[5rem] text-zinc-800`}>
              <span className={`${dm_serif.className} text-purple-900`}>Transforming </span>Ideas into
              <br />
              Rich Web Experiences
            </h1>
            <p className="mt-3 mb-10 text-lg leading-relaxed text-gray-500">
              Crafting sophisticated small to medium-scale web applications, developing dynamic features,
              <br />
              creating captivating animations, and designing interactive layouts using advanced coding techniques.
            </p>
            <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className="text-lg flex underline decoration-1 underline-offset-4 hover:text-purple-950">
              Visit my Linkedin&nbsp;
              <BsArrowRight className="pt-[8px] text-lg" />
            </Link>
          </div>
          <div className="flex">
            {/* <Image src={'/assets/svg/logos.svg'} alt="Technology" draggable={false} width={700} height={700} /> */}
            <Image src={'/assets/svg/bg-side-4.svg'} alt="svg" draggable={false} height={400} width={500} />
          </div>
        </div>
      </section>
    </>
  );
}
