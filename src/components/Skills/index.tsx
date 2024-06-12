import { SectionHeader } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';

export function Skills() {
  return (
    <>
      <section className="relative flex justify-center flex-col w-full items-center h-[80vh] mt-40 pb-72">
        <SectionHeader
          heading="What I love doing?"
          description="Crafting sophisticated small to medium-scale web applications, dynamic features, captivating animations, and designing interactive layouts through advanced coding techniques."
        />
        <p className="mt-16 text-gray-600 text-lg">
          Visit my{' '}
          <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className="font-semibold hover:underline">
            Linkedin
          </Link>{' '}
          for more details.
        </p>
        <div className="flex justify-between items-center w-full overflow-hidden">
          <Image src={'/assets/svg/bg-side-6.svg'} alt="svg" draggable={false} height={400} width={500} className="absolute left-0 bottom-0 z-50 ml-[-230px] opacity-30" />
          <Image src={'/assets/svg/logos.svg'} alt="Technology" draggable={false} width={1000} height={1000} className="mx-auto" />
          <Image src={'/assets/svg/bg-side-6.svg'} alt="svg" draggable={false} height={400} width={500} className="absolute right-0 bottom-0 z-50 mr-[-170px] opacity-30" />
        </div>
      </section>
    </>
  );
}
