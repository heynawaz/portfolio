import { dm_serif } from '@/styles/fonts';
import Image from 'next/image';
import { BiChevronRight } from 'react-icons/bi';
import { Calendar } from '../Calendar';
import IconCloud from '../ui/icon-cloud';

type Props = {};

export default function CTA({}: Props) {
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
    <section className="grid place-items-center my-20">
      <div className="flex items-center justify-center gap-20 shadow-xl rounded-2xl h-[45rem] px-20 bg-zinc-50">
        <div className="h-full flex flex-col items-start justify-center">
          <h1 className={`${dm_serif.className} text-[4.2rem] tracking-tight leading-[5rem] text-zinc-800`}>
            <span className={`text-purple-900`}>Supercharge </span> your awesome
            <br />
            journey with me <span className="text-[3rem]">🚀</span>
          </h1>
          <p className="mt-6 mb-10 text-lg leading-relaxed text-gray-500">
            Ready to take the next step? Get in touch today to schedule a consultation.
            <br />
            Together, we can turn your vision into a reality.
          </p>
          <Calendar>
            <div className="flex items-center gap-3 bg-purple-900 text-white shadow-lg font-medium hover:opacity-90 px-5 py-3 tracking-wide rounded-full">
              <Image src={'/assets/Shah Nawaz.jpg'} className="rounded-full" alt="Shah Nawaz's Photo" width={30} height={40} />
              <div className="flex items-center gap-4 pt-[3px]">
                Schedule a free call
                <BiChevronRight />
              </div>
            </div>
          </Calendar>
        </div>
        <div className="flex justify-center">
          <div className="relative flex h-full w-full max-w-[37rem] items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
}
