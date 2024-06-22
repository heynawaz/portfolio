import { dm_serif } from '@/styles/fonts';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import IconCloud from '../ui/icon-cloud';

type Props = {};

export function CTA2({}: Props) {
  const slugs = [
    'typescript',
    'javascript',
    'react',
    'html5',
    'css3',
    'nodedotjs',
    'express',
    'nextdotjs',
    'prisma',
    'amazonaws',
    'postgresql',
    'firebase',
    'nginx',
    'vercel',
    'testinglibrary',
    'jest',
    'cypress',
    'docker',
    'git',
    'jira',
    'github',
    'gitlab',
    'visualstudiocode',
    'figma',
  ];

  return (
    <>
      <section className="w-full mt-32 flex justify-center">
        <div className="flex xl:flex-col items-center justify-center gap-20 shadow-sm w-full px-20 py-28 xl:px-5 xl:py-36 lg:py-20 md:!py-16 bg-zinc-50">
          <div className="flex flex-col w-[800px] xl:w-[90%] order-1 xl:order-2">
            <h1 className={`${dm_serif.className} text-[3.8rem] xl:text-[3.3rem] tracking-tight leading-[5rem] text-zinc-800`}>
              <span className={`${dm_serif.className} text-purple-900`}>Why </span>choose me?
            </h1>
            <p className="mt-5 mb-10 text-[1.1rem] lg:text-[1rem] leading-relaxed text-gray-500">
              As a passionate engineer, I bring a wealth of experience in building robust, scalable, and efficient web applications. From front-end user interfaces to back-end server logic, I have the
              skills and expertise to handle every aspect of your project.
            </p>
            <Link href={'/assets/pdf/Shah Nawaz - Resume.pdf'} target="_blank" className="text-lg flex underline decoration-1 underline-offset-4 hover:text-purple-950">
              View my CV&nbsp;
              <BsArrowRight className="pt-[8px] text-lg" />
            </Link>
          </div>
          <div className="flex order-2 xl:order-1">
            {/* <Image src={'/assets/svg/logos.svg'} alt="Technology" draggable={false} width={700} height={700} /> */}
            {/* <Image src={'/assets/svg/bg-side-7.svg'} alt="svg" draggable={false} height={400} width={500} /> */}
            {/* <AnimatedList notifications={notifications} /> */}
            <div className="relative flex h-full w-[35rem] min-w-[200px] lg:w-[70vw] md:!w-[90vw] items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 md:pb-2 pt-8 md:pt-0">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
