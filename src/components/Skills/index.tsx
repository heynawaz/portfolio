import { SectionHeader } from '@/components/common';
import Image from 'next/image';
import Link from 'next/link';

export function Skills() {
  return (
    <>
      <section className="mt-36 flex justify-center flex-col w-full items-center mb-36">
        <SectionHeader heading="Skills & Experience" description="Crafting sophisticated small to medium-scale web applications, dynamic features, captivating animations, and designing interactive layouts through advanced coding techniques." />
        <p className="mt-16 text-gray-600 text-lg">
          Visit my{' '}
          <Link href={'https://www.linkedin.com/in/shahnawazz/'} target="_blank" className="font-semibold hover:underline">
            Linkedin
          </Link>{' '}
          for more details.
        </p>
        <div>
          <Image src={'/assets/svg/logos.svg'} alt="logos" width={1000} height={1000} />
        </div>
      </section>
    </>
  );
}
